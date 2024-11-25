---
title: Routine Rust Project
layout: project.njk
permalink: rust-routine.html
galleryImages:
  - "/images/routine-rust/image1.jpg"
  - "/images/routine-rust/image2.jpg"
  # Add up to 10 images
---

# Routine Rust

## About the Project

Description of Routine Rust.

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></iframe>

## Image Gallery

<div class="gallery">
{% for image in galleryImages %}
![Routine Rust Image]({{ image }})
{% endfor %}
</div>
