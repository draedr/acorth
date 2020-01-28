---
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag }}/
layout: page.md
eleventyExcludeFromCollections: true
---
## Tagged “{{ tag }}”

<ol>
{% set taglist = collections[ tag ] %}
{% for post in taglist %}
  <li>
    <a href="{{ post.url | url }}">
      {{ post.data.title }} - {{post.date | formatDate}}
    </a>
  </li>
{% endfor %}
</ol>