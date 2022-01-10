<template>
  <div ref="container" class="three-container">
    <a-row class="info-pack">
      <a-col :span="12">
        <a-typography-title :level="3" style="color: white">
          模型加载...
        </a-typography-title>
      </a-col>
      <a-col :span="12" class="back-container">
        <a-button type="primary" @click="jump('/')">back</a-button>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, unref, onBeforeUnmount } from "vue";
import { useCommon } from "@/utils/common";
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"; // obj文件加载
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"; // 材质加载
import { useThree } from "./useTree";
export default defineComponent({
  name: "ShowModel",
  setup() {
    const container = ref(null);
    const { jumpTo: jump } = useCommon();
    const {
      scene,
      camera,
      renderer,
      directionalLight,
      startRender,
      clearScene
    } = useThree();

    /**
     * 加载模型
     */
    function loadModel(mat: MTLLoader.MaterialCreator) {
      // 加载模型
      // Manager from ThreeJs to track a loader and its status
      var manager = new THREE.LoadingManager();
      // Loader for Obj from Three.js
      var loader = new OBJLoader(manager);
      // 设置材质
      // Launch loading of the obj file, addBananaInScene is the callback when it's ready
      loader.setMaterials(mat);
      loader.load("/model/sheep/Shirley.obj", (object: any) => {
        var banana = object;
        object.children[0].geometry.computeBoundingBox();
        object.children[0].geometry.center();
        object.position.y = 0;

        // Move the banana in the scene
        banana.rotation.y = Math.PI / 2;
        // 设置位置
        // banana.position.y = -200;
        // banana.position.z = -50;
        object.position.set(0, 0, 0);
        object.scale.set(60, 60, 60);
        // // Go through all children of the loaded object and search for a Mesh
        // object.traverse(function(child: any) {
        //   // This allow us to check if the children is an instance of the Mesh constructor
        //   if (child instanceof THREE.Mesh) {
        //     // child.material.color = new THREE.Color(0x00ff00);
        //     child.material.side = THREE.DoubleSide;
        //     child.scale.set(100, 100, 100);
        //     // Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
        //     // child.geometry.computeVertexNormals();
        //   }
        // });
        // Add the 3D object in the scene
        scene.add(banana);
        startRender();
      });
    }

    onMounted(() => {
      // 设置渲染范围
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.position.set(0, 0, 700);
      // 设置场景背景色
      scene.fog = new THREE.Fog(0x000, 1000, 4000);

      // Add a light in the scene
      // directionalLight.position.set(0, 0, 350);
      // directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
      // scene.add(directionalLight);

      // 创建一个环境灯光;
      var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // 创建一个点灯光;
      var pointLight = new THREE.PointLight(0xffffff, 0.3);
      // 给模型添加灯光
      camera.add(pointLight);

      scene.add(camera);

      // 添加3d画板到页面
      const contant: any = unref(container);
      contant.appendChild(renderer.domElement);

      var mtlLoader = new MTLLoader();
      mtlLoader.load("/model/sheep/Shirley.mtl", mat => {
        mat.preload();
        loadModel(mat);
      });
    });

    /**
     * 清除内存占用
     */
    onBeforeUnmount(() => {
      clearScene();
    });

    return {
      container,
      jump
    };
  }
});
</script>
<style lang="less" scoped>
.three-container {
  width: 100%;
  height: 100vh;
  position: relative;
  // background: blue;
  .info-pack {
    position: fixed;
    width: 100%;
    padding: 10px 10px 0;
    background-image: linear-gradient(135deg, #1852a8 10%, #92ffc0 100%);
    opacity: 0.8;
    .back-container {
      text-align: right;
    }
  }
}
</style>
