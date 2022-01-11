import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

createApp(App).use(store).use(router).use(Antd).use(dataV).mount('#app')
