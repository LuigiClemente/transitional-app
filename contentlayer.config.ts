// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import path from 'path'
const root = process.cwd();

export const Step = defineDocumentType(() => ({
  name: 'Step',
  filePathPattern: 'steps/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    order: { type: 'number', required: true },
    key: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Step],
  
  
})