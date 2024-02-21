import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypeShiki from '@shikijs/rehype'
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationFocus,
} from '@shikijs/transformers'
import '@/styles/mdx.scss'

interface MDXProps {
  source: string
}

const MDX = (props: MDXProps) => {
  const { source } = props
  return (
    <MDXRemote
      source={source}
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
    ></MDXRemote>
  )
}

export default MDX
