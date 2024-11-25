---
title: Lamplight Project
layout: project.njk
permalink: lamplight.html
galleryImages:
  - "/images/lamplight/image1.jpg"
  - "/images/lamplight/image2.jpg"
  # Add up to 10 images
---

# Lamplight

## About the Project

Description of Lamplight.

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></iframe>

## Image Gallery

<div class="gallery">
{% for image in galleryImages %}
![Lamplight Image]({{ image }})
{% endfor %}
</div>
