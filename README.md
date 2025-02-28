# Somani Realtors Digital Business Cards

A Next.js application that creates professional digital business cards for Somani Realtors employees. Each card provides easy access to contact information, social media links, location data, and allows saving contacts directly to mobile devices.

![Somani Realtors Logo](https://res.cloudinary.com/somani/image/upload/v1730981810/Somani%20Realtors%20Logo%20round.png)

## 🌟 Features

- **Dynamic Digital Cards**: Unique URLs for each employee with personalized information
- **Modern Design**: Responsive interface built with Tailwind CSS
- **Contact Management**: Save contact information as vCard with one click
- **Location Integration**: Direct link to Google Maps location
- **Social Media Connection**: Quick access to all company social media profiles
- **Employee Profiles**: Professional presentation with images and titles
- **Company Branding**: Consistent brand representation across all cards

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (accessible at card.somani.app)

## 📁 Project Structure

```
somani-cards-new/
├── public/                  # Static assets
│   ├── somani-logo.png      # Company logo
│   └── other assets...
├── src/
│   ├── components/          
│   │   └── DigitalCard.tsx  # Main card component
│   ├── data/
│   │   └── employees.ts     # Employee database
│   ├── pages/
│   │   ├── [id]/index.tsx   # Dynamic route for individual cards
│   │   └── index.tsx        # Homepage
│   └── styles/
│       └── globals.css      # Global styles with Tailwind
└── config files...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/somani-cards-new.git
   cd somani-cards-new
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with:
   ```
   NEXT_PUBLIC_SITE_URL=https://card.somani.app
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the application

## 🔄 Employee Management System

The application uses a Google Sheets backend to manage employee data:

1. **Google Sheet Integration**: Employee data is maintained in a Google Sheet
2. **Automated Code Generation**: A Google Apps Script automatically:
   - Generates unique IDs for each employee
   - Creates QR codes for easy card sharing
   - Formats the data into TypeScript code
   - Pushes updates directly to the GitHub repository

### Adding New Employees

1. Add new employee details to the "Employee Cards" sheet
2. Run the "Generate Digital Cards" function from the custom menu
3. The system will:
   - Generate a unique URL for the employee
   - Create a QR code linking to their card
   - Update the TypeScript code
   - Push changes to GitHub (deploys automatically)

The employee data structure in the generated `src/data/employees.ts` file:

```typescript
{
  '[unique-id]': {
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
    designation: string;
    imageUrl: string;
  }
}
```

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

## 📱 Digital Card Usage

1. Share the unique URL with clients (e.g., `https://card.somani.app/[employee-id]`)
2. Clients can view contact information and social profiles
3. They can save contact details to their phone with a single click
4. Direct call, email, and map location access is available

## 🔒 Security & Privacy Considerations

- Employee IDs are randomly generated and not sequential
- Public information is limited to professional details only
- No sensitive personal data is exposed through the cards

### Search Engine Privacy

The application implements several measures to prevent search engines from indexing individual employee cards:

1. **Robots.txt Configuration**: A robots.txt file in the public directory instructs search engines to only index the homepage and static assets.

2. **Meta Tags**: Each employee page includes meta tags that explicitly instruct search engines not to index or follow links on those pages:
   ```html
   <meta name="robots" content="noindex, nofollow">
   ```

3. **HTTP Headers**: The Next.js configuration adds HTTP headers with the X-Robots-Tag to further reinforce the non-indexing directive.

These privacy measures help ensure that employee cards are only accessible to people who have been specifically given the links, and not discoverable through search engines.

## 📄 License

Copyright © 2025 Somani Realtors. All rights reserved.

## 📞 Contact

For any questions or support, please contact:
- Email: gopalkedia@somanirealtors.com
- Phone: 09830046276
