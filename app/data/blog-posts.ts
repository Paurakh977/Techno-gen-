import { BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build software.",
    content: `
      <p>Artificial Intelligence is transforming the way we develop software. From code completion to automated testing, AI tools are becoming an integral part of the development process.</p>
      
      <h2>The Impact of AI on Development</h2>
      <p>AI-powered tools are helping developers write better code faster than ever before. They can:</p>
      <ul>
        <li>Suggest code completions</li>
        <li>Identify potential bugs</li>
        <li>Automate routine tasks</li>
        <li>Generate test cases</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>As AI continues to evolve, we can expect even more revolutionary changes in software development...</p>
    `,
    author: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    date: "2024-03-20",
    readingTime: "5 min read",
    tags: ["AI", "Software Development", "Technology"],
  },
  {
    id: "2",
    title: "Building Responsive Web Applications",
    excerpt: "Learn the best practices for creating responsive and mobile-friendly web applications.",
    content: `
      <p>In today's mobile-first world, building responsive web applications is more important than ever...</p>
      
      <h2>Key Principles of Responsive Design</h2>
      <ul>
        <li>Fluid grids</li>
        <li>Flexible images</li>
        <li>Media queries</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>When implementing responsive design, consider the following approaches...</p>
    `,
    author: {
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    date: "2024-03-18",
    readingTime: "8 min read",
    tags: ["Web Development", "Responsive Design", "CSS"],
  },
];