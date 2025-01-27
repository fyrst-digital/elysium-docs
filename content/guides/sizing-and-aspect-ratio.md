---
title: "Sizing and aspect ratio"
description: "This guide will help you set sizes as aspect ratios"
---

## Adjusting Slider Sizes
For the best behavior in responsive design, all Elysium elements work with aspect ratios instead of static pixel values. This ensures consistent scaling across all screen sizes, regardless of different thumbnail sizes.

<Grid>
    <Column :cols="{xs: 12, md: 6, '2xl': 12, '4xl': 6}">
        <Image
            src="section/de-admin-cms-slider-sizing.png" 
            alt="Size settings in the Slider element"
            :caption="true" />
    </Column>
    <Column :cols="{xs: 12, md: 6, '2xl': 12, '4xl': 6}">
        <Image
            src="section/de-admin-cms-banner-sizing.png" 
            alt="Size settings in the Banner element"
            :caption="true" />
    </Column>
</Grid>

The aspect ratios for Slider and Banner elements can be set separately for smartphone, tablet, and desktop views.  
The theme breakpoints used can be adjusted globally in the Elysium settings.

In the Elysium section, alternative theme breakpoints can be set. These work independently of the global breakpoints and are valid for the affected section.

<Grid>
    <Column :cols="{xs: 12, md: 6, '2xl': 12, '4xl': 6}">
        <Image
            src="de-admin-elysium-settings.png" 
            alt="Theme breakpoints in the Elysium settings"
            :caption="true" />
    </Column>
    <Column :cols="{xs: 12, md: 6, '2xl': 12, '4xl': 6}">
        <Image
            src="section/de-admin-cms-section-sizing.png" 
            alt="Theme breakpoints in an Elysium section"
            :caption="true" />
    </Column>
</Grid>

::: info Note for developers
Internally, the Twig function `theme_config('breakpoint.<viewport>')` is used
:::

## Maximum Height
You can also set a maximum height in `px` for Slider and Banner elements. This is useful if you are using an experience world layout that spans the full screen width. The element will be limited to this maximum height.  
If you want to set a maximum height that applies to all screen sizes, you can do so in the smallest screen size. By default, this is **smartphone**.
