---
title: Portfolio
layout: portfolio.njk
permalink: portfolio.html
---

## Welcome to my portfolio, check out some of sample pieces from larger projects or view some of my projects down below!

# Sample Work

<div class="gallery">
  {% for file in image_metadata %}
  <figure>
    <!-- Link to the file's path for the lightbox -->
    <a href="{{ pathPrefix }}{{ file.filepath }}" class="lightbox">
      <!-- Use the file path for the image source -->
      <img src="{{ pathPrefix }}{{ file.filepath }}" alt="{{ file.filename }}">
      <figcaption>
        <!-- Clean up the filename to make a user-friendly caption -->
        {{ file.filename 
            | replace: ".jpg", "" 
            | replace: ".jpeg", "" 
            | replace: ".png", "" 
            | replace: ".gif", "" 
            | replace: ".webp", "" 
            | replace: "_", " " 
        }}
      </figcaption>
    </a>
  </figure>
  {% endfor %}
</div>

# Projects

<div class="projects">
  <div class="project">
    <a href="{{ pathPrefix }}threejs/">
      <img src="{{ pathPrefix }}images/project1-cover.jpg" alt="ThreeJS Project Cover">
      <span>Project 1: ThreeJS</span>
    </a>
  </div>
  <div class="project">
    <a href="{{ pathPrefix }}rust-routine/">
      <img src="{{ pathPrefix }}images/project2-cover.jpg" alt="Routine Rust Project Cover">
      <span>Project 2: Routine Rust</span>
    </a>
  </div>
  <div class="project">
    <a href="{{ pathPrefix }}lamplight/">
      <img src="{{ pathPrefix }}images/project3-cover.jpg" alt="Lamplight Project Cover">
      <span>Project 3: Lamplight</span>
    </a>
  </div>
</div>
