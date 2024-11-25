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
    <a href="/project-details/{{ file.filename | replace: '.jpg', '' | replace: '.jpeg', '' | replace: '.png', '' | replace: '.gif', '' | replace: '.webp', '' | replace: '_', '-' | slugify }}">
      <img src="{{ file.filepath }}" alt="{{ file.filename }}">
      <figcaption>
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
  {% else %}
  <p>No sample work available at the moment.</p>
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
