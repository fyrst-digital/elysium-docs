# Getting started and general settings

After you have installed and activated the plugin, you will find the new entry **Slide Builder** under the **Content** menu item. Here, all slides are managed. You can create new slides, duplicate them, or delete those that are no longer needed. Once you have created one or more slides, you can set them in the Elysium Slider or Banner shopping experience element.

<Grid>
    <Column :cols="{xs: 12, '6xl': 10}" :col-start="{'6xl': 2}">
        <Image src="slide-builder/de-admin-slide-builder-overview.png" alt="Slide Builder Overview"
        :sizes="{xs: 200, lg: 600, '6xl': 800}" :lazy="false" />
    </Column>
</Grid>

## Create a Slide

In the Slide Builder overview, you can create, copy, edit, or delete individual slides. Let's start by creating our first slide.

::: info Default Language
The slide is always created in your default language. If you want to maintain the slide in another language, create and save it first in your default language.
:::

To add a slide, click the **Create Slide** button in the top right corner. This will take you to the detail view where you can maintain the slide. On the following pages, you will find more details about the setting options.

After you have created a slide, you can link it in the Elysium Slider or Banner element of a shopping experience.

::: tip Elysium Section for Design and Arrangement
Use the new Elysium section (from version 3.6) to prepare a shopping experience layout. It offers many options for responsive and individual design.
:::

<!-- ::: info Slide Examples
[On our example pages](#todo-url), we have provided collections to show you what is possible with the Slide Builder.
::: -->

## Link Slide in Shopping Experience Elements

In a shopping experience layout, you can select the Slider or Banner element under the **Elysium Blocks** block group and drag and drop it to the desired position.

Use the new Elysium section for the design and arrangement of the elements. [You can find more about it here.](/en/manual/sections/place-blocks)

::: warning Two-Column Block will be removed in version 4.0
The two-column block is marked as deprecated from version 3.6 and will be completely removed with **version 4.0**. Make sure to remove these blocks in the shopping experiences before an update, otherwise, these contents will no longer be displayed in the storefront.
:::

<Grid>
    <Column :cols="{xs: 12, '6xl': 10}" :col-start="{'6xl': 2}">
        <Image src="section/de-admin-cms-block-selection.png" alt="Elysium elements in the shopping experience block selection"
        :sizes="{xs: 200, lg: 600, '6xl': 800}" :lazy="false" />
    </Column>
</Grid>
