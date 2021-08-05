<template>
  <button class="button" @click="$emit('confirm')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button',
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
}
</style>
