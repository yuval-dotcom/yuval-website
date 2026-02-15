import { Header, Hero, SocialLinks } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main>
        <Hero />
        <SocialLinks />
      </main>
    </div>
  );
}
