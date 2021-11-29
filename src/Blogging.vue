<template>
  <section id="blogging">
    <h1>Add New Blog Article</h1>
    <span>Publish a new blog article to feature in the Easybank homepage.</span>

    <form id="newPost" class="card">
      <div class="input-group">
        <label for="">Author</label>
        <input type="text" />
      </div>
      <div class="input-group">
        <label for="">Blog Title</label>
        <input type="text" />
      </div>
      <div class="input-group">
        <label for="">Blog Content</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <CtaButton style="margin-top: 33px; width: 100%"> Save</CtaButton>
    </form>
  </section>
  <section id="previous-articles">
    <h1>Previous Articles</h1>
    <span
      >Review and edit previous blog posts published on to the homepage.
    </span>

    <table>
      <thead>
        <tr>
          <th>Author Name</th>
          <th>Title</th>
          <th>Content</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ author, title, content, date, id } in pageArticles"
          :key="id"
        >
          <td>{{ author }}</td>
          <td>{{ title }}</td>
          <td>{{ content }}</td>
          <td>{{ new Date(date).toLocaleDateString() }}</td>
          <td><router-link to="#newPost">Edit</router-link></td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <div style="margin-right: auto">Previous</div>
      <ul class="pages">
        <li
          class="page-block"
          v-for="i in dataPages"
          :key="i"
          :class="activePage == i ? 'active' : ''"
          @click="activePage = i"
        >
          {{ i }}
        </li>
      </ul>
      <div style="margin-left: auto">Next</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "bloggin-layout",
  data() {
    return {
      articles: [],
      pageSize: 6,
      activePage: 1,
    };
  },
  created() {
    this.getLatestArticles();
  },
  computed: {
    pageArticles() {
      if (this.articles.length) {
        let start =
          this.activePage == 1
            ? 0
            : this.activePage == 2
            ? this.pageSize
            : this.pageSize * (this.activePage - 1);

        return this.articles.slice(start, start + this.pageSize);
      }
      return [];
    },
    dataPages() {
      return Math.round(this.articles.length / this.pageSize);
    },
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

<style scoped>
section {
  background: #f9f9f9;
  padding: calc(68px + 76px) 164px;
  padding-bottom: 32px;
}
section#previous-articles {
  padding-top: 32px;
}

#blogging h1,
#previous-articles h1 {
  margin-bottom: 20px;
}

section span {
  color: #99989d;
}

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

table {
  margin-top: 56px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  border-collapse: separate;
  border-spacing: 0;
}

table thead {
  border-radius: 8px;
}

table td {
  padding: 12px 24px;
}

table th {
  background: #f9fafb;
  padding: 12px 24px;
  text-transform: uppercase;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #6b7280;
}

table th:first-child {
  border-top-left-radius: 8px;
}
table th:last-child {
  border-top-right-radius: 8px;
}

table tr td {
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #6b7280;
}

table tbody tr td:nth-child(1) {
  color: #2d314e !important;
  font-weight: 500;
}

table tbody tr:nth-child(even) {
  background-color: #f4f5f7;
}

table tbody tr td:nth-child(5) a {
  color: #84e1a7;
  text-decoration: none;
}

.pagination {
  border-top: 1px solid #e5e7eb;
  width: 100%;
  margin-top: 48px;
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;

  display: flex;
  justify-content: center;
}

.pagination div {
  padding: 10px;
  width: auto;
}

.pages {
  display: flex;
  list-style: none;
  justify-content: center;
  width: 300px;
}

.page-block {
  width: 41px;
  padding: 10px;
  cursor: pointer;
  border-top: 2px solid transparent;
  text-align: center;
}

.page-block:hover,
.page-block.active {
  color: #84e1a7;
  border-top: 2px solid #84e1a7;
}
</style>
