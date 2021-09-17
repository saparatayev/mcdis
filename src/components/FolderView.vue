<template>
  <div class="tree-child">
    <img @click="showTree" class="tree-btn" :src="require('@/assets/images/triangle.svg')" alt="">
    <a href="#">{{name}}</a>
  </div>
  <ul class="closed">
    <li v-for="(folder, index) in folders" :key="index">
      <FolderView :name="folder.name" :folders="folder.folders" :files="folder.files"/>
    </li>
    <li v-for="(file, index) in files" :key="index">
      <FileView :name="file.name"/>
    </li>
  </ul>
</template>

<script>
import FileView from "./FileView";
export default {
  name: 'FolderView',
  components: {FileView},
  props: {
    name: String,
    folders:Array,
    files:Array
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
