<template>
  <div id="about-page" class="default-page-layout">
    <header>
      <div class="content row">
        <section class="left-actions column">
          <a href="/#/">
            <i class="icon ion-ios-arrow-back"></i>
          </a>
        </section>
        <section class="content column">
          <div class="row">
            <div class="column">
              <h1>{{ $t('page.about.inside.greeting') }}</h1>
              <p>{{ $t('page.about.inside.introduction') }}</p>
            </div>
            <div class="column me z-depth-5" :style="meImg"></div>
          </div>
        </section>
      </div>
    </header>

    <main></main>

    <footer></footer>
  </div>
</template>

<script>
import meImg from '@/assets/images/me.jpg'

export default {
  data: function () {
    return {
      meImg: { backgroundImage: `url(${meImg})` }
    }
  }
}
</script>

<style scoped lang="scss">
header {
  background: linear-gradient(#1f639a, #183f5f);
  color: white;

  a {
    color: white;
  }

  .content {
    padding: 20px;

    h1 {
      color: #3caea2;
    }

    .me {
      width: 150px;
      height: 150px;

      background-position: center;
      background-position-x: -65px;
      background-size: cover;

      border-radius: 50%;
    }
  }
}
</style>
