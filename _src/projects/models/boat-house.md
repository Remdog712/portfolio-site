---
title: Boat House
layout: model.njk
modelPath: "/images/PumpkinTest16.glb"
hdrPath: "/images/autumn_field_puresky_1k.hdr"
permalink: projects/models/boat-house.html
---

A House on Water, and a New Way to Summon Geese by the Beat of a Drum (1769)

![Pumpkin Boat Concept Art](/images/house-boat.jpg)

- **Artist:** Filippo Morghen
- **Title:** A House on Water, and a New Way to Summon Geese by the Beat of a Drum (1769)
- **Original Site:** [Link to Original Image](https://artvee.com/dl/a-house-on-water-and-a-new-way-to-summon-geese-by-the-beat-of-a-drum/)

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
