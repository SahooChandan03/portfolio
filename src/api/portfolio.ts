import api from './api';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

// Description: Get personal information for the about section
// Endpoint: GET /api/portfolio/personal-info
// Request: {}
//https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face
// Response: { profileImage: string, title: string, bio: string[], keySkills: string[] }
export const getPersonalInfo = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        profileImage: "/chandan.jpg",
        title: "Passionate Software Developer",
        bio: [
          "I'm a backend-focused software developer with over 4 years of experience building scalable, secure, and high-performance web applications and APIs. I specialize in technologies like Node.js, Express, Python, PostgreSQL, and AWS services including Lambda, SQS, and EC2. I've delivered production-ready solutions for doctor platforms, blockchain dashboards, NFT marketplaces, and real-time collaboration tools.",
        
          "My journey in tech began with a curiosity about how systems work, which grew into a passion for solving real-world problems through clean and efficient backend architectures. I focus on creating robust, maintainable systems that perform well under scale.",
        
          "When I'm not coding, you'll find me exploring new technologies, enjoying a good coffee while reading up on software architecture and cloud engineering trends. I believe in continuous learning and love collaborating with teams to bring impactful ideas to life."
        ],
        keySkills: [
          "Node.js", "Express", "NestJS", "FastAPI",
          "TypeScript", "JavaScript", "Python",
          "PostgreSQL", "MySQL", "MongoDB",
          "AWS", "Docker", "Git", "Kafka",
          "RabbitMq", "Stripe", "Gen AI",
          "API Security", "Web Scraping"
        ]        
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/personal-info');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Get skills and technologies data
// Endpoint: GET /api/portfolio/skills
// Request: {}
// Response: { categories: Array<{ name: string, icon: any, skills: Array<{ name: string, level: number }> }>, technologies: Array<{ name: string, icon: any }> }
export const getSkills = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        categories: [
          {
            name: "Frontend",
            icon: Globe,
            skills: [
              { name: "React", level: 50 },
              { name: "TypeScript", level: 90 },
              { name: "Tailwind CSS", level: 20 }
            ]
          },
          {
            name: "Backend",
            icon: Server,
            skills: [
              { name: "Node.js", level: 90 },
              { name: "Express.js", level: 90 },
              { name: "Nest.js", level: 90 },
              { name: "GraphQL", level: 90 },
              { name: "Python", level: 85 },
              { name: "FastApi", level: 75 },
            ]
          },
          {
            name: "Database",
            icon: Database,
            skills: [
              { name: "PostgreSQL", level: 90 },
              { name: "MySQL", level: 90 },
              { name: "Redis", level: 90 },
              { name: "MongoDB", level: 85 }
            ]
          }
        ],
        technologies: [
          { name: "Node.js", icon: Server },
          { name: "Express", icon: Server },
          { name: "NestJS", icon: Server },
          { name: "FastAPI", icon: Server },
          { name: "TypeScript", icon: Code },
          { name: "JavaScript", icon: Code },
          { name: "Python", icon: Code },
          { name: "PostgreSQL", icon: Database },
          { name: "MySQL", icon: Database },
          { name: "MongoDB", icon: Database },
          { name: "Docker", icon: Server },
          { name: "AWS", icon: Globe },
          { name: "Git", icon: Code },
          { name: "Apache Kafka", icon: Server },
          { name: "RabbitMq", icon: Server },
          { name: "Stripe", icon: Globe },
          { name: "OpenAI / Whisper", icon: Globe },
          { name: "Selenium", icon: Code },
          { name: "BeautifulSoup", icon: Code },
          { name: "API Security", icon: Globe },
        ]        
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/skills');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Get projects data
// Endpoint: GET /api/portfolio/projects
// Request: {}
// Response: { projects: Array<{ id: string, title: string, description: string, fullDescription: string, image: string, category: string, technologies: string[], liveUrl: string, githubUrl: string, features: string[] }>, categories: string[] }
export const getProjects = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        categories: ["All", "Web App", "Mobile App", "API", "E-commerce"],
        projects: [
          {
            id: "1",
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with modern UI and secure payment processing.",
            fullDescription: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, order management, and integrated payment processing with Stripe. The platform also includes an admin dashboard for inventory management and analytics.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            category: "E-commerce",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
            liveUrl: "https://example-ecommerce.com",
            githubUrl: "https://github.com/johndoe/ecommerce-platform",
            features: [
              "User authentication and authorization",
              "Product catalog with search and filtering",
              "Shopping cart and checkout process",
              "Payment integration with Stripe",
              "Order tracking and management",
              "Admin dashboard with analytics"
            ]
          },
          {
            id: "2",
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates and team features.",
            fullDescription: "A modern task management application that helps teams collaborate effectively. Built with React and Socket.io for real-time updates, featuring drag-and-drop functionality, team collaboration tools, and comprehensive project tracking capabilities.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            category: "Web App",
            technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Material-UI"],
            liveUrl: "https://example-taskmanager.com",
            githubUrl: "https://github.com/johndoe/task-manager",
            features: [
              "Real-time collaboration",
              "Drag-and-drop task management",
              "Team member management",
              "Project timeline tracking",
              "File attachments and comments",
              "Mobile-responsive design"
            ]
          },
          {
            id: "3",
            title: "Weather Mobile App",
            description: "A beautiful weather app with location-based forecasts and interactive maps.",
            fullDescription: "A cross-platform mobile weather application built with React Native. Features location-based weather forecasts, interactive weather maps, severe weather alerts, and a clean, intuitive user interface optimized for mobile devices.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
            category: "Mobile App",
            technologies: ["React Native", "OpenWeather API", "Maps SDK", "AsyncStorage"],
            liveUrl: "https://apps.apple.com/weather-app",
            githubUrl: "https://github.com/johndoe/weather-app",
            features: [
              "Location-based weather data",
              "7-day weather forecast",
              "Interactive weather maps",
              "Severe weather alerts",
              "Offline data caching",
              "Beautiful animations and transitions"
            ]
          },
          {
            id: "4",
            title: "RESTful API Service",
            description: "A scalable REST API with authentication, rate limiting, and comprehensive documentation.",
            fullDescription: "A robust RESTful API service built with Node.js and Express, featuring JWT authentication, rate limiting, input validation, and comprehensive API documentation. Designed for scalability and security with proper error handling and logging.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
            category: "API",
            technologies: ["Node.js", "Express", "JWT", "Swagger", "Redis", "Docker"],
            liveUrl: "https://api.example.com/docs",
            githubUrl: "https://github.com/johndoe/api-service",
            features: [
              "JWT-based authentication",
              "Rate limiting and throttling",
              "Input validation and sanitization",
              "Comprehensive API documentation",
              "Error handling and logging",
              "Docker containerization"
            ]
          },
          {
            id: "5",
            title: "Portfolio Website",
            description: "A responsive portfolio website with modern animations and dark mode support.",
            fullDescription: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode support, contact form integration, and optimized performance. Designed to showcase projects and skills in an elegant, professional manner.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
            category: "Web App",
            technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
            liveUrl: "https://johndoe-portfolio.com",
            githubUrl: "https://github.com/johndoe/portfolio",
            features: [
              "Responsive design",
              "Dark/light mode toggle",
              "Smooth scroll animations",
              "Contact form integration",
              "SEO optimization",
              "Fast loading performance"
            ]
          },
          {
            id: "6",
            title: "Social Media Dashboard",
            description: "An analytics dashboard for social media management with real-time data visualization.",
            fullDescription: "A comprehensive social media management dashboard that aggregates data from multiple platforms. Built with React and D3.js for data visualization, featuring real-time analytics, post scheduling, and engagement tracking across various social media platforms.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            category: "Web App",
            technologies: ["React", "D3.js", "Chart.js", "Firebase", "Social Media APIs"],
            liveUrl: "https://social-dashboard.example.com",
            githubUrl: "https://github.com/johndoe/social-dashboard",
            features: [
              "Multi-platform integration",
              "Real-time analytics",
              "Post scheduling",
              "Engagement tracking",
              "Custom reporting",
              "Team collaboration tools"
            ]
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/projects');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Submit contact form
// Endpoint: POST /api/portfolio/contact
// Request: { name: string, email: string, subject: string, message: string }
// Response: { success: boolean, message: string }
export const submitContactForm = (data: { name: string; email: string; subject: string; message: string }) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Message sent successfully! I will get back to you soon.'
      });
    }, 1000);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.post('/api/portfolio/contact', data);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};