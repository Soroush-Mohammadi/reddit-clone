import type { MenuSection } from '@/types/menu';

export const mobileMenu: MenuSection[] = [
  {
    id: 'main',
    items: [
      {
        id: 'popular',
        label: 'Popular',
        icon: 'emojione-monotone:up-arrow',
        href: '/popular'
      },
      {
        id: 'answers',
        label: 'Answers',
        icon: 'lets-icons:group-share',
        href: '/answers',
        beta: true
      }
    ]
  },
  {
    id: 'topics',
    title: 'TOPICS',
    items: [
      {
        id: 'internet',
        label: 'Internet Culture (Viral)',
        icon: 'vaadin:globe',
        children: [
          {
            id: 'amazing',
            label: 'Amazing'
          },
          {
            id: 'animal',
            label: 'Animal & Pets'
          }
        ]
      },
      {
        id: 'games',
        label: 'Games',
        icon: 'solar:gamepad-linear',
        children: []
      },
      {
        id: 'qna',
        label: 'Q&As',
        icon: 'streamline-flex:help-chat-1-remix',
        children: []
      },
      {
        id: 'tech',
        label: 'Technology',
        icon: 'solar:cpu-outline',
        children: []
      },
      {
        id: 'pop',
        label: 'Pop Culture',
        icon: 'ic:outline-star',
        children: []
      },
      {
        id: 'movies',
        label: 'Movies & TV',
        icon: 'streamline:film-slate',
        children: []
      }
    ]
  },
  {
    id: 'resources',
    title: 'RESOURCES',
    items: [
      {
        id: 'about',
        label: 'About Reddit',
        icon: 'cib:reddit-alt',
        href: '/about'
      },
      {
        id: 'advertise',
        label: 'Advertise',
        icon: 'pepicons-pencil:megaphone',
        href: '/advertise'
      },
      {
        id: 'pro',
        label: 'Reddit Pro',
        icon: 'teenyicons:bar-chart-outline',
        href: '/pro',
        beta: true
      },
      {
        id: 'help',
        label: 'Help',
        icon: 'material-symbols:help-outline',
        href: '/help'
      },
      { id: 'blog', label: 'Blog', icon: 'bytesize:book', href: '/blog' },
      {
        id: 'careers',
        label: 'Careers',
        icon: 'dashicons:admin-tools',
        href: '/careers'
      },
      {
        id: 'press',
        label: 'Press',
        icon: 'lineicons:hand-mic',
        href: '/press'
      }
    ]
  }
];
