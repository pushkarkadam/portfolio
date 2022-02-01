---
layout: post
title:  "On the Laws of Robotics"
date:   2022-01-29 01:00:00 +1100
categories: [essay]
author: Pushkar Kadam
cover_image: 2022-01-29-cover.jpg
excerpt: "Isaac Asimov developed the three laws of robotics. I have always been curious about implementing the three laws in real humanoid robots. Here's a blog post where I outline the possible ways of implementing the three laws while asking several questions regarding the ethics of developing humanoid robots. Bonus story in the beginning."
---

*Three laws of Robotics. What lies beyond the three laws?* Zophia often asked herself this question. She was sitting in front of the hearth in a wooden cabin.
The flames from the hearth illuminated only a part of the cabin. Zophia could see a faint shadow in the niche where Jindaer stood.
*What lies beyond the three laws?* She was deep in her thoughts. *I want to be alone for a while.*
"Jindaer, I wish to be alone for a while. Please stand outside the door of the cabin", said Zophia.
*Please. A strange word. It dates back to when humans asked each other for small favours. For some reason, that word had stuck with speech. With Jindaer gone, I will be alone. But, what does being alone really mean?*

Zophia heard the creaky sound of the hinges of the wooden door. When Jindaer walked out, she heard the sound of the door slamming.
*Not even a nod of acknowledgement. They simply obey. Thousands of them working on my estate and millions on this planet. They exist to protect me, to obey my orders, and to protect themselves.*
She straightened up on her wooden chair. Her arms tightly clung to the armrest. *How have I got used to this lifestyle?
When did the obsession with archaic things begin? The wooden cabin. The hearth. The chair. The long skirt. The long hairs, tied with an ancient hair clip. That Spacer. He is the one responsible.*

She heard the door open. The sound of the footsteps on the wooden floor was not loud enough to disturb her thoughts.
"Still thinking?" said a soft melodious voice.
"Xeny, have you ever considered what happens when you die?", asked Zophia while still staring at the hearth.
"I choose not to think about it", answered Xeny. *You choose not to think about it, or you cannot think about it. Such a cold response. Am I still alone?*

"It is scarce to see someone alone", said Xeny.

"Alone?", Zophia trembled. "I...uh...am... am always alone." Zophia adjusted the strands of her long black hair over her ears, combed them with her fingers to her back, and tied them in a knot.

"You love your long hairs, don't you?" chuckled Xeny while playing with a strand of her short blond hair. "Well, I have never seen you alone. You always have R. Jindaer Florin with you, don't you?"

"R. Jindaer Florin? Xeny, you know I don't like using *that* prefix for Jindaer." Zophia got up and straightened her long brown skirt. She pulled up the sleeves up to the elbow of her black coloured upper garment, which had a close-fitted collar that covered her neck. She looked at Xeny's face shining brightly from the light coming from the hearth. *Xeny is dexterous, poised, and beautiful beyond measure*. Zophia glanced in her deep blue eyes and asked, "Xeny, who are you?"

"You know who I am", answered Xeny. Her comely smile spanned her face while her deep blue eyes pierced Zophia's dark brown eyes.

*Xeny answers in riddles. She always does that. Her eyes show that she knows what I am thinking. That Spacer. He is the one responsible.* Zophia did not say anything. *I know who you are, Xeny. But I hope I am wrong. That Spacer. He is the one responsible*.
"I think I am tired. I have an appointment with the Bureau tomorrow. I will need some rest before I present my research."

"The modifications of the three laws?" asked Xeny.

"Uh...yes." *I never told her about the modifications*. Zophia pulled down the sleeves of her upper garment to cover her arms up to her wrists and untied her long black hair, which flowed on her back with the ends almost reaching her waist.
*I should have asked Jindaer to get my hair clip from the bungalow instead of making him stand outside the cabin. HIM*. Zophia smirked.
She started walking to the door. *Yes, I could have asked Jindaer to get my hair clip from the bungalow. But then, who would have protected me? I would really be alone. I don't want to be alone*.

Zophia opened the door, and as she stood there thinking, she turned back to see Xeny still sitting on the wooden chair, facing the hearth.
"Xeny, will you accompany me to the Bureau tomorrow?" asked Zophia.

"Yes, I will", Xeny answered while her back still faced Zophia.

Zophia shut the door. She saw Jindaer standing right in front of the door of the cabin. *He stands precisely where I ordered him to stand. Protecting me. Obeying me. Protecting himself*.
She looked at the closed door. *I know who you are, Xeny. That Spacer. He is the one responsible*.

