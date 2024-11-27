---
title: Pumpkin House
layout: model.njk
modelPath: "/images/PumpkinTest16.glb"
hdrPath: "/images/autumn_field_puresky_1k.hdr"
permalink: projects/models/pumpkin-house.html
---

Pumpkins Used as Dwellings to Be Secure against Wild Beasts (1769)

![Pumpkin Boat Concept Art](/images/pumpkin-house.jpg)

- **Artist:** Filippo Morghen
- **Title:** Pumpkins Used as Dwellings to Be Secure against Wild Beasts (1769)
- **Original Site:** [Link to Original Image](https://artvee.com/dl/pumpkins-used-as-dwellings-to-be-secure-against-wild-beasts/)

## 3D Modeled and Animated Version

<div id="threejs-container">
  <canvas id="modelCanvas" style="width: 100%; height: 100%;"></canvas>
</div>

<script type="module">
  import { initModel } from '/js/threejs-model.js';

  const modelPath = "{{ modelPath }}";
  const hdrPath = "{{ hdrPath }}";

  initModel(modelPath, hdrPath);
</script>
