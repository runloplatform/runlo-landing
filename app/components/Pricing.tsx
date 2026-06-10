const PLANS = [
  {
    name: 'Starter',
    tagline: 'For small projects',
    price: 'Free',
    period: '',
    highlighted: false,
    cta: 'Get started free',
    features: ['Up to 3 applications', 'Shared infrastructure', 'Automatic SSL', 'Custom subdomain (*.runlo.app)', 'Basic deployment logs', 'Community support']
  },
  {
    name: 'Pro',
    tagline: 'For production applications',
    price: '$29',
    period: '/ month',
    highlighted: true,
    cta: 'Start deploying',
    features: [
      'Up to 20 applications',
      'Dedicated resources',
      'Custom domains',
      'Advanced logs & monitoring',
      'Environment variables vault',
      'Auto-scaling',
      'Priority support',
      'Team members (up to 5)'
    ]
  },
  {
    name: 'Business',
    tagline: 'For growing teams',
    price: '$99',
    period: '/ month',
    highlighted: false,
    cta: 'Contact sales',
    features: [
      'Unlimited applications',
      'Premium infrastructure',
      'Unlimited team members',
      'Advanced analytics',
      'SSO & audit logs',
      '99.99% SLA',
      'Dedicated Slack channel',
      '24/7 dedicated support'
    ]
  }
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7l3.5 3.5 6.5-6.5" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="section-divider mb-0" />

      {/* Orbs */}
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%)',
          top: '10%',
          right: '-5%'
        }}
      />
      <div
        className="orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
          bottom: '10%',
          left: '-5%'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#3b82f6] font-medium mb-4">Simple pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-5">Transparent, predictable</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">No hidden fees. No per-seat surprises. Start free and upgrade when you&apos;re ready.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-slate-400 text-sm mt-10">All plans include automatic SSL, deployment logs, and uptime monitoring.</p>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: (typeof PLANS)[number] }) {
  const { name, tagline, price, period, highlighted, cta, features } = plan;

  return (
    <div
      className="relative rounded-2xl p-8 flex flex-col"
      style={
        highlighted
          ? {
              background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)',
              border: '1px solid rgba(99,102,241,0.3)',
              boxShadow: '0 0 40px rgba(59,130,246,0.1), 0 8px 32px rgba(0,0,0,0.06)'
            }
          : {
              background: '#ffffff',
              border: '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.05)'
            }
      }>
      {/* Top gradient line for highlighted */}
      {highlighted && <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl" style={{ background: 'linear-gradient(90deg, transparent, #3b82f6, #6366f1, transparent)' }} />}

      {/* Popular badge */}
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>
            Most Popular
          </span>
        </div>
      )}

      {/* Plan name & tag */}
      <div className="mb-6">
        <h3 className="text-slate-900 font-semibold text-xl mb-1">{name}</h3>
        <p className="text-slate-500 text-sm">{tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-end gap-1">
          <span className="text-5xl font-bold text-slate-900">{price}</span>
          {period && <span className="text-slate-500 text-sm mb-2">{period}</span>}
        </div>
      </div>

      {/* CTA */}
      <a href="#" className={highlighted ? 'btn-primary py-2.5 text-sm font-medium mb-8' : 'btn-secondary py-2.5 text-sm font-medium mb-8'}>
        {cta}
      </a>

      {/* Divider */}
      <div className="section-divider mb-6" />

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(34,197,94,0.12)' }}>
              <CheckIcon />
            </span>
            <span className="text-slate-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
