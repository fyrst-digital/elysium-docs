---
title: "CSS Variables Reference and Adjustment"
description: "Here you find an overview of used CSS variables and how you can adjust them"
---

# CSS Variables Reference and Adjustment
Here you will find an overview of used CSS variables and how you can customize them in CSS or SCSS. We do **not** use `:root` definitions for CSS variables. All variables are bound to the slide(r) specific CSS classes.

::: warning Note
These CSS variables are valid from version 1.5.2.
:::

::: info Dynamic scaling
With dynamic scaling, the view is scaled to the different screen sizes using the CSS function `clamp()`. A minimum `min`, maximum `max` and optimum `scale` value is defined once. These defined values are scaled across all screen sizes. No static values are required per breakpoint.
:::

## Slide variables
These are the default variables of the CSS class `.cms-element-elysium-slide`. Parts of these variables are overwritten by user defined configurations in the template. For example `padding`, `aspect-ratio` or `max-height`. For a final override of the variables in your own CSS / SCSS files, the `!important` statement is therefore recommended.

``` scss
.cms-element-elysium-slide {
    --padding-y: 1.5rem;
    --padding-x: 1rem;
    --aspect-ratio-w: 4;
    --aspect-ratio-h: 3;
    --max-height: none;
    --text-color: #ffffff;

    // dynamic scaling (experimental, is used only as of version 1.6.0)
    --padding-x-min: 1rem; 
    --padding-x-max: 8rem;
    --padding-x-scale: 6vw; 
    --padding-y-min: 2rem;
    --padding-y-max: 6rem;
    --padding-y-scale: 6vw; 

    @include media-breakpoint-up( sm ) {
        --aspect-ratio-w: 5;
        --aspect-ratio-h: 3;
    }

    @include media-breakpoint-up( md ) {
        --padding-y: 2rem;
        --padding-x: 3rem;
    }

    @include media-breakpoint-up( lg ) {
        --aspect-ratio-w: 2;
        --aspect-ratio-h: 1;
    }

    @include media-breakpoint-up( xl ) {
        --padding-y: 4rem;
        --padding-x: 6rem;
        --aspect-ratio-w: 12;
        --aspect-ratio-h: 5;
    }

    @include media-breakpoint-up( xxl ) {
        --aspect-ratio-w: 16;
        --aspect-ratio-h: 7;
    }
}
```

### Slide headline
The font size makes use of dynamic scaling.  

``` scss
.cms-element-elysium-slide__title {
    --font-size-min: 1.5rem;
    --font-size-max: 3rem;
    --font-size-scale: 4vw;
    --margin-b: 1rem;
}

```

### Slide description
The font size makes use of dynamic scaling.  

``` scss
.cms-element-elysium-slide__description {
    --font-size-min: 1rem;
    --font-size-max: 1.5rem;
    --font-size-scale: 2vw;
    --margin-b: 1rem;
}
```

### Slide button
The font size makes use of dynamic scaling. 

``` scss
.cms-element-elysium-slide__cta-button {
    --font-size-min: 1rem;
    --font-size-max: 1.25rem;
    --font-size-scale: 2vw;
}
```

## Override variables
You can override variables globally or per slide. You can do this in any CSS or SCSS file which is included in the storefront theme. Or directly in the template via a `<style></style>` statement. Here is an example of how to globally adjust the font size of the slide headline:

### Global override
``` css
.cms-element-elysium-slide__title {
    --font-size-max: 3.5rem;
    --font-size-scale: 5vw;
}
```
This changes the maximum font size, which is especially noticeable on larger screens.

### Override per slide
To override CSS variables per slide you have to prepend the slide CSS class including slide ID:
``` css
[data-elysium-slide-id="<slide-id>"] .cms-element-elysium-slide__title {
    --font-size-max: 3.5rem;
    --font-size-scale: 5vw;
}
```
`slide-id` must be replaced by the actual slide ID (for example 018a98a675fd7965856511b4e9155bb4). This is either visible in the source code or in the admin URL if you are in the corresponding slide. For example `https://example.com/admin#/blur/elysium/slides/detail/018a98a675fd7965856511b4e9155bb4`  
From version 1.6.0 on, the Slide ID will also be visible directly in the admin interface.  

### Override per slider
The override per slide applies across all sliders. If you want to override all heading sizes in a specific slider element, you can do so using the slider ID. Prepend the slider CSS ID with the slider ID (CMS element ID):
``` css
#elysiumSlider-<slider-id> .cms-element-elysium-slide__title {
    --font-size-max: 3.5rem;
    --font-size-scale: 5vw;
}
```
So for each slide within this slider the font size of the heading is adjusted. The `<slider-id>` can currently only be found in the source code. From version 1.6.0 the slider ID (CMS element ID) will be visible directly in the admin interface.  

### Combination of both approaches  
It is also possible to override variables in a specific slide per slider and thus combine both approaches:
``` css
#elysiumSlider-<slider-id> [data-elysium-slide-id="<slide-id>"] .cms-element-elysium-slide__title {
    --font-size-max: 3.5rem;
    --font-size-scale: 5vw;
}
```
Only for this one slide in this CMS Slider element the font size will be changed.