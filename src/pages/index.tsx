import { type Metadata } from 'next'
import Image from 'next/image'
import { 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon,
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Somani Realtors | Digital Business Cards',
  description: 'Connect with Somani Realtors professionals through our digital business cards. Easy access to contact information and professional profiles.',
  keywords: 'Somani Realtors, digital business cards, real estate, Kolkata'
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image 
                src="/somani-logo.png"
                alt="Somani Realtors Logo"
                width={180}
                height={60}
                className="w-auto h-12"
                priority
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="tel:03340274027" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                033 4027 4027
              </a>
              <a href="mailto:contact@somanirealtors.com" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                contact@somanirealtors.com
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-6">
              Digital Business Cards
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Connect with Somani Realtors professionals through our digital business cards
            </p>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Receive Link</h3>
                <p className="text-gray-600">Get your unique digital card link from our team member</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">View Card</h3>
                <p className="text-gray-600">Access their professional profile and contact information</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Save Contact</h3>
                <p className="text-gray-600">Download their contact information directly to your phone</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <PhoneIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Direct Contact</h3>
                  <p className="text-gray-600">Instantly call, message, or email our team members</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPinIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location Access</h3>
                  <p className="text-gray-600">Get directions to our office with one click</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MailIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Save Contact</h3>
                  <p className="text-gray-600">Download digital business card to your contacts</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <LinkedinIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Social Connect</h3>
                  <p className="text-gray-600">Follow us on various social media platforms</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Somani Realtors</h3>
              <p className="text-gray-400 text-sm">
                Leading real estate consultancy in Kolkata since 1992
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>40, Ashutosh Mukherjee Road</p>
                <p>2nd Floor, Kolkata - 700020</p>
                <p>Phone: 033 4027 4027</p>
                <p>Email: sales@somanirealtors.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/somanirealtors" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/somanirealtors" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <InstagramIcon className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/company/somanirealtors" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Somani Realtors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}