---
title: "Extend slides with custom templates and additional fields"
description: "Learn how to extend slides with custom templates and additional fields to customize them as needed."
---

## Specify your own template file

Here you can specify your own Twig file. If you have knowledge of Twig, you can create individual templates for your slides that can be reused as desired.

If you have entered a Twig file, a path will be displayed below where the file must be created. It is best to do this within a custom theme or plugin to stay update-safe. Template files that are not found will be ignored, so no error message will be displayed.

## Create and link additional fields

You can also assign additional fields to a slide. When you create a new slide, save it first so that you can access the additional fields. To create additional fields in Shopware, you can follow the [official Shopware documentation](https://docs.shopware.com/en/shopware-6-en/settings/custom-fields).

::: tip 
Additional fields must be manually linked to the slide template and therefore require knowledge of Shopware templating/Twig. It is also a good idea to create your own template file.
:::
