<template>
  <div class="wrapper">
    <Header />
    <FolderView name="$" :folders="folders" :files="files" />
  </div>
</template>

<script>
import FolderView from './components/FolderView.vue'
import Header from './components/Header.vue'
import data from './data/list';

export default {
  name: 'App',
  components: {
    FolderView,
    Header
  },
  data: () => data
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
