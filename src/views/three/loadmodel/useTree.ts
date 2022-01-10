import * as THREE from "three";
/**
 *
 * @returns
 */
export function useThree() {
  // 创建场景
  let scene = new THREE.Scene();
  // 创建相机
  let camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    4000
  );
    // 创建渲染器
  let renderer = new THREE.WebGLRenderer({
    antialias: false,
    alpha: true // 设置透明
  });

  // 创建灯光
  let directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);

  /**
   * 循环渲染
   */
  let animateLoop:number;

  // 渲染方法
  function startRender(loop = false, extraAction?: () => void) {
    function render() {
      if (extraAction) {
        extraAction();
      }
      animateLoop = requestAnimationFrame(render);
      renderer.render(scene, camera);
    }
    render()
  }

  /**
   * 清除内存占用   //
   */
  function clearScene() {
    cancelAnimationFrame(animateLoop)
    renderer = null;
    camera = null;
    scene = null;
    directionalLight = null;
  }

  return {
    scene,
    camera,
    renderer,
    directionalLight,
    startRender,
    clearScene
  }
}

