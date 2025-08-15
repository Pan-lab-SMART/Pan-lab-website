---
title: Projects
# nav:
 # order: 2
 # tooltip: Software, datasets, and more
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects

Our research is primarily conducted using structural biology, biochemistry, physiology, and related methodologies to investigate the functional mechanisms and drug interaction mechanisms of membrane proteins associated with major diseases. Current research focuses include the membrane proteins involved in metabolic disorders and tumor-immune interactions.

{% include tags.html tags="publication, resource, website" %}

{% include search-info.html %}

{% include section.html %}

## Featured

{% include list.html component="card" data="projects" filter="group == 'featured'" %}

{% include section.html %}

## More

{% include list.html component="card" data="projects" filter="!group" style="small" %}
