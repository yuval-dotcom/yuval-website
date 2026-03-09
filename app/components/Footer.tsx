import Link from "next/link";

const footerLinks = [
  { label: "Email", href: "mailto:yuvalt12311@gmail.com" },
  { label: "GitHub", href: "https://github.com/yuval-dotcom" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yuval-tal-spy" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-gray-200/80 dark:border-gray-700/80">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 Yuval Tal
        </p>
        <nav className="flex gap-6">
          {footerLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
