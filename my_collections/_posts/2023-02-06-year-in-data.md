---
layout: post
title:  "Tracking Every Fifteen Minutes for a Year"
date:   2023-02-06 01:00:00 +1100
categories: [coding]
cover_image: 2023-02-06-cover.png
author: Pushkar Kadam
excerpt: I tracked everything I did for a year in fifteen minutes increment. Then, I visualised the data.
---

The year 2022 was the year of data for me.
I started the year by completing the Google Data Analytics course,
a new job as an Assistant Data Scientist,
and tracking everything I did in my life for a year in fifteen minutes increment.


### Why did I do this?

My brain has a way of making a mountain out of a molehill.
So, when I catch myself binge watching YouTube for several hours,
my brain goes into a chaos mode.
In this situation, I need someone to tell me,
*"You are doing fine, look at all the other awesome things you accomplished!"*

I remembered a blog post[^1], where someone tracked everything they did
in fifteen minutes increment for a year.
I just found this idea amazing and I decided to replicate their process.
I had one simple rule for this experiment: 
*Stop the experiment if it becomes stressful or boring.*

## The System
---

I used Google Sheets to input data.
Every row was a day and every column was the time in fifteen minutes
interval (Check the cover photo of this post).
I used conditional formatting to highlight the cells with colour for the
designated activities.
Another sheet tab was used to monitor the total activities in real-time
as I entered the data.

### Main Categories

The legends used for different categories are as follows:

| Activity | Symbol | Sub-categories|
|:--------|:------|:---|
| Sleep | S |
| Deep work | DW | Research, Online Course, Blogging, Data Analytics Coding, Maths |
| Culture | C| Reading, TV, Family, Friends, Games, Podcast, Music, Movie, Reading |
| Human Activity | H| Hygiene, Eating, Cooking, Laundry |
|Exercise | X | High intensity, low intensity, bouldering |
|Meditation | M |
|Procrastination | PR|
|Travel | T |
|Social Media | SM | LinkedIn, Twitter, Reddit
|Socialising | SOC |
|Self-improvement | SI | Self talk, Portfolio, Career, Finance, Training
|Work | W |
{:class="table table-sm table-bordered"}

### Sub-categories

I used hyphens for sub-categories.

**Example**: `DW-res` for research, `DW-code` for coding.

### Modifiers

I used underscores as modifiers to indentify the multi-tasking activities or add additional information, .

**Example**: `C-r_book` for reading a book, `C-r_blog` for reading a blog, 
`T_C-r_book` for reading a book while travelling.


## Overall Activities
---

{% include plots/year_in_data/all_activities.html %}

For the overall activites, I found it convenient to represent it on the scale
of days rather than hours.
It was obvious that sleep was going to take the top place in the activities.
I stacked the activities and the total number goes close to 400.
The extra days added to the overall activites is due to multi-tasking
such as travelling and reading a book at the same time which the system counts
as two activites.

### All activities stacked

{% include plots/year_in_data/stacked_activities.html %}

## Points
---

To ensure that my activites are quantified as good or bad, I decided to award
some points for doing something positive and deducting points for doing some
negative activities.

|Points | Activities|
|:---|:----|
|+4 |Deep work, high intensity workout|
|+3 |Reading, music practice, low intensity workout|
|+2 |Documentary, gratitude, meditation, socialising, friends|
|-4 |Procrastination, YouTube, Social Media|
{:class="table table-sm table-bordered"}

Having a point based system helped me to put a number to how well or worse my day went.
I started looking at life not only from work, learning
and self-improvement perspective, but also from other activites
such as exercise, building new friendships, and socialising.
The points also made me think about the minimum positive scoring activity that I could do if I found myself procrastinating.

The heat map and the violin graph show that I had a pretty consistent score
over the year except for some anomaly like `-45.5` on 14 January or `+58.25`
on 30 September.
Also, upon looking at the heat map, I can see that there are periods
when I am firing all engines followed by a crash for a day or two.

{% include plots/year_in_data/points.html %}

{% include plots/year_in_data/violin_points.html %}


## Deep Work
---

Last year, I spent nearly 500 hours on coding.
These hours contributed to some of my personal and work projects.
A full time software developer would definitely spend more than `500` hours
a year.
Other than that, I spent time on my research work.
Deep work activities make me re-think about the paradigm of 10,000 hours for mastery that has populated in the hustle culture.
There is a significant improvement in each of my deep work activities that I did
while just spending few hours a day over a year.


{% include plots/year_in_data/deepwork_breakdown.html %}

## Culture
---

Activites such as watching a movie, shopping, listening to music, practicing music,
hanging out with friends were a part of culture.

While cultural activities are the second most activites after sleep, there
are still certain activities like reading and music practice that I wish I 
could maximise.


{% include plots/year_in_data/culture_breakdown.html %}

### Music Practice

