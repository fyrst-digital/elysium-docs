---
title: "Slide content settings"
description: "Here you can define content related settings for your slide"
---

# Slide Content
In this Tab you define content related settings for your slide

## General information
Here you can find general settings of the slide, such as the internal name, heading, description and more.

### Internal name (required)

**This name must be unique** and is used for the internal name of the slide to identify it in the administration. So you can find your slides faster in the overview, search or in the slider shopping world element. This is the only required field.  

A best practice name is in lowercase and without spaces. So for example `my-first-slide` or `summer-sale-2023`.

### Headline
Sets the title of the slide, which is displayed as a heading in the frontend. For the heading you can also set a text color and an HTML element. The font size is automatically scaled according to the screen width. The font size can be [adjusted by CSS variables](/documentation/reference/css-variables#slide-headline).

### Short description
Sets the short description of the slide, which is displayed in the frontend below the headline. Since this is an HTML field, you can add simple HTML or adjust the text color.  The font size is automatically scaled according to the screen width. The font size can be [adjusted by CSS variables](/documentation/reference/css-variables#slide-description).

### Slide background color
Sets a background color for the slide.

### CSS Class
You can specify one or more (space-separated) CSS classes for the slide to further customize your slide.

## Linking
Here you can find all relevant settings for linking the slide.

### Slide URL
Specifies the URL of the slide. This can be both an absolute `https://my-awesome-shop.com/category` and a relative `/my-awesome-product` URL. This field is language dependent. You can specify different URLs for different languages.

### URL tartget
Specify whether the link should be opened internal (in the same tab/window) or external (in a new tab/window).

### URL overlay
When the URL overlay is active, the entire slide is used as a linking area and the button is automatically hidden.

### Button label
Sets the label of the button. The font size is scaled automatically, depending on the screen width. The font size can be [adjusted by CSS variables](/documentation/reference/css-variables#slide-button).

### Button color
Sets the color scheme of the button. The colors are based on the theme settings.

## Media
Here you can specify media for your slide. The slides are designed to distinguish only between portrait and landscape mode, and not individual theme breakpoints. We believe this is the optimal balance between display control and straightforward configuration.

::: info Landscape mode
Landscape mode is used when the screen width exceeds the aspect ratio of 1:1. Typically, this is the case for desktop view or smartphones/tablets in "landscape" mode.
:::

::: info Portrait mode
Portrait mode is used when the screen height exceeds the aspect ratio of 1:1. Typically, this is the case with smartphones/tablets in "portrait" mode.
:::

### Slide cover
Defines the background image of the slide in landscape and portrait mode. For optimal responsive display, we recommend creating an optimized aspect ratio of the image for the respective mode. More information about aspect ratio and slider size [can be found here](/documentation/slider-sizing).  
Besides images you can also upload a video as a slide cover. The portrait medium will not be used once a video is set in the landscape slide cover.

::: info Supported file formats
For images the formats **jpg, png, webp** and for videos **mp4 and webm** are supported.
:::

## Custom fields
You can also assign custom fields to a slide. When you create a new slide, save it first so that you can access the custom fields. To create custom fields in Shopware you can follow the official [Shopware documentation](https://docs.shopware.com/en/shopware-6-en/settings/custom-fields).

::: info Note
Custom fields must be manually linked to the slide template and therefore require knowledge of Shopware Templating/Twig. Here you can also create [custom slide templates](/documentation/custom-slide-templates).
:::