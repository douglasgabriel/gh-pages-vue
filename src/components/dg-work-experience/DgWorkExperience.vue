<template>
  <div class="work-experience row">
    <div class="column icon-wrapper">
      <div class="icon z-depth-2" :style="backgroundStyle()"></div>
    </div>
    <div class="column content">
      <h4 class="duration">{{ duration }}</h4>
      <h2 class="company">{{ company }}</h2>
      <h4 class="role">{{ role }}</h4>
      <p class="description"><slot></slot></p>
      <DgBadgeList :terms="technologies" />
    </div>
  </div>
</template>

<script>
import DgBadgeList from '@/components/dg-badge-list/DgBadgeList'

export default {
  components: { DgBadgeList },
  props: {
    duration: {
      type: String
    },
    company: {
      type: String
    },
    role: {
      type: String
    },
    description: {
      type: String
    },
    icon: {
      type: String
    },
    technologies: {
      type: String
    }
  },
  data: function () {
    return {
      backgroundStyle: function () {
        return { backgroundImage: `url(${this.icon})` }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.work-experience {
  padding: 40px 0;

  .icon-wrapper {
    width: 100px;
    margin-right: 100px;

    .icon {
      height: 100px;
      margin: 0 auto;

      background-position: center;
      background-size: cover;
      background-color: white;

      border-radius: 50%;
    }
  }

  .content {
    padding-left: 20px;
    .duration {
      float: right;
    }

    .duration, .role {
      color: grey;
      font-weight: lighter;
      font-style: italic;
    }

    .description {
      text-align: justify;
    }
  }
}

</style>
