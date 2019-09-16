<template>
  <CustomQuillEditor
    v-model="content"
    @editor-change="onEditorChange($event)">
  </CustomQuillEditor>
</template>

<script>
// import { quillEditor } from 'vue-quill-editor';
import CustomQuillEditor from '../components/CustomQuillEditor.vue';

export default {
  name: 'test',
  components: {
    CustomQuillEditor,
  },
  data() {
    return {
      content: '',
    };
  },
  methods: {
    onEditorChange(content) {
      this.content = `${content}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
