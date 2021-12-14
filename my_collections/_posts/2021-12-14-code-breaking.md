---
layout: post
title:  "Solving a mystery with cryptography and python"
date:   2021-12-14 01:00:00 +1100
categories: [coding, cryptography]
cover_image: 2021-12-14-cover.jpg
author: Pushkar Kadam
---

One cloudy afternoon, while walking down the street, I saw an object tossed out of a speeding car. It was a bag. I was curious to check the contents. The contents looked suspicious, so I quickly snapped some photographs. Little did I know that I was about to embark on a crazy mysterious adventure for the next three days with little to no sleep at all.

Mysteries are always intriguing. So, I was thrilled when I found a 'stop a bank robbery' code-breaking challenge on Khan Academy. I have been learning maths from Khan Academy for a long time. Recently, I started learning about Cryptography and came across a fantastic code-breaking challenge. This blog outlines the process of decrypting secret messages with the help of a computer programming language called Python.


**<i class="bi bi-exclamation-triangle-fill"></i> Spoiler Alert!**
Following this, there are going to be spoilers to the puzzles. So, if you want to solve this on your own, I highly recommend you to go to [Khan Academy](https://www.khanacademy.org/computing/computer-science/cryptography/cryptochallenge/a/cryptochallenge-introduction){:class="alert-link"} to solve this puzzle. But, if you want to read a mystery blog, please read ahead, but at your own risk!
{:class="alert alert-warning"}

## Chapter 1: The discovery
---

The contents from the bag thrown out of the car were mysterious. There were blueprints, a circuit diagram, a newspaper clipping, a business card with a hand-written 250 number.

![bag far](/portfolio/assets/images/blogs/cryptography/bag_far.jpg){:class="img-fluid"}

![bag](/portfolio/assets/images/blogs/cryptography/bag.jpg){:class="img-fluid"}

![bag_contents](/portfolio/assets/images/blogs/cryptography/bag_contents.jpg){:class="img-fluid"}

![vault blueprints](/portfolio/assets/images/blogs/cryptography/vault_bp.jpg){:class="img-fluid"}

![circuit diagram](/portfolio/assets/images/blogs/cryptography/circuit.jpg){:class="img-fluid"}

![newspaper](/portfolio/assets/images/blogs/cryptography/newspaper.jpg){:class="img-fluid"}

![business card](/portfolio/assets/images/blogs/cryptography/business_card.jpg){:class="img-fluid"}

But, one item stood out among the rest. It seemed like a secret code.

![angles](/portfolio/assets/images/blogs/cryptography/angles.jpg){:class="img-fluid"}

After returning home, I heard the evening news that said:

> Two thieves in their mid-20s are suspected to be in the area; they have been known to strike in neighbouring towns. Just earlier this week, the AMCO insurance office was burglarised and documents were stolen. Reward is being offered for information leading to their arrest...
{:class="blog-blockquote"}

I realised, to break this code, I must retrace their steps.

## Chapter 2: Caesar
---

The business card looked promising. Luckily, I have a friend who works in Hudson Bay Lodge. I entered that dark hotel. My friend informed me that someone had checked into room 250 for three days. He gave me a copy of the key and told me that I only had two minutes to look.

When I entered the room, I saw a wastebasket with some papers. Luckily, I found clue #1, two encrypted messages.

![message 1 and 2](/portfolio/assets/images/blogs/cryptography/message1_2.jpg){:class="img-fluid"}

The messages are as follows:

**Message 1**:

```
gluhtlishjrvbadvyyplkoah
avbxjpwolypzavvdlhrvuu
leatlzzhnlzdpajoavcpnl
ulyljpwolyrlfdvykpzaola
pkkluzffivsvmklhaoput
fmhcbypalovsilpuluk
```
**Message 2**:
```
vwduwljudeehghyhubwklq
jlfrxogilqgsohdvhuhwxuq
dqbeoxhsuqwvieuydxowd
qgodupghvljqedvhgrqzk
ifkedqnbrxghflghrqldpvhw
wlqjxsvdihkrxvhfr
```

Before leaving the hotel, I noticed something else. It looked like an impression from another message. So, I scribbled with a pencil to reveal the hidden text underneath it. The text looked like another cypher.

![message 3](/portfolio/assets/images/blogs/cryptography/message3.jpg){:class="img-fluid"}

**Message 3**:
```
Klkbnqlcytfysryucocphgbdizz
fcmjwkuchzyeswfogmmetwwossd
chrzyldsbwnydednzwnefydthtd
dbojicemlucdygicczhoadrzcyl
wadsxpilpiecskomoltejtkmqqy
mehpmmjxyolwpeewjckznpccpsv
sxauyodhalmriocwpelwbcniyfx
mwjcemcyrazdqlsomdbfljwnbij
xpddsyoehxpceswtoxwbleecsax
cnuetzywfn
```

### Breaking the code

Codebreakers often look for a leak of information. Information leaks can take place in several ways. One way to observe information leak in shifting characters is to observe the frequency of letters, i.e. counting how many times a letter appears in the message.

In the English language, every paragraph has a frequency of letters used. This frequency chart, shown below, acts as a fingerprint. For example, the letter 'e' has the highest frequency. So, when we see an encrypted message, we must find a letter with the highest frequency. The letter with the highest frequency in the encrypted message often corresponds to 'e'. Let us put this theory into practice using the python programming language.

> You may want to use python packages such as Matplotlib and Jupyter Notebook to make coding easier for you.
{:class="alert alert-info"}

###### Import necessary python packages
{% highlight python linenos %}
import copy
import matplotlib.pyplot as plt
{% endhighlight %}

#### Message 1

Let us do a quick frequency analysis of encrypted message 1.

We must first define two functions that will help us count the frequency of letters in the encrypted message.

{% highlight python linenos %}
def char_frequency(message):
    """Takes message as input and returns the frequency of letters as a dictionary"""
    freq = dict()

    for c in message:
        freq[c] = freq.get(c, 0) + 1

    return freq


def sort_freq_plot(frequency):
    """Takes a dictionary of frequency as input and returns a sorted dictionary for plotting"""
    fr = dict()
    alphabets = 'abcdefghijklmnopqrstuvwxyz'

    for i in alphabets:
        if not i in frequency:
            frequency[i] = 0

    for i in sorted(frequency):
        fr[i] = frequency[i]

    return fr

{% endhighlight %}

Now, we must plot the frequency graph of the message that will help us find the type of cypher used.

{% highlight python linenos %}
# message
message1 = "gluhtlishjrvbadvyyplkoahavbxjpwolypzavvdlhrvuuleatlzzhnlzdpajoavcpnlulyljpwolyrlfdvykpzaolapkkluzffivsvmklhaoputfmhcbypalovsilpuluk"

freq1 = char_frequency(message1)
fr1 = sort_freq_plot(freq1)

# Plot frequency distribution
plt.figure(figsize=(16,6), dpi=80)
plt.grid()
plt.title("Frequency distribution of message 1")
plt.xlabel("Letters")
plt.ylabel("Number of occurrence")
plt.bar(list(fr1.keys()), list(fr1.values()), align='center')
{% endhighlight %}


![message1 frequency analysis](/portfolio/assets/images/blogs/cryptography/message1_freq.png){:class="img-fluid"}

The frequency graph of message #1 is similar to the frequency graph of any passage in the English language. In other words, in every passage in the English language, certain letters appear in large numbers than the others.

![English frequency](/portfolio/assets/images/blogs/cryptography/english_freq.png){:class="img-fluid"}


We can see that the letter `l` has the highest frequency of occurrence. When we compare the frequency distribution graph of message #1 and the English language, `l` and `e` have the largest peaks. Letter `l` is seven spaces away from `e`. So, the key must be seven. This encryption is an example of Caesar Cypher, where the messages are encrypted and decrypted using forward and backward shifts, respectively. The following example shows how we encrypt a message by shifting every letter by two spaces to get the encrypted message.
```
# Using caesar cypher

m: call sherlock
k: 2
e: ecnn ujgtnqem
```

We can either try using `key = 7` or try a brute force approach. In the brute force approach, we try every possible key from 0 to 25 to check for a message that makes sense. You may have a question regarding why go through all the trouble to do frequency analysis? The answer is that we may not be sure whether the encryption was done using Caesar Cypher. Frequency analysis tells us the type of encryption used.

[Insert code]

Finally, we have decrypted the first message. It is as follows:

[Insert decrypted message]

#### Message 2

Similar to message 1, we must also try
[Insert frequency analysis]

[Insert code]

## Chapter 3: Holbein
---

The second message from Caesar Cypher talked about "the symbol of death in Holbein". I searched the Holbein on the internet, and after going through several images, one image struck out. The image was a famous painting by Holbein called The Ambassadors. The painting is of two gentlemen standing with many objects in the background. However, there was a weird image at the bottom of the painting. Initially, it seemed like a log of wood. But, when I looked at the image from a different perspective, I noticed a hidden skull. So, perhaps the word 'skull' is the code word.

## Chapter 3: Vigenere
---

[Insert image of frequency distribution for message #3]

The third message had a different frequency distribution. We can conclude from the frequency distribution that we cannot use Caesar cypher because it is not a simple shift of all the letters. Each letter seems to have shifted with its key in the third message. However, we are not entirely helpless here. We got some help from message #2 that they will use Vigenere cypher for encryption in their future communications with the secret code word as `skull`. Vigenere cypher uses a secret code word where we shift every letter by the key associated with that word. Following is an example of how we encrypt a message `call sherlock` by using the code word `watson` to get an encrypted message.

```
m: call sherlock
s: wats onwatson
e: yaed guardgqx
```
So, we know which cypher to use and the code word. Knowing the codeword may not be as easy as we think. We are lucky when we know the secret code word `skull`. But, we still get gibberish when we implement the code word `skull` to decrypt message #3. Therefore, knowing the code word is not enough; it is also essential to know the length of the codeword.

To find the length of the codeword, we must find an information leak that often happens in long messages with repeating words. Since we are moving the same codeword across the encrypted message, we start seeing peaks in the distribution after a few intervals. You can use the following code to find these peak values.

[code to implement the distribution]

The following image shows the graph of peak values. The graph is imperfect, but we can see peaks at the 10th intervals. From these peaks, we can determine the length of the codeword is ten. But, `skull` is a five-letter word. However, if we double the letters, `sskkuullll`, it becomes the ten-letter secret codeword.

> Often, there will be a lot of uneven peaks. Cryptanalysis is not an easy task, and one often needs to guess. Knowing possible lengths can help you guess in the right direction.

Use the following code to implement the decryption process of the Vigenere cypher.

[Insert code]

After implementing the decryption algorithm, we get the decrypted message #3.
[Insert markdown version of message #3]

## Chapter 4: Polybius

#### Image credit
---
Cover photo by [alexey turenkov](https://unsplash.com/@2renkov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank"} on [Unsplash](https://unsplash.com/s/photos/detective?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank"}
