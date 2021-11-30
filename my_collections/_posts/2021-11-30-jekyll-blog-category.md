---
layout: post
title: "Categorise Jekyll blog posts"
date: 2021-11-30 10:00:00 +1100
categories: [coding, jekyll]
cover_image: 2021-11-30-cover.jpg
---

As the number of my blog posts increases, I need to categorise them. I wanted a category badge on every blog post, and when the users click on a category badge, they can see a page with the collection of blogs belonging to that category. This blog post highlights the steps I took to categorise blog posts.

## Problem statement
---

To save some time for the readers, let me state what problem I am going to address. The problem statement is as follows:

> The blog post has a list of categories. The reader can click on a category link, and the link will redirect the user to a page that lists all the blog posts belonging to that category.

## Blog posts
---

When you create a blog post, make sure to include `categories` in your front matter. Should you choose to create multiple categories, you can create an array such as `[category0, category1, category2]`. Create blog posts inside the `_posts` folder. Your posts will look as follows:

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

## Categories collection
---

Create a collection of categories. For every category you add to your blog post, there must be a markdown file for that category with some front matter. **Example**: If you include `coding` category in your blog post as above, you must create a file `coding.md` inside `_categories` collection folder. We use the variable `category_name` in the front matter to link the category to the blog post.

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

## Config file
---

Since we are storing the blog categories as a collection, we must change the `config.yml` file. Add the following code to your `config.yml` file.

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

## Category list on blog post
---

You can create a `post.html` file inside your `_layouts`.  The `post.html` file will display your blog's content and the category links, redirecting the user to the categories page.

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

## Summary
---

* Create an array called `categories` in the front matter of a blog post.
* Create a collection of categories by creating a markdown inside `_categories` collection folder.
* Update the `config.yml` file for categories collection and the category page.
* Add the list of categories to the blog post layout.
* Create a `category.html` file inside `_layouts` folder to see a list of all the blog posts for that category.

#### Image credit
---
Cover photo by [RetroSupply](https://unsplash.com/@retrosupply?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank"} on [Unsplash](https://unsplash.com/s/photos/blog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank"}
