import { Container } from "@/components/ui/Container";

export function RouteLoader() {
  return (
    <div
      className="section-padding-lg"
      role="status"
      aria-live="polite"
      aria-label="Memuat halaman"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto h-1.5 w-32 animate-pulse rounded-full bg-gradient-to-r from-brand-blue via-brand-violet to-brand-cyan"
            aria-hidden
          />
          <p className="mt-6 text-sm font-medium text-brand-muted">
            Memuat halaman...
          </p>
        </div>
      </Container>
    </div>
  );
}
