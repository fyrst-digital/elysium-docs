---
title: "Block Settings in an Elysium Section"
description: "Learn how to configure block settings within an Elysium section, including visual order and row settings for different devices."
---

There are specific settings for blocks within an Elysium section. You can find these settings in the sidebar by clicking on the layout icon. All block settings are device-dependent and can be set separately for smartphone, tablet, and desktop.

These settings **are only effective within Elysium sections**. Once you move a block to another section, the settings are ignored.
However, the settings are saved. So if a block is moved back to an Elysium section, the settings remain as they were.

<Grid>
    <Column :cols="{xs: 12, '6xl': 10}" :col-start="{'6xl': 2}">
        <Image src="section/de-admin-cms-block-settings.png" alt="Block settings in an Elysium section"
        :sizes="{xs: 200, lg: 600, '6xl': 800}" :lazy="false" />
    </Column>
</Grid>

You can set the **visual order** of blocks. This is useful if a block should be displayed in a different position on a smartphone than on a desktop. If no order is set for a block (auto), it will always be displayed last. Note that this only affects the visual order and not the structural order. The structural order always remains as seen in the block navigator.

With the **Rows** setting, you can specify how many rows a block should occupy. For example, blocks can be combined into a so-called "grid layout," where two blocks are displayed one below the other on the left side and one block is displayed on the right side, spanning these two blocks. This is just a simple example; more complex grid layouts are, of course, also possible.

<!-- The combination of order and rows is a powerful tool for creating simple but also complex layouts, **optionally per view**. On our example page (link to page), you will find some layouts and instructions on how to replicate them. -->
