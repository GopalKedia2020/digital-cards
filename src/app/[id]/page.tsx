import { google } from 'googleapis';
import { DigitalCard } from '@/components/DigitalCard';

async function getEmployeeData(uniqueId: string) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
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

    // Find the row with matching unique ID
    const row = rows.find(row => row[6]?.includes(uniqueId));
    if (!row) return null;

    return {
      firstName: row[0],
      lastName: row[1],
      mobile: row[2],
      email: row[3],
      designation: row[4],
      imageUrl: row[5] || '/api/placeholder/200/200',
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default async function CardPage({ params }: { params: { id: string } }) {
  const employeeData = await getEmployeeData(params.id);

  if (!employeeData) {
    return <div>Card not found</div>;
  }

  return <DigitalCard employeeData={employeeData} />;
}