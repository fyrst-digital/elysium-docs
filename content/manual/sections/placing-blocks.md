---
description: "Learn how to place blocks in an Elysium section and change the arrangement of the blocks."
---

# Select Section and Place Blocks
To place a block in an Elysium section, first select it in the section selection. Then add a block by drag & drop.

<Grid>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/admin-auswahl-blank.png" alt="Selection with empty shopping experience"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/admin-auswahl-wizard.png" alt="Selection when creating a shopping experience" 
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false"/>
    </Column>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/admin-auswahl-add.png" alt="Selection when adding a section" 
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false"/>
    </Column>
</Grid>

## Add More Blocks
To add more blocks, simply drag a new block over an existing one. The new block will always be added to the right of the existing one. For example, if you drag a text block over an image block, the text block will be placed to the right of the image block.
The new block always attaches to the block on which it was dropped.

<Grid>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/de-admin-cms-block-selection.png" alt="Block selection"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/de-admin-cms-elysium-section-add-block.png" alt="Placing a block in the Elysium section" 
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false"/>
    </Column>
</Grid>

## Move Blocks via the Block Navigator
Blocks can be structurally moved via the block navigator. This allows you to change the arrangement of the blocks.

In the Elysium-specific block settings, a different visual order can be set. The visual order can be distinguished for smartphone, tablet, and desktop. The structural arrangement remains the same on each view.
<!-- @todo(#4) [Details on the visual order can be found here](#todo-url). -->

<Grid>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/de-admin-cms-block-navigator.png" alt="Block navigator"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/de-admin-cms-elysium-section-order-phone.png" alt="Visual order on smartphone"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
    <Column :cols="{xs: 12, sm: 6, 'xl': 4}">
        <Image src="section/de-admin-cms-elysium-section-order-desktop.png" alt="Visual order on desktop"
        :sizes="{xs: 200, lg: 600, '6xl': 300}" :lazy="false" />
    </Column>
</Grid>

In the next article, you will learn how to adjust the block size.
