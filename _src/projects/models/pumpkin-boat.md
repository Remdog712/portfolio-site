---
title: Pumpkin Boat
layout: model.njk
modelPath: "/images/PumpkinTest16.glb"
hdrPath: "/images/autumn_field_puresky_1k.hdr"
permalink: projects/models/pumpkin-boat.html
---

# A Pumpkin Used as a Fishing Boat (1769)

![Pumpkin Boat Concept Art](/images/pumpkin-boat.jpg)

- **Artist:** Filippo Morghen
- **Title:** A Pumpkin Used as a Fishing Boat (1769)
- **Original Site:** [Link to Original Image](https://artvee.com/dl/a-pumpkin-used-as-a-fishing-boat/#00)

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
