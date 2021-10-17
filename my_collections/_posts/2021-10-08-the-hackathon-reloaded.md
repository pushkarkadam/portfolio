---
layout: post
title:  The Hackathon Reloaded
date:   2021-10-08 16:30:00 +1030
categories: coding
cover_image: 2021-10-08-cover.jpg
---

Last weekend I participated in a *hackathon*. For context, following the events of 2020 A.D., we have started using *virtual hackathons* and *hackathons* interchangeably. If you are reading far into the future, from a space station or the Moonbase and see the planet Earth without any floating mess, then know that some of us were working on tracking that debris. If you are a sentient life form living somewhere near Alpha Centauri, then viola, you have found a fragment of human knowledge.

I participated in [NASA International Space App Challenge 2021](https://www.spaceappschallenge.org/). The event is an international hackathon where people from all over Earth form teams to address a challenge. Teams select a challenge they want to work towards and work on the challenge for 48 hours. The teams can prototype a Minimum Viable Product (MVP) application and submit a final report for judging.

## Tracking Satellites and Space Debris

Out of several challenges as the option, we selected to track known space debris. I have no background in astrophysics, and I had no idea how to execute this task. My assumption about how a space agency tracked satellites in space was as follows: There are antennas on Earth that keep receiving signals from satellites, and then, with the help of some complex geometry, the satellites are tracked. I could not have been more incorrect.

Tracking objects in space happens with the help of an algorithm (a step of instructions) and some good ol' maths. Space agencies keep information of the satellites in Two Line Element (TLE). TLE is a data format encoding that lists orbital elements of Earth-orbiting objects at any given point in time. A prediction formula estimates the position and velocity of a satellite in the past or future.

A TLE for `ISS (ZARYA)` (International Space Station) is as follows:

{% highlight ruby %}
ISS (ZARYA)
1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927
2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563537
{% endhighlight %}

We use mathematical models called SGP4 to calculate the position of the satellite or space debris orbiting around Earth. I treat these mathematical models as a black box. I know what input to give; it does the magic of calculations and gives me the desired output. The output is in the form of position (latitudes and longitudes), altitude, and velocity. We use this information to map the satellites and known debris on the map. A suffix `DEB` after the satellite's name indicates the debris of the given satellite. For example, `ISS DEB` indicates debris of `ISS`.

## Software development

For the first time, I had an opportunity to use Git Flow to its maximum potential. We anticipated four developers from different locations to work on the project. Without some guidelines, it would have been chaos to keep track of development. Git Flow is a version control method that ensures that the `master` or `main` branch is protected and all the development happens on the `develop` and `feature` branches.

Git Flow is a simple concept.
1. We start with two branches, `master` and `develop`.
2. From the `develop` branch, we create a `feature/my_awesome_feature` branch. We make all the changes on this feature branch.
3. Once the feature is complete, we merge the feature branch to the `develop` branch.
4. We create a `release/1.0.0` branch from the `develop` branch.
5. We do all sorts of documentation work on the `release/1.0.0` branch, and once complete, we merge the release branch to the `master` and `develop`.

The process may sound a bit complicated for someone who makes simple programs, and not many people would prefer working with Git Flow during a hackathon. But, when you have several people making several changes, things can quickly get complicated where you end up losing your sanity.

## Reflection

This hackathon was fun. I learned new concepts, applied my newly learned skills, met new people, and picked up some new things on the way. However, due to the time difference of various locations, it became challenging for some members to synchronise with the meeting times. We had fewer voice calls than last year, and some team members were absent due to prior commitments or unforeseen circumstances.

I always prefer the in-presence hackathons since the energy of everyone in the event is contagious, and it ensures everyone stays committed to the cause. It is even fun when you serendipitously encounter new people right on the first day of the event, brainstorm new ideas and spend so much time working on a common goal that it seems like you have known your teammates for a lifetime.


---
**Image Credit**: Cover photo by <a href="https://unsplash.com/@comparefibre?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Compare Fibre</a> on <a href="https://unsplash.com/s/photos/the-matrix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
