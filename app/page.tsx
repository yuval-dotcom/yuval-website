export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Yuval's Website
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A clean and simple Next.js website
          </p>
          <div className="mt-12">
            <p className="text-gray-500 dark:text-gray-400">
              Start building something amazing!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
