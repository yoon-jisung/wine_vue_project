<template>
  <div class="container">
    <section>
      <div class="imgBox gray">이미지</div>
    </section>
    <div class="titleBox gray">
      <h1>내 취향 와인 테스트</h1>
      <h2>테스트 부가 설명</h2>
    </div>

    <Button @confirm="startTest">취향 알아보기</Button>
    <Share class="share gray" />
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
.imgBox {
  height: 400px;
}
.titleBox {
  height: 300px;
}
</style>
