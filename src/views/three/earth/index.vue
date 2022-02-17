<template>
  <div ref="container" id="three-container" class="three-container"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as THREE from 'three'
import {
  CSS2DRenderer,
  CSS2DObject
} from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function init(container: HTMLDivElement) {
  // 地球和月球半径大小
  const EARTH_RADIUS = 5
  const MOON_RADIUS = 0.54

  // 创建场景
  var scene = new THREE.Scene()
  // 设置摄像机
  var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    200
  )

  // 创建WEBGL渲染器
  var renderer = new THREE.WebGLRenderer({ alpha: true })
  // 设置输出canvas画面的大小
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 设置渲染物体阴影
  renderer.shadowMap.enabled = true

  // 标签渲染器
  const labelRenderer = new CSS2DRenderer()
  labelRenderer.setSize(window.innerWidth, window.innerHeight)
  labelRenderer.domElement.style.position = 'absolute'
  labelRenderer.domElement.style.top = '0px'

  // 实例化纹理加载器
  const textureLoader = new THREE.TextureLoader()

  // ************************************************ 添加地球*******************************
  // 创建地球
  const earthGeometry = new THREE.SphereGeometry(EARTH_RADIUS, 16, 16)
  const earthMaterial = new THREE.MeshPhongMaterial({
    shininess: 5,
    map: textureLoader.load('textures/planets/earth_atmos_2048.jpg'),
    specularMap: textureLoader.load('textures/planets/earth_specular_2048.jpg'),
    normalMap: textureLoader.load('textures/planets/earth_normal_2048.jpg'),
    // 法线贴图对材质的影响程度
    normalScale: new THREE.Vector2(1, 1)
  })
  const earth = new THREE.Mesh(earthGeometry, earthMaterial)
  earth.receiveShadow = true
  earth.castShadow = true
  scene.add(earth)
  // 地球标签
  const earthDiv = document.createElement('div')
  earthDiv.className = 'label'
  earthDiv.textContent = '地球🌏'
  const eartchLabel = new CSS2DObject(earthDiv)
  eartchLabel.position.set(0, EARTH_RADIUS + 0.5, 0)
  earth.add(eartchLabel)

  // *********************************************添加月球**********************************************
  const moonGeometry = new THREE.SphereGeometry(MOON_RADIUS, 16, 16)
  const moonMaterial = new THREE.MeshPhongMaterial({
    shininess: 5,
    map: textureLoader.load('textures/planets/moon_1024.jpg')
  })
  const moon = new THREE.Mesh(moonGeometry, moonMaterial)
  moon.receiveShadow = true
  moon.castShadow = true
  moon.position.set(2, 2, 2)
  scene.add(moon)
  // 地球标签
  const moonDiv = document.createElement('div')
  moonDiv.className = 'label'
  moonDiv.textContent = '月球🌙'
  const moonLabel = new CSS2DObject(moonDiv)
  moonLabel.position.set(0, MOON_RADIUS + 0.2, 0)
  moon.add(moonLabel)

  // *************************************************创建聚光灯****************************
  const dirLight = new THREE.SpotLight(0xffffff)
  dirLight.position.set(0, 0, 10)
  dirLight.intensity = 2
  dirLight.castShadow = true
  scene.add(dirLight)

  // 添加环境光
  const aLight = new THREE.AmbientLight(0xffffff)
  aLight.intensity = 0.3
  scene.add(aLight)

  // 设置相机位置
  camera.position.set(10, 2, 20)
  camera.lookAt(scene.position)

  // 将渲染器输出添加html元素中
  container.appendChild(renderer.domElement)
  // 添加标签渲染器
  container.appendChild(labelRenderer.domElement)

  const controls = new OrbitControls(camera, labelRenderer.domElement)
  controls.minDistance = 5
  controls.maxDistance = 100

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    labelRenderer.setSize(window.innerWidth, window.innerHeight)
  })

  // 设置时钟
  const clock = new THREE.Clock()
  // 地球自转轴
  const axis = new THREE.Vector3(0, 1, 0)
  let startTime = 0
  // 注意：使用切图要动态渲染（不断渲染，请求图片是个异步过程）
  function render() {
    // 获取时钟运行秒数
    const sec = clock.getElapsedTime()
    const num = sec - startTime
    earth.rotateOnAxis(axis, num * (Math.PI / 10))
    moon.position.set(Math.sin(sec) * 12, 0, Math.cos(sec) * 12)
    // 地球自转

    renderer.render(scene, camera)
    labelRenderer.render(scene, camera)
    startTime = sec
    requestAnimationFrame(render)
  }
  render()
}

export default defineComponent({
  setup() {
    const container = ref(null)
    onMounted(() => {
      const box = container.value
      if (box) {
        init(box)
      }
    })
    return {
      container
    }
  }
})
</script>
<style lang="less" scoped>
.three-container {
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url('/img/starts.jpg');
  background-size: cover;
  .label {
    color: red;
    font-size: 30px;
    font-weight: bold;
  }
}

canvas {
  background-image: url('/img/starts.jpg');
  background-size: cover;
}
</style>
