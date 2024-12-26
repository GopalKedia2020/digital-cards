This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





# Somani Realtors Digital Business Card System

This project creates digital business cards for Somani Realtors employees. Each employee gets a unique URL (e.g., card.somani.app/[unique-id]) that displays their contact information in a professional, branded format. The system also allows visitors to download contact information directly to their devices.

## System Overview

The system consists of three main components:
1. A Google Sheet that stores employee information and generates unique URLs
2. A Next.js website that displays the digital business cards
3. A vCard generator that creates downloadable contact information

### Google Sheet Integration

The employee data is managed through a Google Sheet: [Employee Cards Sheet](https://docs.google.com/spreadsheets/d/1TXnFaxnUc2ZWtMcsAxcPyl9xg2-slt1uB_rCvo8P1lQ/edit?gid=0)

The sheet structure includes:
- First Name
- Last Name
- Mobile
- Email
- Designation
- Image URL
- Card URL (automatically generated)

### Technical Architecture

The project uses:
- Next.js 13+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Lucide React for icons
- Vercel for hosting
- Cloudflare for DNS management

## Setup Instructions

### Local Development Setup

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Gopal-kedia/somani-cards.git
cd somani-cards
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

### Google Sheet Setup

1. Open the Apps Script editor in Google Sheets
2. Copy the provided script code
3. Save and authorize the script
4. Refresh the sheet to see the new "Digital Cards" menu

### Deployment

The site is deployed on Vercel and uses Cloudflare for DNS management.

DNS Configuration (Cloudflare):
- Type: CNAME
- Name: card
- Target: cname.vercel-dns.com
- Proxy status: Proxied

## Project Structure

\`\`\`
somani-cards/
├── src/
│   ├── app/
│   │   ├── [id]/
│   │   │   └── page.tsx    # Individual card pages
│   │   └── page.tsx        # Homepage
│   └── components/
│       └── DigitalCard.tsx # Card component
\`\`\`

## Adding New Employees

1. Add employee information to the Google Sheet
2. The system automatically generates a unique URL
3. Share the generated URL with the employee

## Component Details

### DigitalCard Component

The DigitalCard component (\`DigitalCard.tsx\`) handles:
- Contact information display
- vCard generation for contact download
- Social media links
- Responsive design
- Company branding

### Dynamic Routing

The \`[id]\` folder enables dynamic routing based on unique URLs. When someone visits card.somani.app/[unique-id], the system:
1. Looks up the employee data
2. Renders their digital business card
3. Enables contact download functionality

## Maintenance and Updates

### Updating Employee Information
1. Open the Google Sheet
2. Find the employee's row
3. Update the necessary information
4. The card automatically reflects the changes

### Adding New Features
The component-based architecture allows for easy updates:
1. Modify DigitalCard.tsx for visual changes
2. Update the Google Sheet script for data management changes
3. Modify page.tsx files for routing or layout changes

## Security Considerations

1. URLs are randomly generated and cannot be guessed
2. Employee data is protected in Google Sheets
3. HTTPS is enforced for all connections
4. Social media links are predefined and consistent

## Troubleshooting

Common issues and solutions:

1. Card Not Loading:
   - Verify the unique URL is correct
   - Check Google Sheet for data accuracy
   - Ensure image URLs are accessible

2. Contact Download Issues:
   - Verify mobile device compatibility
   - Check vCard format in the code
   - Ensure all required fields are present

## Support and Contact

For technical support or questions:
1. Check this documentation first
2. Review the Google Sheet structure
3. Contact the development team for unresolved issues

## Future Enhancements

Planned improvements:
1. Analytics integration
2. QR code generation
3. Multiple language support
4. Enhanced mobile experience
