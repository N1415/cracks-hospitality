# Contact Form API

## Endpoint

**POST** `https://api.cracks-app.com/public/contact`

This is a public endpoint - no authentication required.

## Request Body

```typescript
interface ContactFormRequest {
  firstName: string;          // Required
  lastName: string;           // Required
  email: string;              // Required - valid email
  message: string;            // Required
  company?: string;           // Optional
  telephone?: string;         // Optional
  subject?: string;           // Optional - e.g., "General Inquiry", "Partnership", "Consulting"
  source: "hospitality";      // Required - identifies this site
}
```

## Example Request

```typescript
const response = await fetch('https://api.cracks-app.com/public/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    message: 'I am interested in learning more about Cracks Hospitality.',
    company: 'Restaurant Group',
    telephone: '+1234567890',
    subject: 'General Inquiry',
    source: 'hospitality'
  })
});
```

## Response

### Success (200)
```json
{
  "success": true,
  "message": "Thank you for your message! We'll get back to you soon."
}
```

### Error (503) - Email service not configured
```json
{
  "detail": "Email service is not configured. Please try again later."
}
```

## Notes

- Emails are sent in background - response returns immediately
- CORS is handled by the backend
- Source field should always be `"hospitality"` for this site
