---
title: "Guides: Extend and optimize slide cover thumbnail sizes"
---

# Extend and optimize slide cover thumbnail sizes


If a slide cover image has thumbnails set, they will be used automatically. Thumbnails load smaller images, which has a positive effect on page loading time and Google's Core Web Vitals. This results in a better user experience and Google scoring.

## Extend default thumbnails sizes

By default, Shopware creates three thumbnail sizes - 400x400, 800x800 and 1920x1920 pixels. The Elysium Slider uses the thumbnail whose size lies within the current screen size. This means that in a screen size of 800 to 1920 pixel, the thumbnail size 800x800 is used.  

There is a large gap between the thumbnail sizes. This can lead to pixelated images in the slide cover in some screen sizes. It is advisable to create one or two additional thumbnail sizes, for example 1400x1400 or 1200x1200 and 1600x1600. This should close the large gap between the 800px and 1920px ranges and ensure good quality across all screen sizes.

The thumbnail sizes can be set in the media folder. You can find out more about this in the [official Shopware documentation](https://docs.shopware.com/en/shopware-6-en/content/media#settings).  
We recommend storing the images used for slides in the **Elysium Slides** media folder. This allows the thumbnails to be optimized specifically for the slide cover images.