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
          <div class="column">
            <DgPresentationCard />
          </div>
        </div>
      </div>
    </header>

    <main>
      <DgWorkExperiences />

      <DgEducation />
    </main>

    <footer></footer>
  </div>
</template>

<script>
import DgPresentationCard from '@/components/dg-presentation-card/DgPresentationCard'
import DgWorkExperiences from '@/components/dg-work-experiences/DgWorkExperiences'
import DgEducation from '@/components/dg-education/DgEducation'

export default {
  components: { DgPresentationCard, DgWorkExperiences, DgEducation }
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
  }
}
</style>
