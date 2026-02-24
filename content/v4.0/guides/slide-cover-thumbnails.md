---
title: "Expand and Optimize Slide Cover Thumbnail Sizes"
description: "If thumbnails are stored for a slide cover image, they are automatically used. Thumbnails display smaller images, which positively affects loading time and Google's Core Web Vitals."
reviewNeeded: true
---

## Expand Standard Thumbnail Sizes

By default, Shopware creates three thumbnail sizes — 400x400, 800x800, and 1920x1920 pixels. The Elysium Slider uses the thumbnail whose size is within the current screen area. This means that in a screen width of 800 to 1920 pixels, the thumbnail size 800x800 is used.

There is a large gap between the thumbnail sizes. This can lead to pixelated images in the slide cover at some screen sizes. It is recommended to create one or two additional thumbnail sizes, for example, 1400x1400 or 1200x1200 and 1600x1600. This should close the large gap between the areas of 800px to 1920px and ensure good quality across all screen widths.

The thumbnail sizes can be set in the media folder. You can find more information in the [official Shopware documentation](https://docs.shopware.com/en/shopware-6-en/contents/media?category=shopware-6-en/contents#settings).
We recommend storing the images used for slides in the **Elysium Slides** media folder. This way, the thumbnails can be optimized specifically for the slide cover images.
