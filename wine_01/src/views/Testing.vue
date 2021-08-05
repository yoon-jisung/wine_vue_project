<template>
  <div class="container">
    <div class="logo">logo</div>
    <div class="progress">
      progress bar
    </div>

    <div class="titleBox">
      <h1>Q {{ quizIndex + 1 }}</h1>
      <h2 class="q-num">{{ quizIndex + 1 }}/{{ maxQuizLength }}</h2>
      <transition-group
        name="slide"
        tag="div"
        class="div-slider"
        v-for="(q, i) in quizList"
        :key="i"
      >
        <h2
          v-if="quizIndex === i && quizTransition"
          :key="`h-${i}`"
          class="q-title"
          v-html="q.q"
        ></h2>
        <!-- <scetion class="buttonSection">
          <Button>a</Button>
          <Button>a</Button>
        </scetion> -->
        <button
          v-if="quizIndex === i && quizTransition"
          :key="`a1-${i}`"
          class="answer-btn"
          @click="confirmAnswer(q.a[0])"
          v-html="q.a[0].text"
        ></button>
        <button
          v-if="quizIndex === i && quizTransition"
          :key="`a2-${i}`"
          class="answer-btn"
          @click="confirmAnswer(q.a[1])"
          v-html="q.a[1].text"
        ></button>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Testing',
  components: {},

  computed: mapState({
    quizTransition: (state) => state.quizTransition,
    quizIndex: (state) => state.quizIndex,
    quizList: (state) => state.quiz,
    maxQuizLength: (state) => state.quiz.length,
    score: (state) => state.score,
  }),
  mounted() {
    console.log();
  },
  created() {
    this.$store.commit('RESET');
  },
  methods: {
    confirmAnswer({ target, score }) {
      this.$store.commit('SET_SCORE', {
        target,
        score,
      });
      this.$store.commit('ADD_INDEX');
      setTimeout(() => {
        this.$store.commit('DONE_TRANSITION');
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
.progress {
  width: 100%;
  height: 50px;
  background: var(--skeleton-background_color);
  margin-bottom: 40px;
}
.logo {
  width: 100%;
  background: var(--skeleton-background_color);
  height: 100px;
}
.buttonSection {
  width: 100%;
}
.q-title {
  margin-top: 3em;
  font-size: 1.8em;
  font-weight: 800;
  font-family: sandoll-gothicneo3;
  height: 200px;
}
.div-slider {
  overflow: hidden;
  position: static;
  width: 100vw;
  max-width: 360px;
}
.slide-leave-active {
  transition: 0.2s;
}
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
