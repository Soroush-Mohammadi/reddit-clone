import type { Post, User } from '@/types/post';

const users: User[] = [
  {
    id: 'u1',
    username: 'alice',
    avatarUrl: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 'u2',
    username: 'bob',
    avatarUrl: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 'u3',
    username: 'charlie',
    avatarUrl: 'https://i.pravatar.cc/150?img=3'
  }
];

export const fakePosts: Post[] = [
  {
    id: 'p1',
    title: 'Nuxt 3 is awesome',
    content:
      'Just tried Nuxt 3 with Vue and it feels so smooth! Highly recommend.',
    createdAt: new Date('2025-09-01T12:00:00'),
    votes: 42,
    author: users[0],
    subreddit: 'webdev'
  },
  {
    id: 'p2',
    title: 'Prisma + PostgreSQL setup guide',
    content:
      'I wrote a complete setup guide for Prisma with PostgreSQL inside Nuxt projects.',
    createdAt: new Date('2025-09-10T15:30:00'),
    votes: 15,
    author: users[1],
    subreddit: 'programming'
  },
  {
    id: 'p3',
    title: 'Best Tailwind tips?',
    content: 'Anyone here got some Tailwind hacks for faster styling?',
    createdAt: new Date('2025-09-15T09:45:00'),
    votes: 8,
    author: users[2],
    subreddit: 'css'
  }
];
