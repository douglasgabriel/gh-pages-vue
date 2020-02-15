<template>
  <div class="presentation-card">
    <div class="row">
      <section class="column photo-wrapper">
        <div class="photo">
          <div class="me z-depth-5" :style="meImgStyle"></div>
          <section class="social-links">
            <ul>
              <li>
                <a href="https://github.com/douglasgabriel" target="blank">
                  <i class="icon ion-logo-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/douglasggabriel/" target="blank">
                  <i class="icon ion-logo-linkedin"></i>
                </a>
              </li>
            </ul>
          </section>
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

export default {
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

  .social-links {
    a {
      color: #6aead0;
    }
    ul {
      padding: 0;

      li {
        font-size: 30px;
        list-style: none;
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
}
</style>
