<template>
  <form id="newPost" class="card" @submit.prevent="handleSaveBtn">
    <div class="input-group">
      <label for="">Author</label>
      <input type="text" v-model="article.author" />
    </div>
    <div class="input-group">
      <label for="">Blog Title</label>
      <input type="text" v-model="article.title" />
    </div>
    <div class="input-group">
      <label for="">Blog Content</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="article.content"
      ></textarea>
    </div>

    <CtaButton style="margin-top: 33px; width: 100%"> Save</CtaButton>
  </form>
</template>

<script>
export default {
  name: "article-form",
  props: ["edit"],
  emits: ["saved"],
  computed: {
    article() {
      if (this.$props.edit) return Object.assign({}, this.$props.edit);
      else
        return {
          author: null,
          title: null,
          content: null,
        };
    },
  },
  methods: {
    async createArticle() {
      try {
        let { content, author, title } = this.article;
        await fetch("https://servicepad-post-api.herokuapp.com/articles/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ author, title, content }),
        }).then((res) => res.json(0));

        alert("Created a post");
      } catch (error) {
        console.log(error);
        alert("There was an error");
      }
    },
    async updateArticle() {
      try {
        let { content, author, title } = this.article;
        await fetch(
          `https://servicepad-post-api.herokuapp.com/articles/${this.$props.edit.id}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ author, title, content }),
          }
        ).then((res) => res.json(0));

        alert(`Updated '${title}'`);
      } catch (error) {
        console.log(error);
        alert("There was an error");
      }
    },
    async handleSaveBtn() {
      if (this.$props.edit) {
        await this.updateArticle();
      } else {
        await this.createArticle();
      }

      this.$emit("saved");
      this.$root.getLatestArticles();
    },
  },
};
</script>

<style scoped>
.card {
  background: #fff;
  padding: 42px;
  width: 693px;
  border-radius: 8px;
  margin: 72px auto;
}

.input-group {
  margin-bottom: 24px;
}

label {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #2d314e;
}

input,
textarea {
  padding: 10px;
  display: block;
  margin: 5px 0;
  background: #ffffff;
  border: 1px solid #d1d5db;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  width: 100%;
}

textarea {
  resize: vertical;
}

input:focus,
textarea:focus {
  border: 1px solid #84e1a7;
}
</style>
