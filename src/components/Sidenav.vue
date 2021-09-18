<template>
  <div class="side-nav">
    <div class="btns flex spacebetween flex-wrap">
        <button class="flex aligncenter justify-center">
            <img :src="require('@/assets/images/upload_cloud.svg')" width="24" alt="">
            <span>Upload</span>
        </button>
        <button class="flex aligncenter justify-center">
            <img :src="require('@/assets/images/folder_plus.svg')" width="24" alt="">
        </button>
    </div>
    <nav>
        <ul>
            <li class="flex column tree">
                <div class="flex tree-root">
                    <img @click="showTree" class="tree-btn" :src="require('@/assets/images/triangle.svg')" alt="">
                    <a href="#">
                        <img :src="require('@/assets/images/drive.svg')" alt="">
                        <h4>My Drive</h4>
                    </a>
                </div>

                <ul class="closed">
                    <li>
                        <FolderView name="$" :folders="folders" :files="files" :layout="'sidenav'" />
                    </li>
                </ul>
                
            </li>
            <li>
                <a href="#">
                    <img :src="require('@/assets/images/users.svg')" alt="">
                    <h4>Shared with me</h4>
                </a>
            </li>
            <li>
                <a href="#">
                    <img :src="require('@/assets/images/clock.svg')" alt="">
                    <h4>Recent</h4>
                </a>
            </li>
            <li>
                <a href="#">
                    <img :src="require('@/assets/images/star.svg')" alt="">
                    <h4>Starred</h4>
                </a>
            </li>
            <li>
                <a href="#">
                    <img :src="require('@/assets/images/trash.svg')" alt="">
                    <h4>Trash</h4>
                </a>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script>
import FolderView from './FolderView.vue'
import data from '../data/list';

export default {
    components: {
        FolderView
    },
    data: () => data,
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

<style>

</style>