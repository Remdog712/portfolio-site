---
title: Pumpkin Boat
layout: model.njk
modelPath: "/portfolio-site/images/PumpkinTest16-v1.glb"
hdrPath: "/portfolio-site/images/autumn_field_puresky_1k.hdr"
permalink: pumpkin-boat.html
---

# A Pumpkin Used as a Fishing Boat (1769)

![Pumpkin Boat Concept Art](/portfolio-site/images/pumpkin-boat.jpg)

- **Illustration Artist:** Filippo Morghen
- **Title:** A Pumpkin Used as a Fishing Boat (1769)
- **Original Site:** [Link to Original Image](https://artvee.com/dl/a-pumpkin-used-as-a-fishing-boat/#00)
- **HDRI Source:** [PolyHaven](https://polyhaven.com/a/snow_field_2_puresky) at 1k Resolution
- **Objects:** 19
- **Vertices:** 33,639
- **Faces:** 35,794
- **Triangles:** 72,262
- **Personal Note:** To preserve load times, everything has be created on as far reduced poly count as possible and 2k textures for each object. This model was created entirely in Blender and textured in Adobe Substance Painter. This model including animations took roughly 5 hours of elapsed time.

## Gallery

<div class="gallery">
  <a href="/portfolio-site/images/PumpkinBoatImages/Poly%20Count.png">
    <img src="/portfolio-site/images/PumpkinBoatImages/Poly%20Count.png" alt="Poly Count">
  </a>
  <a href="/portfolio-site/images/PumpkinBoatImages/IllustrationRendition.png">
    <img src="/portfolio-site/images/PumpkinBoatImages/IllustrationRendition.png" alt="Illustration Rendition">
  </a>
  <a href="/portfolio-site/images/PumpkinBoatImages/Mesh%20Model.png">
    <img src="/portfolio-site/images/PumpkinBoatImages/Mesh%20Model.png" alt="Mesh Model">
  </a>
</div>

## 3D Modeled and Animated Version

<div id="threejs-container" style="margin-bottom: 50px;">
  <canvas id="modelCanvas" style="width: 100%; height: 100%;"></canvas>
</div>

<script type="module">
  import { initModel } from '/portfolio-site/js/threejs-model.js';

  const modelPath = '{{ modelPath }}';
  const hdrPath = '{{ hdrPath }}';

  initModel(modelPath, hdrPath);
</script>

<style>
</style>
