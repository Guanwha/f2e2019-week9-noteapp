<template>
  <div>EditNote</div>
</template>

<script>

export default {
  name: 'EditNote',
  data() {
    return {
      noteID: this.$route.params.id,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
