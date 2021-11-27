<template>
  <nav>
    <div class="logo">
      <a href="#home">
        <img src="@/assets/logo-easybank.png" alt="" />
      </a>
    </div>
    <ul class="nav-links">
      <a href="#home">
        <li
          class="nav-link-item"
          :class="activeItem == 'Home' ? 'active' : ''"
          href="#home"
          @click.stop="setActiveItem('Home')"
        >
          Home
        </li>
      </a>
      <a href="#about">
        <li
          class="nav-link-item"
          :class="activeItem == 'About' ? 'active' : ''"
          @click.stop="setActiveItem('About')"
        >
          About
        </li>
      </a>
      <a href="#contact">
        <li
          class="nav-link-item"
          :class="activeItem == 'Contact' ? 'active' : ''"
          @click.stop="setActiveItem('Contact')"
        >
          Contact
        </li>
      </a>
      <a href="#blog">
        <li
          class="nav-link-item"
          :class="activeItem == 'Blog' ? 'active' : ''"
          @click.stop="setActiveItem('Blog')"
        >
          Blog
        </li>
      </a>
      <a href="#careers">
        <li
          class="nav-link-item"
          :class="activeItem == 'Careers' ? 'active' : ''"
          @click.stop="setActiveItem('Careers')"
        >
          Careers
        </li>
      </a>
    </ul>
    <cta-button>Request Invite</cta-button>
  </nav>
</template>

<script>
import CtaButton from "@/components/ui/CtaButton";
export default {
  name: "top-bar",
  data() {
    return { activeItem: "Home" };
  },
  methods: {
    setActiveItem(item) {
      this.activeItem = item;
    },
  },
  components: { CtaButton },
};
</script>

<style scoped>
nav {
  background: #ffffff;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  display: inline-block;
  text-align: center;
  margin-left: 164px;
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
