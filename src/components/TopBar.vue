<template>
  <nav>
    <div class="logo">
      <router-link to="/#home">
        <img src="@/assets/logo-dark.png" alt="" />
      </router-link>
    </div>
    <ul class="nav-links">
      <router-link
        to="/#home"
        tag="li"
        class="nav-link-item"
        :class="activeItem == 'home' ? 'active' : ''"
        @click="setActiveItem('home')"
        >Home</router-link
      >
      <router-link
        to="/#about"
        tag="li"
        class="nav-link-item"
        :class="activeItem == 'about' ? 'active' : ''"
        @click="setActiveItem('about')"
        >About</router-link
      >
      <router-link
        to="/#contact"
        tag="li"
        class="nav-link-item"
        :class="activeItem == 'contact' ? 'active' : ''"
        @click="setActiveItem('contact')"
        >Contact</router-link
      >
      <router-link
        to="blog"
        tag="li"
        class="nav-link-item"
        :class="activeItem == 'blog' ? 'active' : ''"
        @click="setActiveItem('blog')"
        >Blog</router-link
      >
      <router-link
        to="/#careers"
        tag="li"
        class="nav-link-item"
        :class="activeItem == 'careers' ? 'active' : ''"
        @click="setActiveItem('careers')"
        >Careers</router-link
      >
    </ul>
    <CtaButton>Request Invite</CtaButton>
  </nav>
</template>

<script>
export default {
  name: "top-bar",
  data() {
    return {
      activeItem: "",
    };
  },
  methods: {
    setActiveItem(item) {
      this.activeItem = item;
    },
  },
  watch: {
    $route({ hash, name }) {
      if (hash) this.setActiveItem(hash.replace("#", ""));
      else if (name == "root") {
        this.setActiveItem("home");
      } else if (name == "blogging") {
        this.setActiveItem("blog");
      }
    },
  },
};
</script>

<style scoped>
nav {
  background: #ffffff;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 164px;
  padding-right: 164px;
  position: fixed;
  z-index: 1;
}

.logo {
  display: inline-block;
  text-align: center;
}

.nav-links {
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
}

.nav-link-item {
  height: 76px;
  padding: 5px 15px;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  color: #99989d;
  cursor: pointer;
}

.nav-link-item.active {
  color: #2d314d;
  font-weight: bold;
  border-bottom: 4px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, #36cb6d 0%, #29b8c8 100%);
}

a {
  text-decoration: none;
}
</style>
