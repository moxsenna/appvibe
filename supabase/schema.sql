-- ============================================================================
-- AppVibe Studio — Lead Dashboard demo schema (Supabase)
-- ============================================================================
-- Run this file in Supabase SQL editor (Project → SQL Editor → New query).
-- Idempotent: drops & recreates types/tables/policies safely.
-- Anonymous visitors get read+write access to the showcase tenant only.
-- ============================================================================

-- ---- Enum types -----------------------------------------------------------
drop type if exists public.lead_status cascade;
drop type if exists public.lead_source cascade;
drop type if exists public.lead_priority cascade;
drop type if exists public.lead_activity_kind cascade;

create type public.lead_status as enum (
  'Baru',
  'Dihubungi',
  'Follow Up',
  'Deal',
  'Tidak Cocok'
);

create type public.lead_source as enum (
  'Website',
  'Facebook Ads',
  'WhatsApp',
  'Referral',
  'Event',
  'Instagram'
);

create type public.lead_priority as enum ('Tinggi', 'Sedang', 'Rendah');

create type public.lead_activity_kind as enum (
  'created',
  'status_change',
  'note',
  'contact'
);

-- ---- Tables ---------------------------------------------------------------
create table if not exists public.tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  is_showcase boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  name text not null,
  phone text,
  business text,
  need_type text,
  source public.lead_source not null,
  status public.lead_status not null default 'Baru',
  priority public.lead_priority not null default 'Sedang',
  assigned_name text,
  estimated_value numeric(12, 2) not null default 0,
  notes text,
  last_contact_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_tenant_status_idx
  on public.leads (tenant_id, status);
create index if not exists leads_tenant_source_idx
  on public.leads (tenant_id, source);
create index if not exists leads_tenant_created_idx
  on public.leads (tenant_id, created_at desc);

create table if not exists public.lead_activities (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  actor_label text,
  kind public.lead_activity_kind not null,
  payload jsonb,
  created_at timestamptz not null default now()
);

create index if not exists lead_activities_lead_created_idx
  on public.lead_activities (lead_id, created_at desc);

-- ---- Updated_at trigger ----------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- ---- Realtime publication --------------------------------------------------
alter publication supabase_realtime add table public.leads;
alter publication supabase_realtime add table public.lead_activities;

-- ---- RLS policies ----------------------------------------------------------
alter table public.tenants enable row level security;
alter table public.leads enable row level security;
alter table public.lead_activities enable row level security;

-- Tenants: anonymous can read showcase rows only
drop policy if exists tenants_showcase_read on public.tenants;
create policy tenants_showcase_read on public.tenants
  for select to anon, authenticated
  using (is_showcase = true);

-- Leads: anonymous CAN read AND update showcase tenant leads (demo writes
-- are intentionally public — visitors can flip status to feel the UI).
-- Hard limit: cannot delete or insert new leads (only status / notes updates).
drop policy if exists leads_showcase_read on public.leads;
create policy leads_showcase_read on public.leads
  for select to anon, authenticated
  using (
    exists (
      select 1 from public.tenants t
      where t.id = leads.tenant_id and t.is_showcase = true
    )
  );

drop policy if exists leads_showcase_update on public.leads;
create policy leads_showcase_update on public.leads
  for update to anon, authenticated
  using (
    exists (
      select 1 from public.tenants t
      where t.id = leads.tenant_id and t.is_showcase = true
    )
  )
  with check (
    exists (
      select 1 from public.tenants t
      where t.id = leads.tenant_id and t.is_showcase = true
    )
  );

-- Activities: anonymous can read + insert activity rows for showcase tenant
drop policy if exists lead_activities_showcase_read on public.lead_activities;
create policy lead_activities_showcase_read on public.lead_activities
  for select to anon, authenticated
  using (
    exists (
      select 1 from public.tenants t
      where t.id = lead_activities.tenant_id and t.is_showcase = true
    )
  );

drop policy if exists lead_activities_showcase_insert on public.lead_activities;
create policy lead_activities_showcase_insert on public.lead_activities
  for insert to anon, authenticated
  with check (
    exists (
      select 1 from public.tenants t
      where t.id = lead_activities.tenant_id and t.is_showcase = true
    )
  );

-- ---- Showcase tenant bootstrap --------------------------------------------
-- Creates a single shared showcase tenant if missing. Save its id and put
-- it in `.env.local` as VITE_SUPABASE_SHOWCASE_TENANT_ID.
insert into public.tenants (name, is_showcase)
select 'AppVibe Demo Tenant', true
where not exists (select 1 from public.tenants where is_showcase = true);

-- ============================================================================
-- After running this file:
-- 1) `select id from public.tenants where is_showcase = true;` → copy the id.
-- 2) Set VITE_SUPABASE_SHOWCASE_TENANT_ID=<that id> in .env.local.
-- 3) Run the seed script: `npm run seed:leads` (see scripts/seed-leads.ts).
-- ============================================================================
