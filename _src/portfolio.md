---
title: Portfolio
layout: portfolio.njk
permalink: /portfolio/index.html
---

## Welcome to my portfolio, check out some sample pieces from larger projects or view some of my projects below!

# Sample Work

<div class="gallery">
  {% for file in image_metadata %}
  <figure>
    <a href="/portfolio-site/{{ file.filepath }}" class="lightbox">
      <img src="/portfolio-site/{{ file.filepath }}" alt="{{ file.filename }}">
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
  {% endfor %}
</div>

# Projects

<div class="projects">
  <div class="project">
    <a href="/portfolio-site/threejs.html">
      <img src="/portfolio-site/images/project1-cover.jpg" alt="ThreeJS Project Cover">
      <span>Project 1: ThreeJS</span>
    </a>
  </div>
  <div class="project">
    <a href="/portfolio-site/rust-routine/index.html">
      <img src="/portfolio-site/images/project2-cover.jpg" alt="Routine Rust Project Cover">
      <span>Project 2: Routine Rust</span>
    </a>
  </div>
  <div class="project">
    <a href="/portfolio-site/lamplight/index.html">
      <img src="/portfolio-site/images/project3-cover.jpg" alt="Lamplight Project Cover">
      <span>Project 3: Lamplight</span>
    </a>
  </div>
</div>
