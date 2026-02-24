---
title: "Media Settings: Set Slide Cover and Focus Image"
description: In the media settings, you can set slide covers or a focus image.
---

## Slide Backgrounds as Image or Video Cover
The slide cover is the background medium of a slide. It can be either an image or a video.

The **cover image** can be differentiated for smartphone, tablet, and desktop views. The desktop image serves as the default. Valid image formats are `jpg`, `png`, `webp`, `svg`, `avif`.

The **cover video** is the same for all views and cannot be differentiated. Valid video formats are `mp4` and `webm`.

For both images and videos, you can set **object positions and adjustments**. These settings are especially useful when the image or video does not match the aspect ratio of the slide. This allows you to fine-tune the image or video.
These settings can be differentiated for smartphone, tablet, and desktop views.

### Tip: Define Image Sizes as Aspect Ratios

In modern graphic design, it makes sense to think of image sizes for the responsive web in terms of aspect ratios. This way, scaling for thumbnail variants works better, CLS (Cumulative Layout Shift) is easier to avoid, and consistency in shop design is ensured.

Due to these advantages, we define sizes in slider and banner elements as aspect ratios instead of fixed pixels.
Keep this in mind when creating your graphics.

## Independent Focus Image Next to Slide Content

A focus image can be set for a slide. The focus image is displayed as a separate image next to the content area.

<Grid>
    <Column :cols="{xs: 12, 'lg': 6, '2xl': 12, '4xl': 6}">
        <Image src="placeholder.svg" alt="Visualization of the focus image"
        :lazy="false" />
    </Column>
</Grid>

The image can be **stretched to full width** or **restricted in width**. These options are device-dependent.
