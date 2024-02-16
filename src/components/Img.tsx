import { getImage } from '@/lib/img'
import Image from 'next/image'

interface ImgProps {
  src: string
  alt: string
}

const Img = async (props: ImgProps) => {
  const { src, alt } = props
  const { base64, height, width } = await getImage(src)
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      placeholder='blur'
      blurDataURL={base64}
    />
  )
}

export { Img }
