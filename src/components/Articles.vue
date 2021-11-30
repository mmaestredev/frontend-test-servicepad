<template>
  <section style="background: #fafafa; padding: 80px 164px">
    <div class="articles-header">
      <h1 style="width: fit-content; display: inline-block">Latest articles</h1>
      <CtaButton v-if="!nocta" style="float: right"
        >&plus; Add New Article</CtaButton
      >
    </div>
    <div class="articles-list">
      <Article
        v-for="article in articles"
        :key="article.id"
        :image="article.image_url"
        :title="article.title"
        :author="article.author"
        :content="article.content"
      />
    </div>
  </section>
</template>

<script>
import Article from "@/components/ui/Article";

export default {
  name: "articles-section",
  props: {
    articles: {
      type: Object,
    },
    nocta: {
      type: Boolean,
      default: false,
    },
  },
  components: { Article },
};
</script>

<style scoped>
.articles-list {
  margin-top: 38px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, 1fr);
}
</style>
