---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

<!-- 添加横向分类导航栏 -->
<div class="role-navigation">
  <a href="#principal-investigator" class="role-link pi-link">
    {% include icon.html icon="fa-solid fa-microscope" %}PI
  </a>
  <a href="#associate-researchers" class="role-link associate-link">
    {% include icon.html icon="fa-solid fa-flask" %}Associates
  </a>
  <a href="#postdoctoral-researchers" class="role-link postdoc-link">
    {% include icon.html icon="fa-solid fa-graduation-cap" %}Postdocs
  </a>
  <a href="#research-assistants" class="role-link assistant-link">
    {% include icon.html icon="fa-solid fa-vial" %}Assistants
  </a>
  <a href="#students" class="role-link student-link">
    {% include icon.html icon="fa-solid fa-user-graduate" %}Students
  </a>
</div>

{% include section.html %}

<!-- 为每个部分添加ID以便跳转 -->
<section id="principal-investigator">
  <h2 class="role-header">{% include icon.html icon="fa-solid fa-microscope" %}Principal Investigator</h2>
  {% include list.html 
    data="members" 
    component="portrait" 
    filter="role == 'principal-investigator'" 
  %}
</section>

{% include section.html %}

<section id="associate-researchers">
  <h2 class="role-header">{% include icon.html icon="fa-solid fa-flask" %}Associate Researchers</h2>
  {% include list.html 
    data="members" 
    component="portrait" 
    filter="role == 'associate-researcher'" 
  %}
</section>

{% include section.html %}

<section id="postdoctoral-researchers">
  <h2 class="role-header">{% include icon.html icon="fa-solid fa-graduation-cap" %}Postdoctoral Researchers</h2>
  {% include list.html 
    data="members" 
    component="portrait" 
    filter="role == 'postdoc'" 
  %}
</section>

{% include section.html %}

<section id="research-assistants">
  <h2 class="role-header">{% include icon.html icon="fa-solid fa-vial" %}Research Assistants</h2>
  {% include list.html 
    data="members" 
    component="portrait" 
    filter="role == 'research-assistant'" 
  %}
</section>

{% include section.html %}

<section id="students">
  <h2 class="role-header">{% include icon.html icon="fa-solid fa-user-graduate" %}Students</h2>
  {% include list.html 
    data="members" 
    component="portrait" 
    filter="role == 'student'" 
  %}
</section>

{% include section.html background="images/background.jpg" dark=true %}
