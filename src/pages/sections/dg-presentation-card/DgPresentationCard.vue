<template>
  <div class="presentation-card">
    <div class="row">
      <section class="column photo-wrapper">
        <div class="photo">
          <div class="me z-depth-5" :style="meImgStyle"></div>
          <DgSocialLinks />
        </div>
      </section>
      <section class="column content-wrapper">
        <h1>{{ $t('page.resume.inside.title') }}</h1>
        <p class="subtitle">{{ $t('page.resume.inside.subtitle') }}</p>
        <p class="description">{{ $t('page.resume.inside.description') }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import meImg from '@/assets/images/me.jpg'
import DgSocialLinks from '@/pages/sections/dg-social-links/DgSocialLinks'

export default {
  components: { DgSocialLinks },
  data: function () {
    return {
      meImg,
      meImgStyle: { backgroundImage: `url(${meImg})` }
    }
  }
}
</script>

<style scoped lang="scss">
.presentation-card {
  .photo-wrapper {
    width: 290px;

    .photo {
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;

      .me {
        width: 200px;
        height: 200px;

        background-position: center;
        background-position-x: -65px;
        background-size: cover;

        border-radius: 10px;
      }
    }
  }

  .content-wrapper {
    .subtitle {
      font-style: italic;
      color: #6aead0;
    }
  }

  h1 {
    color: #6aead0;
    font-size: 50px;
    display: inline;
  }
}
</style>
