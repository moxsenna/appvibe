import { useEffect, useState } from "react";
import { webinarLandingCopy } from "@/data/demos/webinar-landing/copy";
import { useLang } from "@/i18n/use-lang";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
};

function getCountdown(target: Date): Countdown {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isPast: false,
  };
}

type WebinarLandingCountdownProps = {
  targetIso: string;
};

export function WebinarLandingCountdown({ targetIso }: WebinarLandingCountdownProps) {
  const { lang } = useLang();
  const units = webinarLandingCopy.countdown.units;
  const label = webinarLandingCopy.countdown.label[lang];
  const pastMessage = webinarLandingCopy.countdown.pastMessage[lang];

  const [count, setCount] = useState<Countdown>(() =>
    getCountdown(new Date(targetIso)),
  );

  useEffect(() => {
    const target = new Date(targetIso);
    const id = window.setInterval(() => {
      setCount(getCountdown(target));
    }, 1000);
    return () => window.clearInterval(id);
  }, [targetIso]);

  if (count.isPast) {
    return (
      <p className="text-sm font-medium text-amber-200">{pastMessage}</p>
    );
  }

  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-violet-100 sm:text-xs">
        {label}
      </p>
      <div className="mt-2 flex gap-2 sm:gap-3" aria-live="polite">
        <Unit value={count.days} label={units.days[lang]} />
        <Separator />
        <Unit value={count.hours} label={units.hours[lang]} />
        <Separator />
        <Unit value={count.minutes} label={units.minutes[lang]} />
        <Separator />
        <Unit value={count.seconds} label={units.seconds[lang]} />
      </div>
    </div>
  );
}

function Unit({ value, label }: { value: number; label: string }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center rounded-lg border border-white/15 bg-white/10 px-2.5 py-1.5 backdrop-blur-sm sm:px-3 sm:py-2">
      <span className="text-base font-bold tabular-nums text-white sm:text-xl">
        {padded}
      </span>
      <span className="mt-0.5 text-[9px] uppercase tracking-wider text-violet-100 sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span
      className="self-center text-base font-bold text-white/50 sm:text-xl"
      aria-hidden
    >
      :
    </span>
  );
}