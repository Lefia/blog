import { getImage } from '@/lib/img'
import Image from 'next/image'

type ImgProps = {
  src: string,
  alt: string,
  className?: string
}

const Img = async (props: ImgProps) => {
  const { src, alt, className } = props
  const { base64, height, width } = await getImage(src)
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      placeholder='blur'
      blurDataURL={base64}
      className={className}
    />
  )
}

export default Img
