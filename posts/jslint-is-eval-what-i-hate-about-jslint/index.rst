.. title: JsLint is eval: what I hate about JsLint
.. slug: jslint-is-eval-what-i-hate-about-jslint
.. date: 2013-11-07 01:39:49 UTC+01:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text

The title might be misleading, because in general I actually appreciate JsLint. It’s very helpful and I even think that often it’s not strict enough (300 chars in a line? no problem at all!)
However, there are some issues which usually make me end up with a long list of exceptions and consequently reduce the benefit of using JsLint. Here you go!

Filtering properties is only slowing you down if you are sure about what to expect. And actually sometimes you do want the properties from the prototype (usually containing some default values) to be taken into account. So then JsLint will complain.

.. code-block:: javascript
   :number-lines:

   // The body of a for in should be wrapped in an if statement
   // to filter unwanted properties from the prototype.
   for (prop in myPreciousObject) {
       // ...
   }

The fastest way to loop through an array is an inverted loop. But JsLint will complain.

.. code-block:: javascript
   :number-lines:

    var len = arr.length;
    // Unexpected '--'.
    while (len--) {
        // ...
    }

Believe it or not, there are legitimate uses of eval or new Function. For a nice
example, see the source of the templating engine in the `Qatrix <https://github.com/qatrix/Qatrix/blob/master/qatrix.js>`__
framework. Or how the `getScript <http://api.jquery.com/jQuery.getScript/>`__ method in jQuery works. But JsLint will complain.

.. code-block:: javascript
   :number-lines:

    // The Function constructor is eval.
    var f = new Function("param", generatedCode);

If you use external APIs (or maybe even your own) taking callbacks as parameters,
like in , you have no control over the number or order of parameters in the callback function. So if you don’t need to use all of them, JsLint will complain.

.. code-block:: javascript
   :number-lines:

    $.each(obj, function (key, value) {
        console.log(value); // Unused 'key'.
    });

Often the easiest way to match some pattern or get rid of all unwanted characters using regular expressions is to invert a character set. For instance, one of solutions for extracting filename is shown below. I have no idea why it would be less secure than using split, but JsLint will complain.

.. code-block:: javascript
   :number-lines:

    var path = 'path/to/file',
        // Insecure '^'.
        regexp = /([^\/])+$/g,
        filename = path.match(regexp)[0];

Are you aware of any other issues related to errors reported by JsLint?
Share them below :)

For further reading, I reccommend `a great post by Andrea Giammarchi <http://webreflection.blogspot.com/2011/05/my-last-comments-on-jslint.html>`__
enumerating some inconsistencies in JsLint.