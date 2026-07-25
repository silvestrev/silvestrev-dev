import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="flex flex-col gap-4 pt-10 pb-8 sm:pt-14">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
          <Image
            src="/victors.jpeg"
            alt="Victor Silvestre"
            width={80}
            height={80}
            priority
            className="h-full w-full object-cover object-[center_22%]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Victor Silvestre
          </h1>
          <p className="font-mono text-xs uppercase tracking-widest text-white/40">
            Frontend Software Engineer
          </p>
        </div>
      </div>
      <p className="max-w-md text-base leading-relaxed text-white/60">
        I build fast, minimal products for the web.
      </p>
    </section>
  );
};
