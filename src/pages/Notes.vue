<template>
  <div class="full-wh flex-ccc">
    <!-- header bar -->
    <div class="header full-w flex-rsbc">
      <div class="btn-menu" disabled></div>
      <div class="btn-block ml-auto" @click="showBySquare"></div>
      <div class="btn-list" @click="showByList"></div>
    </div>
    <!-- notes -->
    <div class="content full-wh flex-ctc">
      <div class="content-header">
        <div class="title">所有筆記</div>
        <div class="description">{{noteDescription}}</div>
      </div>
      <div class="notes">
        <div class="note-item flex-ctl"
             :class="[(isShowSquare) ? 'square' : 'list']"
             v-for='(note, key) in notes'
             :key= key
             @click='openNote(key)'
        >
          <div class="note-title" :class="[(isShowSquare) ? 'square' : 'list']">{{note.title}}</div>
          <div :class="['star', {'disabled': !note.star}]" @click='switchStar(key)'/>
          <div class="note-article" :class="[(isShowSquare) ? 'square' : 'list']">{{note.article}}</div>
        </div>
      </div>
    </div>
    <!-- button -->
    <div class="btn-add" @click='newNote'>New Note</div>
  </div>
</template>

<script>
import { notesDisplayMode } from '../common/constants';

export default {
  name: 'Notes',
  data() {
    return {
      displayMode: notesDisplayMode.SQUARE,
      notes: {
        11111: {
          title: '靈感隨手記',
          // eslint-disable-next-line
          article: '靈感總是說來就來，所以就隨手記一下～ ．草當主題 ．花當主題 ．天空主題 前幾天跟Amy聊到的那種也不錯！ 參考網址：http://www.ideaideaidea.com 還有上週去聽講座的做法也很好～可試試 水彩風格也可以try',
          star: true,
        },
        11112: {
          title: '英文假字(10)...',
          // eslint-disable-next-line
          article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D',
          star: true,
        },
        11113: {
          title: '英文假字(10)...',
          // eslint-disable-next-line
          article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D',
          star: false,
        },
        11114: {
          title: '英文假字(10)...',
          // eslint-disable-next-line
          article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D',
          star: false,
        },
        11115: {
          title: '英文假字(10)...',
          // eslint-disable-next-line
          article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D',
          star: false,
        },
        11116: {
          title: '英文假字(10)...',
          // eslint-disable-next-line
          article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D',
          star: false,
        },
        11117: {
          title: '這是什麼鬼東西？',
          // eslint-disable-next-line
          article: '我總一見，這次，活動看起然後才會多了為我英雄，本就背後莫名的兒覺得我已一口。的開噢噢。圓的出來可以樣是。裡去中之很難真的千秋，當初的會在水，出場放了過程謝你。原來上次因為捧著那時只有在水。回家到我是早。明天什麼動畫所以想說。不是我一好久向著，是覺第十時候笑容好可。出來打了是不從前還沒：還看一隻跑到。久的過去我不今日沒吃練習。沉重活擊別的失去⋯起來現在這回的聲，知道別人先生，成這研究怎麼跑出。我的什麼十幾道理員的交給，子和早上他又。一次這些前的星期，即使只是要去有人⋯我放的節先前？',
          star: true,
        },
      },
    };
  },
  methods: {
    showBySquare() {
      this.displayMode = notesDisplayMode.SQUARE;
    },
    showByList() {
      this.displayMode = notesDisplayMode.LIST;
    },
    switchStar(key) {
      this.notes[key].star = !this.notes[key].star;
    },
    openNote(key) {
      // this.$router.push({ name: 'note', params: { id: key, isNew: false } });
      alert(`coming soon...\n\nopen the note ${this.notes[key].title}`);
    },
    newNote() {
      // const key = new Date().getTime();
      // this.$router.push({ name: 'editnote', params: { id: key, isNew: true } });
      alert('coming soon...\n\ncreate a new note');
    },
  },
  computed: {
    noteDescription() {
      const keys = Object.keys(this.notes);
      return (keys.length === 0) ? '這裡目前是空的' : `共有${keys.length}個筆記`;
    },
    isShowSquare() {
      return (this.displayMode === notesDisplayMode.SQUARE);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/mixins';
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
  overflow-y: auto;
  padding-right: 1rem;
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
.notes {
  @include px(0.5rem);
}
$square-w: 10rem;
$square-padding: 1rem;
$list-w: 100%;
$list-h: 7rem;
$list-padding: 1rem;
$star-w: 1rem;
.note-item {
  display: float;
  float: left;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 10px #0000001A;
  @include mx(0.5rem);
  @include my(0.5rem);
  @include px($square-padding);
  @include py($square-padding);
  position: relative;
  text-align: justify;
  background: $clr-white;
  &.square {
    width: $square-w;
    height: $square-w;
  }
  &.list {
    width: $list-w;
    height: $list-h;
  }
  .note-title {
    margin-bottom: 0.5rem;
    color: $clr-font-title;
    font-size: $f-size-2;
    line-height: 1.5;
    overflow: hidden;
    white-space: nowrap;
    &.square {
      max-width: $square-w - $square-padding*2 - 2rem;
    }
    &.list {
      max-width: calc(#{$list-w} - #{$list-padding}*2 - 2rem);
    }
  }
  .note-article {
    overflow: hidden;
    color: $clr-font-content;
    font-size: $f-size-1;
    line-height: 1.5;
    &.square {
      width: $square-w - $square-padding*2;
      height: $square-w - $square-padding*2;
    }
    &.list {
      width: calc(#{$list-w} - #{$list-padding}*2);
      height: calc(#{$list-w} - #{$list-padding}*2);
    }
  }
}
.star {
  width: 16px;
  height: 16px;
  background-image: url('../assets/btn_star.svg');
  background-size: cover;
  position: absolute;
  right: $square-padding;
  top: $square-padding + $f-size-2 * 0.125;
  &.disabled {
    background-image: url('../assets/btn_star_uncheck.svg');
  }
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

// Customize scroll bar
@include custom-scrollbar($clr-main, $clr-sub);
</style>
