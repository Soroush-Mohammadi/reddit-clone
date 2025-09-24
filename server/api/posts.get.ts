interface Post {
  id: number
  title: string
  content: string
}

export default defineEventHandler((): Post[] => {
  // Normally, you'd fetch from DB
  const posts: Post[] = [
    { id: 1, title: "First Post", content: "Hello Nuxt 3!" },
    { id: 2, title: "Second Post", content: "This is another post." }
  ]

  return posts
})