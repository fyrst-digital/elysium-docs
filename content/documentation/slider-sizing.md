---
title: "Guides: Slider Sizing"
---

# Customization of Slider size

To provide the best possible Responsive experience, the Elysium Slider works with aspect ratios instead of static pixel values. In the Slider CMS element you can find the aspect ratio settings.

<Image
    src="/screenshots/de/admin-cms-setting-aspect-ratio.png" 
    alt="Seitenverhätnis Einstellungen im Erlebniswelt Element"
    :caption="true" />

You can set a custom aspect ratio for each screen size. The screen sizes are based on the Shopware Standard Theme. These may differ for custom themes.  

::: info Note for developers
Internally the Twig function `theme_config('breakpoint.<viewport>')` is used
:::

## Maximum height
You can also specify a maximum height in `px` or `rem`. This is useful if you are using a CMS layout that spans the full width of the screen. The Slider will be limited to this maximum height.  
If you want to set a maximum height that applies to all screen sizes, we recommend doing this in the smallest screen size. By default, this is **xs**.