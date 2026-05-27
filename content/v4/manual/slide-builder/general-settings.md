---
title: General Settings and Content
description: In the General Settings, you can set content such as the title and description, as well as the linking of the slide.
---

## Set the content of a slide

The **Slide Name** is the only required field in a slide. It must be unique and serves as the internal designation of the slide to identify it in the administration. This way, you can quickly find your slides in the overview, search, or in the slider Shopping Experience element.

An optimal designation is in lowercase letters and separated by hyphens, without spaces. For example: `my-first-slide` or `summer-sale-2023`.

Various options can be set for the **Slide Title**. You can set the text color and the HTML element (`div`, `h1`–`h6`). You can also set the font size for the smartphone, tablet, and desktop view in the storefront. The title can also be marked as **visually hidden** (`sr-only`) so that it is only perceptible to screen readers.

Additionally, simple HTML tags can be written in the content field, which will then be output accordingly in the storefront. Allowed tags are `<br>`, `<b>`, `<i>`, `<u>`, and `<strong>`.  

You can also set a **Slide Description**, in which HTML markup can be stored. Here, you can also set the text color and font size.

You can set one or more **CSS classes**, separated by spaces, to further customize your slide.

## Set the linking of a slide

A slide can be linked individually, with a product, or with a category.

For an **individual link**, you can set the appropriate address. This can be an anchor (`#a-section`), a relative ('`/a-category`') or an absolute (`https://example.com`) link.

For a **product link**, you can select the appropriate product. The product name is used as the slide title and the product description as the slide description. However, this only applies if the corresponding fields in the slide are not filled.  
Additionally, the product preview image, if stored, is used as the slide focus image. This can be shown or hidden with the **Show product image** option. You can also control whether the product **name** and **description** are displayed on the slide.

For a **category link** (since 4.8.0), you can select a category. Similar to product linking, the category name, description, and image can be used on the slide. You can control whether the category **image**, **name**, and **description** are displayed.

A button can be displayed if the **Button label** field is filled. The **Appearance** (primary, secondary, outline, etc.) and **Size** (small, medium, large) of the button can be set.

Additionally, the link can be opened **in a new window** or the entire slide can be used as a link **overlay**. When the overlay is active, the entire slide is linked, and the button is hidden.

::: info Time-Controlled Slides
If the time control technical preview feature is enabled, you can also set **Active from** and **Active until** dates to schedule when the slide should appear in the storefront.
:::
