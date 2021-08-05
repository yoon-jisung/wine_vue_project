<template>
  <div class="container">
    <section>
      <div class="imgBox"></div>
    </section>

    <div>
      ResultContentBox
      <ui class="contents"
        >ResultContents
        <li>Contents</li>
        <li>Contents</li>
        <li>Contents</li>
        <li>Contents</li>
      </ui>
    </div>

    <div class="share">shareBox</div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
export default {
  name: 'result',
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
