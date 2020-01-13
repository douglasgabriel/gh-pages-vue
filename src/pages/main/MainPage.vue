<template>
  <div id="main-page" class="row">
      <div class="column">
        <DgLinkCard iconClass="ion-md-heart"
                title="Testing"
                subtitle="I'm testing"
                :backgroundUrl="bg" />
      </div>
      <div class="column">
        <DgLinkCard iconClass="ion-md-heart"
                title="Testing"
                subtitle="I'm testing"
                :backgroundUrl="bg" />
      </div>
  </div>
</template>

<script>
import DgLinkCard from '@/components/dg-link-card/DgLinkCard'
import Bg from '@/assets/images/bg1.jpeg'

export default {
  components: { DgLinkCard },
  computed: {
    bg () { return Bg }
  }
}
</script>

<style lang="scss" scoped>
#main-page {
  height: 100%;
  width: 100%;
}
</style>
