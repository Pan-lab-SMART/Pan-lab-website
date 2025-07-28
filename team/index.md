---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}

## {% include icon.html icon="fa-solid fa-microscope" %}Principal Investigator

{% include list.html 
  data="members" 
  component="portrait" 
  filter="role == 'principal-investigator'" 
%}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-flask" %}Associate Researchers

{% include list.html 
  data="members" 
  component="portrait" 
  filter="role == 'associate-researcher'" 
%}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-graduation-cap" %}Postdoctoral Researchers

{% include list.html 
  data="members" 
  component="portrait" 
  filter="role == 'postdoc'" 
%}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-vial" %}Research Assistants

{% include list.html 
  data="members" 
  component="portrait" 
  filter="role == 'research-assistant'" 
%}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-user-graduate" %}Students

{% include list.html 
  data="members" 
  component="portrait" 
  filter="role == 'student'" 
%}

{% include section.html background="images/background.jpg" dark=true %}
