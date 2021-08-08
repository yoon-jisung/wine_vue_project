<template>
  <div class="container">
    <div class="imgBox gray"></div>

    <ui class="contents"
      >ResultContents
      <li>Contents</li>
      <li>Contents</li>
      <li>Contents</li>
      <li>Contents</li>
    </ui>

    <Share class="share gray" />
    <div class="footer">footer</div>
  </div>
</template>

<script>
import Share from '@/components/Share';
export default {
  name: 'result',
  components: {
    Share,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  background: var(--skeleton-background_color);
}
.contents {
  width: 100%;
  background: var(--skeleton-background_color);
}
</style>
