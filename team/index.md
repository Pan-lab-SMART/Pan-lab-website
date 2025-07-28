---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}

## {% include icon.html icon="fa-solid fa-microscope" %}Principal Investigator
<!-- 使用特殊样式显示PI -->
<div class="pi-container">
  {% include list.html 
    data="members" 
    component="portrait" 
    filter="role == 'principal-investigator'" 
  %}
</div>

{% include section.html %}

## {% include icon.html icon="fa-solid fa-users" %}Lab Members
<!-- 其他成员保持原有布局 -->
{% include list.html 
    data="members" 
    component="portrait" 
    filter="role != 'principal-investigator'" 
%}

{% include section.html background="images/background.jpg" dark=true %}
