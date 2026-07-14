import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Clock,
  ArrowUpRight,
  Zap,
  Target,
} from 'lucide-react';
import { Nav } from '@/components/ozove/nav';
import { Footer } from '@/components/ozove/footer';
import { PlasmaText, MonoLabel, StatusTag } from '@/components/ozove/primitives';
import { Reveal, RevealGroup, RevealItem } from '@/components/ozove/reveal';

const HERO_POINTS = [
  'Talent onboarded in 24–48 hours, not three months',
  'Swap or add specialists anytime — no contracts, no recruiters',
  'Scale capacity up and down with your pipeline',
];

const BOTTLENECK_TRAPS = [
  {
    num: '01',
    title: 'Hire more headcount',
    desc: "Recruiting eats three months and might still miss. Every hire is fixed cost whether the projects show up or not — and until they ramp, you're the one filling the gap.",
    danger: false,
  },
  {
    num: '02',
    title: 'Juggle freelancers',
    desc: 'Missed deadlines. Inconsistent quality. You spend more time managing five vendors than shipping — and when one flakes, your client is the one who pays for it.',
    danger: false,
  },
  {
    num: '03',
    title: 'Become the bottleneck',
    desc: 'Reviewing, QA-ing, gap-filling at midnight. Every hour on execution is an hour not spent selling. Your growth gets capped at your own bandwidth — the most expensive constraint in the building.',
    danger: true,
  },
];

const HOW_IT_WORKS = [
  {
    num: '01',
    title: 'Capacity audit',
    desc: 'A 30-minute diagnostic mapping your delivery bottlenecks, talent gaps, and capacity ceiling. You leave with a plan whether or not you sign.',
  },
  {
    num: '02',
    title: 'Onboarding sprint',
    desc: "We absorb your standards, stack, and workflow until our team ships like an extension of yours. You don't pay a cent until onboarding is done.",
  },
  {
    num: '03',
    title: 'AI-powered ops',
    desc: 'Your PM runs the work; AI runs the speed. Tasks route to the right specialist, get quality-checked, and land in your inbox ready to ship.',
  },
  {
    num: '04',
    title: 'Flex & scale',
    desc: 'Add talent, swap disciplines, or dial capacity up and down as your pipeline shifts. No contracts, no recruiters, no rebuild — just adjust the plan.',
  },
];

const SERVICES = [
  { title: 'Website Design & Dev', tags: 'webflow · wordpress · custom' },
  { title: 'AI Automation & Agents', tags: 'workflows · integrations' },
  { title: 'Brand & Identity', tags: 'logo · systems · guidelines' },
  { title: 'App Design & Dev', tags: 'web · mobile · product' },
  { title: 'Social & Ad Creative', tags: 'static · motion · batch' },
  { title: 'Video & Motion', tags: 'edits · animation · promo' },
  { title: 'Email & Lifecycle', tags: 'klaviyo · templates · flows' },
  { title: 'UI/UX & Prototyping', tags: 'wireframes · design systems' },
  { title: 'Presentations & Decks', tags: 'pitch · sales · investor' },
  { title: 'Illustration & Icons', tags: 'custom · vector · brand' },
  { title: 'Reports & eBooks', tags: 'lead magnets · whitepapers' },
  { title: 'Print & Packaging', tags: 'collateral · merch · assets' },
];

const BENEFITS = [
  {
    title: 'The team you\u2019d hire, already plugged in',
    desc: 'Specialists and generalists across every discipline, ready today. No job posts, no interviews, no three-month ramp.',
  },
  {
    title: 'One predictable monthly cost',
    desc: 'Replaces freelancer chaos, rework, panic hires, and scattered vendor invoices. You know exactly what delivery costs before the month starts.',
  },
  {
    title: 'Scales with your pipeline, not ahead of it',
    desc: 'Say yes to bigger scopes and faster turnarounds. Flex up when you win. Flex down when you pause. Capacity that breathes with revenue.',
  },
  {
    title: 'Faster execution',
    desc: 'Briefs kick off within 24 hours. Backlogs clear. Turnaround stops being the thing you apologize for.',
  },
  {
    title: 'White-label by default',
    desc: 'Your clients never see us. Work comes back ready to ship under your brand, your logo, your relationship. Always.',
  },
  {
    title: 'AI-augmented, human-led',
    desc: 'Senior specialists working inside AI-accelerated workflows. You get the speed of automation with the judgment of people. Fast without the slop.',
  },
];

const METRICS = [
  { value: '3\u20134\u00d7', label: 'More active projects run in parallel' },
  { value: '24', suffix: 'h', label: 'From brief to work in production' },
  { value: '10+', label: 'Owner hours saved every week' },
  { value: '0', label: 'Full-time hires needed to get there' },
];

