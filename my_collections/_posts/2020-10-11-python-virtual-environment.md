---
layout: post
title:  Python Virtual Environment
date:   2020-10-11 02:08:00 +1000
categories: coding
cover_image: 2020-10-11-cover.jpg
---

If you have started coding in Python, after some point, you may require to install some external packages.
If you've done things right (fingers crossed), nothing should break and everything should install perfectly fine.
In a perfect world, it should. But often at times you may face some issues.
Moreover, when you are collaborating on a project with others, you may have to deal with "*But, it works fine on my computer*".

In this blog, I provide the steps that you should follow to install a virtual environment before starting the development.
You will also learn how to install software dependencies and share the dependencies using a version control such as [Git](https://git-scm.com/).

## Virtual Environment

If you refer to the [Python documentation](https://docs.python.org/3/tutorial/venv.html) you will find a long elaborate explanation of Virtual Environments and Packages.
But, I know you don't have time and you want to quickly get started. I get it! But, it is alway good to know your **why**.
Also, you should develop a good habit to read the documentation.

Suppose you have a working `python_application_A` on your computer that uses `some_package_v1.0`.
You want to create a new `python_application_B` that uses `some_package_v2.0`.
If you upgrade from version 1 to version 2 of `some_package` you may end up breaking a perfectly working `python_application_A`.
This is why creating a virtual environment isolates the packages and you can run both the applications on your computer without any issues.
By the way, I assume you have Python3 installed on your computer.

## Creating a Virtual Environment

If you want a detailed information about creating Virtual Environment refer [Python documentation](https://docs.python.org/3/tutorial/venv.html#creating-virtual-environments).
But, if you just want the bare minimum, follow the instructions in this blog.

To create a virtual environment, use Terminal/Command Prompt to navigate to the root of the directory where you will create your project files.

To navigate the directory open Terminal/Command Prompt and run:

{% highlight ruby %}
cd path_of_the_project_directory
{% endhighlight %}

**Tip**: You may manually navigate the project directory on your computer and copy the path and paste it after `cd paste_directory_path_here`.

Create the virtual environment:

{% highlight ruby %}
python3 -m venv venv
{% endhighlight %}

A new directory (folder) called `venv` will be created.

**Tip**: You don't necessarily have to name it `venv`, you could name it `some_fancy_environment`.
In that case, you will run, `python3 -m venv some_fancy_environment`.
A new directory (folder) named `some_fancy_environment` will appear inside your project's root.

After creating the virtual environment, you need to activate it. Type the following in your Terminal/Command Prompt:

For Windows:

{% highlight ruby %}
venv\Scripts\activate
{% endhighlight %}

For Unix or MacOS:

{% highlight ruby %}
source venv/bin/activate
{% endhighlight %}


Violà! You have activated the virtual environment. Now you are ready to install packages.


## Troubleshooting for MacOS

If everything worked from the previous section, consider yourself as a lucky one!
I use a Mac, Windows, and Linux. As per the documentation, the above instructions should work for all these OS.
In my case, the above instructions work on Windows and Linux, but do not work with my Mac.
After extensive research (Googling), I have found a way around.

First, you need to install `virtualenv`. To install, run the following in Terminal:

{% highlight ruby %}
pip install virtualenv
{% endhighlight %}

**Tip**: No need to be inside the project directory while running the above command.

Create the virtual environment by navigating to the project root directory and running the following:
{% highlight ruby %}
virtualenv venv
{% endhighlight %}

This will create a new directory (folder) called `venv`

Now, activate the virtual environment by running the following:
{% highlight ruby %}
source venv/bin/activate
{% endhighlight %}

Phew! I hope that worked. If not, you may have a long night searching on [Stack Overflow](https://stackoverflow.com/).


## Collaborating with Git

Git is a version control that developers use to keep track of software development and collaborate with other developers via platforms such as GitHub, GitLab, Bitbucket, and so on.

To ensure that all the developers are using the same packages, you may want to give them a list of packages they should install.
However, manually installing every package can be a tedious job.
Also, if a developer installs a new package, that developer will have to inform others about the new package.
So, you must be wondering, why not share `venv` directory? I used to think the same.
But, you don't know which operating system your fellow developers are using.
Also, `venv` directory becomes larger in size with more packages you install.
Pushing this to a remote repository is not a good idea.

Therefore, to avoid pushing `venv` to remote repository, make sure to include `venv` directory inside your project's `.gitignore` file.

**Tip**: [Here](https://github.com/github/gitignore/blob/master/Python.gitignore) is a good list of items that you may copy and add to your project's `.gitignore`.

The developers usually share a list of required dependencies in `requirements.txt` file.
This is the file that you should push to your remote git repository.

To create this file, run the following inside your project's root directory:

{% highlight ruby %}
pip freeze --local > requirements.txt
{% endhighlight %}

This will create a file named `requirements.txt` with all the required dependencies for the project.
When the other developers clone your repository from platforms such as GitHub, they will create a new virtual environment as per their OS requirement.
Once the developers have created the virtual environment, they can download all the dependencies by running the following in the root of the project directory:

{% highlight ruby %}
pip install -r requirements.txt
{% endhighlight %}

## Advantages of Creating a Virtual Environment

* You can localise the installation of Python packages.
* Install different versions of Python packages.
* Share required dependencies with other developers.
* Avoid breaking your pre-existing applications which use old version of some package.


## Conclusion

Always create a Virtual Environment before starting a Python project.
This helps with installing different packages in a localised environment.
Also, it is helpful to share the dependencies while collaborating with other developers.

## Definitions

* **OS (Operating System)**: *Windows, Mac, Linux are some of the operating systems*.
* **Developers**: *People who develop software applications*.
* **Dependencies**: *Additional software packages which are required for your application to work*.
* **Directory**: *A fancy name for folder*.
* **Repository**: *Another fancy name for project folder*.
* **Remote**: *A project repository that is hosted on a Git hosting platform such as GitHub, GitLab and so on*.
* **pip**: *Package Installer for Python*.
* **Root**: *The first level inside a folder*.
* **Clone**: *Making a local copy of the project repository on your computer from remote*.

**Image Credit**:
<span>Photo by <a href="https://unsplash.com/@jantined?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jantine Doornbos</a> on <a href="https://unsplash.com/s/photos/coding?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
