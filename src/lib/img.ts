import { getPlaiceholder } from 'plaiceholder'

export const getImage = async (imageUrl: string) => {
    const url = imageUrl.startsWith('http') ? imageUrl : `http://localhost:3000${imageUrl}`
    const res = await fetch(url)
    const buffer = await res.arrayBuffer()
    const {
      base64,
      metadata: { height, width }
    } = await getPlaiceholder(Buffer.from(buffer))
    return { base64, height, width }
}