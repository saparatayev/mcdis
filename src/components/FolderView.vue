<template>
  <div v-if="layout === 'sidenav'">
    <div class="tree-child">
      <img @click="showTree" class="tree-btn" :src="require('@/assets/images/triangle.svg')" alt="">
      <a href="#" @click="reverseMessage">{{name}}</a>
    </div>
    <ul class="closed">
      <li v-for="(folder, index) in folders" :key="index">
        <FolderView :name="folder.name" :folders="folder.folders" :files="folder.files" :layout="'sidenav'" />
      </li>
      <li v-for="(file, index) in files" :key="index">
        <FileView :name="file.name"/>
      </li>
    </ul>
  </div>

  
  <div v-if="layout === 'main'" class="root-block">

    <div class="header">Верхний блок</div>

    <div class="h100 news flex flex-wrap">

      <div v-for="(folder, index) in folders" :key="index" class="news-item">
        <a href="#" class="card">
          <div class="card-body">
            <img :src="require('@/assets/images/folder64.png')" alt="" class="d-block">
            <div class="resource-name flex aligncenter">
              <img :src="require('@/assets/images/folder16.png')" alt="">
              <h5>{{folder.name}}</h5>
            </div>
          </div>
        </a>
      </div>
      <div v-for="(file, index) in files" :key="index" class="news-item">
        <a href="#" class="card">
          <div class="card-body">
            <img :src="require('@/assets/images/file64.png')" alt="" class="d-block element-3">
            <div class="resource-name flex aligncenter">
              <img :src="require('@/assets/images/file16.png')" alt="">
              <h5>{{file.name}}</h5>
            </div>
          </div>
        </a>
      </div>
      <!-- a lot of resources for testing overflow -->
      <div v-for="(file, index) in files" :key="index" class="news-item">
        <a href="#" class="card">
          <div class="card-body">
            <img :src="require('@/assets/images/file64.png')" alt="" class="d-block element-3">
            <div class="resource-name flex aligncenter">
              <img :src="require('@/assets/images/file16.png')" alt="">
              <h5>{{file.name}}</h5>
            </div>
          </div>
        </a>
      </div>
      <div v-for="(file, index) in files" :key="index" class="news-item">
        <a href="#" class="card">
          <div class="card-body">
            <img :src="require('@/assets/images/file64.png')" alt="" class="d-block element-3">
            <div class="resource-name flex aligncenter">
              <img :src="require('@/assets/images/file16.png')" alt="">
              <h5>{{file.name}}</h5>
            </div>
          </div>
        </a>
      </div>
      <div v-for="(file, index) in files" :key="index" class="news-item">
        <a href="#" class="card">
          <div class="card-body">
            <img :src="require('@/assets/images/file64.png')" alt="" class="d-block element-3">
            <div class="resource-name flex aligncenter">
              <img :src="require('@/assets/images/file16.png')" alt="">
              <h5>{{file.name}}</h5>
            </div>
          </div>
        </a>
      </div>
      <!--  -->
    </div>

    <div class="footer">Bottom блок</div>
  </div>
  

</template>

<script>
import FileView from "./FileView";
export default {
  name: 'FolderView',
  components: {FileView},
  props: {
    name: String,
    folders:Array,
    files:Array,
    layout: String
  },
  methods: {
    showTree (e) {
      let elem = e.target.parentNode.nextSibling
      if(elem) {
        if(elem.tagName === 'UL' && elem.classList.contains("closed")) {
          
          elem.classList.remove('closed')
          e.target.classList.add('active')

        } else if(elem.tagName === 'UL' && !elem.classList.contains("closed")) {
          elem.classList.add('closed')
          e.target.classList.remove('active')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.folder{
  color: orangered;
}
</style>
