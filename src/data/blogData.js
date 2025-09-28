const blogData = [
    {
      id: '1',
      title: 'Getting Started with Modern Web Development',
      excerpt: 'Exploring the fundamentals of building responsive and interactive web applications.',
      content: `
        <p>Modern web development has evolved significantly over the past decade. Today's developers have access to powerful frameworks, tools, and methodologies that make building sophisticated web applications more accessible than ever before.</p>

        <p>In this article, we'll explore the key concepts and technologies that form the foundation of contemporary web development, including responsive design principles, component-based architectures, and performance optimization techniques.</p>
       `,
      author: 'Alex Johnson',
      date: '2025-01-15',
      category: 'Web Development',
      tags: ['Frontend', 'JavaScript', 'React'],
      images: [
        {
          url: '/placeholder-image-1.jpg',
          alt: 'Modern web development workspace',
          caption: 'A typical modern development environment'
        },
        {
          url: '/placeholder-image-2.jpg',
          alt: 'Code editor with React components',
          caption: 'Building reusable components'
        },
        {
          url: '/placeholder-image-3.jpg',
          alt: 'Responsive design mockup',
          caption: 'Designing for multiple screen sizes'
        }
      ],
      featured: true,
      featuredImage: '/placeholder-featured-1.jpg'
    },
    {
      id: '2',
      title: 'The Future of Artificial Intelligence',
      excerpt: 'Understanding how AI is transforming industries and daily life.',
      content: `
        <p>Artificial Intelligence is no longer a concept confined to science fiction. Today, AI technologies are integrated into countless applications that we use daily, from recommendation systems to voice assistants and autonomous vehicles.</p>

        <p>This post explores the current state of AI technology, its practical applications across various industries, and what we can expect in the coming years as machine learning and neural networks continue to advance.</p>
      `,
      author: 'Alex Johnson',
      date: '2025-01-20',
      category: 'Technology',
      tags: ['AI', 'Machine Learning', 'Innovation'],
      images: [
        {
          url: '/placeholder-ai-1.jpg',
          alt: 'AI concept illustration',
          caption: 'Visualizing artificial intelligence'
        },
        {
          url: '/placeholder-ai-2.jpg',
          alt: 'Neural network diagram',
          caption: 'Understanding neural networks'
        }
      ],
      featured: true,
      featuredImage: '/placeholder-ai-featured.jpg'
    },
    {
      id: '3',
      title: 'Sustainable Technology Practices',
      excerpt: 'How technology companies are embracing environmental responsibility.',
      content: `
        <p>As awareness of climate change grows, technology companies are increasingly focusing on sustainable practices. From renewable energy in data centers to eco-friendly hardware design, the tech industry is working to reduce its environmental impact.</p>

        <p>This article examines various initiatives and innovations that demonstrate how technology can be part of the solution to environmental challenges rather than just a contributor to them.</p>
      `,
      author: 'Alex Johnson',
      date: '2025-01-25',
      category: 'Sustainability',
      tags: ['Green Tech', 'Environment', 'Innovation'],
      images: [
        {
          url: '/placeholder-green-1.jpg',
          alt: 'Solar panels on data center',
          caption: 'Renewable energy in technology'
        },
        {
          url: '/placeholder-green-2.jpg',
          alt: 'Sustainable office workspace',
          caption: 'Eco-friendly tech workplace'
        }
      ],
      featured: true,
      featuredImage: '/placeholder-green-featured.jpg'
    },
    {
      id: '4',
      title: 'Remote Work Best Practices',
      excerpt: 'Maximizing productivity and collaboration in distributed teams.',
      content: `
        <p>The shift to remote work has fundamentally changed how teams collaborate and communicate. Success in a remote environment requires new strategies, tools, and mindsets compared to traditional office settings.</p>

        <p>This guide covers proven techniques for maintaining productivity, fostering team connection, and creating effective remote work routines that benefit both individuals and organizations.</p>
      `,
      author: 'Alex Johnson',
      date: '2025-02-01',
      category: 'Productivity',
      tags: ['Remote Work', 'Collaboration', 'Productivity'],
      images: [
        {
          url: '/placeholder-remote-1.jpg',
          alt: 'Home office setup',
          caption: 'Professional remote workspace'
        },
        {
          url: '/placeholder-remote-2.jpg',
          alt: 'Video conference meeting',
          caption: 'Virtual team collaboration'
        }
      ],
      featured: false,
      featuredImage: '/placeholder-remote-featured.jpg'
    },
    {
      id: '5',
      title: 'Cybersecurity Fundamentals',
      excerpt: 'Essential security practices for the digital age.',
      content: `
        <p>In our increasingly connected world, cybersecurity has become a critical concern for individuals and organizations alike. Understanding basic security principles and implementing protective measures is essential for safeguarding digital assets and personal information.</p>

        <p>This article covers fundamental cybersecurity concepts, common threats, and practical steps that everyone can take to improve their digital security posture.</p>
      `,
      author: 'Alex Johnson',
      date: '2025-02-05',
      category: 'Security',
      tags: ['Cybersecurity', 'Privacy', 'Digital Safety'],
      images: [
        {
          url: '/placeholder-security-1.jpg',
          alt: 'Digital security concept',
          caption: 'Protecting digital assets'
        },
        {
          url: '/placeholder-security-2.jpg',
          alt: 'Secure coding practices',
          caption: 'Building secure applications'
        }
      ],
      featured: false,
      featuredImage: '/placeholder-security-featured.jpg'
    },
    {
      id: '6',
      title: 'Data Science in Practice',
      excerpt: 'Real-world applications of data analysis and machine learning.',
      content: `
        <p>Data science has emerged as one of the most valuable skills in the modern economy. Organizations across all industries are leveraging data analytics to make informed decisions, optimize operations, and create innovative products and services.</p>

        <p>This post explores practical applications of data science techniques, from predictive analytics to natural language processing, and discusses how businesses are using these tools to gain competitive advantages.</p>
      `,
      author: 'Alex Johnson',
      date: '2025-02-10',
      category: 'Data Science',
      tags: ['Data Analysis', 'Machine Learning', 'Business Intelligence'],
      images: [
        {
          url: '/placeholder-data-1.jpg',
          alt: 'Data visualization dashboard',
          caption: 'Interactive data dashboards'
        },
        {
          url: '/placeholder-data-2.jpg',
          alt: 'Statistical analysis charts',
          caption: 'Data analysis and insights'
        }
      ],
      featured: false,
      featuredImage: '/placeholder-data-featured.jpg'
    }
  ];

  export default blogData;