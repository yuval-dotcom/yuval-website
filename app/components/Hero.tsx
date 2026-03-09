import Image from "next/image";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center md:flex-row md:text-left">
        <div className="shrink-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl ring-2 ring-blue-500/40 dark:border-gray-900">
            <Image
              src="/yuval.png"
              alt="Portrait of Yuval Tal"
              fill
              sizes="160px"
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Yuval Tal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
            Final-year Computer Science student (GPA 90)
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Passionate about backend and full-stack development, with a strong
            foundation in algorithms, data structures, and clean, reliable code.
          </p>
          <a
            href="mailto:yuvalt12311@gmail.com"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
