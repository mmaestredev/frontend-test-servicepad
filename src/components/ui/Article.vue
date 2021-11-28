<template>
  <div class="article">
    <div class="article-img">
      <img v-if="image" :src="image" alt="" />
    </div>

    <div class="article-body">
      <div class="article-author">
        <small> {{ author }} </small>
      </div>
      <div class="article-title">
        <h4>{{ title }}</h4>
      </div>
      <p class="article-content">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "article-card",
  props: ["image", "author", "title", "content"],
};
</script>

<style scoped>
.article {
  background-color: #fff;
  width: 260px;
  border-radius: 8px;
}

.article-img {
  height: 195px;
  background-color: darkgray;
  border-radius: 8px 8px 0 0;
}

.article-img img {
  border-radius: 8px 8px 0 0;
  width: 100%;
}

.article-body {
  padding: 0 26px 9px 26px;
}

.article-author {
  margin-top: 35px;
  margin-bottom: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: #959499;
}

.article-title h4 {
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
}

.article:hover .article-title {
  color: #77bda3;
}

.article-content {
  margin-top: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #959499;
}
</style>
