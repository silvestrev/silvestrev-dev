import { ProjectCard } from './ProjectCard';
import { projects } from './projects.data';

export const Projects = () => {
  return (
    <section className="flex flex-col gap-6 border-t border-white/10 py-8">
      <p className="font-mono text-xs uppercase tracking-widest text-white/40">Projects</p>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};