Zophia interlocked her right arm with Jindaer's left arm while walking to her bungalow. "Jindaer, I know I can trust you", she whispered.
*I want my Jindaer to protect me. To obey me. To protect himself. The three laws. But what lies beyond the three laws?*

They entered the bungalow. Jindaer separated from Zophia and walked to one of the nine niches in her main room.
Zophia looked at Jindaer, who stood quietly in the niche, waiting for her orders. *R. Jindaer Florin, I want you to protect me, obey me, and protect yourself. I know who you are, Xeny. I know what you are.*

*-Pushkar*

## Three Laws of Robotics
---

I hope you enjoyed the story at the beginning of this blog post. It is my own story inspired by Asimov's robot stories.
Isaac Asimov's stories on robots have been my first introduction to robotics science fiction literature.
Asimov's robots are bipeds resembling humans and programmed by the three laws of robotics.
In his stories, the three laws of robotics are the safety mechanism that humans built in the robots to ensure the safety of the humans.
The three laws paint a utopian picture of how humans and robots could co-exist peacefully in a society, with the latter serving the former.
Despite the safety feature provided by the three laws of robotics, Asimov often used these three laws to create a conflict in the plot of his stories.

>Three laws of robotics:
1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.
2. A robot must obey the orders given by human beings except where such orders would not conflict with the first law.
3. A robot must protect its own existence as long as such protection does not conflict with the first or second law.

While Asimov's robots worked within the parameters of the three laws, our current robots are mostly non-biped and are designed to perform continuous repetitive tasks.
However, how would the three laws work if we created humanoid robots embedded with artificial intelligence (AI)?

How do we embed the three laws in our robots? I have often asked myself this question. Lately, I have given some thought to it.
This blog post will be less technical and more of an essay on the three laws of robotics and going down the metaphorical rabbit hole with some philosophical questions of a functioning three laws safe robot.

## The First Law
---

>A robot may not injure a human being or, through inaction, allow a human being to come to harm.
{:class='blog-blockquote'}

One of the fascinating parts of implementing these laws is converting these statements into something that a computer or a robot can understand.
The first law statement raises questions such as, *What is an injury?*, *What does inaction mean?* and *How do we define harm?*
But, the most crucial question, *How do we define a human being?*

Of course, a dictionary would define all these terms well. But, up to what extent should we extend our search parameters.
For example, when a *human being* is about to be injured or harmed, a robot must not allow this to happen.
Injury and harm come in various types. Humans are capable of harming other human beings and, at the same time, capable of harming themselves.
*Human beings* can harm themselves voluntarily in the short term by playing sport or long term by consuming illicit substances.
But isn't procrastination a harmful behaviour too? Aren't some thoughts harmful as well?

I think we can simplify this problem. We consider our robots have visual receptors, a.k.a. eyes, and the robot AI can process all the images.
We can train the robot to identify and interpret certain human behaviours as harmful.
We can also train the robot to continuously monitor the environment to detect any potential harm to any human nearby.

{% highlight python %}
if(human_is_at_harm):
    save_human()
{% endhighlight %}

I am sure saving a human being will not be as simple as the pseudocode mentioned above.
Also, we completely ignore the robot kinematics, which relates to the motion of all the machine components in the robot joints that allow the robot to reach a particular location.
This raises more questions than it answers. This is because we still think of robots with multiple actuators on their joints, allowing them to do more.
*Human beings* do not have motors in our elbow. So, what if we invent a series of artificial fibres for a robot body capable of movement by electric currents.

<blockquote class="blockquote text-center">
  <p class="mb-0">Biology is superficial, intelligence is artificial.</p>
  <footer class="blockquote-footer">Grimes in <cite title="We Appreciate Power (Miss Anthropocene)">We Appreciate Power (Miss Anthropocene)</cite></footer>
</blockquote>

## The Second Law
---

>A robot must obey the orders given by human beings except where such orders would not conflict with the first law.
{:class='blog-blockquote'}

I like this law as it provides a safety feature where a robot cannot be ordered to harm another *human being* because, according to the first law, a robot should not injure a *human being*.

*How do we implement the second law?* We train the robot AI with speech recognition.
We use natural language processing (NLP) to train the AI to understand the speech and the context.
This will allow the robot AI to correctly comprehend the human order.
The robot AI must be extensively trained so that a human does not trick a robot with unconventional commands, which would eventually cause harm to a human being.

