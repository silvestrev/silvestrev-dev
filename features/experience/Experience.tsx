import { EducationItem } from './EducationItem';
import { ExperienceItem } from './ExperienceItem';
import { education, experience } from './experience.data';

export const Experience = () => {
  return (
    <section className="flex flex-col gap-6 border-t border-white/10 py-8">
      <p className="font-mono text-xs uppercase tracking-widest text-white/40">Experience</p>
      <div className="flex flex-col gap-6">
        {experience.map((entry) => (
          <ExperienceItem key={`${entry.company}-${entry.role}`} entry={entry} />
        ))}
      </div>
      <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">Education</p>
        <div className="flex flex-col gap-4">
          {education.map((entry) => (
            <EducationItem key={entry.institution} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};
