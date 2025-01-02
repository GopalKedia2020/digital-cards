
```markdown
# Somani Realtors Digital Business Cards

A Next.js application that creates digital business cards for Somani Realtors employees.

## Project Structure
```
somani-cards-new/
├── public/
│   ├── somani-logo.png
│   ├── vercel.svg
│   ├── next.svg
│   └── window.svg
├── src/
│   ├── components/
│   │   └── DigitalCard.tsx      # Digital card component
│   ├── data/
│   │   └── employees.ts         # Employee data store
│   ├── pages/
│   │   ├── [id]/
│   │   │   └── page.tsx        # Dynamic route for individual cards
│   │   └── index.tsx           # Homepage
│   └── styles/
│       └── globals.css
└── config files (next.config.ts, package.json, etc.)
```

## Features
- Dynamic digital business cards with unique URLs for each employee
- Modern, responsive design with Tailwind CSS
- Save contact functionality (vCard download)
- Social media integration
- Google Maps location integration
- Professional profile images
- Company branding and information

## Technology Stack
- Next.js 13
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Key Components
1. **DigitalCard Component**
   - Professional profile display
   - Contact information
   - Social media links
   - Save contact functionality
   - Location information

2. **Homepage**
   - Company branding
   - How it works section
   - Features overview
   - Contact information
   - Social media links

3. **Dynamic Routing**
   - Each employee gets a unique URL
   - Access via random URL for privacy

## Data Management
Employee data is stored in `src/data/employees.ts` using TypeScript interfaces for type safety.

## Running the Project
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment
The project is deployed on Vercel and accessible at card.somani.app

## Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://card.somani.app
```

## Adding New Employees
Add employee data to `src/data/employees.ts` following the defined interface:
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