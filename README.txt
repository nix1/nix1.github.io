This folder contains the source used to generate a static site using Nikola.

Installation and documentation at https://getnikola.com/

In short::
    sudo pip install virtualenv
    virtualenv -p /usr/bin/python3 nikola
    source nikola/bin/activate

Configuration file for the site is ``conf.py``.

To create a new post:

    nikola new_post

To build the site::

    nikola build

To see it::

    nikola serve -b

Or just, to do both::

    nikola auto

 Deploy using::

    nikola github_deploy

To check all available commands::

    nikola help
