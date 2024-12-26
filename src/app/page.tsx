export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="max-w-4xl mx-auto py-20 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Somani Realtors Digital Cards
          </h1>
          <p className="text-xl text-gray-600">
            Welcome to our digital business card platform
          </p>
          
          <div className="mt-8 text-gray-600">
            <p className="mb-2">
              Access individual cards using their unique URLs
            </p>
            <p className="text-sm">
              Example: card.somani.app/[unique-id]
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}  