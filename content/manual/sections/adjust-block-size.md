---
title: "Adjust Block Size in Elysium Sections"
description: "Learn how to adjust the size of a block for different views within an Elysium section."
---

## Adjust Block Width by Drag and Drop

To adjust the size of a block, hover your mouse pointer over the right edge of a block. When the mouse pointer changes and the block frame changes, you can enlarge or reduce the block by holding down the mouse button and dragging in the desired direction.

These size settings **are only effective within Elysium sections**. Once you move a block to another section, the sizes are ignored.
However, the settings are saved. So if a block is moved back to an Elysium section, the size settings remain as they were.

<Grid>
    <Column :cols="{xs: 12, '6xl': 10}" :col-start="{'6xl': 2}">
        <Image src="section/de-admin-cms-block-sizing.png" alt="Adjusting block size"
        :sizes="{xs: 200, lg: 600, '6xl': 800}" :lazy="false" />
    </Column>
</Grid>

## Device-Dependent Adjustment of Block Size

The size of a block can be adjusted separately for smartphone, tablet, and desktop views. Switch the view in the Experience World editor to adjust the block sizes per view.

There are device-dependent section settings that can also affect block sizes. You can learn more about this in the next article.