const TESTIMONIALS = [
  {
    quote:
      "We were capped by how much we could physically build and manage. With Ozove we're running three to four times the project volume — same core team, no chaos. Work goes in, finished work comes out. That reliability changed how we scope and sell.",
    author: 'Founder, web design & brand studio',
    featured: true,
  },
  {
    quote:
      'The closest thing to an in-house creative team without the overhead — while actually keeping the standards and deadlines you never get from freelancers.',
    author: 'Agency CEO, digital growth studio',
    featured: false,
  },
  {
    quote:
      "Whatever the client needs — video, dev, design, an AI agent — there's already someone for it. I stopped sourcing and started selling.",
    author: 'Founder, full-service agency',
    featured: false,
  },
];

const FIT_YES = [
  "Your pipeline is healthy — production is what's stressed.",
  'Your team knows how to brief and review work.',
  'You want fewer moving parts, not more tools.',
  'You think in systems, not one-off hires.',
];

const FIT_NO = [
  'Your flow of new projects is inconsistent.',
  'Feedback arrives in 17 scattered messages.',
  'Nobody internally owns approvals.',
  "You're still comparing everything to Fiverr.",
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-[100dvh] bg-background text-foreground selection:bg-accent/30 selection:text-white"
    >
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: "url('/images/ozove-bg-texture.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'lighten',
        }}
      />

      <Nav />

      <main className="relative z-10 pt-32 lg:pt-48 pb-24">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 mb-32 lg:mb-48">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <MonoLabel className="mb-6">For agency owners maxed out on delivery</MonoLabel>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tighter leading-[1.1] mb-8"
                data-testid="text-hero-headline"
              >
                Stop turning away revenue because{' '}
                <PlasmaText>production can&rsquo;t keep up.</PlasmaText>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
                className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
              >
                Ozove is your AI-native production layer — senior designers, developers, and
                automation specialists running inside AI-accelerated workflows. Take on 3x the
                work without hiring a single full-timer. Managed end-to-end by your dedicated PM.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="#cta"
                  className="bg-foreground text-background hover:bg-foreground/90 font-mono text-sm uppercase tracking-wider px-6 py-4 flex items-center justify-center gap-2 transition-all active:scale-95 group"
                  data-testid="link-hero-cta-primary"
                >
                  Book your free capacity audit{' '}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#how-it-works"
                  className="border border-border hover:bg-secondary/50 font-mono text-sm uppercase tracking-wider px-6 py-4 transition-all active:scale-95 flex items-center justify-center"
                  data-testid="link-hero-cta-secondary"
                >
                  See how it works
                </a>
              </motion.div>

              <RevealGroup className="space-y-4">
                {HERO_POINTS.map((item) => (
                  <RevealItem key={item}>
                    <div className="flex items-start gap-3 text-sm text-muted-foreground font-mono">
                      <Check className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                      {item}
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            {/* LIVE PIPELINE VISUAL */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            >
              <div className="absolute inset-0 bg-plasma opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

              <div className="border border-border/50 bg-card/40 backdrop-blur-xl rounded-sm overflow-hidden relative shadow-2xl">
                <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/20">
                  <MonoLabel className="text-[10px]">Your production pipeline</MonoLabel>
                  <StatusTag status="live" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-8 font-mono text-[10px] text-muted-foreground uppercase tracking-widest px-2">
                    <span>Intake</span>
                    <span className="text-border">&rarr;</span>
                    <span>Plan</span>
                    <span className="text-border">&rarr;</span>
                    <span className="text-foreground">Building</span>
                    <span className="text-border">&rarr;</span>
                    <span>QA</span>
                    <span className="text-border">&rarr;</span>
                    <span>Shipped</span>
                  </div>

                  <div className="space-y-3">
                    <div className="group border border-border/50 bg-background/50 hover:bg-muted/30 p-4 transition-colors flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-mono text-[10px] text-muted-foreground uppercase">
                            client #0042
                          </span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="text-sm font-medium truncate">
                            SaaS landing page — full redesign
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/ozove-team-1.jpg"
                            alt="Maya"
                            className="w-5 h-5 rounded-full object-cover grayscale opacity-70"
                            onError={(e) => (e.currentTarget.style.display = 'none')}
                          />
                          <span className="font-mono text-[10px] text-muted-foreground">
                            Maya · UI/UX
                          </span>
                        </div>
                      </div>
                      <StatusTag status="shipped" />
                    </div>

                    <div className="group border border-border/50 bg-background/50 hover:bg-muted/30 p-4 transition-colors flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-mono text-[10px] text-muted-foreground uppercase">
                            client #0039
                          </span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="text-sm font-medium truncate">
                            Custom AI intake agent + CRM wiring
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/ozove-team-2.jpg"
                            alt="Dev"
                            className="w-5 h-5 rounded-full object-cover grayscale opacity-70"
                            onError={(e) => (e.currentTarget.style.display = 'none')}
                          />
                          <span className="font-mono text-[10px] text-muted-foreground">
                            Dev · Automation
                          </span>
                        </div>
                      </div>
                      <StatusTag status="in qa" />
                    </div>

                    <div className="group border border-plasma bg-background/80 p-4 shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-colors flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-mono text-[10px] text-muted-foreground uppercase">
                            client #0051
                          </span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="text-sm font-medium truncate text-foreground">
                            Brand identity + 12-page Webflow build
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/ozove-team-3.jpg"
                            alt="Rania"
                            className="w-5 h-5 rounded-full object-cover"
                            onError={(e) => (e.currentTarget.style.display = 'none')}
                          />
                          <span className="font-mono text-[10px] text-foreground font-medium">
                            Rania · Design
                          </span>
                        </div>
                      </div>
                      <StatusTag status="building" />
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-muted/10 border-t border-border/50 flex justify-between items-center font-mono text-[10px] uppercase text-muted-foreground tracking-widest">
                  <span>Managed by your project lead</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> Next ship: tomorrow 9am
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <Reveal>
          <section className="border-y border-border/50 bg-muted/10 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Target key={i} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>
                <MonoLabel>4.9/5 across 120+ agency owners</MonoLabel>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
                {['Acme Corp', 'Nexus', 'SmartFlow', 'Nova', 'Vertex'].map((logo) => (
                  <div key={logo} className="font-display font-bold text-xl tracking-tighter uppercase">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* THE BOTTLENECK */}
        <section className="py-32 max-w-7xl mx-auto px-6 scroll-mt-24">
          <Reveal className="max-w-3xl mb-20">
            <MonoLabel className="mb-6">The bottleneck</MonoLabel>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter mb-8">
              Sales isn&rsquo;t your problem. <span className="text-muted-foreground">Delivery is.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              You can close more than you can ship. So growth quietly caps out — not at your
              pipeline, but at your production. There are only three ways out, and two of them
              are traps.
            </p>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-3 gap-6 mb-16">
            {BOTTLENECK_TRAPS.map((trap) => (
              <RevealItem key={trap.num}>
                <div
                  className={
                    trap.danger
                      ? 'border border-destructive/30 bg-destructive/5 p-8 relative overflow-hidden h-full'
                      : 'border border-border/50 bg-card p-8 h-full'
                  }
                >
                  {trap.danger && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 blur-[50px] -mr-10 -mt-10 pointer-events-none" />
                  )}
                  <div
                    className={
                      trap.danger
                        ? 'font-mono text-xs text-destructive mb-4'
                        : 'font-mono text-xs text-muted-foreground mb-4'
                    }
                  >
                    {trap.num}
                  </div>
                  <h3 className="text-xl font-display font-medium mb-4">{trap.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{trap.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
            <div className="bg-foreground text-background p-8 md:p-12 border-l-4 border-plasma">
              <p className="text-lg md:text-xl font-medium leading-relaxed max-w-4xl">
                The fix isn&rsquo;t more headcount, and it isn&rsquo;t a pile of AI tools you have
                to babysit. It&rsquo;s a production system — senior talent working inside AI
                workflows, managed for you, ready the day you win the deal.
              </p>
            </div>
          </Reveal>
        </section>

        {/* THE SHIFT */}
        <section className="py-32 bg-muted/5 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center max-w-3xl mx-auto mb-20">
              <MonoLabel className="mb-6">The shift</MonoLabel>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter leading-[1.1]">
                Growing agencies build bigger teams.
                <br />
                <PlasmaText>Scaling agencies build better systems.</PlasmaText>
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-px bg-border">
              <Reveal className="bg-background p-10 md:p-16">
                <StatusTag status="shipped" />
                <h3 className="text-2xl font-display font-medium mt-6 mb-4">
                  Sell more &rarr; hire more &rarr; stress more.
                </h3>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  Every new client adds payroll, handoffs, and management overhead. Win a big
                  deal and you get pulled straight back into production. Margin thins as you
                  grow.
                </p>
                <ul className="space-y-4 font-mono text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">&#10005;</span> Fixed cost
                    regardless of pipeline
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">&#10005;</span> Months to hire,
                    weeks to ramp
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">&#10005;</span> Founder trapped in
                    delivery
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={0.1} className="bg-background p-10 md:p-16 relative">
                <div className="absolute inset-0 bg-plasma opacity-[0.02] pointer-events-none" />
                <div className="relative">
                  <StatusTag status="live" />
                  <h3 className="text-2xl font-display font-medium mt-6 mb-4">
                    Your team + a flexible production layer.
                  </h3>
                  <p className="text-muted-foreground mb-10 leading-relaxed">
                    Keep your brand, your clients, your strategy. Plug in vetted senior talent on
                    demand and flex capacity up or down as your pipeline moves. Cost tracks
                    revenue — not the other way around.
                  </p>
                  <ul className="space-y-4 font-mono text-sm text-foreground">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#3b82f6] mt-0.5" /> Variable capacity, one
                      predictable cost
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#3b82f6] mt-0.5" /> Onboarded in days,
                      shipping immediately
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#3b82f6] mt-0.5" /> Founder freed to sell
                      and lead
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-32 max-w-7xl mx-auto px-6 scroll-mt-24">
          <Reveal className="max-w-3xl mb-20">
            <MonoLabel className="mb-6">How it works</MonoLabel>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter mb-8">
              We go deep once.
              <br />
              Then we move fast forever.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Onboarding is the only slow part — on purpose. After that, work goes in and
              finished work comes back, day after day, under your brand.
            </p>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <RevealItem key={step.num} className="relative">
                {i !== HOW_IT_WORKS.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-[1px] bg-border/50 -ml-4 z-0" />
                )}
                <div className="relative z-10 w-12 h-12 bg-card border border-border/50 rounded-full flex items-center justify-center font-mono text-sm text-foreground mb-8 font-medium shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-xl font-display font-medium mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-32 bg-muted/5 border-y border-border/50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="max-w-3xl mb-16">
              <MonoLabel className="mb-6">Services</MonoLabel>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter mb-8">
                Every creative and technical project that slows you down.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                One production layer for the whole scope — so you stop stitching five vendors
                together per client.
              </p>
            </Reveal>

            <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50">
              {SERVICES.map((service) => (
                <RevealItem key={service.title}>
                  <div className="bg-background p-8 hover:bg-muted/30 transition-colors group h-full">
                    <h4 className="text-lg font-medium mb-3 group-hover:text-[#3b82f6] transition-colors">
                      {service.title}
                    </h4>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {service.tags}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="py-32 max-w-7xl mx-auto px-6 scroll-mt-24">
          <Reveal className="max-w-3xl mb-20">
            <MonoLabel className="mb-6">Benefits</MonoLabel>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter mb-8">
              More capacity. Less hiring.
              <br />
              Zero drama.
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <Reveal className="lg:col-span-5 relative">
              <div className="sticky top-32 border border-border/50 bg-card p-10">
                <div className="w-12 h-12 bg-plasma/10 rounded flex items-center justify-center mb-8">
                  <Zap className="w-6 h-6 text-[#a855f7]" />
                </div>
                <h3 className="text-2xl font-display font-medium mb-4">
                  Run your agency. We&rsquo;ll think alongside you.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  PM-led daily communication, with creative and technical leads on call for
                  strategy when it matters. A real partner embedded in your delivery — not a
                  ticket queue you have to chase.
                </p>
                <a
                  href="#cta"
                  className="bg-foreground text-background hover:bg-foreground/90 font-mono text-xs uppercase tracking-wider px-5 py-3 flex items-center justify-center gap-2 transition-all w-full"
                >
                  Get a free capacity audit <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </Reveal>

            <RevealGroup className="lg:col-span-7 space-y-12 lg:pt-8">
              {BENEFITS.map((benefit) => (
                <RevealItem key={benefit.title}>
                  <div className="group border-b border-border/50 pb-12 last:border-0 last:pb-0">
                    <h4 className="text-2xl font-display font-medium mb-4 group-hover:text-plasma transition-all">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                      {benefit.desc}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* METRICS & PROOF */}
        <section id="results" className="py-32 bg-muted/5 border-y border-border/50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              <Reveal>
                <MonoLabel className="mb-6">The impact</MonoLabel>
                <h2 className="text-4xl font-display font-medium tracking-tighter mb-16">
                  Proof that production can scale calmly.
                </h2>

                <RevealGroup className="grid grid-cols-2 gap-x-8 gap-y-12">
                  {METRICS.map((metric) => (
                    <RevealItem key={metric.label}>
                      <div className="text-6xl font-display font-medium text-foreground tracking-tighter mb-4">
                        {metric.value}
                        {metric.suffix && (
                          <span className="text-3xl text-muted-foreground ml-1">
                            {metric.suffix}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
                        {metric.label}
                      </p>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </Reveal>

              <div>
                <Reveal>
                  <MonoLabel className="mb-6">In their words</MonoLabel>
                  <h2 className="text-2xl font-display font-medium tracking-tighter mb-10 text-muted-foreground">
                    Agency owners who got their capacity — and their evenings — back.
                  </h2>
                </Reveal>

                <RevealGroup className="space-y-8">
                  {TESTIMONIALS.map((t) =>
                    t.featured ? (
                      <RevealItem key={t.author}>
                        <div className="border border-border/50 bg-background p-8 relative">
                          <div className="absolute top-8 left-8 text-6xl font-display text-muted/20 leading-none pointer-events-none">
                            &ldquo;
                          </div>
                          <p className="text-lg leading-relaxed relative z-10 mb-6">{t.quote}</p>
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center font-mono text-xs">
                              {t.author[0]}
                            </div>
                            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                              {t.author}
                            </div>
                          </div>
                        </div>
                      </RevealItem>
                    ) : (
                      <RevealItem key={t.author}>
                        <div className="border border-border/50 bg-background p-8 relative">
                          <p className="leading-relaxed relative z-10 mb-6 text-muted-foreground">
                            &ldquo;{t.quote}&rdquo;
                          </p>
                          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                            <span className="w-4 h-px bg-border" />
                            {t.author}
                          </div>
                        </div>
                      </RevealItem>
                    ),
                  )}
                </RevealGroup>
              </div>
            </div>
          </div>
        </section>

        {/* FIT */}
        <section id="fit" className="py-32 max-w-7xl mx-auto px-6 scroll-mt-24">
          <Reveal className="max-w-3xl mx-auto text-center mb-20">
            <MonoLabel className="mb-6">Operational fit</MonoLabel>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter mb-8">
              Built for agencies that already have momentum.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ozove multiplies a working machine. It doesn&rsquo;t fix a broken one — and
              we&rsquo;ll tell you honestly which one you are on the audit call.
            </p>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RevealItem>
              <div className="border border-border/50 bg-card p-10 md:p-12 h-full">
                <div className="inline-block px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/30 font-mono text-xs uppercase tracking-wider mb-8">
                  Great fit
                </div>
                <ul className="space-y-6">
                  {FIT_YES.map((item) => (
                    <li key={item} className="flex gap-4 text-muted-foreground">
                      <Check className="w-5 h-5 text-[#3b82f6] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="border border-border/50 bg-background p-10 md:p-12 opacity-80 h-full">
                <div className="inline-block px-3 py-1 bg-muted text-muted-foreground border border-border font-mono text-xs uppercase tracking-wider mb-8">
                  Not yet
                </div>
                <ul className="space-y-6">
                  {FIT_NO.map((item) => (
                    <li key={item} className="flex gap-4 text-muted-foreground/60">
                      <span className="text-muted-foreground font-mono shrink-0">&#10005;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          </RevealGroup>
        </section>

        {/* FINAL CTA */}
        <section id="cta" className="py-32 max-w-7xl mx-auto px-6 text-center scroll-mt-24">
          <Reveal>
            <div className="border border-border/50 bg-card p-12 md:p-24 relative overflow-hidden">
              <div className="absolute inset-0 bg-plasma opacity-[0.03] pointer-events-none" />
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-plasma opacity-[0.1] blur-[100px] pointer-events-none rounded-full" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <MonoLabel className="mb-6">Book your capacity audit</MonoLabel>
                <h2 className="text-5xl md:text-6xl font-display font-medium tracking-tighter mb-8 text-foreground">
                  Be the agency that always has capacity.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                  30 minutes. We map your delivery ceiling and hand you the plan to break through
                  it — whether or not you ever work with us.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                  <a
                    href="mailto:hello@ozove.co?subject=Book%20a%20capacity%20audit"
                    className="bg-foreground text-background hover:bg-foreground/90 font-mono text-sm uppercase tracking-wider px-8 py-5 flex items-center justify-center gap-2 transition-all active:scale-95 group"
                    data-testid="link-cta-primary"
                  >
                    Book your free capacity audit{' '}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#how-it-works"
                    className="border border-border hover:bg-secondary/50 font-mono text-sm uppercase tracking-wider px-8 py-5 transition-all active:scale-95 flex items-center justify-center gap-2 group"
                  >
                    See how it works
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <div className="flex -space-x-1 mr-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Target key={i} className="w-3 h-3 text-[#f59e0b] fill-[#f59e0b]" />
                    ))}
                  </div>
                  4.9/5 — rated for quality, speed & communication
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
