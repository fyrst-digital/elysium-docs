---
title: "Guides: Multiple Slides per View"
---

# Multiple Slides per View
From version 1.5.5 it is possible to define multiple slides per view. This setting depends on the selected screen size and takes the settings of the last smaller screen size into account.  
So if you have only set 1 slide per view in `xs`, only 1 slide will be displayed across all screen sizes. If you now set 2 slides in `lg`, 1 slide is displayed up to `lg` and 2 slides from `lg` onwards.  
If no value is set in any screen size the default value is 1 slide.
The same applies to the **Distance between slides** option. The default value here is 0px or 0rem, so no spacing between the slides.

## Slide sizing for multiple slides
The slide size depends on the aspect ratio, even with several slides per view. The aspect ratio always refers to an individual slide and not the slider as a whole. The maximum height also refers to the individual slides.