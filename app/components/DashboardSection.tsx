const stats = [
  { label: "GPA (Computer Science)", value: "90" },
  { label: "Years of CS studies", value: "3" },
  { label: "Years of IDF service", value: "3" },
];

export function DashboardSection() {
  return (
    <section
      id="dashboard"
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 md:text-3xl">
          Dashboard
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="rounded-lg border border-gray-200 bg-white/50 p-6 text-center dark:border-gray-700 dark:bg-gray-800/50"
            >
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
