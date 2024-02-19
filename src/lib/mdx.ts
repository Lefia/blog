import fs from 'node:fs/promises'
import matter from 'gray-matter'
import path from 'node:path'

export interface Post {
  slug: string,
  title: string,
  description: string,
  date: string,
  coverImage: string,
  content: string
}

const postDir = path.join(process.cwd(), 'src', 'posts')

export const getAllPosts = async (): Promise<Post[]> => {
  const posts = await fs.readdir(postDir, 'utf-8')
  return Promise.all(
    posts.map(async (post) => {
      const postContent = await fs.readFile(path.join(postDir, post), 'utf-8')
      const { data, content } = matter(postContent)
      return {
        slug: post.replace(/\.mdx/, ''),
        title: data.title,
        description: data.description,
        date: data.date,
        coverImage: data.coverImage,
        content
      }
    })
  )
}

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const postPath = path.join(postDir, `${slug}.mdx`)
  await fs.access(postPath).catch(() => { throw new Error('Post not found')})
  const postContent = await fs.readFile(
    path.join(postDir, `${slug}.mdx`),
    'utf-8'
  )
  const { data, content } = matter(postContent)
  return {
    slug: slug,
    title: data.title,
    description: data.description,
    date: data.date,
    coverImage: data.coverImage,
    content
  }
}
