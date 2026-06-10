const TESTIMONIALS = [
  {
    quote:
      'We reduced our deployment time from over two hours to under five minutes. Runlo changed how our entire team ships code. We can now focus entirely on building features instead of babysitting servers.',
    name: 'Marcus Chen',
    role: 'Lead Engineer',
    company: 'TechFlow',
    avatar: 'MC',
    avatarColor: '#3b82f6',
    stars: 5
  },
  {
    quote:
      "No more SSH nightmares or forgotten SSL renewals. Runlo handles everything from provisioning to monitoring. It's like having a full DevOps team included in the subscription — at a fraction of the cost.",
    name: 'Sarah Rodriguez',
    role: 'Founder & CTO',
    company: 'BuildStack',
    avatar: 'SR',
    avatarColor: '#8b5cf6',
    stars: 5
  },
  {
    quote:
      "The GitHub integration is seamless. Push to main and your app is live within minutes. We've deployed over 100 times without a single infrastructure incident. Our whole team is now 3x more productive.",
    name: 'James Kim',
    role: 'CTO',
    company: 'DataPilot',
    avatar: 'JK',
    avatarColor: '#22c55e',
    stars: 5
  }
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b">
      <path d="M7 1l1.8 3.6L13 5.1l-3 2.9.7 4.1L7 10l-3.7 2.1.7-4.1-3-2.9 4.2-.5z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
      <path
        d="M0 24V14.4C0 10.133 1.067 6.667 3.2 4 5.333 1.333 8.533 0 12.8 0v4.8c-2.133 0-3.733.667-4.8 2C6.933 8.133 6.4 9.867 6.4 12v2h6.4V24H0zm19.2 0V14.4c0-4.267 1.067-7.733 3.2-10.4C24.533 1.333 27.733 0 32 0v4.8c-2.133 0-3.733.667-4.8 2-1.067 1.333-1.6 3.067-1.6 5.2v2h6.4V24H19.2z"
        fill="rgba(59,130,246,0.15)"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div className="section-divider mb-0" />

      {/* Orb */}
      <div
        className="orb"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          top: '0%',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#3b82f6] font-medium mb-4">Trusted by developers</p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Developers love Runlo</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">Join hundreds of developers who ship faster with Runlo every day.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[number] }) {
  const { quote, name, role, company, avatar, avatarColor, stars } = testimonial;

  return (
    <div className="glass-card rounded-2xl p-7 flex flex-col gap-5">
      {/* Quote icon */}
      <QuoteIcon />

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>

      {/* Divider */}
      <div className="section-divider" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
          style={{ background: `${avatarColor}30`, border: `1px solid ${avatarColor}40`, color: avatarColor }}>
          {avatar}
        </div>
        <div>
          <p className="text-slate-900 text-sm font-medium">{name}</p>
          <p className="text-slate-400 text-xs">
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}
