---
title: Routine Rust Project
layout: project.njk
permalink: /rust-routine/index.html
galleryImages:
  - "/portfolio-site/images/routinerust/Facto Bot In Progress.jpg"
  - "/portfolio-site/images/routinerust/Facto Bot In Progress 2.jpg"
  - "/portfolio-site/images/routinerust/Factory In Progress Render.jpg"
  - "/portfolio-site/images/routinerust/Living Room Rendered.jpg"
  - "/portfolio-site/images/routinerust/Toaster Parts.jpg"
  - "/portfolio-site/images/routinerust/Toaster Wireframe.jpg"
  - "/portfolio-site/images/routinerust/Toaster Mesh.jpg"
  - "/portfolio-site/images/routinerust/Toaster Material Capture.jpg"
  - "/portfolio-site/images/routinerust/Factory Mesh.jpg"
  - "/portfolio-site/images/routinerust/Factory Material Capture.jpg"
  - "/portfolio-site/images/routinerust/Living Room Mesh.jpg"
  - "/portfolio-site/images/routinerust/Living Room Material Capture.jpg"
  - "/portfolio-site/images/routinerust/Toaster Rendered.jpg"
  - "/portfolio-site/images/routinerust/Facto Bot.jpg"
  - "/portfolio-site/images/routinerust/Facto Bot Ruined.jpg"
  - "/portfolio-site/images/routinerust/Factory Rendered.jpg"
---

# Routine Rust

## About the Project

I created Routine Rust for a project for a class in 3D Modeling as well as for an entry into the Behrend Yahn Spring Art Show in which it won "Best in Show" in the Digital Art category. I created the video from an interest in the Fallout game series and as a point to make on how Robotic Replacements may be affordable but often times lose the humanity in the products they create.

## Video

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/IBrJg1t4MA0" frameborder="0" allowfullscreen></iframe>
</div>

## Image Gallery

<div class="gallery">
  {% for image in galleryImages %}
  <div class="gallery-item">
    <img src="{{ image }}" alt="Routine Rust Image">
  </div>
  {% endfor %}
</div>
