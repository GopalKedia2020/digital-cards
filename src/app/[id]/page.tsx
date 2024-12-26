import DigitalCard from '@/components/DigitalCard';

// Basic props type definition that works with Next.js 13 App Router
async function generateMetadata() {
  return {
    title: 'Digital Card - Somani Realtors'
  };
}

// Simple page component that just displays static data for now
export default function Page() {
  const employeeData = {
    firstName: "John",
    lastName: "Doe",
    mobile: "+91 9876543210",
    email: "john@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200"
  };

  return <DigitalCard employeeData={employeeData} />;
}