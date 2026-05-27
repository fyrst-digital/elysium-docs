---
title: "Time-controlled slides and CMS scheduling"
description: "This guide explains how to schedule slides, sections, and blocks using the time control feature"
---

## Overview

The time control feature (technical preview since 4.7.0) allows you to schedule when slides, Elysium CMS sections, and Elysium CMS blocks should be visible in the storefront. You can define a start date (**Active from**) and an end date (**Active until**) for each item.

## Scheduling Slides

In the Slide Builder, you can set the **Active from** and **Active until** dates in the general settings of a slide. The slide will only be displayed in the storefront within this time period. Outside of this period, the slide is automatically hidden.

::: tip Time Control Visibility
The time control fields are only visible in the Slide Builder when the `elysium_preview_time_control` feature flag is enabled.
:::

## Scheduling CMS Sections and Blocks

Time control is also available for Elysium CMS sections and blocks. You can find the scheduling settings in the respective section or block configuration in the Shopping Experience editor.

For **sections**, the time control determines when the entire section and all its blocks are visible.

For **blocks**, the time control determines when an individual block within an Elysium section is visible. This allows fine-grained control over the visibility of specific content blocks.

## Important: CLI Worker Configuration

To ensure that time control works reliably in conjunction with an active HTTP cache, **CLI workers must be configured correctly** in Shopware. Using admin workers, which should not be used in production systems, can cause issues with scheduled visibility updates.

You can find more information about [CLI and admin workers in the Shopware documentation](https://docs.shopware.com/en/shopware-6-en/tutorials-and-faq/message-queue-and-scheduled-tasks#disable-admin-worker-set-up-cli-worker).

::: warning HTTP Cache
Without properly configured CLI workers, scheduled changes may not take effect immediately when HTTP cache is active, as the cache invalidation depends on the message queue being processed.
:::
