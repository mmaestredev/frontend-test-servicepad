<template>
  <footer>
    <div>
      <img src="@/assets/logo-white.png" alt="" />

      <div class="socials">
        <a href="#" class="social-icon">
          <img src="@/assets/icon-facebook-1.png" alt=""
        /></a>
        <a href="#" class="social-icon">
          <img src="@/assets/icon-youtube-1.png" alt=""
        /></a>
        <a href="#" class="social-icon">
          <img src="@/assets/icon-twitter-1.png" alt=""
        /></a>
        <a href="#" class="social-icon">
          <img src="@/assets/icon-pinterest-2.png" alt=""
        /></a>
        <a href="#" class="social-icon">
          <img src="@/assets/icon-instagram-1.png" alt=""
        /></a>
      </div>
    </div>
    <ul class="footer-nav">
      <li>
        <a href="#">About us</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
    </ul>
    <ul class="footer-nav">
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <a href="#">Support</a>
      </li>
      <li>
        <a href="#">Privacy Policy</a>
      </li>
    </ul>
    <div style="text-align: center">
      <CtaButton> Request Invite</CtaButton>
      <div style="margin-top: 28px">&copy; Easybank. All Rights Reserved</div>
    </div>
  </footer>
</template>

<script>
import CtaButton from "@/components/ui/CtaButton";
export default {
  name: "footer",
  components: { CtaButton },
};
</script>

<style scoped>
footer {
  background: #2d314e;
  color: white;
  padding: 48px 164px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.footer-nav {
  list-style-type: none;
}

.footer-nav li {
  padding: 8px;
}

.footer-nav a {
  color: inherit;
  text-decoration: none;
}

.socials {
  margin-top: 56px;
}

.social-icon {
  width: 20px;
  height: 20px;
  margin-right: 14px;
}
</style>
