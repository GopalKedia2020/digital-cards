# Google Apps Script Documentation

This document explains the Google Apps Script that manages the digital business card system's data layer.

## Script Overview

The script provides several key functions:
1. Generating unique URLs for each employee
2. Managing employee data
3. Validating input data
4. Formatting the spreadsheet

## Setting Up the Script

1. Open your Google Sheet
2. Click Extensions → Apps Script
3. Copy and paste the provided script
4. Save the project
5. Refresh your sheet to see the "Digital Cards" menu

## Script Functions

### Menu Creation
The `onOpen()` function creates a custom menu in your Google Sheet:
```javascript
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Digital Cards')
    .addItem('Generate URLs', 'generateCardURLs')
    .addToUi();
}
```

### URL Generation
The script generates random, secure URLs for each employee:
```javascript
function generateRandomString(length = 32) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}
```

### Data Validation
The script includes validation for:
1. Email addresses
2. Phone numbers
3. Required fields

## Sheet Structure

The script expects these columns:
A. First Name
B. Last Name
C. Mobile
D. Email
E. Designation
F. Image URL
G. Card URL (auto-generated)

## Maintenance Tasks

### Adding New Employees
1. Enter employee details in a new row
2. Leave the Card URL column empty
3. Click "Digital Cards" → "Generate URLs"

### Updating Information
1. Edit the relevant cells
2. The script automatically validates the new data
3. Existing URLs remain unchanged

### Troubleshooting

If you encounter issues:
1. Check the script editor's "View → Execution log"
2. Verify cell formats match expected patterns
3. Ensure proper permissions are granted

## Security Considerations

The script includes several security features:
1. Input validation to prevent injection attacks
2. Random URL generation for privacy
3. Error logging for debugging
4. Data type checking

## Best Practices

When using the system:
1. Always enter complete employee information
2. Verify email and phone formats
3. Use high-quality employee photos
4. Keep the sheet organized and updated

## Script Customization

To modify the script:
1. Open the Apps Script editor
2. Make your changes
3. Test thoroughly before deployment
4. Update documentation accordingly

Remember to back up the script before making significant changes.
