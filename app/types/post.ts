export interface User {
  id: string;
  username: string;
  avatarUrl: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  votes: number;
  author: User;
  subreddit: string;
}
