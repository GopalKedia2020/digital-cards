import { google } from 'googleapis';
import DigitalCard from '@/components/DigitalCard';

// Static metadata for the page
export const metadata = {
  title: 'Digital Card - Somani Realtors'
};

// Function to fetch employee data from Google Sheets
async function getEmployeeData(cardId: string) {
  try {
    // Initialize Google Sheets authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    // Create Google Sheets client
    const sheets = google.sheets({ version: 'v4', auth });
    
    // Fetch data from the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Employee Cards!A:G', // Get all columns
    });

    // Extract rows from response
    const rows = response.data.values;
    if (!rows) return null;

    // Find the row with matching card ID
    const row = rows.find(row => row[6]?.includes(cardId));
    if (!row) return null;

    // Map row data to our employee format
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
    // Return null on error, we'll show fallback data
    return null;
  }
}

// Main page component with dynamic routing
export default async function Page({ params }: { params: { id: string } }) {
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