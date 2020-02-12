<template>
  <div class="dg-link-card" :style="backgroundStyle()">
    <a :href="link">
      <div class="content">
        <i :class="'icon ' + iconClass"></i>
        <h3 class="title">{{ title }}</h3>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    backgroundUrl: {
      type: String
    },
    link: {
      type: String
    }
  },
  data: function () {
    return {
      backgroundStyle: function () {
        return { backgroundImage: `url(${this.backgroundUrl})` }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dg-link-card {
  background-size: auto 200%;
  background-position: center;
  background-repeat: no-repeat;

  transition: all 0.5s;
  position: relative;

  a {
    color: white;
    text-decoration: none;
  }

  &,
  & .content {
    width: 100%;
    height: 100%;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #101524;
    opacity: 0.7;

    transition: all 0.5s;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .icon {
      font-size: 50px;
      position: relative;
      width: 80px;
      height: 80px;
      margin: 10px;
      background-color: rgba(255, 255, 255, 0.5);

      display: flex;
      flex-flow: column;
      justify-content: center;
      align-content: center;
      text-align: center;

      border-radius: 50%;

      &:after {
        content: "";
        position: absolute;
        top: 50px;
        bottom: 50px;
        left: 50px;
        right: 50px;
        background-color: white;
        opacity: 0.3;
        border-radius: 50%;

        transition: all 0.2s;
      }
    }

    .title {
      text-transform: uppercase;
    }

    .subtitle {
      opacity: 0;
      transition: all 0.3s;

      font-style: italic;
      margin: 0;
    }
  }
}

.dg-link-card:hover {
  background-size: auto 150%;

  &:before {
    opacity: 0.2;
  }

  .content {
    .icon {
      &:after {
        top: -10px;
        bottom: -10px;
        left: -10px;
        right: -10px;
      }
    }

    .subtitle {
      opacity: 1;
    }
  }
}
</style>
