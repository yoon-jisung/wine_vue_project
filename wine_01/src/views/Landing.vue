<template>
  <div class="cantainer">
    <section>
      <div class="imgBox"></div>
    </section>
    <div class="titleBox">
      <h1>내 취향 와인 테스트</h1>
      <h2>테스트 부가 설명</h2>
    </div>

    <Button @confirm="startTest">취향 알아보기</Button>
    <Share class="share" />
  </div>
</template>

<script>
import Button from '@/components/Button';
import Share from '@/components/Share';
export default {
  name: 'Landing',
  components: {
    Button,
    Share,
  },
  methods: {
    startTest() {
      this.$router.push({
        name: 'Testing',
      });
    },
  },
};
</script>

<style lang="scss" sceopd>
.cantainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: auto;
  max-width: 420px;
  padding: 2em 1em;
  text-align: center;
  div {
    margin-bottom: 20px;
    width: 100%;
  }
}
.imgBox {
  width: 100%;
  background: var(--skeleton-background_color);
  height: 500px;
  opacity: 0.9;
}
.titleBox {
  width: 100%;
  background: var(--skeleton-background_color);
  height: 300px;
  opacity: 0.8;
}
.share {
  background: var(--skeleton-background_color);
  opacity: 0.8;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
</style>
