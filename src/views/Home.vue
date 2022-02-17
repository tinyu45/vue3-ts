/* eslint-disable vue/no-deprecated-slot-attribute */
<template>
  <div class="home">
    <div class="head">
      <img alt="Vue logo" src="../assets/logo.png">
      <img alt="ts logo" src="../assets/ts.jpg">
      <img alt="ant logo" src="../assets/ant.jpg">
    </div>
    <div class="list-pack">
        <a-list item-layout="horizontal" :data-source="routelist">
          <template  v-slot:renderItem="{item}">
            <router-link :to="item.path">
              <a-list-item>
                  <a-list-item-meta :description="item.meta.desc">
                    <template #title>
                      <a href="https://www.antdv.com/">{{ item.meta.title }}</a>
                    </template>
                    <template #avatar>
                      <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                    </template>
                  </a-list-item-meta>
              </a-list-item>
            </router-link>
          </template>
        </a-list>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'
interface listItem{
  title:string
  desc:string
  avatar:string
}

export default defineComponent({
  name: 'Home',
  components: {

  },

  data () {
    return {
      data1: []
    }
  },

  computed: {
    routelist ():Array<RouteRecordRaw> {
      return this.$router.options.routes || []
    },
    name () {
      return 'adad'
    }
  },

  setup () {
    const data2 = ref<listItem[]>([{
      title: '标题一',
      desc: '描述01',
      avatar: require('../assets/logo.png')
    },
    {
      title: '标题一',
      desc: '描述02',
      avatar: '../assets/logo.png'
    },
    {
      title: '标题一',
      desc: '描述02',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
      title: '标题一',
      desc: '描述01',
      avatar: require('../assets/logo.png')
    },
    {
      title: '标题一',
      desc: '描述02',
      avatar: '../assets/logo.png'
    },
    {
      title: '标题一',
      desc: '描述02',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }, {
      title: '标题一',
      desc: '描述01',
      avatar: require('../assets/logo.png')
    },
    {
      title: '标题一',
      desc: '描述02',
      avatar: '../assets/logo.png'
    },
    {
      title: '标题一',
      desc: '描述02',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }])
    return { listData: data2 }
  },

  methods: {

  },

  mounted () {
    // this.listData.pop()
    console.log()
  }
})

</script>
<style lang="less" scoped>
  .home{
    img{
      width:100px;
      height:100px;
      margin:20px 30px;
      border-radius: 10px;
    }
    .list-pack{
      text-align: left;
      // margin-top:30px;
      padding: 0 30px;
      height: calc(100vh - 180px);
      overflow-y: scroll;
      overflow-x:hidden;

       &::-webkit-scrollbar {
        width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(144, 147, 153, 0.5);
      }
      &::-webkit-scrollbar-track {
        // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        background: transparent;
      }
    }

    .head{
      text-align: center;
      padding-bottom: 30px;
      background: #0F2027;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      // border-bottom: 3px solid #2C5364;
      box-shadow: 0px 5px 8px #ccc;
    }
  }
</style>
