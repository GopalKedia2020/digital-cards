import { google } from 'googleapis';
import DigitalCard from '@/components/DigitalCard';

export const metadata = {
  title: 'Digital Card - Somani Realtors'
};

async function getEmployeeData(cardUrl: string) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Employee Cards!A:G'
    });

    const rows = response.data.values;
    if (!rows) return null;

    // Skip header row and find matching row
    const row = rows.slice(1).find(row => row[6]?.includes(cardUrl));
    if (!row) return null;

    return {
      firstName: row[0] || '',
      lastName: row[1] || '',
      mobile: row[2] || '',
      email: row[3] || '',
      designation: row[4] || '',
      imageUrl: row[5] || '/api/placeholder/200/200'
    };
  } catch (error) {
    console.error('Error fetching from sheets:', error);
    return null;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  // Try to get employee data
  const data = await getEmployeeData(params.id);

  // Fallback data if no match found
  const fallbackData = {
    firstName: "John",
    lastName: "Doe",
    mobile: "+91 9876543210",
    email: "john@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200"
  };

  // Use fetched data or fallback
  const employeeData = data || fallbackData;

  return <DigitalCard employeeData={employeeData} />;
}