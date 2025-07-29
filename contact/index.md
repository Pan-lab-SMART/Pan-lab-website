---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

If you are interested in our research, please feel free to contact us!

{%
  include button.html
  type="email"
  text="panxj@smart.org.cn"
  link="panxj@smart.org.cn"
%}
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://www.google.com/maps"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/office-1.jpg"
  caption="contact us"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/office-2.jpg"
  caption="Please join us"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Everyone who is interested in our research is welcomed
{% endcapture %}

{% capture col2 %}
Please directly contact our PI [Prof.Pan](https://panxiaojing-lab.com/members/panxiaojing.html)
{% endcapture %}

{% capture col3 %}
[Join us!](panxj@smart.org.cn)
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
