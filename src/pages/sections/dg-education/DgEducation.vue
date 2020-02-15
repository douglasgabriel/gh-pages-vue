<template>
  <section class="education-experiences">
    <div class="content">
      <h1 class="section-title">
        {{ $t('page.resume.education.title') }}
      </h1>
      <div class="row">
        <div class="column">
          <div class="education-experience">
            <h3>{{ $t('page.resume.education.ifpb.title') }}</h3>
            <p>{{ $t('page.resume.education.ifpb.degree') }}</p>
            <p>{{ $t('page.resume.education.ifpb.duration') }}</p>
            <ul>
              <li>
                <h4>{{ $t('page.resume.education.ifpb.extra.president') }}</h4>
              </li>
              <li>
                <h4>{{ $t('page.resume.education.ifpb.extra.tutor') }}</h4>
              </li>
              <li>
                <h4>{{ $t('page.resume.education.ifpb.extra.scholarship') }}</h4>
              </li>
            </ul>
          </div>
        </div>
        <div class="column photo">
          <img class="z-depth-5" :src="meEducationImg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import meEducationImg from '@/assets/images/me-education.jpg'

export default {
  data: function () {
    return {
      meEducationImg
    }
  }
}
</script>

<style scoped lang="scss">
.education-experiences {
  min-height: 300px;
  background-color: #E9EBEE;
  position: relative;

  .content {
    padding: 20px 0;

    .photo {
      width: 200px;
      height: 200px;

      img {
        width: 200px;
        height: 200px;
        border-radius: 10px;
      }
    }
  }

  &::before {
    content: '';
    border-top: 50px solid transparent;
    border-right: 100vw solid #E9EBEE;
    position: absolute;
    top: -50px;
    z-index: -1;
  }
}
</style>
