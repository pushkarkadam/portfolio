---
layout: post
title:  "Cracking the 50 Cent's Codes using Python"
date:   2022-12-13 01:00:00 +1100
categories: [coding, cryptography]
cover_image: 2022-12-13-cover.png
author: Pushkar Kadam
---

Few months ago, while discussing about cryptography, my
friend told me about the 75th Anniversary Commemorative Coin.
This limited edition fifty cent coin was released on 1 September 2022 by
Australian Mint to celebrate the 75th anniversary of the Australian Signals Directorate (ASD).
The specialty of this coin is that there are several
cryptography puzzles minted on this coin.

This blog consists of solutions to the puzzle using
Python programming language.
If you do not code and are simply interested in the code-breaking
process, I plan to explain how the puzzles can also be
solved manually.


<div class="alert alert-danger" role="alert">
    <h4 class="alert-heading"><i class="bi bi-exclamation-triangle-fill"></i> Spoiler Alert!</h4>
    <p>Following this, there are going to be spoilers to the puzzles. So, if you want to solve this on your own, I highly recommend you to go to <a href="https://www.asd.gov.au/75th-anniversary/events/2022-09-01-75th-anniversary-commemorative-coin" class="alert-link" target="_blank">ASD</a> to solve these puzzles</p>
</div>


## Level One: The Heads
---

![Coin back](/portfolio/assets/images/blogs/cryptography_50c/ASD-50c-BACK.png){:class="img-fluid"}

When we look at the Queen's head on the coin, the following letters have a
series of dots shown below them. 
It seems obvious that these dots signify Braille 
characters used by visually impaired people to read by sensing
the bulge of the dots on a surface.

The Braille characters use a `3 x 2` (3 rows, 2 columns) grid sytem:
* `1-2` (top row)
* `3-4` (middle row)
* `5-6` (bottom row)

```
+---+---+
| 1 | 2 |
+---+---+
| 3 | 4 |
+---+---+
| 5 | 6 |
+---+---+
```

Based on the grid system mentioned-above, the following
letters consist the dots underneath.

```
B 1 2
T 1 3
H 1 2 3
A 1
S 1 4
A 1 2 4
```

The pattern of each Braille character underneath the letters
on the coin represent a decimal number.
We can map these Braille characters to their corresponding
decimal numbers as follows:

```
+----+----+----+----+----+----+
| B  | T  | H  | A  | S  | A  |
+----+----+----+----+----+----+
| oo | o  | oo | o  | o  | oo |
|    | o  | o  |    |  o |  o |
+----+----+----+----+----+----+
| 3  | 2  | 6  | 1  | 5  | 4  |
+----+----+----+----+----+----+
```

Sorting the characters in the ascending order of their decimal value, we get `ATBASH`.

For those who want to use Python code to solve this, refer the following code:

{% highlight python linenos %}
secret_dict = {'B': 3, 
               'T': 2,
               'H': 6,
               'A0': 1,
               'S': 5,
               'A1': 4
              }

sorted_secret = {k: v for k, v in sorted(secret_dict.items(), key=lambda item:item[1])}

for k in sorted_secret:
    print(k)
{% endhighlight %}

The above-mentioned code will give the following result:

```
A0
T
B
A1
S
H
```

<div class="alert alert-success" role="alert">
    <p><b>Solution</b>: <code>ATBASH</code></p>
</div>

## Level Two: The Outer Ring
---

![Coin Front](/portfolio/assets/images/blogs/cryptography_50c/ASD-50c-FRONT.png){:class="img-fluid"}

The text from the outer ring is as follows:

`.DVZIVZFWZXRLFHRMXLMXVKGZMWNVGRXFOLFHRMVCVXFGRLM.URMWXOZIRGBRM7DRWGSC5WVKGS`

Solving level one of the puzzle gives us the clue: `ATBASH`.

