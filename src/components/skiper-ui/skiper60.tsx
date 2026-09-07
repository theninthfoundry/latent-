"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface SectionItem {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

export const TERMS_SECTIONS: SectionItem[] = [
  {
    id: "short-version",
    number: "01",
    title: "The Short Version",
    content: (
      <div className="space-y-4">
        <p className="text-base text-ink leading-relaxed">
          Welcome to LATENT.
        </p>
        <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
          This website is operated by <strong className="font-semibold text-ink">[LEGAL ENTITY NAME]</strong> (“LATENT”, “we”, “us”, or “our”).
        </p>
        <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
          By accessing or using this website, you agree to these Terms &amp; Conditions. If you do not agree with them, please do not use the website.
        </p>
        <p className="text-sm sm:text-base text-ink-muted italic leading-relaxed border-l-2 border-accent-gold pl-4 py-1">
          We have tried to write these terms in plain language because legal documents do not need to be unnecessarily difficult to understand.
        </p>
      </div>
    ),
  },
  {
    id: "about-website",
    number: "02",
    title: "About This Website",
    content: (
      <div className="space-y-4">
        <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
          LATENT is a design and technology studio working across products, digital experiences, brands, software, artificial intelligence, systems, research and experimentation.
        </p>
        <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
          This website exists to:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-ink-light font-light pl-2">
          <li>introduce the studio;</li>
          <li>present selected work;</li>
          <li>document experiments and research;</li>
          <li>communicate our approach and capabilities;</li>
          <li>provide information about our services; and</li>
          <li>provide a way to contact us.</li>
        </ul>
        <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
          The website, its structure, interface, visual identity, written material, artwork, animations, code, photographs, videos, experiments and other materials are collectively referred to as the <strong className="font-semibold text-ink">“Site”</strong>.
        </p>
      </div>
    ),
  },
  {
    id: "using-site",
    number: "03",
    title: "Using The Site",
    content: (
      <div className="space-y-4">
        <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
          You may use the Site for lawful purposes and for your own personal or professional information.
        </p>
        <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
          You agree not to:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-ink-light font-light pl-2">
          <li>use the Site for an unlawful purpose;</li>
          <li>attempt to gain unauthorized access to any part of the Site;</li>
          <li>interfere with the operation or security of the Site;</li>
          <li>introduce malicious code, software or other harmful material;</li>
          <li>scrape, crawl, copy or systematically extract content without our permission;</li>
          <li>impersonate LATENT or another person;</li>
          <li>use the Site to infringe another person&apos;s rights; or</li>
          <li>attempt to circumvent any security, access or technical restriction.</li>
        </ul>
        <p className="text-sm sm:text-base text-ink-muted leading-relaxed pt-2">
          We reserve the right to restrict or terminate access where reasonably necessary to protect the Site, our users, our work or our systems.
        </p>
      </div>
    ),
  },
  {
    id: "our-work",
    number: "04",
    title: "Our Work",
    content: (
      <div className="space-y-4">
        <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
          The projects shown on this Site represent selected work, experiments, explorations and capabilities of LATENT.
        </p>
        <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
          Not every project shown necessarily represents a currently available service. Some work may have been created:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-ink-light font-light pl-2">
          <li>for a client;</li>
          <li>internally;</li>
          <li>as an experiment;</li>
          <li>as a prototype;</li>
          <li>as a research project;</li>
          <li>in collaboration with another person or organization; or</li>
          <li>for demonstration purposes.</li>
        </ul>
        <p className="text-sm sm:text-base text-ink-muted leading-relaxed pt-1">
          Project descriptions are intended to provide context and should not be interpreted as guarantees of particular results for another project.
        </p>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    number: "05",
    title: "Intellectual Property",
    content: (
      <div className="space-y-4">
        <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
          Unless otherwise stated, the Site and its contents belong to LATENT or are used with permission. This includes, where applicable:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-mono text-ink-light bg-paper-card p-4 rounded-xl border border-paper-border">
          <div>&bull; the LATENT name &amp; identity</div>
          <div>&bull; logos and marks</div>
          <div>&bull; visual design &amp; typography</div>
          <div>&bull; interface designs &amp; software</div>
          <div>&bull; written content &amp; code</div>
          <div>&bull; illustrations &amp; photography</div>
          <div>&bull; animations &amp; videos</div>
          <div>&bull; diagrams &amp; research material</div>
        </div>
        <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
          You may view and use the Site for its intended purpose. You may not reproduce, redistribute, modify, publish, sell, license, publicly display, or commercially exploit Site content without our prior written permission.
        </p>
      </div>
    ),
  },
  {
    id: "third-party",
    number: "06",
    title: "Third-Party Material",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          Some content appearing on the Site may belong to clients, collaborators, partners, photographers, artists, technology providers or other third parties.
        </p>
        <p>
          Ownership of such material remains with its respective owner. Nothing on this Site should be interpreted as granting you ownership or a license to third-party material simply because it appears here.
        </p>
      </div>
    ),
  },
  {
    id: "ideas",
    number: "07",
    title: "Ideas You Send Us",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p className="font-serif italic text-lg text-ink">
          We love unfinished ideas.
        </p>
        <p>
          If you contact LATENT with an idea, proposal, concept, brief, document, design, prototype or other material, please only send information that you are comfortable sharing.
        </p>
        <p>
          Unless we have separately agreed otherwise in writing: sending us an idea does not create a client relationship; it does not create a confidentiality obligation; it does not transfer ownership of your intellectual property to LATENT; and it does not guarantee that we will respond, pursue, develop or commercialize the idea.
        </p>
        <p className="text-ink-muted text-xs sm:text-sm font-mono pt-1">
          [ If confidential information needs to be shared, we can execute an appropriate NDA prior to receipt. ]
        </p>
      </div>
    ),
  },
  {
    id: "client-projects",
    number: "08",
    title: "Client Projects",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          Work performed for clients is governed by separate agreements. These Terms &amp; Conditions do not replace a statement of work, proposal, master services agreement, development agreement, or other written agreement entered into between LATENT and a client.
        </p>
        <p>
          Where such an agreement exists, its terms will govern the relevant engagement.
        </p>
      </div>
    ),
  },
  {
    id: "artificial-intelligence",
    number: "09",
    title: "Artificial Intelligence",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          LATENT may use artificial intelligence and machine-learning technologies as part of research, experimentation, design, development, analysis, prototyping or production.
        </p>
        <p>
          AI-generated or AI-assisted outputs may contain inaccuracies, unexpected results, third-party material, or other limitations. Nothing on this Site should be interpreted as a guarantee that an AI system will produce a particular result.
        </p>
      </div>
    ),
  },
  {
    id: "experiments-research",
    number: "10",
    title: "Experiments and Research",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          The LATENT Lab contains experiments, prototypes, concepts and unfinished work. Some of these may be incomplete. Some may fail. Some may never become products.
        </p>
        <p>
          We may modify, remove, archive or discontinue experiments without notice. Experimental material is presented for exploration and should not necessarily be treated as a production-ready product, service or technical recommendation.
        </p>
      </div>
    ),
  },
  {
    id: "accuracy",
    number: "11",
    title: "Accuracy of Information",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          We make reasonable efforts to keep the information on the Site accurate and current. However, the Site may contain errors, omissions, outdated information, or incomplete project descriptions.
        </p>
        <p>
          If you notice something that appears incorrect, you are welcome to let us know.
        </p>
      </div>
    ),
  },
  {
    id: "availability",
    number: "12",
    title: "Availability",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          We aim to keep LATENT available and functioning properly. However, we do not guarantee that the Site will always be available, operate without interruption, or remain available indefinitely.
        </p>
        <p>
          We may temporarily suspend or modify the Site for maintenance, security, upgrades, experimentation or other operational reasons.
        </p>
      </div>
    ),
  },
  {
    id: "external-links",
    number: "13",
    title: "External Links",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          The Site may contain links to websites, platforms or services operated by third parties. LATENT does not control third-party websites and is not responsible for their content, security, or privacy practices.
        </p>
      </div>
    ),
  },
  {
    id: "privacy",
    number: "14",
    title: "Privacy",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          Your use of the Site may involve the processing of certain information. Our handling of personal information is described in our Privacy Policy.
        </p>
      </div>
    ),
  },
  {
    id: "disclaimers",
    number: "15",
    title: "Disclaimers",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          The Site and its contents are provided on an <strong className="font-semibold text-ink">“as is”</strong> and <strong className="font-semibold text-ink">“as available”</strong> basis to the extent permitted by applicable law.
        </p>
      </div>
    ),
  },
  {
    id: "liability",
    number: "16",
    title: "Limitation of Liability",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          To the maximum extent permitted by applicable law, LATENT and its directors, employees, contractors, collaborators and affiliates will not be liable for indirect, incidental, special, consequential or exemplary loss arising from your use of, or inability to use, the Site.
        </p>
      </div>
    ),
  },
  {
    id: "indemnity",
    number: "17",
    title: "Indemnity",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          You agree to indemnify and hold harmless LATENT and its directors, employees, contractors and collaborators from claims, losses, liabilities, damages and expenses arising from your unlawful use of the Site or violation of these Terms.
        </p>
      </div>
    ),
  },
  {
    id: "changes",
    number: "18",
    title: "Changes to These Terms",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          LATENT may update these Terms &amp; Conditions from time to time. When we make changes, we will update the “Last updated” date at the top of this page.
        </p>
      </div>
    ),
  },
  {
    id: "governing-law",
    number: "19",
    title: "Governing Law",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          These Terms are governed by the laws of <strong className="font-semibold text-ink">[STATE / COUNTRY]</strong>, without regard to conflict-of-law principles.
        </p>
      </div>
    ),
  },
  {
    id: "severability",
    number: "20",
    title: "Severability",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          If any provision of these Terms is determined to be invalid, unlawful or unenforceable, that provision will be modified to the minimum extent necessary, and the remaining provisions will continue in effect.
        </p>
      </div>
    ),
  },
  {
    id: "entire-agreement",
    number: "21",
    title: "Entire Agreement",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>
          These Terms constitute the entire agreement between you and LATENT concerning your use of the Site.
        </p>
      </div>
    ),
  },
  {
    id: "contact",
    number: "22",
    title: "Contact",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-ink-light font-light leading-relaxed">
        <p>Questions about these Terms can be sent to:</p>
        <div className="font-mono text-xs bg-paper-card p-4 rounded-xl border border-paper-border space-y-1">
          <div className="font-semibold text-ink">legal@latent.labs</div>
          <div>LATENT Labs Inc.</div>
          <div>Bahnhofstrasse 44, 8001 Zürich, Switzerland</div>
        </div>
      </div>
    ),
  },
  {
    id: "small-print",
    number: "—",
    title: "The Small Print",
    content: (
      <div className="space-y-3 pt-2">
        <p className="font-serif text-xl sm:text-2xl text-ink font-light italic">
          These terms are intentionally straightforward.
        </p>
        <p className="font-serif text-xl sm:text-2xl text-ink font-light italic">
          The work can be complicated.
        </p>
        <p className="font-serif text-xl sm:text-2xl text-ink font-light italic">
          The language doesn’t have to be.
        </p>
        <div className="pt-6 font-mono text-xs text-ink-muted uppercase tracking-widest">
          LATENT &bull; A design and technology studio for what comes next.
        </div>
      </div>
    ),
  },
];

