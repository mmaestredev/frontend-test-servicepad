<template>
  <TopBar />
  <router-view> </router-view>
  <Articles :articles="articles.slice(-4)" :nocta="$route.name == 'blogging'" />
  <Footer />
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import Articles from "@/components/Articles.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { TopBar, Footer, Articles },
  data() {
    return { articles: [] };
  },
  created() {
    this.getLatestArticles();
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
};
</script>

<style>
* {
  vertical-align: baseline;
  border: 0 none;
  outline: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Public Sans", sans-serif;
}

body {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: #2d314e;
  background: rgba(0, 0, 0, 0.8);
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 8px;
}

.container {
  max-width: 100vw;
  overflow-x: hidden;
}

.btn {
  cursor: pointer;
  display: inline-block;
  padding: 19px 29px;
  border-radius: 89px;
  line-height: 7px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.17em;
}
h4 {
  font-size: 1em;
}
h5 {
  font-size: 0.83em;
}
h6 {
  font-size: 0.67em;
}
</style>
