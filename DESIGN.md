---
version: alpha
name: Aakash Reddy Portfolio
description: A focused, evidence-led portfolio for a Hyderabad-based full-stack developer.
colors:
  canvas: "#080B12"
  canvas-deep: "#070910"
  surface: "rgba(17,23,36,.72)"
  text: "#F0F3F8"
  muted: "#A3ADBD"
  primary: "#91A1BC"
  accent: "#AAA5B6"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
  sans:
    fontFamily: "Manrope, system-ui, sans-serif"
  mono:
    fontFamily: "DM Mono, ui-monospace, monospace"
rounded:
  sm: "0.375rem"
  DEFAULT: "0.75rem"
  lg: "1.125rem"
spacing:
  section-gap: "7rem"
  page-max: "72.5rem"
components:
  button: {}
  card: {}
  navigation: {}
---

# Aakash Reddy Portfolio Design System

## Overview

### Creative North Star

A premium developer studio after dark: clear editorial hierarchy, real product evidence and three intentionally composed visual moods. The site earns confidence through clarity before decoration.

### Product context and register

- **Audience and primary job:** Recruiters, hiring managers and potential collaborators need to quickly assess Aakash's working projects, focus and contact path.
- **Target market(s) and evidence:** Hyderabad and remote full-stack roles; the portfolio copy and contact location define this scope.
- **Locale(s) and language policy:** English only.
- **Usage scene:** A desktop recruiter scan first, with a complete mobile reading experience for quick portfolio sharing.
- **Register:** Personal marketing portfolio.
- **Memorable signature:** A compact developer dossier replaces a generic hero photo; live project previews and the three-mode palette switcher make the experience personal without obscuring the work.
- **Restraint:** No decorative 3D cards, shimmer, auto-playing motion, or visual dependence on a portrait photo. Glass is used selectively for hierarchy and state feedback.
- **Anti-references:** Generic neon templates and stock-photo case studies; they weaken the evidence-led message.
- **Token ownership/runtime mapping:** `src/styles.css` is canonical for runtime CSS variables. This document mirrors accepted values and maps them to `:root` custom properties consumed by every component.

## Colors

The default Glass mode uses deep charcoal, misted surfaces, steel blue and soft lilac accents. Midnight shifts toward neutral charcoal, while Aurora uses evergreen and teal. Each theme owns the same semantic tokens (`--page`, `--surface`, `--ink`, `--muted`, `--line`, `--blue`) so hierarchy is stable while atmosphere changes.

## Typography

Source Serif 4 is reserved for the editorial headlines and project names. Manrope handles readable product copy and controls. DM Mono marks small technical labels and availability signals. Body text uses spacious line height; labels use uppercase only where they identify a short category.

## Layout

The page max width is `--max` (1160px) with 112px desktop section rhythm. The first work card is deliberately larger because it provides the clearest proof of capability. At 920px, the layout becomes single-column; at 620px, actions stack and all important contact details stay visible. Images reserve their aspect ratio to prevent layout shift.

## Elevation & Depth

Depth comes from tonal surfaces, a 1px border, restrained shadows and glass blur where it supports grouping. Hover lifts a project card by 5px only.

## Shapes

Controls use 9–10px corners, cards use 12–18px corners, and the hero frame uses 28px. Rounded geometry is functional rather than decorative.

## Components

### Foundational visual states

Interactive controls have hover, active native behavior and a 3px `:focus-visible` mint ring. Reduced-motion users receive effectively instant transitions. Scrollbars have global track and thumb tokens.

### Buttons and actions

The solid button uses the active theme's primary color. The outline button is secondary. The three-dot theme control is labelled for assistive technology and exposes its active state. Live-site and code links use direct, project-specific labels; icon-only actions are not used.

### Navigation and data display

Desktop navigation is centered in the header; the mobile menu is a labelled button controlling a visible navigation panel. Project previews are real captures of live sites, not stock images.

### Iconography

Inline stroke icons use the local `Icon` component. They accompany text labels and never carry the action alone.

### Motion

Motion is restricted to short hover and menu transitions. It communicates discoverability and respects `prefers-reduced-motion`.

## Do's and Don'ts

- **Do:** Make a live product, its role and its next action clear in every project card.
- **Do:** Keep the primary hiring contact path visible and unambiguous.
- **Don't:** Add unverified metrics, invented outcomes or decorative stock imagery.
- **Don't:** Add continuous animation, noisy reflections or a theme treatment that reduces content legibility.
