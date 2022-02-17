<template>
  <div ref="container" id="three-container" class="three-container"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, unref, onBeforeUnmount } from "vue";
import * as THREE from "three";

function init(container: HTMLDivElement) {
  // 创建场景
  var scene = new THREE.Scene();
  // 设置摄像机
  var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  );
  // 创建渲染器
  var renderer = new THREE.WebGLRenderer();
  // 设置渲染器的初始颜色
  renderer.setClearColor(new THREE.Color(0xeeeeee));
  // 设置输出canvas画面的大小
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 显示三维坐标系  x:红色   z:蓝色  y:绿色

  // 设置渲染物体阴影
  // renderer.shadowMapEnabled = true; // 旧版
  renderer.shadowMap.enabled = true;

  var axes = new THREE.AxesHelper(20);

  // 添加坐标系到场景中
  scene.add(axes);

  // *****************************************  平面  ************************************************
  // 创建地面的几何体
  var planeGeometry = new THREE.PlaneGeometry(100, 20);
  // 给地面物体上色
  // var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
  var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc });
  // 创建地面
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  // 物体移动位置
  plane.rotation.x = -0.5 * Math.PI; // -90°
  plane.position.x = 0;
  plane.position.y = 0;
  plane.position.z = 0;
  plane.castShadow = true;
  // 接收阴影
  plane.receiveShadow = true;
  // 将地面添加到场景中
  scene.add(plane);

  // ***************************************** 立方体  **********************************************
  const boxgeometry = new THREE.BoxGeometry(4, 4, 4);
  // const material = new THREE.MeshBasicMaterial({ color: 0x0088ff });
  const material = new THREE.MeshLambertMaterial({ color: 0x0088ff });
  const cube = new THREE.Mesh(boxgeometry, material);
  cube.position.y = 2;
  cube.position.x = 20;
  cube.position.z = 0;
  cube.castShadow = true;
  scene.add(cube);

  // 边框线
  const edges = new THREE.EdgesGeometry(boxgeometry);
  const line = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 0x00ff00, linewidth: 3 })
  );
  line.position.y = 2;
  line.position.x = 20;
  line.position.z = 0;
  scene.add(line);

  // ****************************************** 球体 ******************************************
  const spheregeometry = new THREE.SphereGeometry(5, 32, 16);
  // const spheremater = new THREE.MeshBasicMaterial({ color: 0xffff00 });   //一个以简单着色（平面或线框）方式来绘制几何体的材质;不受光照影响
  const spheremater = new THREE.MeshLambertMaterial({ color: 0xffff00 });
  const sphere = new THREE.Mesh(spheregeometry, spheremater);
  sphere.position.y = 5;
  sphere.position.x = -20;
  sphere.position.z = 0;
  sphere.castShadow = true;
  scene.add(sphere);

  // *************************************************创建聚光灯****************************
  var spotLight = new THREE.SpotLight(0xffffff);
  // spotLight.position.set(-5, 30, 0);
  spotLight.position.set(130, 180, 130);
  spotLight.castShadow = true;

  // 添加聚光灯
  scene.add(spotLight);
  const spotLightHelper = new THREE.SpotLightHelper(spotLight);
  scene.add(spotLightHelper);

  // 定位相机，并且指向场景中心
  camera.position.x = -30;
  camera.position.y = 30;
  camera.position.z = 30;
  camera.lookAt(scene.position);

  // 将渲染器输出添加html元素中
  container.appendChild(renderer.domElement);
  renderer.render(scene, camera);
}

export default defineComponent({
  setup() {
    const container = ref(null);
    onMounted(() => {
      const box = container.value;
      if (box) {
        init(box);
      }
    });
    return {
      container
    };
  }
});
</script>
<style lang="less" scoped>
.three-container {
  width: 100%;
  height: 100vh;
  position: relative;
}
</style>
