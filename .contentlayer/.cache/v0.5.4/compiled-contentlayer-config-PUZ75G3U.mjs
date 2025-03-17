// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var root = process.cwd();
var Step = defineDocumentType(() => ({
  name: "Step",
  filePathPattern: "steps/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    order: { type: "number", required: true },
    key: { type: "string", required: true }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Step]
});
export {
  Step,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PUZ75G3U.mjs.map
