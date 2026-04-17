---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

<!-- horizontal role navigation bar -->
<div class="role-navigation">
  <a href="#principal-investigator" class="role-link pi-link">
    {% include icon.html icon="fa-solid fa-microscope" %}PI
  </a>
  <a href="#associate-researchers" class="role-link associate-link">
    {% include icon.html icon="fa-solid fa-flask" %}Associate Researchers
  </a>
  <a href="#postdoctoral-researchers" class="role-link postdoc-link">
    {% include icon.html icon="fa-solid fa-graduation-cap" %}Postdocs
  </a>
  <a href="#students" class="role-link student-link">
    {% include icon.html icon="fa-solid fa-user-graduate" %}Students
  </a>
  <a href="#research-assistants" class="role-link assistant-link">
    {% include icon.html icon="fa-solid fa-vial" %}Research Assistants
  </a>
</div>

{% include section.html %}

<!-- Principal Investigator -->
<section id="principal-investigator" class="role-section pi-section">
  <h2 class="role-header pi-header">{% include icon.html icon="fa-solid fa-microscope" %}Principal Investigator</h2>
  {% assign pi = site.data.members | where_exp: "m", "m.role == 'principal-investigator'" %}
  {% for m in pi %}
    {% include portrait.html lookup=m.slug %}
  {% endfor %}
</section>

{% include section.html %}

<!-- Associate Researchers -->
<section id="associate-researchers" class="role-section associate-section">
  <h2 class="role-header associate-header">{% include icon.html icon="fa-solid fa-flask" %}Associate Researchers</h2>
  {% assign ar = site.data.members | where_exp: "m", "m.role == 'associate-researcher'" %}
  {% for m in ar %}
    {% include portrait.html lookup=m.slug %}
  {% endfor %}
</section>

{% include section.html %}

<!-- Postdoctoral Researchers -->
<section id="postdoctoral-researchers" class="role-section postdoc-section">
  <h2 class="role-header postdoc-header">{% include icon.html icon="fa-solid fa-graduation-cap" %}Postdoctoral Researchers</h2>
  {% assign pd = site.data.members | where_exp: "m", "m.role == 'postdoc'" %}
  {% for m in pd %}
    {% include portrait.html lookup=m.slug %}
  {% endfor %}
</section>

{% include section.html %}

<!-- Students -->
<section id="students" class="role-section student-section">
  <h2 class="role-header student-header">{% include icon.html icon="fa-solid fa-user-graduate" %}Students</h2>
  {% assign st = site.data.members | where_exp: "m", "m.role == 'student'" %}
  {% for m in st %}
    {% include portrait.html lookup=m.slug %}
  {% endfor %}
</section>

{% include section.html %}

<!-- Research Assistants -->
<section id="research-assistants" class="role-section assistant-section">
  <h2 class="role-header assistant-header">{% include icon.html icon="fa-solid fa-vial" %}Research Assistants</h2>
  {% assign ra = site.data.members | where_exp: "m", "m.role == 'research-assistant'" %}
  {% for m in ra %}
    {% include portrait.html lookup=m.slug %}
  {% endfor %}
</section>

{% include section.html background="images/background.jpg" dark=true %}
