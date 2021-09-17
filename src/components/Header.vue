<template>
    <header class="flex spacebetween aligncenter">
      <a href="#" class="flex aligncenter logo">
        <img class="" :src="require('@/assets/images/logo.png')" width="44" alt="">
        <h1 class="upper-case">apdrive</h1>
      </a>
      
      <!-- this loupe & Close button are displayed on screens < 768px -->
      <div class="mobile-search-btns" @click="toggleSearchLayer">
        <img :src="require('@/assets/images/loupe_white.png')" alt="" class="loupe">
        <div class="close-btn-container" @click="closeSearch">
          <div class="close-btn">
            <span></span><span></span>
          </div>
        </div>
      </div>
      

      <form action="#" method="get">
        <input type="text" placeholder="Search Drive">
      </form>
      <div class="user-dropdown">
        <div @click="showUserDropdown" class="flex aligncenter user-info">
          <img :src="require('@/assets/images/user16.png')" alt="icon">
          <h3>sopa.97@mail.ru</h3>
          <img :src="require('@/assets/images/down_arrow16.png')" width="10" alt="icon">
        </div>
        <ul class="hidden">
          <!-- this li is didplayed on mobile screen -->
          <li class="mobile-user-email"><h3>sopa.97@mail.ru</h3></li>
          <!-- end mobile li -->

          <li><a href="#">Log out</a></li>
        </ul>
      </div>
    </header>
</template>

<script>
export default {
    methods: {
    showUserDropdown () {
      let userInfoDropdown = document.querySelector('.user-dropdown ul')
      setTimeout(() => {
        userInfoDropdown.classList.remove('hidden')
      }, 0);
      // userInfoDropdown.classList.remove('d-none')
    },
    toggleSearchLayer () {
      let searcLayer = document.querySelector('header form')
      searcLayer.classList.toggle('displayed')

      let loupe = document.querySelector('.loupe')
      loupe.classList.toggle('hidden')

      let closeSearchBtn = document.querySelector('.close-btn-container')
      closeSearchBtn.classList.toggle('displayed')

    }
  }
}
</script>