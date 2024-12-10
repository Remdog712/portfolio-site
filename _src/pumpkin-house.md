---
title: Pumpkin House
layout: model.njk
modelPath: "/portfolio-site/images/PumpkinHouse4-v1.glb"
hdrPath: "/portfolio-site/images/snow_field_2_puresky_1k.hdr"
permalink: pumpkin-house.html
---

# Pumpkins Used as Dwellings to Be Secure against Wild Beasts (1769)

![Pumpkin House Concept Art](/portfolio-site/images/pumpkin-house.jpg)

- **Illustration Artist:** Filippo Morghen
- **Title:** Pumpkins Used as Dwellings to Be Secure against Wild Beasts (1769)
- **Original Site:** [Link to Original Image](https://artvee.com/dl/pumpkins-used-as-dwellings-to-be-secure-against-wild-beasts/)
- **HDRI Source:** [PolyHaven](https://polyhaven.com/a/snow_field_2_puresky) at 1k Resolution
- **Objects:** 24
- **Vertices:** 180,086
- **Faces:** 257,474
- **Triangles:** 348,978
- **Personal Note:** To preserve load times, everything has be created on as far reduced poly count as possible and 2k textures for each object. This model was created entirely in Blender and textured in Adobe Substance Painter. This model including animations took roughly 5 hours of elapsed time.

## Gallery

<div class="gallery">
  <a href="/portfolio-site/images/PumpkinHouseImages/Poly%20Count.png">
    <img src="/portfolio-site/images/PumpkinHouseImages/Poly%20Count.png" alt="Poly Count">
  </a>
  <a href="/portfolio-site/images/PumpkinHouseImages/IllustrationRendition.png">
    <img src="/portfolio-site/images/PumpkinHouseImages/IllustrationRendition.png" alt="Illustration Rendition">
  </a>
  <a href="/portfolio-site/images/PumpkinHouseImages/Mesh%20Model.png">
    <img src="/portfolio-site/images/PumpkinHouseImages/Mesh%20Model.png" alt="Mesh Model">
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
  /* Styles remain unchanged */
</style>
