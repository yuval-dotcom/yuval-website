const futureItems = [
  {
    title: "Student developer role",
    description:
      "Joining a backend or full-stack team where I can turn academic knowledge into real-world impact, learn from experienced engineers, and contribute to production systems.",
  },
  {
    title: "Projects & learning space",
    description:
      "Publishing personal projects, small services, and short write-ups about what I learn in algorithms, backend development, and software engineering best practices.",
  },
];

export function FutureSection() {
  return (
    <section
      id="writing"
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 md:text-3xl">
          Coming soon
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {futureItems.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-gray-200 bg-white/50 p-6 dark:border-gray-700 dark:bg-gray-800/50"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
