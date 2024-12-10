import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/libs/meshopt_decoder.module.js';
import { RGBELoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/RGBELoader.js';

export function initModel(modelPath, hdrPath = null) {
  const canvas = document.getElementById('modelCanvas');
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    500
  );
  camera.position.set(-10, 1.5, 4);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    logarithmicDepthBuffer: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  if (hdrPath) {
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load(
      hdrPath,
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        scene.background = texture;
      },
      undefined,
      (error) => {
        console.error('Error loading HDRI:', error);
      }
    );
  }

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.minDistance = 0.01;
  controls.maxDistance = 100;

  let mixer;

  // Set up GLTFLoader with MeshoptDecoder
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder); 

  loader.load(
    modelPath,
    (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 0, 0);
      model.scale.set(1, 1, 1);

      model.traverse((child) => {
        if (child.isMesh) {
          child.frustumCulled = false;
        }
      });

      scene.add(model);

      if (gltf.animations && gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.play();
        });
      }
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error);
    }
  );

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);

    if (mixer) {
      const delta = clock.getDelta();
      mixer.update(delta);
    }

    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}
