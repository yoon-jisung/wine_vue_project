<template>
  <div class="container">
    <div class="logo gray">logo</div>
    <div class="progress gray">
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
        <div class="buttonBox">
          <button
            v-if="quizIndex === i && quizTransition"
            :key="`a1-${i}`"
            class="answer-btn button"
            @click="confirmAnswer(q.a[0].target, 1)"
            v-html="q.a[0].text"
          ></button>
          <button
            v-if="quizIndex === i && quizTransition"
            :key="`a2-${i}`"
            class="answer-btn button"
            @click="confirmAnswer(q.a[1].target, 1)"
            v-html="q.a[1].text"
          ></button>
        </div>
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
  height: 50px;
  margin-bottom: 40px;
}
.logo {
  height: 100px;
}
.q-title {
  margin-top: 3em;
  font-size: 1.5rem;
  font-weight: 800;
  font-family: sandoll-gothicneo3;
  height: 200px;
}
.div-slider {
  overflow: hidden;
  position: static;
  max-width: 460px;
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
.buttonBox {
  display: flex;
  flex-direction: column;
}
</style>
