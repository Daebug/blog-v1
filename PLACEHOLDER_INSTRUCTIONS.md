# Placeholder Content Instructions

This blog has been converted to use placeholder content to protect personal information. Follow these steps to customize it with your own content:

## Personal Information to Replace

### 1. Author Name
- Current: "Alex Johnson"
- Files to update:
  - `src/data/blogData.js` (author field in all blog posts)
  - `src/pages/About.jsx` (line 24: "Hello, I'm Alex")

### 2. Contact Information
- File: `src/pages/Contact.jsx`
- Email: Change "hello@yourblog.com" to your email
- Phone: Change "(555) 123-4567" to your phone number
- Location: Change "Your City, Your Country" to your location
- EmailJS configuration:
  - Replace "YOUR_EMAILJS_PUBLIC_KEY" with your EmailJS public key
  - Replace "YOUR_SERVICE_ID" with your EmailJS service ID
  - Replace "YOUR_TEMPLATE_ID" with your EmailJS template ID

### 3. Blog Title and Branding
- Files to update:
  - `src/pages/Home.jsx` (line 35: "Your Blog")
  - `src/components/common/Footer.jsx` (line 14: "Your Blog")

### 4. Social Media Links
- File: `src/pages/Contact.jsx` (lines 123-142)
- Replace "#" placeholders with your actual social media URLs

## Images to Replace

All images in the `public` folder are placeholder files. Replace them with actual images:

### Profile Image
- `public/about-profile.jpg` - Your profile photo (recommended: 400x400px)

### Blog Post Images
Replace all placeholder images referenced in `src/data/blogData.js`:
- `placeholder-featured-1.jpg` through `placeholder-data-2.jpg`
- Recommended sizes: 600x400px for featured images, 400x300px for content images

### Additional Images
You may want to add:
- Favicon (`public/favicon.ico`)
- Logo images
- Background images

## Blog Content

### Blog Posts
- File: `src/data/blogData.js`
- Replace all 6 sample blog posts with your own content
- Update titles, excerpts, content, categories, and tags
- Ensure image URLs match your actual image files

### About Page Content
- File: `src/pages/About.jsx`
- Update the mission, values, and work descriptions (lines 54-79)
- Customize the introduction text (lines 25-32)

## Getting Started

1. Replace personal information as outlined above
2. Add your actual images to the `public` folder
3. Update blog content in `src/data/blogData.js`
4. Test the application locally: `npm run dev`
5. Deploy when ready

## Notes

- All placeholder content is generic and safe for demonstration
- No personal information or sensitive data remains in the codebase
- The application structure and functionality remain unchanged