import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypeShiki from '@shikijs/rehype'
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationFocus
} from '@shikijs/transformers'
import '@/styles/mdx.scss'
import Img from '@/components/Img'
import { ubuntu_mono } from '@/app/font'
import { cn } from '@/lib/utils'

interface MDXProps {
  source: string
}

const MDX = (props: MDXProps) => {
  const { source } = props
  return (
    <MDXRemote
      source={source}
      components={{
        img: (props) => (
          <Img
            src={props.src ?? '/images/placeholder.jpg'}
            alt={props.alt ?? 'Image'}
          />
        ),
        pre: (props) => (
          <pre {...props} className={cn(ubuntu_mono.className, props.className)}>
            {props.children}
          </pre>
        )
      }}
      options={{
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [
            rehypeSlug,
            [
              // @ts-expect-error
              rehypeShiki,
              {
                theme: 'one-dark-pro',
                transformers: [
                  transformerNotationDiff(),
                  transformerNotationHighlight(),
                  transformerNotationFocus()
                ]
              }
            ]
          ]
        }
      }}
    />
  )
}

export default MDX
