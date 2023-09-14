---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: "Shopping experience slider for Shopware 6"
description: "Flexible and reusable slider for Shopware 6 Shopping experience"

hero:
  name: "Elysium Slider"
  text: "Flexible and reusable slider for Shopware 6"
  actions:
    - theme: brand
      external: true
      text: To Shopware Store
      link: https://store.shopware.com/en/blur358402810171f/elysium-slider.html
    - theme: alt
      text: See Documentation
      link: /documentation/setup

features:
  - title: "Centralized management of your slides"
    details: "Manage individual slides in a separate overview instead of the shopping expierence slider element. This gives you a better user expierence. You can assign slides to a slider element and arrange them as you like."
  - title: "Easy to reuse"
    details: "By separating the slider element from the slides, you can reuse your created slides as you like. Create your slide once and use it in different slider elements."
  - title: "Many settings"
    details: "Our slider offers lots of settings. Background images for portrait and landscape view, video support, custom CSS classes, custom linking and much, much more."
  - title: "Extendable by custom fields"
    details: "You can extend any slide with any custom fields. Just create a custom field set for Elysium Slides and define your fields."
  - title: "Custom slide templates"
    details: "You can set a custom Twig template for each slide, which you can freely customize in your custom theme or plugin."
  - title: "Updates und Support"
    details: "The Elysium Slider is under constant development. Furthermore, exclusive ticket support is available in addition to our documentation."
---

<HomeContent
  title="The Idea behind the Elysium Slider for Shopware 6"
  titleTag="h3">
  Shopware itself only has a very basic image slider as CMS element. This offers only one image for all screen sizes. Okay, in the latest versions you can also upload videos and adjust the order of the slides. But this is not enough for us and especially for many store owners.
  So there is a need for a Shopware Slider that has extended features, a good user experience and extensibility. This is how the Elysium Slider was born.
</HomeContent>

<HomeContent
  title="Separation of slide content and slider behavior: Slide and Slider elements"
  titleTag="h3">
  We devoted the first considerations to the structure and operation. Should we really bind the content of each slide to the shopping experience element? On the one hand, it is no fun to maintain the content in the small modal box of the shpping experience element. On the other hand, it is hard to reuse single slides at other places. For example, you want to have a slide on the start page, which you want to reuse on a category or product page. So you would have to copy the content manually. And what if you change the content? The whole game from the beginning.<br/>
  <br/>
  So we've outsourced the content, the individual slides, into a standalone module. You maintain the slides in one central place. You can compose these slides as you like in the shopping worlds Slider element. There you can also customize the behavior and appearance of the entire Slider. For example, auto-play, appearance of the navigation dots or arrows, colors and more. This concept brings you maximum flexibility and reusability.
</HomeContent>

<HomeContent
  title="Extendable with custom fields and custom Slide Twig-templates"
  titleTag="h3">
  Each slide can be extended by custom fields. So you can create your own custom field set for the Elysium Slides and maintain it in the corresponding slide. To make the custom fields visible in the frontend, they have to be linked in the slide template. Since this should not be done in the plugin's template, another approach comes into play here. Namely, custom Twig-templates per slide. Create your own Twig-template in your custom theme or plugin and link the custom fields there. You can also make other structural adjustments to the slide, the possibilities are endless. If you need a simple entry point, you can also derive from our default template. See our documentation for more details.
  <br/>
  This requires knowledge of Twig and the template structure of Shopware. If you don't have these, feel free to contact us for the implementation of your ideas.
</HomeContent>