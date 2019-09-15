<template>
  <div class="full-wh flex-ccc">
    <!-- header bar -->
    <div class="header full-w flex-rsbc">
      <div class="btn-menu" disabled></div>
      <div class="btn-block ml-auto" disabled></div>
      <div class="btn-list" disabled></div>
    </div>
    <!-- notes -->
    <div class="content full-w full-h">
      <div class="content-header">
        <div class="title">所有筆記</div>
        <div class="description">{{noteDescription}}</div>
      </div>
      <div class="note-list"></div>
    </div>
    <!-- button -->
    <div class="btn-add">New Note</div>
  </div>
</template>

<script>

export default {
  name: 'Notes',
  data() {
    return {
      notes: [],
    };
  },
  computed: {
    noteDescription() {
      return (this.notes.length === 0) ? '這裡目前是空的' : `共有${this.notes.length}個筆記`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.header {
  height: 60px;
  background: $clr-bar;
}
.content {
  background: $clr-bg;
  background-image: url('../assets/bg_day.png');
  background-repeat: no-repeat;
  background-size: cover;
}

// in header
@mixin bar-button {
  width: 45px;
  height: 45px;
  background-repeat: no-repeat;
  background-position: center;
  filter: opacity(50%);
  &:hover {
    filter: opacity(100%);
  }
  &[disabled] {
    filter: opacity(30%);
  }
}
.btn-menu {
  @include bar-button;
  background-image: url('../assets/btn_menu.svg');
  margin-left: 10px;
}
.btn-block {
  @include bar-button;
  background-image: url('../assets/btn_display_block.svg');
}
.btn-list {
  @include bar-button;
  background-image: url('../assets/btn_display_list.svg');
  margin-right: 10px;
}

// in content
.content-header {
  padding: 10%;
  .title {
    color: $clr-sub;
    font-size: $f-size-3;
    letter-spacing: 1.8px;
  }
  .description {
    font-size: $f-size-1;
    letter-spacing: 1.4px;
    margin-top: 5%;
  }
}
.note-list {
}
.btn-add {
  width: 10rem;
  height: 3.25rem;
  position: fixed;
  bottom: 40px;
  border-radius: 5rem;
  line-height: 3.25rem;
  background: $clr-main;
  color: $clr-white;
  box-shadow: 0px 4px 10px #0000001A;
  &:hover {
    background: $clr-sub;
  }
}
</style>
