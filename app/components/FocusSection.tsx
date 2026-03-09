const focusItems = [
  "Deepening my understanding of algorithms, data structures, and system design",
  "Building backend and full-stack projects in Java, Kotlin, Python, and more",
  "Writing clean, maintainable code with good debugging and troubleshooting habits",
  "Working effectively in teams, communicating clearly, and managing my time well",
  "Continuously learning and adapting to new technologies and development practices",
];

export function FocusSection() {
  return (
    <section
      id="life"
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 md:text-3xl">
          What I optimize for
        </h2>
        <ul className="space-y-4">
          {focusItems.map((item) => (
            <li
              key={item}
              className="text-gray-600 dark:text-gray-300 pl-4 border-l-2 border-blue-500"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
