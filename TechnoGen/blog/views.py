from rest_framework.decorators import api_view
from rest_framework.response import Response

BLOG_POSTS = [
    {
        "id": "1",
        "title": "The Future of AI in Software Development",
        "excerpt": "Exploring how artificial intelligence is revolutionizing the way we build software.",
        "content": """
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
    """,
        "author": {
            "name": "John Doe",
            "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
        },
        "coverImage": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        "date": "2024-03-20",
        "readingTime": "5 min read",
        "tags": ["AI", "Software Development", "Technology"]
    },
    {
        "id": "2",
        "title": "Building Responsive Web Applications",
        "excerpt": "Learn the best practices for creating responsive and mobile-friendly web applications.",
        "content": """
      <p>In today's mobile-first world, building responsive web applications is more important than ever...</p>
      
      <h2>Key Principles of Responsive Design</h2>
      <ul>
        <li>Fluid grids</li>
        <li>Flexible images</li>
        <li>Media queries</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>When implementing responsive design, consider the following approaches...</p>
    """,
        "author": {
            "name": "Jane Smith",
            "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
        },
        "coverImage": "https://images.unsplash.com/photo-1547658719-da2b51169166",
        "date": "2024-03-18",
        "readingTime": "8 min read",
        "tags": ["Web Development", "Responsive Design", "CSS"]
    },
    {
        "id": "building-scalable-apis",
        "title": "Building Scalable APIs with Node.js and Express",
        "excerpt": "Learn how to build robust and scalable REST APIs using Node.js and Express framework with best practices and real-world examples.",
        "date": "March 15, 2024",
        "readingTime": "8 min read",
        "tags": ["Backend", "Node.js", "Express", "API"],
        "author": {
            "name": "Sarah Chen",
            "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
        },
        "coverImage": "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
        "content": """
      <h2>Introduction to API Development</h2>
      <p>Building scalable APIs is crucial for modern web applications. In this comprehensive guide, we'll explore best practices, authentication strategies, and performance optimization techniques.</p>
      
      <h2>Key Concepts</h2>
      <ul>
        <li>RESTful principles</li>
        <li>Middleware implementation</li>
        <li>Error handling</li>
        <li>Database integration</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>We'll cover essential best practices including validation, rate limiting, and security measures to ensure your API is production-ready.</p>
    """
    },
    {
        "id": "mastering-typescript",
        "title": "Mastering TypeScript: Advanced Patterns and Techniques",
        "excerpt": "Dive deep into TypeScript's advanced features and learn how to write more maintainable and type-safe code.",
        "date": "March 12, 2024",
        "readingTime": "10 min read",
        "tags": ["TypeScript", "JavaScript", "Programming"],
        "author": {
            "name": "Michael Park",
            "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
        },
        "coverImage": "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
        "content": """
      <h2>Advanced TypeScript Features</h2>
      <p>Explore advanced TypeScript features that help you write better, more maintainable code.</p>
      
      <h2>Generic Types</h2>
      <p>Understanding and implementing generic types for flexible, reusable code components.</p>
      
      <h2>Type Guards and Assertions</h2>
      <p>Learn how to use type guards and assertions effectively in your TypeScript applications.</p>
    """
    },
    {
        "id": "react-performance",
        "title": "React Performance Optimization Techniques",
        "excerpt": "Discover practical techniques to optimize your React applications for better performance and user experience.",
        "date": "March 10, 2024",
        "readingTime": "7 min read",
        "tags": ["React", "Performance", "Frontend"],
        "author": {
            "name": "Emma Wilson",
            "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
        },
        "coverImage": "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        "content": """
      <h2>Understanding React Performance</h2>
      <p>Learn about common performance bottlenecks in React applications and how to identify them.</p>
      
      <h2>Optimization Strategies</h2>
      <p>Explore various optimization techniques including memoization, code splitting, and lazy loading.</p>
      
      <h2>Measuring Performance</h2>
      <p>Tools and techniques for measuring and monitoring React application performance.</p>
    """
    },
    {
        "id": "ai-web-development",
        "title": "AI Integration in Modern Web Development",
        "excerpt": "Learn how to integrate AI capabilities into your web applications using modern tools and frameworks.",
        "date": "March 8, 2024",
        "readingTime": "9 min read",
        "tags": ["AI", "Web Development", "Machine Learning"],
        "author": {
            "name": "David Kumar",
            "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
        },
        "coverImage": "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        "content": """
      <h2>AI in Web Development</h2>
      <p>Explore how AI is transforming web development and creating new possibilities for user experiences.</p>
      
      <h2>Integration Techniques</h2>
      <p>Step-by-step guide to integrating AI models and services into your web applications.</p>
      
      <h2>Real-world Applications</h2>
      <p>Case studies and examples of AI implementation in modern web applications.</p>
    """
    },
    {
        "id": "css-architecture",
        "title": "Modern CSS Architecture and Best Practices",
        "excerpt": "A comprehensive guide to structuring and maintaining large-scale CSS projects.",
        "date": "March 5, 2024",
        "readingTime": "6 min read",
        "tags": ["CSS", "Frontend", "Web Design"],
        "author": {
            "name": "Lisa Chen",
            "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"
        },
        "coverImage": "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
        "content": """
      <h2>CSS Architecture Principles</h2>
      <p>Learn about modern CSS architecture principles and methodologies for scalable stylesheets.</p>
      
      <h2>CSS Modules and Components</h2>
      <p>Implementing modular CSS approaches for better maintainability and reusability.</p>
      
      <h2>Performance Optimization</h2>
      <p>Techniques for optimizing CSS performance and reducing bundle sizes.</p>
    """
    },
    {
        "id": "docker-containerization",
        "title": "Docker Containerization for Modern Applications",
        "excerpt": "A comprehensive guide to containerizing your applications with Docker and best deployment practices.",
        "date": "March 3, 2024",
        "readingTime": "8 min read",
        "tags": ["Docker", "DevOps", "Containerization"],
        "author": {
            "name": "Alex Rivera",
            "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
        },
        "coverImage": "https://images.unsplash.com/photo-1605745341112-85968b19335b",
        "content": """
      <h2>Introduction to Docker</h2>
      <p>Docker has revolutionized how we package and deploy applications. Learn the fundamentals and best practices.</p>
      
      <h2>Container Orchestration</h2>
      <p>Understand how to manage multiple containers and scale your applications effectively.</p>
      
      <h2>Production Deployment</h2>
      <p>Learn about deployment strategies and container security in production environments.</p>
    """
    }
]

@api_view(['GET'])
def post_list(request):
    return Response(BLOG_POSTS)

@api_view(['GET'])
def post_detail(request, id):
    post = next((post for post in BLOG_POSTS if post["id"] == id), None)
    if post is None:
        return Response({"error": "Post not found"}, status=404)
    return Response(post)
