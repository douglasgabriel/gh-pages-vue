<template>
<div class="badge-list">
  <span v-for="term in termsList()" v-bind:key="term">
    {{ term }}
  </span>
</div>
</template>

<script>
export default {
  props: {
    terms: {
      type: String
    }
  },
  data: function () {
    return {
      termsList: function () {
        return this.terms.split(',')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.badge-list {
  span {
    display: inline-block;
    background-color: #3859e1;
    color: white;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
  }
}
</style>
