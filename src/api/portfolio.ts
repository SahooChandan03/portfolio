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
              { name: "Node.js", level: 95 },
              { name: "Express.js", level: 95 },
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
              { name: "Redis", level: 95 },
              { name: "MySQL", level: 95 },
              { name: "PostgreSQL", level: 90 },
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
export const getProjects = async () => {
  const response = await fetch('/projects.json')
  if (!response.ok) throw new Error('Failed to fetch projects data')
  return await response.json()
}

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