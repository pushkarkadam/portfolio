---
layout: post
title:  Automatic Directories using Python
date:   2020-11-03 21:53:00 +1000
categories: coding
cover_image: 2020-11-03-cover.jpg
---

Working in a university, I have to manage lots of documents.
If the documents are not stored in a proper folder location then it irritates me to search the required document.
Also, if you are like me who likes things standardised, then having an inconsistency in folder structure and names can be frustrating.
If you are reading this way ahead in the future;
I am not talking about physical papers with folders stacked on a shelf as you may have seen in the museums.
I am talking about digital files on a computer.

A standard way to create a folder on a computer is by right clicking, then selecting new folder and then typing the name.
Now, imagine doing that for more than a hundred times.
This problem was yelling, "**Automate ME!**".


## Autodirs project

Autodirs project started with my efforts to automate the creation of directories for storing the documents.
Directory is a fancy word for folder that programmers like to use.
A year ago, I had to create more than fifty folders to store all the documents about labs.
At that time, I automated the process and got my work done in a few seconds that it took to run the code as compared to weeks of manually creating the folders.

This year, I encountered the same problem again and I realised that there is a need to create a general package.
This meant that a user could simply make a list of folders in a text file and the program should create those folders.

Thus, began a month long journey of developing, testing, documenting, and deploying the project which would become my first proper open source project.

In this blog I hope to explain the approach I took to develop an open source software.
A detail explanation of each step will be beyond the scope of this blog post, since there are several components and troubleshooting to do.
However, I provide the links to the documentation you can refer to perform the activities.

### Git and GitHub

The good thing about open source community is that they help the project grow.
[Git](https://git-scm.com/) is a version control software that tracks the changes and allows you to develop your project.
[GitHub](https://github.com/) is a platform that the developers use to host their projects.
If you want to develop projects or contribute to the open source projects then you should learn these tools.

### Developing in Python

If you are a beginner, then it is better to go through some tutorial videos to learn Python.
Once you have developed some basic knowledge, I highly recommend [The Hitchhiker's Guide to Python](https://docs.python-guide.org/writing/structure/) document that beautifully outlines how to structure your python projects.
I found this document very helpful which cleared up several doubts I had about the project structure.
Along with that, there are several projects out there to draw inspiration from.
One of the projects that I used as an inspiration was the [face_recognition](https://github.com/ageitgey/face_recognition) project.

### Testing your code

You definitely want to test if your code works as you intend.
Couple of years ago, I felt that just manually testing the software is more than enough to check its validity.
I was so wrong back then. You simply do not want to rely that the software works on your computer.
Moreover, you want to test all the possible ways the users will use your software.
So, the way you test your code is you write another set of code that tests your code.

I was fascinated when I learned about this idea. This is called [unit testing](https://en.wikipedia.org/wiki/Unit_testing#:~:text=Unit%20tests%20are%20typically%20automated,an%20individual%20function%20or%20procedure.).
It allows you to automatically test if your software is working for all the conditions you set it to.
Moreover, if you change something in the project that conflicts with the previous use case, the tests will fail.
This will inform you that your new change conflicts with some old use case.

In Python, there are several ways to do unit testing. My preferred unit testing package is [pytest](https://docs.pytest.org/en/stable/).

Unit tests also allows other contributors to know which conditions you are testing your software for.
So, before they propose a change for your project, they run the unit tests to see if it passes all the conditions.

Next, you may want to setup an automatic workflow with [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions).
This ensures that when you are pushing your code to GitHub,
GitHub Actions installs all the dependencies and run the unit tests on your specified Operating System such as Ubuntu, Windows, or MacOS.
This ensures that the software can run on all the platforms and solves the problem of "*But it works on my computer!*"

### Creating a License

If you want your code to be used by others, you need to declare permission of use that you are giving your users.
If you do not know what license you want for your project then you may have a look at [Choose a License](https://choosealicense.com/).
GitHub has all the types of license pointed out in Choose a License.
The license will be a text file that either you can manually add, or let GitHub add it in your repository.

### Documentation

Documentation is very essential for a project.
If you do not have a clear documentation for using the project, others will have a hard time in using and contributing to your project.
So, should you simply write an MS word document? I used to sadly think that is how you write the documentation.
Not that you cannot write an MS word document, but there are better methods available.

#### Readme

Use a `README.rst` or `README.md` file in a project.
Every git repository should have this file.
This is the first file that developers will look at when they view your repository on GitHub.

#### Sphinx for Python

Another way to create documentation is by creating `docs` directory in your repository
and storing the documentation in either Markdown or restructured text format.

This is a bit advance way to create documentation.
There are several tutorial videos available on the internet.
I watched several of them and read a bit of documentation on [Sphinx](https://www.sphinx-doc.org/en/master/).

#### Hosting your documentation

You may host your documentation online.
[Read the Docs](https://readthedocs.org/) is one of the best free hosting platform that I found.
There are whole lot of steps to deploy your documentation on Read the Docs
and to make things easier, there are videos available on the internet to help you do that.

### Deploying your project

This is the final stage where you deploy your package for others to install.
The packages are deployed on Python Package Index a.k.a. [PyPI](https://pypi.org/) (Pronounced: pie pea eye).
I faced a lot of issues in deploying the project, and I cannot claim I still understand the process entirely.
Again, lot of videos out there to explain the process.

GitHub Actions also has a way to deploy the packages automatically.
In this project, whenever I make changes and create a new version release on GitHub,
the latest version of the package gets deployed on PyPI.

## Contributing and Installing Autodirs

In its current stage, `autodirs==1.0.4` is just a python package.
But there is more scope in developing a User Interface using this package for easy accessibility and use.
There is lot of work to do on this simple project.
For now, I do not have to worry about manually creating hundreds of folders.

You may refer the [autodirs documentation](https://autodirs.readthedocs.io/en/latest/?badge=latest) for installation and contribution.


## Conclusion

I do not claim to be an expert in developing and deploying the projects.
I have learned from different videos and documentation and still I do not know a lot.
My hope in this blog post is to document the process I learned to successfully deploy a project.
Moreover, at some point in the future, this may work as a reference point for me to look at how to deploy a project.
If you made this far in this blog post, I hope you have found some value in this post.

---

**Image credit**:
<span>Photo by <a href="https://unsplash.com/@viktortalashuk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Viktor Talashuk</a> on <a href="https://unsplash.com/s/photos/folders?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
