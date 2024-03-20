import { getImage } from '@/lib/img'
import Image, { ImageProps } from 'next/image'

const Img = async (props: ImageProps) => {
  const { src, alt, fill, ...rest } = props
  const { base64, height, width } = await getImage(src as string)
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder='blur'
      blurDataURL={base64}
      {...rest}
    />
  )
}

export default Img
