import type { EducationEntry } from './experience.data';

type EducationItemProps = {
  entry: EducationEntry;
};

export const EducationItem = ({ entry }: EducationItemProps) => {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <p className="text-sm text-white">
        {entry.degree} <span className="text-white/40">— {entry.institution}</span>
      </p>
      <p className="font-mono text-xs text-white/40">{entry.period}</p>
    </div>
  );
};
