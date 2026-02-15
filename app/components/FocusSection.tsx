const focusItems = [
  "UI architecture & infrastructure across multiple products",
  "Performance and accessibility (a11y) as default standards",
  "CI/CD automation and developer experience (DX)",
  "Hands-on delivery on high-leverage initiatives",
  "Mentoring and raising quality bars",
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
