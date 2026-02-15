import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Life", href: "#life" },
  { label: "Writing", href: "#writing" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-sm dark:border-gray-700/80 dark:bg-gray-900/80">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-semibold text-gray-900 dark:text-white"
        >
          Yuval Tal
        </Link>
        <ul className="flex gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              {href.startsWith("#") ? (
                <a
                  href={href}
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
