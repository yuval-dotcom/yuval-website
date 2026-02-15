import {
  Header,
  Hero,
  SocialLinks,
  FocusSection,
  CurrentlySection,
  FutureSection,
  DashboardSection,
  Footer,
} from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        <Hero />
        <SocialLinks />
        <FocusSection />
        <CurrentlySection />
        <FutureSection />
        <DashboardSection />
        <Footer />
      </main>
    </div>
  );
}
