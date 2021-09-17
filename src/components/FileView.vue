<template>
  <div class="tree-child">
    <a href="#">{{name}}</a>
  </div>
</template>

<script>
export default {
  name: 'FileView',
  props: {
    name: String
  }
}
</script>

<style scoped lang="scss">
.file{
  color: green;
}
</style>
