import { getPlaiceholder } from 'plaiceholder'
import * as fs from 'node:fs/promises';
import path from 'node:path'

export const getImage = async (url: string) => {
    if (!url) throw new Error('No image URL provided')
    let buffer: Buffer
    if (url.startsWith('https')) {
      const res = await fetch(url)
      buffer = Buffer.from(await res.arrayBuffer())
    } else {
      const imagePath = path.join(process.cwd(), 'public' ,url)
      buffer = await fs.readFile(imagePath)
    }
    const {
      base64,
      metadata: { height, width }
    } = await getPlaiceholder(buffer)
    return { base64, height, width }
}