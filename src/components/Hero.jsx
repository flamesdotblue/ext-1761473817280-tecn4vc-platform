import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-36">
        <div className="pointer-events-none max-w-2xl">
          <h1 className="pointer-events-auto text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900">
            Hello, world
          </h1>
          <p className="mt-4 md:mt-6 text-neutral-700 text-base md:text-lg">
            A minimalist interactive canvas meets a clean, modern UI. Explore the grid, feel the ripple, and build something delightful.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#features"
              className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-rose-500 text-white px-5 py-3 text-sm font-medium shadow hover:bg-rose-600 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
