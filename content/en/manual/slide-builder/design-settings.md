---
title: "Customize Slide Design and Appearance"
description: "In the design settings, the appearance of the slide can be adjusted."
---

## Adjust the entire slide
Under **Slide**, the design of the entire slide can be adjusted.

<Grid>
    <Column :cols="{xs: 12, 'lg': 10, '2xl': 12, '4xl': 10}" :col-start="{'lg': 2, '4xl': 2}">
        <Image src="slide-builder/visualize-slide.svg" alt="Visualization of the entire slide"
        :lazy="false" aspect-ratio="2 / 1" />
    </Column>
</Grid>

A **background color** and a **gradient** can be set. The slide cover is prioritized. So if a slide cover is set for the corresponding device view, the background color and gradient will not be visible.

The inner **spacing of the slide** (horizontal and vertical) and a border radius can also be set. These settings are device-dependent.

Under **Alignment**, the alignment of the inner container can be determined. The inner container encloses the content element and the focus image.

## Adjust the inner container
Under **Container**, the design of the inner container can be adjusted. The inner container encloses the content element and the focus image.

<Grid>
    <Column :cols="{xs: 12, 'lg': 10, '2xl': 12, '4xl': 10}" :col-start="{'lg': 2, '4xl': 2}">
        <Image src="slide-builder/visualize-container.svg" alt="Visualization of the inner container"
        :lazy="false" aspect-ratio="2 / 1" />
    </Column>
</Grid>

The option **Display elements below each other** determines whether the elements within the container should be displayed below each other or not. This setting is device-dependent.

The **Layout order** determines the order in which the content element and the focus image should be displayed. This only has an effect if a focus image is set. Additionally, a **background color** can be assigned to the container and it can be restricted in **width**.

**Spacing and border radius**, as well as the **alignment** of the container, can be set. In the spacing, a **gap** between the content element and the focus image can also be set. The border radius only has a visible effect if a background color is assigned to the container.  
The alignment affects the alignment of the inner container elements, i.e., the content element and the focus image. If the elements are displayed below each other, these settings are reversed.

## Adjust the content element
The content element encloses the slide's heading, description, and button.

<Grid>
    <Column :cols="{xs: 12, 'lg': 10, '2xl': 12, '4xl': 10}" :col-start="{'lg': 2, '4xl': 2}">
        <Image src="slide-builder/visualize-content.svg" alt="Visualization of the content element"
        :lazy="false" aspect-ratio="2 / 1" />
    </Column>
</Grid>

It can be restricted in **width** and the **inner spacing** can be adjusted. The **text alignment** can also be set.
