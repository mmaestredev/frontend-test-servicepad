<template>
  <button class="btn cta-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "cta-button",
  emits: ["click"],
};
</script>

<style scoped>
.cta-btn {
  color: white;
  font-weight: bold;
  background: linear-gradient(90deg, #31cf70 4.85%, #2cb9cb 100%);
}

.cta-btn:hover {
  background: linear-gradient(90deg, #84e1a7 4.85%, #81d6db 100%);
}
</style>
