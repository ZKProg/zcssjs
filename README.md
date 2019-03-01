# zcssjs

Light weight stylesheet, allowing you to activate a grid layout on your pages. 

## Core principles

You must include the targeted HTML content within an element of a *container* class.

A typical use would be:

```
<div class="container">
    <!-- Your grid layout is ready for use -->
</div>
```

The *container* class is one of the two classes activating the grid layout. Let **W_viewport** be the width of the browser viewport, and **W_div** the width of the container div:

- W_div = 1170px for W_viewport > 1200px (LARGE)
- W_div = 970px for 992px < W_viewport <= 1200px (MEDIUM)
- W_div = 750px for W_viewport <= 992px (SMALL)

The div is automatically divided in 12 equally sized columns. You can now create new div elements, inside the container, with the following classes:

- *large-x*, where x is a number from 1 to 12, representing the number of columns you want you div to occupy. And *large* targets here the size of the viewport you want your layout to work with. 
- *medium-x*, same principles apply here, but for medium sized viewports.
- *small-x*

Example: 

```
<div class="container">
    <div class="large-12 medium-6 small-6">
        <!-- 
            This div will be 100% of 1170px for large screens.
            It will be 50% of respectively 970px and 750px, for medium and small screens.
        -->
    </div>
</div>
```

If you need to be more precise in how you must divide your container, you can use the *container-24* class. It will divide the grid into 24 colums, allowing for more precise control. The classes *large-x, medium-x,* and *small-x* now use, as *x*, a number from 1 to 24:

```
<div class="container-24">
    <div class="large-24 medium-12 small-12">
        <!-- 
            This div will be 100% of 1170px for large screens.
            It will be 50% of respectively 970px and 750px, for medium and small screens.
        -->
    </div>

    <div class="large-1">
        <!-- 
            This one will only be 1/24 * 1170px for large viewports.
        -->
    </div>
</div>
```