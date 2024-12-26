import { google } from 'googleapis';
import DigitalCard from '@/components/DigitalCard';
import { Metadata } from 'next';

// Static metadata for the page
export const metadata: Metadata = {
  title: 'Digital Card - Somani Realtors'
};

// Function to fetch employee data from Google Sheets
async function getEmployeeData(cardId: string) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Employee Cards!A:G',
    });

    const rows = response.data.values;
    if (!rows) return null;

    const row = rows.find(row => row[6]?.includes(cardId));
    if (!row) return null;

    return {
      firstName: row[0] || "",
      lastName: row[1] || "",
      mobile: row[2] || "",
      email: row[3] || "",
      designation: row[4] || "",
      imageUrl: row[5] || "/api/placeholder/200/200",
    };
  } catch (error) {
    console.error('Error fetching employee data:', error);
    return null;
  }
}

// The key change is in this function signature
export default async function Page({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { id: string };
}) {
  // Try to fetch employee data
  const fetchedData = await getEmployeeData(params.id);

  // Fallback data if fetch fails
  const fallbackData = {
    firstName: "John",
    lastName: "Doe",
    mobile: "+91 9876543210",
    email: "contact@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200"
  };

  // Use fetched data or fallback if fetch failed
  const employeeData = fetchedData || fallbackData;

  return <DigitalCard employeeData={employeeData} />;
}