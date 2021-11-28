<template>
  <section id="home" class="hero">
    <div id="hero-main">
      <div class="hero-content">
        <h1 class="hero-title">
          Next generation <br />
          digital banking
        </h1>
        <p style="margin-top: 30px; margin-bottom: 56px">
          Take your financial life online. Your Easybank account <br />
          will be a one-stop-shop for spending, saving, <br />
          budgeting, investing, and much more.
        </p>
        <CtaButton> Request Invite</CtaButton>
      </div>

      <div class="hero-image">
        <img src="@/assets/image-mockups-1.png" alt="" />
      </div>
    </div>

    <div id="about" class="hero-secondary">
      <div class="hero-content">
        <h1 class="hero-title">Why choose Easybank?</h1>
        <p style="margin-top: 20px">
          We leverage Open Banking to turn your bank acount into your financial
          hub.
          <br />
          Control your finances like never before.
        </p>
      </div>

      <div class="hero-features">
        <div class="hero-feature">
          <div class="hero-feature-icon">
            <img src="@/assets/feature-1.png" alt="" />
          </div>
          <div class="feature-title">
            <h3>Online Banking</h3>
          </div>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div class="hero-feature">
          <div class="hero-feature-icon">
            <img src="@/assets/feature-2.png" alt="" />
          </div>
          <div class="feature-title">
            <h3>Simple Budgeting</h3>
          </div>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div class="hero-feature">
          <div class="hero-feature-icon">
            <img src="@/assets/feature-3.png" alt="" />
          </div>
          <div class="feature-title">
            <h3>Fast Onboarding</h3>
          </div>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div class="hero-feature">
          <div class="hero-feature-icon">
            <img src="@/assets/feature-4.png" alt="" />
          </div>
          <div class="feature-title">
            <h3>Open API</h3>
          </div>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "hero-section",
};
</script>

<style scoped>
.hero {
  padding-top: 76px;
}

#hero-main {
  background-color: #fafafa;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: url("../assets/bg-intro-desktop-1.png");
  background-repeat: no-repeat;
  background-position-x: right;
}

.hero-secondary {
  background-color: #f4f5f7;
}

.hero-content {
  padding: 177px 0 165px 164px;
}

.hero-title {
  font-style: normal;
  font-weight: normal;
  font-size: 53px;
  line-height: 62px;
}

#hero-secondary .hero-title {
  font-size: 40px;
  margin-top: -67px;
}

#hero-secondary .hero-content {
  padding: 177px 0 74px 164px;
}

.hero-image {
  position: absolute;
  right: 0;
}

.hero-features {
  padding: 0px 156px;
  padding-bottom: 91px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
}

.hero-feature {
  padding: 8px 15px 10px 8px;
}

.hero-feature p {
  font-size: 16px;
  line-height: 26px;
  color: #959499;
}

.hero-feature-icon {
  width: 72px;
  padding: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #33d35e 0%, #2ab6d9 99.58%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature-title {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>
