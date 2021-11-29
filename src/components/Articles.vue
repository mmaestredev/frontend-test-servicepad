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
        v-for="article in articles.slice(-4)"
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
    nocta: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      articles: [
        {
          author: "Yo mismo",
          content: "contenido interesante",
          date: "2021-11-25T15:06:01.297620",
          id: 1,
          image_url: "https://picsum.photos/533/400?random=2",
          title: "El titulo",
        },
        {
          author: "Yo mismo",
          content: "contenido interesante",
          date: "2021-11-25T15:13:41.162381",
          id: 2,
          image_url: "https://picsum.photos/533/400?random=2",
          title: "El titulo",
        },
      ],
    };
  },
  methods: {
    async getLatestArticles() {
      try {
        let { data } = await fetch(
          "https://servicepad-post-api.herokuapp.com/articles/",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        ).then((res) => res.json());

        this.articles = data ? data : [];
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getLatestArticles();
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