**ATBASH** is a monoalphabetic substitution cipher.
This cipher was originally used to encrypt the Hebrew alphabet.
This cipher system can be modified to any writing system
where the alphabets/characters are in standard order.

Using ATBASH cipher, the alphabets can be mapped as follows:

```
Plain : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Cipher: Z Y X W V U T S R Q P O N M L K J I H G F E D C B A
```

So, the word `ATBASH` can be encrypted by matching the alphabets in the plain text to the cipher which results in `ZGYZHS`. 

The decryption involves matching the cipher text characters
to the plain text characters from the map mentioned above.

The decryption can be done manually, but if you have a large text to decrypt, it is better to take help of a computer.
Following is the python code to decrypt the message.

{% highlight python linenos %}
import re

outer_ring = ".DVZIVZFWZXRLFHRMXLMXVKGZMWNVGRXFOLFHRMVCVXFGRLM.URMWXOZIRGBRM7DRWGSC5WVKGS"

def atbash(message):
    """Decrypts the message with ATBASH encryption.
    
    Parameters
    ----------
    message: str
        The message that is encrypted using ATBASH encryption.
        
    Returns
    -------
    str
        A string of the decrypted message using ATBASH decryption.
        
    """
    # Removing any special characters from the message
    message = re.sub(r'[^\w]', '', message)
    
    # 26 alphabets
    alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    # reversing the alphabet for mapping
    reverse_alpha = alpha[::-1]
    
    # mapping all the reversed alphabets to the non-reversed alphabets
    map_atbash = dict()
    for a, r in zip(alpha, reverse_alpha):
        map_atbash[a] = r
        
    decryption = ''
    
    # decrypting the message from the alphabet map of ATBASH
    for c in message:
        try:
            decryption += map_atbash[c]
        except:
            decryption += c
            continue
            
    return decryption

print(atbash(outer_ring))
{% endhighlight %}

The above-mentioned code will give the following result:

`WEAREAUDACIOUSINCONCEPTANDMETICULOUSINEXECUTIONFINDCLARITYIN7WIDTHX5DEPTH`

<div class="alert alert-success" role="alert">
    <p><b>Solution</b>: 
    <code>WE ARE AUDACIOUS IN CONCEPT AND METICULOUS IN EXECUTION
FIND CLARITY IN 7 WIDTH X 5 DEPTH</code></p>
</div>

## Level Three: The Inner Ring
---

![Coin Front](/portfolio/assets/images/blogs/cryptography_50c/ASD-50c-FRONT.png){:class="img-fluid"}

The text on the inner ring of the coin is as follows:

`BGOAMVOEIATSIRLNGTTNEOGRERGXNTEAIFCECAIEOALEKFNR5LWEFCHDEEAEEE7NMDRXX5`

Solving level two gave us the clue: `7 WIDTH X 5 DEPTH`.
This is familiar to using transposition cipher.

In transposition cipher, the decryption process is performed
by organising the decrypted text in a grid.
Consider the following example where the key `(4 x 5)`
indicates that we must write down `5` columns starting a new
column after every `4` letters. Then go through each row
of the grid to get the plain text.

```
Encryption: ICOHLRGYOYREVPANETPD
key = 4 x 5 (width x depth)

ILOVE
CRYPT
OGRAP
HYEND

Plain: ILOVECRYPTOGRAPHYEND
```

Again, you can manually solve the puzzle by simply rearranging 
the letters in a `7 x 5` grid and create multiple grids when 
the `7` width runs.
Then continue to read the message by following each row.

```
BELON
GINGT
OAGRE
ATTEA
MSTRI
VINGF
OREXC

ELLEN
CEWEM
AKEAD
IFFER
ENCEX
ORHEX
A5D75
```

Decrypting such type of ciphers manually can become time consuming and often frustrating process. So, here's the Python
code to get the result.

{% highlight python linenos %}
inner_ring = 'BGOAMVOEIATSIRLNGTTNEOGRERGXNTEAIFCECAIEOALEKFNR5LWEFCHDEEAEEE7NMDRXX5'

