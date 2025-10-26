import { Rocket, Star, Shield } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-rose-50 text-rose-600 p-2">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-neutral-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Fast start, modern stack</h2>
          <p className="mt-3 text-neutral-600">Vite + React + Tailwind, with an interactive Spline hero to set the tone.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Rocket}
            title="Instant Launch"
            description="Hot reload, fast builds, and zero config. Ship ideas at the speed of thought."
          />
          <FeatureCard
            icon={Star}
            title="Beautiful by Default"
            description="Thoughtful defaults, crisp typography, and elegant components to get you started."
          />
          <FeatureCard
            icon={Shield}
            title="Solid Foundation"
            description="Accessible, responsive, and production-ready patterns with room to grow."
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
