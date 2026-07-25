import { bio } from './about.data';

export const About = () => {
  return (
    <section className="flex flex-col gap-3 border-t border-white/10 py-8">
      <p className="font-mono text-xs uppercase tracking-widest text-white/40">About</p>
      <p className="text-base leading-relaxed text-white/60">{bio}</p>
    </section>
  );
};
