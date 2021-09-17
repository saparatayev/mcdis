<template>
  <div class="wrapper" @click="hideUserDropdown">
    <Header />
    <div class="container flex">
      <Sidenav />
      <main>
        <FolderView name="$" :folders="folders" :files="files" />
      </main>
    </div>
  </div>
</template>

<script>
import FolderView from './components/FolderView.vue'
import Header from './components/Header.vue'
import Sidenav from './components/Sidenav.vue'
import data from './data/list';

export default {
  name: 'App',
  components: {
    FolderView,
    Header,
    Sidenav
  },
  data: () => data,
  methods: {
    hideUserDropdown (e) {
      let userInfoDropdown = document.querySelector('.user-dropdown ul')

      if(!userInfoDropdown.classList.contains('hidden')) {
        userInfoDropdown.classList.add('hidden')
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
