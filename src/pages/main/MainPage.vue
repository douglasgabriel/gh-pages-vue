<template>
  <div id="main-page" class="row">
      <div class="column">
        <DgLinkCard iconClass="ion-ios-paper"
                :title="$t('page.resume.title')"
                :subtitle="$t('page.resume.subtitle')"
                :backgroundUrl="resumeBg"
                link="#/resume" />
      </div>
      <div class="column">
        <DgLinkCard iconClass="ion-ios-briefcase"
                :title="$t('page.portfolio.title')"
                :subtitle="$t('page.portfolio.subtitle')"
                :backgroundUrl="portfolioBg"
                link="#/portfolio" />
      </div>
  </div>
</template>

<script>
import DgLinkCard from '@/components/dg-link-card/DgLinkCard'
import resumeBg from '@/assets/images/resume-bg.jpg'
import portfolioBg from '@/assets/images/portfolio-bg.png'

export default {
  components: { DgLinkCard },
  data: function () {
    return {
      resumeBg,
      portfolioBg
    }
  }
}
</script>

<style lang="scss" scoped>
#main-page {
  height: 100%;
  width: 100%;
}
</style>
