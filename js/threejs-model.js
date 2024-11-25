function loadModel(modelPath) {
    // Initialize the ThreeJS scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
  
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-container').appendChild(renderer.domElement);
  
    // Load the GLTF model
    const loader = new THREE.GLTFLoader();
    loader.load(
      modelPath,
      function (gltf) {
        scene.add(gltf.scene);
        camera.position.z = 5;
  
        const animate = function () {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
  
        animate();
      },
      undefined,
      function (error) {
        console.error('An error happened', error);
      }
    );
  }
  