import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cardId = searchParams.get('id');

  if (!cardId) {
    return NextResponse.json({ error: 'No ID provided' }, { status: 400 });
  }

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
    if (!rows) {
      return NextResponse.json({ error: 'No data found' }, { status: 404 });
    }

    const row = rows.slice(1).find(row => row[6]?.includes(cardId));
    if (!row) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    const employeeData = {
      firstName: row[0] || '',
      lastName: row[1] || '',
      mobile: row[2] || '',
      email: row[3] || '',
      designation: row[4] || '',
      imageUrl: row[5] || '/api/placeholder/200/200'
    };

    return NextResponse.json(employeeData);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}