def transposition(message, size=(7,5)):
    """Transposition cipher.
    
    Parameters
    ----------
    message: str
        The message string encrypted using transposition cipher.    
    size: tuple, default ``(7,5)``
        The size of the matrix ``(row, column)``.
        
    Returns
    -------
    str
        The decrypted message.
        
    """
    # holding width information
    v = []
    
    # matrix holding the depth and width information
    M = []

    # width
    m = size[0]

    # depth
    n = size[1]

    initial = 0
    
    # Getting the width
    for i in range(int(len(message)/m)):
        v.append(message[initial: initial+m])
        initial += m

    initial = 0
    # getting the depth
    for i in range(int(len(v)/n)):
        M.append(v[initial: initial+n])
        initial += n

    decryption = ''

    for k in range(len(M)):
        for i in range(m):
            for j in range(n):
                decryption += M[k][j][i]
                
    return decryption

print(transposition(inner_ring, (7,5)))
{% endhighlight %}

This code will give the following result:

`BELONGINGTOAGREATTEAMSTRIVINGFOREXCELLENCEWEMAKEADIFFERENCEXORHEXA5D75`

<div class="alert alert-success" role="alert">
    <p><b>Solution</b>: 
    <code>BELONGING TO A GREAT TEAM STRIVING FOR EXCELLENCE WE MAKE A DIFFERENCE XOR HEX A5D75</code></p>
</div>

## Level Four: 1/3rd of design
---
![Coin Front](/portfolio/assets/images/blogs/cryptography_50c/ASD-50c-FRONT.png){:class="img-fluid"}

The text in 1/3rd of the inner circle of the coin is as follows:

```
E3B
8287D4
290F723381
4D7A47A291DC
0F71B2806D1A53B
311CC4B97A0E1CC2B9
3B31068593332F10C6A335
2F14D1B27A3514D6F7382F1A
D0B0322955D1B83D3801CDB2
287D05C0B82A311085A03329
1D85A3323855D6BC333119D
6FB7A3C11C4A72E3C17CCB
B33290C85B6343955CCBA3
B3A1CCBB62E341ACBF72
E3255CAA73F2F14D1B27A
341B85A3323855D6BB33
3055C4A53F3C55C7B22
E2A10C0B97A291DC0F
73E3413C3BE392819
D1F73B331185A33
23855CCBA2A3
206D6BE383
1108B
```

From level three, we have a clue at the end of the message:
`XOR HEX A5D75`.

`XOR` also known as **Exclusive or** is a logical operator
that is true if and only if its arguments are different.

The truth table for XOR is as follows:

|  A  |  B  | A xor B|
|:---:|:---:|:------:|
|  0  |  0  |    0   |
|  0  |  1  |    1   |
|  1  |  0  |    1   |
|  1  |  1  |    0   |
{:class="table table-sm table-bordered"}

`HEX A5D75` indicates that the hexadecimal number `A5D75` must
be mapped with the hexadecimal numbers present in 1/3rd region
of the coin.

We can organise hexadecimal numbers on the coin and the key as
follows:

```
E3B8287D4...
A5D75A5D7...
```

It is worth noting how we keep repeating the key till we reach
the end of the hexadecimal text.
Then we can perform the logical `XOR` operation and convert
the result to a decimal number.

```
+-----+----------+---------+
| hex | binary   | decimal |
+-----+----------+---------+
| E3  | 11100011 |         |
| A5  | 10100101 |         |
+-----+----------+---------+
| XOR | 01000110 |    70   |
+-----+----------+---------+
```

The first decimal number obtained by matching the
hexadecimal number on the coin with the hexadecimal string
gives `70`.

`ASCII` (American Standard Code for Information Interchange) 
is a 7-bit character code where every single bit represents
a unique character.
Comparing the number `70` obtained from the `xor` calculation,
we get the character `F`.

