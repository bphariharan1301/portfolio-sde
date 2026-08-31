import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";

const currently = [
  { k: "Role", v: "Software Engineer – Full Stack, InHousen" },
  { k: "Leading", v: "A team of three developers" },
  { k: "Building", v: "ShopZY — B2B commerce, solo project" },
  { k: "Interested in", v: "Product engineering · Healthcare tech · AI-assisted software" },
];

export function About() {
  return (
    <Section id="about" aria-labelledby="about-heading">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h2
              id="about-heading"
              className="mt-5 max-w-2xl text-h2 font-medium text-gradient-fade"
            >
              I like building the thing, not just talking about it.
            </h2>
          </Reveal>

          <div className="mt-8 max-w-2xl space-y-5">
            {profile.about.map((paragraph, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <p className="text-[0.9375rem] leading-[1.75] text-muted md:text-base">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/*
          Hariharan: if you'd like a photo here, drop one in /public (e.g.
          hariharan.jpg) and swap this panel for a next/image. It works fine
          without one, so it's left out rather than faked.
        */}
        <Reveal delay={0.15} className="lg:pt-2">
          <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-bg-elev">
            <div className="px-5 py-4">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
                Currently
              </p>
            </div>
            {currently.map((item) => (
              <div key={item.k} className="px-5 py-4">
                <dt className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-faint">
                  {item.k}
                </dt>
                <dd className="mt-1.5 text-[0.8125rem] leading-relaxed text-fg">
                  {item.v}
                </dd>
              </div>
            ))}
            <div className="px-5 py-4">
              <dt className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-faint">
                Availability
              </dt>
              <dd className="mt-1.5 flex items-start gap-2 text-[0.8125rem] leading-relaxed text-fg">
                <span
                  aria-hidden
                  className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-live"
                />
                {profile.availability}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