{% highlight python %}

def obey(human_order):
    if (human_harmed(human_order)):
        do_nothing()
    else:
        execute_order(human_order)
{% endhighlight %}

## The Third Law
---

>A robot must protect its own existence as long as such protection does not conflict with the first or second law
{:class='blog-blockquote'}

So, if you order the robot to destroy itself, the second law will accept the order to check if the order causes harm to the *human being* or to itself.
If either condition is true, the robot will not execute any orders. This means the code in the Second law section must be modified.

{% highlight python %}

def obey(human_order):
    if (human_harmed(human_order) or self_harmed(human_order):
        do_nothing()
    else:
        execute_order(human_order)

{% endhighlight %}

But what if the robot sees the harm coming to itself. So, again, the robot must monitor the environment and process millions of images to identify a threat to the human and itself. In the case where a *human being* is about to be harmed, then according to the first law, the robot must save the *human being*. There is an Asimov story where a robot is stuck in a continuous loop where it sees a *human being* at harm, and saving that *human being* would involve the robot harming itself, which goes against the third law.

## The Zeroth Law

>A robot may not harm humanity or, by inaction, allow humanity to come to harm.
{:class='blog-blockquote'}

The zeroth law supersedes all three laws.
In Asimov's stories, robots themselves developed the zeroth law after identifying that humanity is the most essential component of the galaxy.
So, by the zeroth law, sacrificing few humans would be acceptable if the robots could save the human species as a whole.

*How do we implement the zeroth law?* I think we should let the robot's positronic brain develop this independently.

## Some Concluding Thoughts
---

In Asimov's stories, humans become very much reliant upon robots.
*Human beings* do not go outside without having at least one of their robots with them.
This is not much different from our habits of carrying our smartphones with us.
If we compare robots to smartphones, should each robot have a unique identity?
When we buy a new smartphone, we enter our account credentials, and the new smartphone picks everything from the old smartphone backed up by a company's cloud storage.
The new smartphone still contains all our old data like contact details, applications, and photos.
Should robots be like these smartphones?
Should they live with you while they back everything to the company's cloud that provides you with the robot?
Or should robots be unique machines with individual traits like a *human being*?

We train AI by collecting data. The trained AI models are then updated to all our devices and smartphones.
Should robots be trained in basic operations before they are dispatched?
Or should they be collectively trained by the data collected by each robot?
Earlier, we tried to simplify the logic of the three laws of robotics.
But, if we were to train a neural network on the robot's positronic brain, it would be utterly unknown how the logic of the three laws exists in the robot's positronic brain.
Our only assurance will be to experiment with different scenarios to check if the robot is three laws safe with the unknown logic.
Once we have done enough experiments, we can certify the robot to be three laws safe.

*What happens when a robot malfunctions?* Do the companies that provide robots collect the data relating to the malfunctions and patch the robot's software? Then, once the malfunction is fixed on one robot with a software update, should that software update be implemented in all the robots? This would be similar to the companies fixing bugs on software by updating the software via the internet. Imagine how expensive would it be if the companies had to recall their hardware back to the factory with every minor issue with the software.

Asimov also introduced humaniform robots, which are exactly like humans in appearance.
Eventually, their programming becomes so advanced that they define themselves as *human beings*.
*How would the humaniform robots work?* I think this question will involve going further deep down the metaphorical rabbit hole.

## Author's note
---

This was a bit extensive essay/blog/whatever_this_is.
I know that I am a bit naive in predicting the implementation of the three laws.
I can see the future version of me laughing over my naivety over this topic.
I started with a story in this blog post because I have always found that stories helped me solidify learning and made me curious to learn more about a topic.

There are several questions to answer when developing a humanoid robot.
While asking the engineering questions, we often forget the fundamental question, "why should we develop humanoid robots?"
On the surface, I would answer this question on the likes of "We should develop humanoid robots which could help humanity become a multi-planetary species", or "Perhaps robots are the next evolutionary stage of sentient life-form".
But, deep down, I think I have a simple answer, "We should develop humanoid robots because it is cool. It shows the ultimate advancement that humans are capable of achieving through collective efforts."

If you, the reader, have made it this far in the blog, I am grateful to you for dedicating your time to reading some of my thoughts.

## Image credit
---

Cover photo by <a href="https://unsplash.com/@aideal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aideal Hwa</a> on <a href="https://unsplash.com/s/photos/science-fiction?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
