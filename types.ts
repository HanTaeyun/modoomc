export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  videoUrl?: string;
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface Coordinates {
  x: number;
  y: number;
}