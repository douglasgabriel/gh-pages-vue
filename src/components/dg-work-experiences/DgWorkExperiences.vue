<template>
  <section class="work-experiences">
    <div class="content">
      <svg
        class="svg-timeline"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
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
</template>

<script>
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
      jayaIcon,
      lenovoIcon,
      cartapioIcon,
      stefaniniIcon,
      redenetIcon
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
