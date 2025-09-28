# Blossom Blog

A modern, responsive blog application built with React and Vite, featuring a clean design and smooth user experience.

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.5 + Custom CSS
- **Routing**: React Router DOM 7.5.3
- **Icons**: React Icons 5.5.0
- **Email Service**: EmailJS 4.4.1
- **Linting**: ESLint 9.25.0

## Features

- 📱 **Responsive Design**: Optimized for all device sizes
- 🎨 **Modern UI**: Clean, elegant design with smooth animations
- 📝 **Blog Management**: Dynamic blog post rendering with filtering
- 🔍 **Search & Filter**: Filter posts by category, tags, or search terms
- 📧 **Contact Form**: Integrated EmailJS for contact submissions
- 🖼️ **Image Gallery**: Beautiful image galleries for blog posts
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds
- 🎯 **SEO Friendly**: Semantic HTML structure

## Project Structure

```
src/
├── components/
│   ├── blog/
│   │   ├── BlogCard.jsx          # Individual blog post card
│   │   ├── BlogDetail.jsx        # Detailed blog post view
│   │   ├── BlogList.jsx          # List of blog posts
│   │   └── ImageGallery.jsx      # Image gallery component
│   ├── common/
│   │   ├── Button.jsx            # Reusable button component
│   │   ├── Footer.jsx            # Site footer
│   │   ├── Header.jsx            # Site header
│   │   └── Navigation.jsx        # Navigation menu
│   └── layout/
│       └── Layout.jsx            # Main layout wrapper
├── data/
│   └── blogData.js               # Blog posts data
├── hooks/
│   └── useBlogData.js            # Custom hook for blog data management
├── pages/
│   ├── About.jsx                 # About page
│   ├── BlogPage.jsx              # Blog listing page
│   ├── Contact.jsx               # Contact page
│   └── Home.jsx                  # Homepage
├── styles/
│   └── main.css                  # Custom CSS styles and variables
├── utils/
│   └── formatDate.js             # Date formatting utility
├── App.jsx                       # Main app component
└── main.jsx                      # Application entry point
```

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd basmah
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code linting

## Configuration

### Email Integration (EmailJS)

To enable the contact form, update the EmailJS configuration in `src/pages/Contact.jsx`:

```javascript
// Replace with your EmailJS credentials
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
```

### Blog Content

Blog posts are managed in `src/data/blogData.js`. Each post object contains:

```javascript
{
  id: 'unique-id',
  title: 'Post Title',
  excerpt: 'Brief description',
  content: 'Full HTML content',
  author: 'Author Name',
  date: 'YYYY-MM-DD',
  category: 'Category Name',
  tags: ['tag1', 'tag2'],
  images: [
    {
      url: '/image-path.jpg',
      alt: 'Alt text',
      caption: 'Image caption'
    }
  ],
  featured: true/false,
  featuredImage: '/featured-image.jpg'
}
```

## Styling

The application uses a hybrid approach combining Tailwind CSS with custom CSS:

### Custom CSS Variables

Located in `src/styles/main.css`, the app uses CSS custom properties for:

- Color palette (primary, secondary, accent colors)
- Typography (Playfair Display for headings, Quicksand for body)
- Spacing and layout variables
- Animation timings

### Color Scheme

- **Primary**: Pink tones (#f8b4d9)
- **Secondary**: Purple tones (#9f7aea)
- **Accent**: Blue tones (#667eea)

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Quicksand (sans-serif)

## Components

### Blog Components

- **BlogCard**: Displays blog post preview with image, title, excerpt
- **BlogDetail**: Full blog post view with content and image gallery
- **BlogList**: Grid layout of blog cards with filtering
- **ImageGallery**: Interactive image gallery with captions

### Common Components

- **Button**: Configurable button with variants (primary, secondary, outline)
- **Header/Footer**: Site navigation and branding
- **Navigation**: Responsive navigation menu
- **Layout**: Main wrapper providing consistent page structure

### Custom Hooks

- **useBlogData**: Manages blog data with filtering capabilities
  - Supports filtering by category, tags, and search terms
  - Provides loading and error states
  - Returns filtered results and featured posts

## Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

Key responsive features:

- Collapsible navigation menu
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements

## Performance Optimizations

- **Vite Build Tool**: Fast development and optimized production builds
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Responsive image handling
- **CSS Variables**: Efficient styling with custom properties
- **React 19**: Latest React optimizations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deployment Platforms

This project can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Development

### Code Style

- ESLint configuration enforces consistent code style
- React hooks rules enabled
- Unused variables detection
- Modern JavaScript features supported

### Adding New Blog Posts

1. Add new post object to `src/data/blogData.js`
2. Include appropriate images in `public/` directory
3. Follow the existing data structure

### Customizing Design

1. Modify CSS variables in `src/styles/main.css`
2. Update color scheme and typography
3. Customize component styles using Tailwind classes
