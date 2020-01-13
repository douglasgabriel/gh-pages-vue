<template>
  <div id="main-page" class="row">
      <div class="column">
        <DgLinkCard iconClass="ion-ios-person"
                :title="$t('page.about.title')"
                :subtitle="$t('page.about.subtitle')"
                :backgroundUrl="meBg" />
      </div>
      <div class="column">
        <DgLinkCard iconClass="ion-ios-paper"
                :title="$t('page.resume.title')"
                :subtitle="$t('page.resume.subtitle')"
                :backgroundUrl="resumeBg" />
      </div>
      <div class="column">
        <DgLinkCard iconClass="ion-ios-briefcase"
                :title="$t('page.portfolio.title')"
                :subtitle="$t('page.portfolio.subtitle')"
                :backgroundUrl="portfolioBg" />
      </div>
      <div class="column">
        <DgLinkCard iconClass="ion-ios-chatbubbles"
                :title="$t('page.blog.title')"
                :subtitle="$t('page.blog.subtitle')"
                :backgroundUrl="blogBg" />
      </div>
  </div>
</template>

<script>
import DgLinkCard from '@/components/dg-link-card/DgLinkCard'
import meBg from '@/assets/images/me-bg.jpg'
import resumeBg from '@/assets/images/resume-bg.jpg'
import portfolioBg from '@/assets/images/portfolio-bg.png'
import blogBg from '@/assets/images/blog-bg.jpg'

export default {
  components: { DgLinkCard },
  data: function () {
    return {
      meBg,
      resumeBg,
      portfolioBg,
      blogBg
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
