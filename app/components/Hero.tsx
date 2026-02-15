export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 md:text-5xl">
          Yuval Tal
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 md:text-2xl">
          Staff Engineer &amp; Technical Lead
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Building scalable systems and raising quality bars with a hands-on,
          delivery-focused approach.
        </p>
        <a
          href="mailto:hello@yuvaltal.com"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Email me
        </a>
      </div>
    </section>
  );
}
