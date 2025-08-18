---
---

# We are Pan lab

<div style="text-align: center; font-size: 1.5em; font-weight: bold;">
  We are Pan lab from IBABI (Institute of Bio-Architecture and Bio-Interaction of 
  <a href="https://smart.org.cn/en/" target="_blank" rel="noopener">SMART</a>), 
  focusing on single particle Cryo-EM.
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge"></div>
      <img src='images/panteam.jpg' alt="sym" style="width: 80%; max-width: 800px; display: block; margin: 0 auto;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">
    {% include section.html %}
  </div>
</div>

{% include section.html %}

## Highlights

{% capture text %}

Our research

{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

Meet the team!

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/team.jpg"
  link="team"
  title="Our Team"
  text=text
%}
