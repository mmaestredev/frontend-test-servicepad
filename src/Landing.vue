<template>
  <Hero href="#home" />
  <Articles />
</template>

<script>
import Hero from "@/components/Hero.vue";
import Articles from "@/components/Articles.vue";
export default {
  name: "landing-layout",
  components: { Hero, Articles },
};
</script>

<style></style>
