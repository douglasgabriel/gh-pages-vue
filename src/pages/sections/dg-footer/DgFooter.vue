<template>
<footer>
  <div class="row content">
    <div class="column">
      <h3>Douglas Gabriel</h3>
      <p>Full-Stack Software Engineer</p>
      <DgSocialLinks />
    </div>
  </div>

  <div class="tech-description">
    <span>Made with</span>
    <a href="https://vuejs.org/" target="_blank">VueJS</a>
    <span>and hosted by</span>
    <i class="icon ion-logo-github"></i>
  </div>
</footer>
</template>

<script>
import DgSocialLinks from '@/pages/sections/dg-social-links/DgSocialLinks'

export default {
  components: { DgSocialLinks }
}
</script>

<style scoped lang="scss">
footer {
  background-color: #3859e1;
  position: relative;

  .content {
    max-width: 1000px;
    margin: 0 auto;
    color: white;
  }

  .tech-description {
    font-size: 14px;
    text-align: center;
    color: white;
    padding: 10px;

    a {
      color: white;
      font-weight: bold;
    }
  }

  &::before {
    content: '';
    border-top: 50px solid transparent;
    border-right: 100vw solid #3859e1;
    position: absolute;
    top: -50px;
    z-index: 1;
  }
}
</style>
