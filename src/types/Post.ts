export type Post = {
  title: string;
  url: string;
  thumbnail?: {
    url: string;
  };
  description?: string;
  timestamp: string;
  author?: {
    name: string;
    url: string;
    icon_url: string;
  };
};
