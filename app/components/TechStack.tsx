const TECHNOLOGIES = [
  {
    name: 'ASP.NET Core',
    badge: 'Supported',
    badgeColor: '#22c55e',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
        <text x="16" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="#818cf8" fontFamily="monospace">
          .NET
        </text>
      </svg>
    ),
    description: 'Full-support for .NET 8+ web applications with auto-detected build pipelines.'
  },
  {
    name: '.NET Worker Services',
    badge: 'Supported',
    badgeColor: '#22c55e',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
        <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="#818cf8" fontFamily="monospace">
          WRK
        </text>
      </svg>
    ),
    description: 'Run background workers and microservices as managed services with persistent uptime.'
  },
  {
    name: 'Node.js',
    badge: 'Coming soon',
    badgeColor: '#f59e0b',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.2)" strokeWidth="1" />
        <text x="16" y="20" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4ade80" fontFamily="monospace">
          NODE
        </text>
      </svg>
    ),
    description: 'Express, Fastify, NestJS and more. Early access available for Node.js applications.'
  },
  {
    name: 'Python',
    badge: 'Coming soon',
    badgeColor: '#f59e0b',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="rgba(250,204,21,0.08)" stroke="rgba(250,204,21,0.2)" strokeWidth="1" />
        <text x="16" y="20" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fbbf24" fontFamily="monospace">
          PYTHON
        </text>
      </svg>
    ),
    description: 'Django, FastAPI, Flask support planned. Join the waitlist to get notified at launch.'
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-0" />

      {/* orb */}
      <div
        className="orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
          top: '0%',
          right: '10%'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#3b82f6] font-medium mb-4">Supported runtimes</p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Built for your stack</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">Starting with .NET, expanding rapidly. More runtimes are on the roadmap.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TECHNOLOGIES.map(({ name, badge, badgeColor, icon, description }) => (
            <TechCard key={name} name={name} badge={badge} badgeColor={badgeColor} icon={icon} description={description} />
          ))}
        </div>

        {/* More coming note */}
        <p className="text-center text-slate-400 text-sm mt-10">
          Go, Rust, Ruby on Rails, and more are planned.{' '}
          <a href="#" className="text-[#3b82f6] hover:text-[#60a5fa] underline underline-offset-2 transition-colors">
            View the roadmap →
          </a>
        </p>
      </div>
    </section>
  );
}

function TechCard({ name, badge, badgeColor, icon, description }: { name: string; badge: string; badgeColor: string; icon: React.ReactNode; description: string }) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        {icon}
        <span
          className="text-xs font-medium px-2.5 py-0.5 rounded-full"
          style={{
            background: `${badgeColor}18`,
            color: badgeColor,
            border: `1px solid ${badgeColor}30`
          }}>
          {badge}
        </span>
      </div>
      <div>
        <h3 className="text-slate-900 font-semibold mb-1.5">{name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
