<template>
  <editor-menu v-if="editor" :editor="editor" />
  <editor-content :editor="editor" class="editor-div" />
</template>
<style scoped>
.ProseMirror {
  padding: 10px;
}
</style>
<script lang="ts" setup>
  import { useEditor, EditorContent } from '@tiptap/vue-3'
  import StarterKit from '@tiptap/starter-kit'
  import EditorMenu from './editor-menu.vue'

  const editor = useEditor({
    content: '<p>Tiptap with vue</p>',
    extensions: [
      StarterKit,
    ],
  })
</script>
