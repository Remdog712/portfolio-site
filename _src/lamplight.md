---
title: Lamplight Project
layout: project.njk
permalink: /lamplight/index.html
galleryImages:
  - "/portfolio-site/images/lamplight/Lamp Light Logo.jpg"
  - "/portfolio-site/images/lamplight/Intro Level.jpg"
  - "/portfolio-site/images/lamplight/Cave Level.jpg"
  - "/portfolio-site/images/lamplight/School Level.jpg"
  - "/portfolio-site/images/lamplight/Lava Level.jpg"
  - "/portfolio-site/images/lamplight/Asset Set 1.jpg"
  - "/portfolio-site/images/lamplight/Asset Set 2.jpg"
---

# Lamplight

## About the Project

Lamplight is a game I made alongside another student in Unreal Engine 5 as part of a final project for Game 250 - Technical Game Design in which we were tasked with making a short game that focused on one main gameplay feature that was functioning and bug-free! Functioning? Yes! Bug-free? Debatable! The game took roughly 3 months from start to finish. The game has been built and is able to be run standalone, though it is not available through this site.

## Video

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/JmSoUX08f0s" frameborder="0" allowfullscreen></iframe>
</div>

## Image Gallery

<div class="gallery">
  {% for image in galleryImages %}
  <div class="gallery-item">
    <img src="{{ image }}" alt="Lamplight Image">
  </div>
  {% endfor %}
</div>
