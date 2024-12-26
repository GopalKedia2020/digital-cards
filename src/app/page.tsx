import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <Image
              src="https://res.cloudinary.com/somani/image/upload/v1730982022/Somani%20Realtors%20Logo%20Svg%20File.svg"
              alt="Somani Realtors Logo"
              width={150}
              height={50}
            />
          </div>
          <nav>
            <ul className="flex space-x-6 text-gray-700">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">About</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Welcome to Somani Realtors Digital Cards
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your professional business card platform, designed for effortless networking and seamless access.
          </p>
          <div className="mt-12">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="ml-4 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600">
              Each card is uniquely designed with easy-to-share URLs, making your professional connections seamless.
            </p>
          </div>

          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Example URL</h2>
            <p className="text-gray-600">
              Use URLs like <span className="font-mono text-blue-600">card.somani.app/[unique-id]</span> to access individual cards effortlessly.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Somani Realtors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
