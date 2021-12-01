---
layout: post
title: "Categorise Jekyll blog posts"
date: 2021-11-30 10:00:00 +1100
categories: [coding, jekyll]
cover_image: 2021-11-30-cover.jpg
---

Categorising blog posts is essential if you want your readers to read similar posts that they liked. While there are some limitations when implementing categorisation in Jekyll, but it is far from impossible. This blog highlights the steps I took to categorise blog posts.

## Problem statement
---

To save some time for the readers, let me state what problem I am going to address. The problem statement is as follows:

> The blog post has a list of categories. The reader can click on a category link, and the link will redirect the user to a page that lists all the blog posts belonging to that category.
{:class="blog-blockquote"}

## Blog posts
---

When you create a blog post, make sure to include `categories` variable in your [front matter](https://jekyllrb.com/docs/step-by-step/03-front-matter/){:target="_blank"}. Should you choose to create multiple categories, you can create an array such as `[category0, category1, category2]`. Create blog posts inside the `_posts` folder. Your posts will look as follows:

#### Post 0
{% highlight markdown linenos %}
---
layout: post
title: blog0
date: 2021-10-06
categories: coding
---

Contents of blog 0.
{% endhighlight %}

#### Post 1

{% highlight markdown linenos %}
---
layout: post
title: blog1
date: 2021-10-06
categories: [coding, jekyll]
---

Contents of blog 1.
{% endhighlight %}

#### Post 2

{% highlight markdown linenos %}
---
layout: post
title: blog2
date: 2021-10-06
categories: [coding]
---

Contents of blog 2.
{% endhighlight %}

**Note**: As per Jekyll convention, you must name your blog post markdown file with the format `year-month-day-name-of-your-blog-post.md`.  Example: For blog0 published on 2020-10-06, the file name must be `2020-10-06-blog0.md`.

For more information on Jekyll blogs, follow the Jekyll step by step tutorials on [blogging](https://jekyllrb.com/docs/step-by-step/08-blogging/){:target="_blank"}.



## Categories collection
---

Create a collection of categories. For every category you add to your blog post, there must be a markdown file for that category with [front matter](https://jekyllrb.com/docs/step-by-step/03-front-matter/){:target="_blank"} consisting of a variable `category_name`. **Example**: If you include `coding` category in your blog post as above, you must create a file `coding.md` inside `_categories` collection folder and add `category_name: coding` to the front matter.

Your categories collections folder may look as follows:

```
_categories
    |--coding.md
    |--jekyll.md
```
Make sure to include the following front matter in the categories markdown file.

**Coding category**: `coding.md`
{% highlight markdown linenos %}
---
category_name: coding
---
{% endhighlight %}

**Jekyll category**: `jekyll.md`
{% highlight ruby %}
---
category_name: jekyll
---
{% endhighlight %}

For more information on collections, refer to Jekyll step by step tutorials on [collections](https://jekyllrb.com/docs/step-by-step/09-collections/){:target="_blank"}.

## Config file
---

Since we are storing the blog categories as a collection, we must change the `_config.yml` file. Add the following code to your `_config.yml` file.

{% highlight yml linenos %}
collections:
    categories:
        output: true

defaults:
    - scope:
        path: ""
        type: "categories"
      values:
        layout: "category"

{% endhighlight %}

Read more about setting up the `_config.yml` file in Jekyll by following step by step tutorials on [collections](https://jekyllrb.com/docs/step-by-step/09-collections/){:target="_blank"}.

## Category list on blog post
---

You can create a `post.html` file inside your `_layouts`.  The `post.html` file will display your blog's content and the category links, redirecting the user to the respective category page.

{% highlight html linenos %}
{% raw %}
---
layout: default
---
<div>
    <h1>{{ page.title }}</h1>
    <div>
        {% assign categories = site.categories | sort %}
        {% for cat in page.categories %}
            {% for category in categories %}
                {% if category.category_name == cat %}
                    <a href="{{ site.baseurl }}{{ category.url }}">{{ category.category_name }}</a>
                    {% break %}
                {% endif %}
            {% endfor %}
        {% endfor %}
    </div>
</div>

<div>
    {{ content }}
</div>
{% endraw %}
{% endhighlight %}



## Category layout
---

To view the list of posts by category, you will need to create a `category.html` file inside the `_layouts` folder.

{% highlight html linenos %}
{% raw %}
---
layout: default
---

<div>
    <h1>Category: {{ page.category_name }}</h1>
</div>
<hr>
<div>
    {% assign posts = site.posts | sort: 'date' | reverse %}
    <ul>
        {% for post in posts %}
            {% if post.categories contains page.category_name %}
                <li>
                    <div>
                        <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
                        <div>
                            <div>
                                {% assign categories = site.categories | sort %}
                                {% for cat in post.categories %}
                                    {% for category in categories %}
                                        {% if category.category_name == cat %}
                                            <a href="{{ site.baseurl }}{{ category.url }}">{{ category.category_name }}</a>
                                        {% endif %}
                                    {% endfor %}
                                {% endfor %}
                            </div>
                        </div>
                        <p>{{ post.excerpt | markdownify }}</p>
                    </div>
                    <hr>
                </li>
            {% endif %}
        {% endfor %}
    </ul>
</div>
{% endraw %}
{% endhighlight %}

For more information on layouts, refer to Jekyll step by step tutorials on [layouts](https://jekyllrb.com/docs/step-by-step/04-layouts/){:target="_blank"}.

## Summary
---

* Create an array called `categories` in the front matter of a blog post.
* Create a collection of categories by creating a markdown inside `_categories` collection folder.
* Update the `_config.yml` file for categories collection and the category page.
* Add the list of categories to the blog post layout.
* Create a `category.html` file inside `_layouts` folder to see a list of all the blog posts for that category.

#### Image credit
---
Cover photo by [RetroSupply](https://unsplash.com/@retrosupply?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank"} on [Unsplash](https://unsplash.com/s/photos/blog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank"}
