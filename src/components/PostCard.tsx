import { Img } from '@/components/Img'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

type PostCardProps = {
  title: string,
  description: string,
  image: string
}

const PostCard = (props: PostCardProps) => {
  const {
    title = 'Title',
    description = 'This is a description',
    image
  } = props
  return (
    <Card className='hover:scale-[1.01] transition-transform ease-in duration-100'>
      <Img src={image} alt={title} className='rounded-t-lg' />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default PostCard
