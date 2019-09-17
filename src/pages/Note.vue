<template>
  <div>Note</div>
</template>

<script>

export default {
  name: 'Note',
  data() {
    return {
      noteID: this.$route.params.id,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
