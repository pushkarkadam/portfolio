---
layout: post
title:  "Autodirs v1.1.0 updates"
date:   2021-11-15 18:00:00 +1100
categories: [coding, opensource]
cover_image: 2021-11-15-cover.jpg
---

The power of open-source is in contribution. This contribution not only requires coding but also requires requesting something out of the project. One such feature request from a fellow member of the open-source community led to a fantastic coding adventure for the past few months.

A few years ago, I started an open-source project called [Autodirs](https://pypi.org/project/autodirs/){:target="_blank"}. This project helped me automate the folder (directory) creation on my computer. Automatically creating folders saved me hours from manually creating a list of folders. The time saved to create a list of folders motivated me to develop more methods that other programmers can use as they see fit for their projects. Thus, a programmer finding and using this project became a modest measure of success.

A few months ago, I received an email from a fellow programmer who was using Autodirs. While he found this project helpful, he had a typical use case in his mind that I did not anticipate while developing this project. He wanted to create a nested folder structure (a folder within a folder within a folder...). Although he required a specific nested folder structure for his project, I saw it as an opportunity to develop a generalised function that could create a nested folder structure as the user sees fit. This user-defined folder structure should be easy to use and must help users create a nested folder structure to the n-th level.

Ensuring simplicity in usage, I wanted to create a program where a user creates a folder structure in a text file. This text file will have an indented list of items as per the folder structure the user wants. Following is an example of the indented items list that identifies the parent and child folders.

```
MAYORS
PLANETS
    ANACREON
    TERMINUS
    TRANTOR
        IMPERIAL
            PALACE
        MYCOGEN
```
Then, by using a method from Autodirs, the user can create a directory structure as follows:

{% highlight bash %}
├── MAYORS
└── PLANETS
    ├── ANACREON
    ├── TERMINUS
    └── TRANTOR
        ├── IMPERIAL
        │   └── PALACE
        └── MYCOGEN
{% endhighlight %}

For more information on developing your software by using the Autodirs package or creating a folder structure as mentioned above, please refer to [Autodirs documentation](https://autodirs.readthedocs.io/){:target="_blank"}.

In conclusion, the new functionality of creating folder structure from an indented list resulted from a request from someone in the open-source community. While creating this open-source project, I started with a modest goal: if at least one person finds it on the internet and uses it, I will consider it a success. The goal was very modest, yet I am grateful that at least one person reached out to me with a specific problem that motivated me to add new functionality to this project.

---
Cover photo by <a href="https://unsplash.com/@sw_creates?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Savannah Wakefield</a> on <a href="https://unsplash.com/s/photos/folders?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
