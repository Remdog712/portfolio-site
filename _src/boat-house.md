---
title: Boat House
layout: model.njk
modelPath: "/portfolio-site/images/HouseBoatMerge15-v3.glb"
hdrPath: "/portfolio-site/images/kloofendal_28d_misty_puresky_1k.hdr"
permalink: boat-house.html
---

# A House on Water, and a New Way to Summon Geese by the Beat of a Drum (1769)

![Pumpkin Boat Concept Art](/portfolio-site/images/house-boat.jpg)

## About the Model

- **Illustration Artist:** Filippo Morghen
- **Title:** A House on Water, and a New Way to Summon Geese by the Beat of a Drum (1769)
- **Original Site:** [Link to Original Image](https://artvee.com/dl/a-house-on-water-and-a-new-way-to-summon-geese-by-the-beat-of-a-drum/)
- **HDRI Source:** [PolyHaven](https://polyhaven.com/a/kloofendal_28d_misty_puresky) at 1k Resolution
- **Objects:** 101
- **Vertices:** 430,215
- **Faces:** 427,465
- **Triangles:** 856,972
- **Personal Note:** To preserve load times, everything has be created on as far reduced poly count as possible and 2k textures for each object. This model was created entirely in Blender and textured in Adobe Substance Painter. This model including animations took roughly 6 hours of elapsed time.

## Gallery

<div class="gallery">
  <a href="/portfolio-site/images/HouseBoatImages/Poly%20Count.png">
    <img src="/portfolio-site/images/HouseBoatImages/Poly%20Count.png" alt="Poly Count">
  </a>
  <a href="/portfolio-site/images/HouseBoatImages/Illustration%20Rendition.png">
    <img src="/portfolio-site/images/HouseBoatImages/Illustration%20Rendition.png" alt="Illustration Rendition">
  </a>
  <a href="/portfolio-site/images/HouseBoatImages/Mesh%20Model.png">
    <img src="/portfolio-site/images/HouseBoatImages/Mesh%20Model.png" alt="Mesh Model">
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
