import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import CounterButton from './counter-button.vue'

export default Node.create({
  name: 'counterButtonExtension',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      count: {
        default: 0,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'counter-button',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['vue-component', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return VueNodeViewRenderer(CounterButton)
  },
})