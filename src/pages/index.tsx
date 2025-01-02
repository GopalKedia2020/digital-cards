import Head from 'next/head'
import Link from 'next/link'
import { employees } from '@/data/employees'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <Head>
        <title>Somani Realtors | Digital Business Cards</title>
        <meta name="description" content="Digital Business Cards for Somani Realtors employees" />
      </Head>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Somani Realtors Team</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(employees).map(([id, employee]) => (
            <li key={id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800">
                {employee.firstName} {employee.lastName}
              </h2>
              <p className="text-sm text-gray-600">{employee.designation}</p>
              <Link href={`/${id}`}>
                <a className="inline-block mt-4 text-blue-600 hover:underline">View Card</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
