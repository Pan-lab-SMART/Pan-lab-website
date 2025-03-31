---
---

# Pan-lab's Website

<div style="text-align: center;">
  We are Pan lab from IBABI of [SMART](https://smart.org.cn/en/), focusing on single particle Cryo-EM.
</div>
<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge"></div>
      <img src='images/Team-2025-1.jpg' alt="sym" style="width: 80%; max-width: 800px; display: block; margin: 0 auto;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">
    {% include section.html %}
  </div>
</div>

{% include section.html %}

## Highlights

{% capture text %}

Mainly using structural biology, biochemistry, physiology and other means, engaged in the study of the working mechanism and drug action mechanism of membrane proteins related to major diseases. At present, the research direction includes membrane proteins related to metabolic diseases and proteins related to tumor-immunity.

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

Projects.

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
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
  image="images/photo.jpg"
  link="team"
  title="Our Team"
  text=text
%}
