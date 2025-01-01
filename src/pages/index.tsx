import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Somani Realtors - Digital Cards</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Somani Realtors - Leading real estate company in Kolkata" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Image 
                src="/somani-logo.png" 
                alt="Somani Realtors Logo" 
                width={150} 
                height={50}
                className="h-12 w-auto"
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Somani Realtors
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your trusted partner in real estate since 1992
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Add your key services or features here */}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>Email: contact@somanirealtors.com</p>
                <p>Phone: +91 98300 46276</p>
              </div>
              {/* Add more footer sections as needed */}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default HomePage