This xor decryption is a tedious process and I would recommend using
a computer to solve this puzzle.
Using the following Python code, we can solve this puzzle.

{% highlight python linenos %}
import re

hex_text = """E3B
8287D4
290F723381
4D7A47A291DC
0F71B2806D1A53B
311CC4B97A0E1CC2B9
3B31068593332F10C6A335
2F14D1B27A3514D6F7382F1A
D0B0322955D1B83D3801CDB2
287D05C0B82A311085A03329
1D85A3323855D6BC333119D
6FB7A3C11C4A72E3C17CCB
B33290C85B6343955CCBA3
B3A1CCBB62E341ACBF72
E3255CAA73F2F14D1B27A
341B85A3323855D6BB33
3055C4A53F3C55C7B22
E2A10C0B97A291DC0F
73E3413C3BE392819
D1F73B331185A33
23855CCBA2A3
206D6BE383
1108B"""

def xor_decoding(hex_text, hex_key):
    """Uses XOR operation to decode hexadecimal message.
    
    Parameters
    ----------
    hex_text: str
        A string of the hexadecimal encrypted message.
    hex_key: str
        A string of the hexadecimal key for decryption.
        
    Returns
    -------
    str
        The decrypted message.
        
    """
    
    # Getting rid of any new line
    hex_text = hex_text.strip()
    hex_text = re.sub('\n','', hex_text)
    
    # matching hex key for decryption (same length as hex_text)
    key_text = ''
    
    count = 0
    for i in range(len(hex_text)):
        c = count % len(hex_key)
        key_text += hex_key[c]
        count += 1
    
    # counter variable for incrementing by 2 hex digits
    initial = 0
    
    # Empty string for storing decrypted message
    decryption = ''
    
    for i in range(int(len(hex_text)/2)):
        message_hex = hex_text[initial:initial+2]
        match_hex = key_text[initial:initial+2]
        
        # bitwise XOR operation
        xor = int(message_hex, 16) ^ int(match_hex, 16)
        
        # converting the decimal to ASCII character
        decryption += chr(xor)
        
        # incrementing the counter variable
        initial += 2
    
    return decryption

print(xor_decoding(hex_text, hex_key="A5D75"))
{% endhighlight %}

The above-mentioned code will give the following output:

`For 75 years the Australian Signals Directorate has brought together people with the skills, adaptability and imagination to operate in the slim area between the difficult and the impossible.`

The result mentioned above contains spaces, commas, and periods because each of these characters have a specific
designation in `ASCII`. These characters appeared
in the decrypted text because they were considered
while encrypting the plain text.

<div class="alert alert-success" role="alert">
    <p><b>Solution</b>: 
    <code>For 75 years the Australian Signals Directorate has brought together people with the skills, adaptability and imagination to operate in the slim area between the difficult and the impossible.</code></p>
</div>

## Conclusion
---
I had fun in solving these puzzles. 
I appreciate the thoughts and efforts that went into
creating these fun puzzles and minting them on a 50 cent coin.

Full disclosure, I did not figure out the methods to solve
these puzzles. I looked up the hints on the ASD's website and developed simple programmes
in Python to get the results.
Comparing my results with the results published on ASD's website was still a joyful experience.

I also learned that there is a bonus level. If you are interested in cracking the bonus level code, head to [ASD](https://www.asd.gov.au/75th-anniversary/events/2022-09-01-75th-anniversary-commemorative-coin){:target="_blank"}'s website and try it out.
If you are simply curious and do not want to try cracking
the code, ASD has published methods and solutions
to crack the codes.

### Image Credits
---

All the images of the coins including the header image
belong to [ASD](https://www.asd.gov.au/75th-anniversary/events/2022-09-01-75th-anniversary-commemorative-coin){:target="_blank"} and [Royal Australian Mint](https://www.ramint.gov.au/publications/coded-coin-signals-asds-75th-anniversary){:target="_blank"}.