import fs from 'node:fs/promises'
import path from 'node:path'
import { getPlaiceholder } from 'plaiceholder'

const publicDir = path.join(process.cwd(), 'public')

export const getImage = async (src: string) => {
    const buffer = await (async () => {
        if (src.startsWith('http')) {
            const res = await fetch(src)
            return await Buffer.from(await res.arrayBuffer())
        } else {
            return await fs.readFile(`${publicDir}/${src}`)
        }
    })()
    const {
      base64,
      metadata: { height, width }
    } = await getPlaiceholder(buffer)
    return { base64, height, width }
}
  