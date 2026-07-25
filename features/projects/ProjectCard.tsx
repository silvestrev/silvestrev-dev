import type { Project } from './projects.data';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2"
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm text-white transition-colors group-hover:text-white/70">
          {project.name}
        </p>
        <span className="font-mono text-xs text-white/30 transition-colors group-hover:text-white/60">
          ↗
        </span>
      </div>
      <p className="text-sm leading-relaxed text-white/60">{project.description}</p>
      <p className="font-mono text-xs text-white/40">{project.tags.join(' · ')}</p>
    </a>
  );
};
