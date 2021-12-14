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
Following this, there are going to be spoilers to the puzzles. So, if you want to solve this on your own, I highly recommend you to go to [Khan Academy](https://www.khanacademy.org/computing/computer-science/cryptography/cryptochallenge/a/cryptochallenge-introduction){:class="alert-link"}{:target="_blank"} to solve these puzzles. But, if you want to read a mystery blog and find out how to do cryptanalysis, please read ahead.
{:class="alert alert-danger"}

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

Transcripts of the above messages:

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

### Cracking the code

Codebreakers often look for a leak of information. Information leaks can take place in several ways. One way to observe information leak in shifting characters is to observe the frequency of letters, i.e. counting how many times a letter appears in the message.

In the English language, every paragraph has a frequency of letters used. This frequency chart, shown in *Fig. 1*, acts as a fingerprint. The letter `e` has the highest frequency. So, when we see an encrypted message, we must find a letter with the highest frequency. The letter with the highest frequency in the encrypted message often corresponds to `e`. Let us put this theory into practice using the python programming language.

{% include image.html url="/portfolio/assets/images/blogs/cryptography/english_freq.png" description="<strong>Fig. 1</strong>. Frequency distribution of letters in the English language" %}

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
# message 1
message1 = "gluhtlishjrvbadvyyplkoahavbxjpwolypzavvdlhrvuuleatlzzhnlzdpajoavcpnlulyljpwolyrlfdvykpzaolapkkluzffivsvmklhaoputfmhcbypalovsilpuluk"

# Get frequency of letters in the message
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

{% include image.html url="/portfolio/assets/images/blogs/cryptography/message1_freq.png" description="<strong>Fig. 2</strong>. Frequency distribution of letters in message 1" %}


The frequency graph of message 1, shown in *Fig. 2*, is similar to the frequency graph of any passage in the English language, shown in *Fig. 1*. We can see that the letter `l` has the highest frequency of occurrence. When we compare the *Fig.1* and *Fig. 2*, `l` and `e` have the largest peaks. Letter `l` is seven spaces away from `e`. So, the key must be `7`. This encryption is an example of Caesar Cypher, where the messages are encrypted and decrypted using forward and backward shifts, respectively. The following example shows how we encrypt a message by shifting every letter by two spaces to get the encrypted message.
```
# Using caesar cypher

m: call sherlock
k: 2
e: ecnn ujgtnqem
```

We can either try using `key = 7` or try a brute force approach. In the brute force approach, we try every possible key from 0 to 25 to check for a message that makes sense. You may have a question regarding why go through all the trouble to do frequency analysis? The answer is that we may not be sure whether the encryption was done using Caesar Cypher. Frequency analysis tells us the type of encryption used.

First, we define a decrypting function as follows:

{% highlight python linenos %}
def decrypt_caesar(message, key):
    """Takes an encrypted message and the key and returns a decrypted message"""
    deciphered = ""
    for c in message:
        deciphered += chr((ord(c) - ord('a') - key) % 26 + ord('a'))

    return deciphered
{% endhighlight %}

Then, we execute the function by using the following code:

{% highlight python %}
print(decrypt_caesar(message1, 7))
{% endhighlight %}

We get the following output:

{% highlight python %}
zenameblackoutworriedhtatouqcipheristooweakonnextmessageswitchtovigenerecipherkeywordisthetiddensyybolofdeathinmyfavuriteholbeinend
{% endhighlight %}

Reorganising the output, we get the first decrypted message. Message 1 is as follows:

```
ze name blackout worried htat
ouq cipher is too weak
on next message
switch to vigenere cipher
keyword is the tidden syybol of death
in my favurite holbein end
```

#### Message 2

Similar to message 1, we must also try frequency analysis on message 2. We can use the following code to get the frequency distribution of message 2.

{% highlight python linenos %}
# message 2
message2 = "vwduwljudeehghyhubwklqjlfrxogilqgsohdvhuhwxuqdqbeoxhsuqwvieuydxowdqgodupghvljqedvhgrqzkifkedqnbrxghflghrqldpvhwwlqjxsvdihkrxvhfr"

# Get frequency of letters in the message
freq2 = char_frequency(message2)
fr2 = sort_freq_plot(freq2)

# Plot frequency distribution
plt.figure(figsize=(16,6), dpi=80)
plt.grid()
plt.title("Frequency distribution of message 2")
plt.xlabel("Letters")
plt.ylabel("Number of occurrence")
plt.bar(list(fr2.keys()), list(fr2.values()), align='center')
{% endhighlight %}

{% include image.html url="/portfolio/assets/images/blogs/cryptography/message2_freq.png" description="<strong>Fig. 3</strong>. Frequency distribution of letters in message 2" %}

*Fig. 3* shows the frequency distribution of message 2. In Fig. 3, `h` has the highest peak. `h` is three letters away from `e`. Therefore, the key must be `3`. We can use the following code to decrypt message 2.

{% highlight python %}
print(decrypt_caesar(message2, 3))
{% endhighlight %}

We get the following output:

{% highlight python %}
startigrabbedeverythingicouldfindpleasereturnanyblueprntsfbrvaultandlarmdesignbasedonwhfchbankyoudecideoniamsettingupsafehouseco
{% endhighlight %}

Now, we have the decrypted second message as follows:

```
start i grabbed everything i could find
please return any blueprnts fbr vault and larm
design based on whfch bank you decide on
i am setting up safe house co
```

## Chapter 3: Holbein
---

The first message from Caesar Cypher talked about `the hidden symbol of death in Holbein` and `switch to vigenere cipher`. I searched the Holbein on the internet, and after going through several images, one image struck out. The image was a famous painting by Holbein called The Ambassadors.  *Fig. 4* shows The Ambassadors by Hans Holbein the Younger.

{% include image.html url="/portfolio/assets/images/blogs/cryptography/holbein.jpg" description="<strong>Fig. 4</strong>. The Ambassadors by Hans Holbein the Younger (Image credit: The National Gallery, UK)" %}

The painting is of two gentlemen standing with many objects in the background. However, there was a weird image at the bottom of the painting. Initially, it seemed like a log of wood. But, upon seeing this image from a different perspective, as seen in *Fig. 5*, one notices a hidden skull. So, perhaps the word `skull` is the code word.

{% include image.html url="/portfolio/assets/images/blogs/cryptography/holbein_skull.jpg" description="<strong>Fig. 5</strong>. The anamorphic skull as restored in 1998, viewed here at an oblique angle from The Ambassadors by Hans Holbein the Younger (Image credit: The National Gallery, UK)" %}

## Chapter 3: Vigenere
---

Using the following code, we can plot the frequency distribution of message 3.

{% highlight python linenos %}
# message 3
message3 = "klkbnqlcytfysryucocphgbdizzfcmjwkuchzyeswfogmmetwwossdchrzyldsbwnydednzwnefydthtddbojicemlucdygicczhoadrzcylwadsxpilpiecskomoltejtkmqqymehpmmjxyolwpeewjckznpccpsvsxauyodhalmriocwpelwbcniyfxmwjcemcyrazdqlsomdbfljwnbijxpddsyoehxpceswtoxwbleecsaxcnuetzywfn"

# Get frequency of letters in the message
freq3 = char_frequency(message3)
fr3 = sort_freq_plot(freq3)

# Plot frequency distribution
plt.figure(figsize=(16,6), dpi=80)
plt.grid()
plt.title("Frequency distribution of message 3")
plt.xlabel("Letters")
plt.ylabel("Number of occurrence")
plt.bar(list(fr3.keys()), list(fr3.values()), align='center')
{% endhighlight %}

{% include image.html url="/portfolio/assets/images/blogs/cryptography/message3_freq.png" description="<strong>Fig. 6</strong>. Frequency distribution of letters in message 3" %}

The frequency distribution of message 3, shown in *Fig. 6* do not follow a standard pattern, as seen in *Fig. 1*. We can conclude from the frequency distribution that we cannot use Caesar cypher because it is not a simple shift of all the letters. Each letter seems to have shifted with its key in the third message. However, we are not entirely helpless here. We got some help from message 1 that they will use Vigenere cypher for encryption in their future communications with the secret code word as `skull`.

Vigenere cypher uses a secret code word where we shift every letter by the key associated with that word. Following is an example of how we encrypt a message `call sherlock` by using the code word `watson` to get an encrypted message.

```
m: call sherlock
s: wats onwatson
e: yaed guardgqx
```

So, we know which cypher to use and the code word. Knowing the codeword may not be as easy as we think. We are lucky when we know the secret code word `skull`. But, we still get gibberish when we implement the code word `skull` to decrypt message 3. Therefore, knowing the code word is not enough; it is also essential to know the length of the codeword.

To find the length of the codeword, we must find an information leak that often happens in long messages with repeating words. Since we are moving the same codeword across the encrypted message, we start seeing peaks in the distribution after a few intervals.

### Cracking the code

We shift the message as follows and find the coincidences, i.e. the letters of the shifted message with one letter to the right that matches the original cyphertext. Following is an example of shifting the cyphertext.

```
ibmiaqpztphflqypu... <-- original cyphertext
 ibmiaqpztphflqyp | 0
  ibmiaqpztphflqy | 0
   ibmiaqpztphflq | 2
    ibmiaqpztphfl | 0
     ibmiaqpztphf | 0
      ibmiaqpztph | 1
       ibmiaqpztp | 0
```

In the above shift of messages, the column on the right shows the number of letters matching the cyphertext. When iterating over the message, we will find peaks at different intervals, and the intervals in between the peaks tell us the length of the word. Though, this is not a perfect method as it only gives you an estimate regarding the length of the word. Sometimes, there may be peaks observed at different locations where you may have to guess.

We can use the following code to find these peaks. First, we need to define two functions that quantify messages to a list of shifting characters and find the coincidence in the quantified messages with the original cyphertext.

{% highlight python linenos %}
def quantify_message(message):
    """Takes the message and returns a list of quantified messages with on right shift"""
    d_message = copy.deepcopy(message)
    text = list(d_message)

    new_messages = []

    while text:
        text.pop(-1)
        new_messages.append("".join(text))

    return new_messages

def coincedences(message):
    """Takes a list of messages with one right shift in each message
    and finds words that coincide with the main message
    """
    count_dict = dict()
    loop_iter = 0

    repeating_messages = quantify_message(message)

    for m in repeating_messages:    
        count = 0
        for i in reversed(message):
            for j in reversed(m):
                if i == j:
                    count += 1
                m = m[:-1]
                break
        count_dict[str(loop_iter)] = count
        loop_iter += 1

    return count_dict
{% endhighlight %}

Then, we implement the following code to get the graph of intervals.

{% highlight python linenos %}
# Using only first 100 characters of the cyphertext
freq_d = coincedences(message3[:100])

# Plotting the graph
plt.figure(figsize=(20,6), dpi=80)
plt.xticks(rotation=90)
plt.grid()
plt.title("Frequency of coincidences")
plt.xlabel("Shifts (Iteration by one shift)")
plt.ylabel("Number of coinciding letters")
plt.bar(list(freq_d.keys()), list(freq_d.values()), align='center')
{% endhighlight %}

{% include image.html url="/portfolio/assets/images/blogs/cryptography/message3_intervals.png" description="<strong>Fig. 7</strong>. Intervals of coincidences message 3" %}

*Fig. 7* shows the graph of peak values. The graph is imperfect, but we can see peaks at the 10th intervals. From these peaks, we can determine the length of the codeword is ten. But, `skull` is a five-letter word. However, if we double the letters, `sskkuullll`, it becomes the ten-letter secret codeword.

> Often, there will be a lot of uneven peaks. Cryptanalysis can sometimes be difficult, and one often needs to guess. Knowing possible lengths can help you guess in the right direction. Also, one needs to resort to trial and error with different combinations of the known keyword.
{:class="alert alert-info"}

Use the following code to implement the decryption process of the Vigenere cypher. First we define a function to perform the decryption and then we execute the function to get the decrypted text.

{% highlight python linenos %}
def vigenere_decrypt(message, secret):
    """Takes cyphertext and secret word and returns the plaintext"""
    code = []
    for c in secret:
        code.append(ord(c) - ord('a'))

    encoding = []
    decrypted = ""

    q = len(message) // len(secret)
    r = len(message) % len(secret)

    encoding = code * q
    remaining = code[:r]
    encoding.extend(remaining)

    for c, e in zip(message, encoding):
        decrypted += chr((ord(c) - ord('a') - e) % 26 + ord('a'))

    return decrypted

{% endhighlight %}

Implement the following function:

{% highlight python linenos %}
# Skull was the hidden symbol of death in Holbein the younger, The Ambassador painting.
secret = "sskkuullll"
print(vigenere_decrypt(message3, secret))
{% endhighlight %}

The output of the above code will be as follows:

{% highlight python %}
startwarningiheardreportofourbreakinonthenewsstillwaitingonalarmtestschedulesiwillreportbacktomorrowwithfinalplanforextrasecurityisuggestweburnourlettersafterreadingandswitchourletterstonumbersusingpolybiussquaredropmessageunderthebenchattrainstationend
{% endhighlight %}

After reorganising the output, we get the following message:

```
start
warning i heard report of our break in on the news
still waiting on alarm test schedules
i will report back tomorrow with final plan
for extra security i suggest we burn our letters after reading
and switch our letters to numbers
using polybius squared rop message
under the bench at train station
end
```

The critical clue from message 3 is the `polybius squared rop message`.

## Chapter 4: Polybius

#### Image credit
---
Cover photo by [alexey turenkov](https://unsplash.com/@2renkov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank"} on [Unsplash](https://unsplash.com/s/photos/detective?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank"}
