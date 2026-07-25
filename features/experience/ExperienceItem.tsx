import type { ExperienceEntry } from './experience.data';

type ExperienceItemProps = {
  entry: ExperienceEntry;
};

export const ExperienceItem = ({ entry }: ExperienceItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-sm text-white">
          {entry.role} <span className="text-white/40">— {entry.company}</span>
        </p>
        <p className="font-mono text-xs text-white/40">{entry.period}</p>
      </div>
      <ul className="flex flex-col gap-1.5">
        {entry.highlights.map((highlight) => (
          <li
            key={highlight}
            className="max-w-md text-sm leading-relaxed text-white/60 before:mr-2 before:text-white/30 before:content-['—']"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};
