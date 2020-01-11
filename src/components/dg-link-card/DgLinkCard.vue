<template>
  <p>
    {{ $t('hello') }}
  </p>
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
    }
  }
}
</script>

<style  lang="scss" scoped>
</style>
