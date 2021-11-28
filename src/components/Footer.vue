<template>
  <footer>
    <div>
      <img src="@/assets/logo-white.png" alt="" />

      <div class="socials">
        <a href="#" class="social-icon">
          <i class="social-facebook"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="social-youtube"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="social-twitter"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="social-pinterest"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="social-instagram"></i>
        </a>
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
export default {
  name: "base-footer",
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

.footer-nav a,
.socials a {
  color: inherit;
  text-decoration: none;
}

.socials {
  margin-top: 56px;
}

.social-icon {
  margin-right: 14px;
  font-size: 20px;
}

.social-icon:hover,
.footer-nav a:hover {
  color: #77bda3;
}
</style>
