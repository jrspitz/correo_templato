<template>
  <editor-menu v-if="editor" :editor="editor" />
  <editor-content :editor="editor" class="editor-div" />
  <div>
    <button @click="onSaveClick">Save</button>
  </div>
</template>
<script lang="ts" setup>
  import { useEditor, EditorContent } from '@tiptap/vue-3'
  import StarterKit from '@tiptap/starter-kit'
  import EditorMenu from './editor-menu.vue'
  import CounterButtonExtension from './counter-button-extension';

  const editor = useEditor({
    content: '<p>Tiptap with vue</p><counter-button count="1"></counter-button><p>component should be above</p>',
    extensions: [
      StarterKit,
      CounterButtonExtension,
    ],
    editorProps: {
      attributes: {
        class: 'styled-prosemirror'
      }
    }
  })

  function onSaveClick() {
    if (!editor.value) {
      console.log("no editor")
    }
    const curEditor = editor.value
    console.log({curEditor})
    // console.log({content: editor.content})
    console.log(curEditor?.getJSON())
    console.log(curEditor?.getHTML())
  }
</script>
<style>
.ProseMirror {
  padding: 10px;
}
</style>
