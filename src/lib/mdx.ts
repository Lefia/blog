import fs from 'node:fs'
import matter from 'gray-matter'
import path from 'node:path'

const postDir = path.join(process.cwd(), 'src', 'posts')

export function getAllPosts() {
    const posts = fs.readdirSync(postDir, 'utf-8')
    return posts.map((post) => {
        const postContent = fs.readFileSync(path.join(postDir, post), 'utf-8')
        const { data, content } = matter(postContent)
        return {
            data,
            content,
            slug: post.replace('.mdx', '')
        }
    })
}

export function getPostBySlug(slug: string) {
    const postPath = path.join(postDir, `${slug}.mdx`)
    if (!fs.existsSync(postPath)) {
        return null
    }
    const postContent = fs.readFileSync(path.join(postDir, `${slug}.mdx`), 'utf-8')
    const { data, content } = matter(postContent)
    return {
        data,
        content,
        slug
    }
}