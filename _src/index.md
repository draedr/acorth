---
    layout: page.md
    eleventyExcludeFromCollections: true
---

## #bio
> {{ site.description }}

## #documents
---
Here is a list of documents on my blog divided per tag. <br>
Or, you can see all of them [Here](http://localhost:8080/tags/all/)

### #Journal
<ul>
{%- for post in collections.journal -%}
    {% if loop.index0 < 5 %}
<li> <a href="{{ post.url }}">{{post.data.title}}</a> </li>
    {% endif %}
{%- endfor -%}
</ul>


[Click here for the full list](/tags/journal/)

### #Projects
<ul>
{%- for post in collections.projects -%}
    {% if loop.index0 < 5 %}
<li> <a href="{{ post.url }}">{{post.data.title}}</a> </li>
    {% endif %}
{%- endfor -%}
</ul>

[Click here for the full list](/tags/projects/)