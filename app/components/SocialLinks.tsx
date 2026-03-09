const socialLinks = [
  { label: "GitHub", href: "https://github.com/yuval-dotcom" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yuval-tal-spy" },
  { label: "Twitter", href: "https://twitter.com" },
] as const;

export function SocialLinks() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
