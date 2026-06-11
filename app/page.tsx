import Reveal from "./reveal";
import BookingCalendar from "./booking-calendar";

// Nav and hero CTAs scroll to the embedded Cal.com widget in #book.
const BOOKING_URL = "#book";
const CONTACT_EMAIL = "hello@agenticb2b.tech";

const painPoints = [
  {
    title: "600 visiting cards, one Excel sheet",
    body: "Your team collects hundreds of leads at every show. Two weeks later they sit in a spreadsheet nobody opens again.",
  },
  {
    title: "Sales is back on the shop floor",
    body: "Your engineers double as your salespeople. Between quotations, production, and dispatch, follow-up calls always lose.",
  },
  {
    title: "Lakhs on the stall, no pipeline to show",
    body: "The exhibition budget gets approved every year. The leads it generates quietly expire before anyone calls them.",
  },
];

const steps = [
  {
    title: "Capture",
    body: "Every lead from the show goes into one system. Name, company, product interest, and which show you met them at.",
  },
  {
    title: "Research & score",
    body: "AI researches each company across their website, IndiaMART, and JustDial, then scores them 1 to 5. You only chase real buyers.",
  },
  {
    title: "Re-engage",
    body: "Personalized WhatsApp first, email follow-ups after. Every message references the show and the product they asked about.",
  },
  {
    title: "Book",
    body: "Any reply stops the sequence and routes to call booking. Positive responses become meetings on your calendar.",
  },
  {
    title: "Optimize",
    body: "Weekly reporting on replies, meetings, and pipeline. Sequences get tuned to whatever your buyers respond to.",
  },
];

const forYou = [
  "You exhibit at shows like AMTEX, IMTEX, ELECRAMA, or ACMEE",
  "You collect 200+ leads per show and follow up with fewer than half",
  "Your order sizes justify a meeting (machines, components, projects)",
  "You want booked meetings, not another CRM license",
];

const notForYou = [
  "You don't exhibit at trade shows or industry events",
  "You sell B2C or low-ticket products",
  "You want to buy software and run it yourself",
  "You can't share your lead list from the last show",
];

function CTAButton({ label = "Book a free strategy call" }: { label?: string }) {
  return (
    <a
      href={BOOKING_URL}
      className="inline-block rounded-lg bg-accent px-7 py-3.5 font-semibold text-background transition-colors hover:bg-accent-soft"
    >
      {label}
    </a>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-soft">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-edge/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg font-semibold tracking-tight">
            agentic<span className="text-accent-soft">b2b</span>
          </span>
          <a
            href={BOOKING_URL}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-soft"
          >
            Book a call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 pt-24 text-center">
          <Reveal>
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-accent-soft">
              AI lead recovery for Indian manufacturers
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Your exhibition leads aren&apos;t dead.
              <br />
              <span className="text-accent-soft">They&apos;re just unfollowed.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              agenticb2b installs an AI follow-up engine that researches every lead
              from your last trade show, re-engages them on WhatsApp and email, and
              books qualified meetings on your calendar.
            </p>
            <div className="mt-10">
              <CTAButton />
              <p className="mt-4 text-sm text-muted">
                30 minutes. No pitch. Just a clear next step.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-edge/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeader
              eyebrow="The problem"
              title="The stall worked. The follow-up didn't."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {painPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="h-full rounded-xl border border-edge bg-surface p-7">
                  <h3 className="mb-3 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-edge/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeader
              eyebrow="How it works"
              title="The Lead Recovery Engine"
            />
          </Reveal>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="flex gap-6 rounded-xl border border-edge bg-surface p-6 sm:items-center">
                  <span className="font-display text-3xl font-semibold text-accent-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1 text-muted">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Live case study */}
      <section className="border-t border-edge/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeader eyebrow="Live case study" title="600 leads. One show. Watch us recover them." />
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-10 rounded-xl border border-edge bg-surface p-10 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="flex gap-10 lg:flex-col lg:gap-6">
                <div>
                  <p className="font-display text-5xl font-semibold text-accent-soft">600</p>
                  <p className="mt-1 text-sm text-muted">leads in recovery</p>
                </div>
                <div>
                  <p className="font-display text-5xl font-semibold text-accent-soft">10</p>
                  <p className="mt-1 text-sm text-muted">meetings targeted in 30 days</p>
                </div>
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  We&apos;re running the Lead Recovery Engine right now for a precision
                  engineering manufacturer in Delhi NCR. Roughly 600 leads from a
                  January 2026 trade show, most never followed up. Every one of them
                  is being researched, scored, and re-engaged.
                </p>
                <p className="mt-4 text-muted">
                  Results get published when the case study wraps. Ask on the call
                  and we&apos;ll show you the live dashboard.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* For / not for */}
      <section className="border-t border-edge/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeader eyebrow="Fit check" title="Who this is for" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border border-edge bg-surface p-8">
                <h3 className="mb-5 font-display text-lg font-semibold text-accent-soft">
                  This is for you if...
                </h3>
                <ul className="space-y-3">
                  {forYou.map((item) => (
                    <li key={item} className="flex gap-3 text-muted">
                      <span className="text-accent-soft">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-xl border border-edge bg-surface p-8">
                <h3 className="mb-5 font-display text-lg font-semibold">
                  This is NOT for you if...
                </h3>
                <ul className="space-y-3">
                  {notForYou.map((item) => (
                    <li key={item} className="flex gap-3 text-muted">
                      <span>✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="book" className="border-t border-edge/60 py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold sm:text-5xl">
                Ready to revive your last show&apos;s leads?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
                Bring your lead list from the last exhibition. On the call we&apos;ll
                tell you exactly how many are still recoverable. Pick a slot below.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12 min-h-[620px] overflow-hidden rounded-xl border border-edge bg-surface p-2 sm:p-4">
              <BookingCalendar />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-edge/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
          <span>© 2026 agenticb2b</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-accent-soft">
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </main>
  );
}