interface Skiper60Props {
  sections?: SectionItem[];
  title?: string;
  subtitle?: string;
  lastUpdated?: string;
  className?: string;
}

export function Skiper60({
  sections = TERMS_SECTIONS,
  title = "TERMS & CONDITIONS",
  subtitle = "LATENT — A design and technology studio for what comes next.",
  lastUpdated = "04 September 2026",
  className = "",
}: Skiper60Props) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scrollspy via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={`relative w-full max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 py-24 sm:py-32 ${className}`}>
      {/* Top Document Header */}
      <div className="pb-16 border-b border-paper-border mb-16 space-y-4">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-ink-muted">
          <Link
            href="/"
            className="hover:text-ink transition-colors flex items-center gap-2 group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Return to Studio</span>
          </Link>
          <span>Last updated: {lastUpdated}</span>
        </div>

        <div className="pt-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted block mb-2">
            Legal Document &bull; Spec 01
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-ink">
            {title}
          </h1>
          <p className="font-sans text-base sm:text-lg text-ink-muted font-light max-w-2xl mt-4">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Side Scroll Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Sticky Sidebar Navigation (Skiper60 Signature) */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
          <div className="p-6 rounded-3xl bg-paper-card border border-paper-border space-y-6 max-h-[75vh] flex flex-col justify-between">
            {/* Index Header & Progress */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-paper-border text-xs font-mono">
                <span className="uppercase tracking-widest text-ink font-semibold">
                  Index ({sections.length})
                </span>
                <span className="text-ink-muted">
                  {Math.round(scrollProgress)}% Read
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-paper-border rounded-full overflow-hidden mt-3">
                <div
                  className="h-full bg-ink transition-all duration-150"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>

            {/* Scrollable Navigation List */}
            <nav className="overflow-y-auto pr-2 space-y-1 scrollbar-thin scrollbar-thumb-paper-border flex-1 max-h-[50vh]">
              {sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`group w-full flex items-center justify-between px-3 py-2 rounded-xl text-left font-mono text-xs transition-all relative ${
                      isActive
                        ? "text-ink font-medium bg-paper-subtle shadow-sm"
                        : "text-ink-muted hover:text-ink hover:bg-paper/60"
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <span className="text-[11px] opacity-60 w-5">
                        {sec.number}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </div>

                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="h-1.5 w-1.5 rounded-full bg-ink ml-2 shrink-0"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Sidebar Footer Link */}
            <div className="pt-4 border-t border-paper-border flex items-center justify-between font-mono text-[11px] text-ink-muted">
              <span>LATENT Labs Inc.</span>
              <a
                href="mailto:legal@latent.labs"
                className="hover:text-ink underline transition-colors"
              >
                legal@latent.labs
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content Column */}
        <main className="lg:col-span-8 space-y-20">
          {sections.map((sec) => (
            <section
              key={sec.id}
              id={sec.id}
              className="scroll-mt-32 pb-16 border-b border-paper-border/60 last:border-b-0 space-y-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm sm:text-base text-ink-muted uppercase tracking-widest">
                  {sec.number}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-ink">
                  {sec.title}
                </h2>
              </div>

              <div className="prose prose-neutral max-w-none text-ink">
                {sec.content}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