I am currently learning Irish Whistle in D and Piano.
In January and February, I was on a vacation.
This was the time when the piano was in my bedroom and I had unlimited access
to practice.
In March, I moved to a new place where I did not have access to a piano and only
practiced whistle.
I purchased a carry-on piano and the novelty added up to a spike in April.
In June I started a new job and research programme where I spent most of my time 
on campus.
Therefore, with limited access to my instruments at night and engaging in
other activites like gym, bouldering, or language practice, music practice
went on the back burner.

{% include plots/year_in_data/music_practice.html %}

{% include plots/year_in_data/music_line.html %}

### Socialising

I categorised socialising as the time spent with people on video call or in person.
I tracked both socialising with friends, colleague, and 
acquaintances together.

{% include plots/year_in_data/socialising.html %}

## Sleep
---

A consistent sleeping schedule is still one of my biggest challenge.
Sleep is always the first one to be compromised in favour of other activites.
I slept a total of `109.2` days in 2022.
If I do a quick math, we need eight hours of sleep at consistent hours
for healthy brain and body functions.
So, considering 8 hours for 365 days equals 2920 hours which is approximately
121.6 days.
This means that I am missing approximately `12` days worth of sleep.
This is terrifying to know.
Imagine going 12 days straight with no sleep!

{% include plots/year_in_data/sleep.html %}

## Exercise
---

I sub-categorised exercise as high intensity workout, low intensity workout, and bouldering.
I joined a gym in April but I did not get consistent until May.
Then, somewhere around September, I started going to Zumba and HIIT classes.
The group fitness classes and building a hangout routine with friends
revolving around exercise gave me an external anchor to stay consistent.
Also, the group activities make exercise fun.


{% include plots/year_in_data/exercise_high.html %}


### Bouldering

In 2022, I wanted to practice a sport.
The last time I was involved in sports was a decade ago during the school
summer break.
I considered activities like biking, tennis or badminton.
However, for biking weather is a variable to consider and for tennis and badminton,
I will need companions to play with.
So, I knew that I can easily find an excuse to get away from the sporting activity.
I also needed a sport where I could measure my progress
by quantifying my goals.
The prospect of making progress is essential component to establish a routine.

Bouldering was a perfect choice.
Since bouldering happens in-door, weather is not a concern, and I can climb on my own without awaiting any company.
The boulders are graded, so it is easy to measure the progress
over time.
Bouldering also helped me have a sense of community.
I am grateful to the new group of friends I made while bouldering.
This is the first time, I have followed through with any sport.
The key was to have a designated day and go there irrespective of 
the weather and company.

{% include plots/year_in_data/bouldering.html %}

## Vices
---

Bad habits are hard to give up.
For me, they are binge watching YouTube and mindlessly scrolling Social Media.
I knew that going cold turkey on these two habits would not be an option.
Unless I reach a saturation point of using a service that no longer
benefits me such as Facebook, Instagram, and Twitter.
Since I no longer needed these social media platforms, I was able to go cold turkey.


### YouTube

One thing I realised is that I cannot completely eliminate watching YouTube.
However, engaging in other activities ensure that I do not end up spending
seven hours watching random videos that YouTube autoplays for me.
The funny thing is that I often complain how I do not have time to watch a two
hour long movie whereas I am spending more than three hours watching YouTube.

{% include plots/year_in_data/youtube.html %}

### Social Media

One behavioural pattern I observed was that I would wake up and check Twitter
and Reddit by default.
It is fascinating to visualise this repetitive pattern.
This is a habit that I developed.
Just like YouTube, it is difficult to eliminate.
Though, being conscioulsy aware about when I engage in these activities,
I can target that time to try doing something else.

{% include plots/year_in_data/social_media.html %}


## Conclusion 
---

*What did I learn from this experiment?*
**Nothing!** 
It was simply fun to look out for my daily activities 
and have a system that gave me a feedback.
*Did it help me become super productive?* 
**Absolutely not!**
Despite being aware that waking up and watching YouTube on my bed
was going into my tracking system and reducing my points, I did that anyways.
Knowing that I had an unpredictable sleep pattern did not motivate
me to fix it.
In fact, noticing a bad sleep schedule worried me that I am damaging my brain
by not getting the desired amount of sleep.

There was something good that came out of this experiment.
I noticed that if I missed several days of an activity then I made
a conscious effort to do that activity.
Music practice is an excellent example where I would get a guilt trip
for not practicing enough and eventually doing the ceremonial fifteen 
minutes of practice.

Although, I did not do any form of statistical analysis on my data,
I noticed some correlation between different activities and
causation due to life events.
The points system helped me notice how there are certain sprints
where I am firing all engines and then I crash for a day or two.
On those crash days when I felt terrible of not being consistent,
my points system was a reminder that it is just one bad day.
There are several more data points just waiting to be analysed, but I
had to stop somewhere.

So, if this experiment did not make me super productive, why did I continue
with it?
The answer is simple. **Data is beautiful!**





---

[^1]: [Sample Size One](https://samplesize.one){:target="_blank"}