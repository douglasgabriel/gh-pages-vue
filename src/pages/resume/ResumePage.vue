<template>
  <div id="resume-page" class="default-page-layout">
    <header class="z-depth-1">
      <div class="content">
        <div class="row">
          <section class="left-actions column">
            <a href="/#/">
              <i class="icon ion-md-arrow-back"></i>
            </a>
          </section>
          <section class="column photo-wrapper">
            <div class="photo">
              <div class="me z-depth-5" :style="meImgStyle"></div>
              <section class="social-links">
                <ul>
                  <li>
                    <i class="icon ion-logo-github"></i>
                  </li>
                  <li>
                    <i class="icon ion-logo-linkedin"></i>
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
    </header>

    <main>
      <section class="work-experiences">
        <svg
          class="svg-timeline"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

        <!-- M342 1C242 0.999959 170.497 120.106 166 215C161 320.5 128.5 443 1 447 -->
        <!-- M50 0 L50 400 -->
          <path
            d="M50 0 L50 4000"
            stroke="grey"
            stroke-opacity="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="5 10"
            stroke-width="3"
          />
        </svg>

        <div class="work-experiences">
          <DgWorkExperience
            :duration="$t('page.resume.work.experiences.jaya.duration')"
            :company="$t('page.resume.work.experiences.jaya.name')"
            :role="$t('page.resume.work.experiences.jaya.role')"
            :icon="jayaIcon">
            {{ $t('page.resume.work.experiences.jaya.description') }}
          </DgWorkExperience>

          <DgWorkExperience
            :duration="$t('page.resume.work.experiences.lenovo.duration')"
            :company="$t('page.resume.work.experiences.lenovo.name')"
            :role="$t('page.resume.work.experiences.lenovo.role')"
            :icon="lenovoIcon">
            {{ $t('page.resume.work.experiences.lenovo.description') }}
          </DgWorkExperience>

          <DgWorkExperience
            :duration="$t('page.resume.work.experiences.cartapio.duration')"
            :company="$t('page.resume.work.experiences.cartapio.name')"
            :role="$t('page.resume.work.experiences.cartapio.role')"
            :icon="cartapioIcon">
            {{ $t('page.resume.work.experiences.cartapio.description') }}
          </DgWorkExperience>

          <DgWorkExperience
            :duration="$t('page.resume.work.experiences.stefanini.duration')"
            :company="$t('page.resume.work.experiences.stefanini.name')"
            :role="$t('page.resume.work.experiences.stefanini.role')"
            :icon="stefaniniIcon">
            {{ $t('page.resume.work.experiences.stefanini.description') }}
          </DgWorkExperience>

          <DgWorkExperience
            :duration="$t('page.resume.work.experiences.redenet.duration')"
            :company="$t('page.resume.work.experiences.redenet.name')"
            :role="$t('page.resume.work.experiences.redenet.role')"
            :icon="redenetIcon">
            {{ $t('page.resume.work.experiences.redenet.description') }}
          </DgWorkExperience>
        </div>
      </section>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import meImg from '@/assets/images/me.jpg'
import jayaIcon from '@/assets/images/jaya.png'
import lenovoIcon from '@/assets/images/lenovo.png'
import cartapioIcon from '@/assets/images/cartapio.png'
import stefaniniIcon from '@/assets/images/stefanini.png'
import redenetIcon from '@/assets/images/redenet.svg'
import DgWorkExperience from '@/components/dg-work-experience/DgWorkExperience'

export default {
  components: { DgWorkExperience },
  data: function () {
    return {
      meImg,
      jayaIcon,
      lenovoIcon,
      cartapioIcon,
      stefaniniIcon,
      redenetIcon,
      meImgStyle: { backgroundImage: `url(${meImg})` }
    }
  }
}
</script>

<style scoped lang="scss">
header {
  background: linear-gradient(#3859e1, #4f71f4);
  color: white;
  border-bottom: 5px solid #6aead0;

  a {
    color: white;
  }

  .content {
    padding: 20px;

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
      color: #6aead0;
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
}

main {
  padding: 0 20px;

  .work-experiences {
    margin: 0;
    padding: 0;
    position: relative;
    overflow-y: hidden;

    .svg-timeline {
      position: absolute;
      top: 0;
      height: 4000px;
      -webkit-animation: lineAnimation 5s linear infinite;
      animation: lineAnimation 5s linear infinite;
      z-index: -1;
    }
  }

  @keyframes lineAnimation {
    0% {
      stroke-dashoffset: 55;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
}
</style>
