---
layout: post
title:  Down the Code Rabbit Hole
date:   2021-09-23 15:03:57 +1000
categories: coding
cover_image: 2021-09-23-cover.jpg
---

A month ago, I started working on the final project for my web development course. The project parameters were simple: use Django and JavaScript and do not make anything similar to other course projects. Apart from this, the students had a choice to build "whatever" they wanted. I like the freedom of creating "whatever" with no pre-determined technical specifications. Previous projects in the course had a strict set of technical specifications, and the students must complete all the project requirements to get a passing grade. However, when "whatever" I wanted was on the table, I naively planned out an 'inventory management system (Inv)' project design on a yellow post-it note, stuck it on the wall behind my computer, and started the project from scratch. Little did I know that the last one week would follow the cycle of Eat-Code-Sleep(?).

## Enter Git Flow

In this project, for the first time, I used the tool Git Flow. Git Flow is a command-line tool that automates the Git functionality, which helps manage the software versions. One can easily use Git commands to manage their project; however, Git Flow provides many simplified commands.  

**Example**: Creating a new `feature_branch` from a `develop` branch:

{% highlight bash %}
# Git
$ git checkout develop
$ git checkout -b feature/feature_branch

# Git flow
$ git flow feature start feature_branch
{% endhighlight %}

Both operations create a new branch named `feature/feature_branch` from `develop`, yet, Git Flow provides a more straightforward approach.

I could explain more about Git and Git Flow, but I believe several blogs that describe in-depth explanations are out there. Using a version control was beneficial because it saved me from the mayhem of hitting `CTRL+Z` to realise I hit too many of it that I lost the changes that I wanted to remain. There should be a `CTRL+Z` for a `CTRL+Z`.

## Technical Specifications

The projects I did at work had technical specifications (Tech Specs). Tech Specs give us constraints, and we, engineers, love constraints because it helps us know where to stop and plan accordingly. I started the Inv project with vague Tech Specs in my "mind" and some drawings on the post-it note. The more I developed the project, the more I realised that I needed to add more functionality for the functionality I planned before.

My thoughts on the process after I started coding:
* The user creates teams.
* The team creator is also the member and, by default, the team owner.
* Now, I realise that I need another table in the database which relates team members to the teams.
* Then, I figured I needed a way to add team members.
* But wait! Who can add the team members?
* Owner?
* Should the team have more than one owner, not only one member should be responsible for adding new members, right?
* The owner gets more functionality to manage the team and items in the team's inventory.
* What if the owner acts notoriously and starts deleting everything?
* Can the owner be removed?
* Wait! Who can remove the owner?
* OWNER!!! Maybe in the next release when I have thought that through (There is no release/deployment for this project planned)

This way, I was down the metaphorical rabbit hole of the code project, where everything became convoluted.

## Unit Tests to the rescue

When I first learned about unit tests for software, all I could do was laugh that "one writes the code that tests the other code." Yeah, but what tests should we write to test the code that tests the other code, very much akin to "Who watches the watchers?" My mates and I still joke about this. But, jokes apart, unit tests were something that kept me sane while the project grew in size. Every time I made changes, I ran the unit tests to check if I broke down something while creating something else. If any test failed, I could quickly address that function and fix it or go down the metaphorical rabbit hole until I give up, watch an episode of The Simpsons, and then get back to fix it.

## Conclusion

Sometimes, a feature that seems so apparent to be a part of an app does not exist. We often ask why I cannot do "this" with "that" app! I reckon I understand how difficult it is to add new features while ensuring that the old ones do not break. One needs to stop at some point, release the done and tested features and plan new things for the next release. Also, here's a note to self: plan out technical specifications and write down a project brief, especially on personal projects.

---
**Image Credit**: Photo by <a href="https://unsplash.com/@synkevych?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roman Synkevych</a> on <a href="https://unsplash.com/s/photos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
