import DigitalCard from '@/components/DigitalCard';

export const metadata = {
  title: 'Digital Card - Somani Realtors'
};

export default async function Page({ params }: { params: { id: string } }) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/employee?id=${params.id}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return <DigitalCard employeeData={data} />;
  } catch (error) {
    // Fallback data if API fails
    const fallbackData = {
      firstName: "John",
      lastName: "Doe",
      mobile: "+91 9876543210",
      email: "john@somanirealtors.com",
      designation: "Real Estate Consultant",
      imageUrl: "/api/placeholder/200/200"
    };

    return <DigitalCard employeeData={fallbackData} />;
  }
}