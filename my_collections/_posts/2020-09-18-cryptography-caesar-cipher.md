---
layout: post
title: Cryptography - Caesar Cipher
date: 2020-09-18 21:04:57 +1000
categories: cryptography
cover_image: 2020-09-18-cover.jpg
---

Imagine that you and your group of friends want to communicate the latest gossip in the school. You have a strict teacher named Snape who is constantly finding the slightest reason to send you to detention. You and your friends decide to pass on the messages on a piece of paper. If Prof Snape gets hold of this paper, you don’t want him to find out what you are discussing. So, you come up with a clever idea. You shift the alphabet by three positions when you write the message. This right-shifting your alphabet by three makes your `A = D, B = E, C = F, . . ., X = A, Y = B, Z = C`.

```
Message: Party At Hagrids

Cipher: Sduwb Dw Kdjulgv
```

Since only you and your friends know the secret key is the number 3, no one else (especially those Slytherins) can understand the contents of your message. So, once you send a message by right-shifting three letters, your friends can decrypt the message by left-shifting three letters.

This method of encrypting/encoding the messages is called cryptography. This particular example of the left-shifting and right-shifting the alphabets by a key number is called [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher). This is the simplest and most widely used encryption method. However, it may not be the safest way to encrypt your messages.

## Caesar Cipher using Python

Encrypting messages and decrypting them manually can become a time-consuming task. Therefore, let us use a computer program to do this. The following lines of code in Python can be used to encrypt and decrypt the message.

{% highlight python %}
import sys

# ASCII values for upper and lower case first character in the alphabets.
UPPER = 65
LOWER = 97

# Checks for the command line arguments
if (len(sys.argv) != 4):
	print("Usage: python caesar.py message key e/d")
	sys.exit()

def main():
	"""Encrypts/decrypts as per the arguments."""

	message = sys.argv[1]
	key = int(sys.argv[2])

	if (sys.argv[3] == "e"):
		print(caesar_encryption(message, key))
	elif (sys.argv[3] == "d"):
		print(caesar_decryption(message, key))
	else:
		print("Usage: python caesar.py message key ('e' = encrypt/'d' = decrypt)")
		sys.exit()

def caesar_encryption(message, key):
	"""Returns the encrypted message using caesar Cipher

	:param str message: Message to encrypt
	:param int key: Number of letters to shift

	:returns str cipher: Message encrypted using Caesar cipher with {key}
	"""

	cipher = ""

	for letter in message:
		if letter == " ":
			cipher += " "
		elif letter.isupper():
			cipher += chr(((ord(letter) - UPPER + key) % 26) + UPPER)
		else:
			 cipher += chr(((ord(letter) - LOWER + key) % 26) + LOWER)

	return cipher

def caesar_decryption(cipher, key):
	"""Returns the decrypted cipher using caesar Cipher

	:param str cipher: Message to decrypt
	:param int key: Number of letters to shift

	:returns str message: Message decrypted using Caesar cipher with {key}
	"""

	message = ""

	for letter in cipher:
		if letter == " ":
			message += " "
		elif letter.isupper():
			message += chr(((ord(letter) - UPPER - key) % 26) + UPPER)
		else:
			message += chr(((ord(letter) - LOWER - key) % 26) + LOWER)

	return message

main()
{% endhighlight %}

### How to execute the above code?

Create the folder `cipher` on Desktop

Copy the code above and save it in `cipher` folder with the name `caesar.py`.

Open Terminal/Python Console.

{% highlight bash %}

# Navigate the directory:

$ cd Desktop/cipher

$ python caesar.py harry 2 e

jctta

{% endhighlight %}

## Breaking the code

You can change the key to any number to encrypt and decrypt the message. Although this is a good way to encrypt a message, the message can be easily decrypted if one knows the right key. Suppose Prof Snape suspects that you are using Caesar Cipher to encrypt your messages. Then, he may either create the above program and brute force his way to find your secret key number or just make you drink Veritaserum to make you tell the truth. The following lines of code can be inserted into the main program to find the secret key by a brute force attack.

{% highlight python %}
for key in range(25):
    message = caesar_decryption("Sduwb Dw Kdjulgv", key)
    print(f"{key}: {message}")
{% endhighlight %}

So, Prof Snape can decrypt the message trying from 0 to 25 as the secret key number and eventually figure out one text that makes sense. Following are the results Prof Snape can get if he launches a brute force attack instead of using Veritaserum.

```
0: Sduwb Dw Kdjulgv
1: Rctva Cv Jcitkfu
2: Qbsuz Bu Ibhsjet
3: Party At Hagrids     # <= Original message when key = 3
4: Ozqsx Zs Gzfqhcr
5: Nyprw Yr Fyepgbq
6: Mxoqv Xq Exdofap
7: Lwnpu Wp Dwcnezo
8: Kvmot Vo Cvbmdyn
9: Julns Un Bualcxm
10: Itkmr Tm Atzkbwl
11: Hsjlq Sl Zsyjavk
12: Grikp Rk Yrxizuj
13: Fqhjo Qj Xqwhyti
14: Epgin Pi Wpvgxsh
15: Dofhm Oh Voufwrg
16: Cnegl Ng Untevqf
17: Bmdfk Mf Tmsdupe
18: Alcej Le Slrctod
19: Zkbdi Kd Rkqbsnc
20: Yjach Jc Qjparmb
21: Xizbg Ib Piozqla
22: Whyaf Ha Ohnypkz
23: Vgxze Gz Ngmxojy
24: Ufwyd Fy Mflwnix
```

The text in the fourth line in the above code block makes sense. Thus, Prof Snape now knows your secret key number is 3. With this information, he can decrypt all your messages. Therefore, in order to protect your messages, you need to have better encryption techniques. There are other encryption techniques such as Vigenère Cipher (a slightly modified version of Caesar Cipher), Public-key cryptography, and so on which are better as compared to Caesar Cipher.

## Conclusion

You can now use the Caesar Cipher code to encrypt and decrypt your messages and communicate with your friends.

---

### Key Definitions:

* **Cipher**: A secret or disguised way of writing.

* **Caesar Cipher**: It is a type of substitution cipher in which each letter of the plain-text is replaced by a letter some fixed number of positions down the alphabet.

* **Encryption**: The process of converting information or data into a code.

* **Key**: The shift parameter used in Caesar Cipher.

* **Brute Force Attack**: In cryptography, a brute-force attack consists of an attacker submitting many passwords or passphrases with the hope of eventually guessing correctly.

---

Photo by [Mauro Sbicego](https://unsplash.com/@maurosbicego?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/enigma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
