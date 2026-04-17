---
description: Pan Lab at Shenzhen Medical Academy of Research and Translation — structural biology of membrane proteins using Cryo-EM
keywords: cryo-EM, structural biology, membrane proteins, ion channels, GLUT9, voltage-gated sodium channels, calcium channels, drug discovery, GABAAR, TMEM132B
---

# We are Pan lab

<div style="text-align: center; font-size: 1.5em; font-weight: bold; margin-bottom: 2.5rem;">
  We are Pan lab from IBABI (Institute of Bio-Architecture and Bio-Interaction of 
  <a href="https://smart.org.cn/en/" target="_blank" rel="noopener">SMART</a>), 
  focusing on single particle Cryo-EM.
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge"></div>
      <img src='images/panteam.jpg' alt="Pan lab team" style="width: 80%; max-width: 800px; display: block; margin: 0 auto;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">
    {% include section.html %}
  </div>
</div>

{% include section.html %}

## <span class="section-badge research-badge">About Our Research</span>

<div class="research-text">
Our lab specializes in **single-particle Cryo-EM** to determine high-resolution structures of membrane proteins, unraveling their working mechanisms and drug action principles. We combine structural biology with **biochemistry, physiology, and medicinal chemistry** to tackle key questions in disease biology.

**Research Directions:**

- Metabolic disease membrane proteins — structure-based drug discovery
- Tumor-immune related proteins — structural basis for immunotherapy
</div>

{% include section.html %}

## <span class="section-badge pub-badge">Representative Publications</span>

{%
  include citation.html
  lookup="doi:10.1038/s41580-024-00763-7"
  style="rich"
  highlight="true"
%}

{%
  include citation.html
  lookup="doi:10.1038/s41467-024-49420-9"
  style="rich"
  highlight="true"
%}

{%
  include citation.html
  lookup="doi:10.1126/science.aaw2999"
  style="rich"
%}

{%
  include citation.html
  lookup="doi:10.1126/science.aau2596"
  style="rich"
%}

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
