---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Meet the Pan lab team! If you are interested in our research, feel free to contact the team member!

{% include section.html %}

## {% include icon.html icon="fa-solid fa-microscope" %}Principal Investigator
<!-- PI单独区域，使用1列布局突出显示 -->
{% include list.html 
  data="members" 
  component="portrait" 
  filter="role == 'principal-investigator'" 
  style="pi"  <!-- 传递样式参数给列表 -->
%}

## {% include icon.html icon="fa-solid fa-users" %}Lab Members
<!-- 其他成员区域，保持原有布局 -->
{% include list.html 
  data="members" 
  component="portrait" 
  filter="role != 'principal-investigator'" 
%}

{% include section.html background="images/background.jpg" dark=true %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

{% capture content %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% endcapture %}

{% include grid.html style="square" content=content %}
