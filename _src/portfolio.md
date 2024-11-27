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
    <a href="{{ file.filepath }}" class="lightbox">
      <!-- Use the file path for the image source -->
      <img src="{{ file.filepath }}" alt="{{ file.filename }}">
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
    <a href="/threejs/">
      <img src="/images/project1-cover.jpg" alt="ThreeJS Project Cover">
      <span>Project 1: ThreeJS</span>
    </a>
  </div>
  <div class="project">
    <a href="/rust-routine/">
      <img src="/images/project2-cover.jpg" alt="Routine Rust Project Cover">
      <span>Project 2: Routine Rust</span>
    </a>
  </div>
  <div class="project">
    <a href="/lamplight/">
      <img src="/images/project3-cover.jpg" alt="Lamplight Project Cover">
      <span>Project 3: Lamplight</span>
    </a>
  </div>
</div>
