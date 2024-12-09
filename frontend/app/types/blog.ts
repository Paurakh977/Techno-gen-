export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  date: string;
  reading_time: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
} 