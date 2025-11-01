# Reference Website Files Documentation

This file documents important CSS and JavaScript files from the reference website (minna-no-ginko.com/careers) that have been integrated or identified for design matching.

## CSS Files (Already Integrated)

### Core Stylesheets
- **`_global.CU5HEaCA.css`** ✅ Integrated
  - Global base styles
  - Typography (Noto Sans JP)
  - Reset styles
  - Color scheme (#0d0d0d)
  - Breakpoint: 896px

- **`style.Cs-hRdVc.css`** ✅ Integrated
  - Main layout stylesheet
  - Container system
  - Layout utilities
  - Box list components
  - Privacy/Terms page styles

### Component Stylesheets
- **`HeadingBlock.fneHjeng.css`** ✅ Integrated
  - Heading component with yellow circle icons
  - Viewport-based font sizes
  - White variant for dark backgrounds
  - Breakpoint: 780px

- **`Card.B6_sRN91.css`** ✅ Integrated
  - Card component styles
  - Black borders with hover effects
  - Profile sections with yellow dividers
  - Image zoom animations
  - Breakpoint: 780px

- **`Button.B-F7S1EW.css`** ✅ Integrated
  - Button component with diagonal slide animation
  - Black/white color inversion on hover
  - Skewed diagonal overlay effect
  - White variant support
  - Breakpoint: 780px

- **`RecruitLinkBox.V9s1ZUsv.css`** ✅ Integrated
  - Box-style link components
  - Hover color inversion (white ↔ black)
  - Disabled/closed state support
  - Breakpoint: 780px

- **`Join.Bs2TQXDj.css`** ✅ Integrated
  - CTA/Join section component
  - Text-shadow outline effects
  - Hover color inversion
  - SVG icon animations
  - Breakpoint: 780px

- **`Number.v0jrYtGH.css`** ✅ Integrated
  - Numbered section component
  - Decorative elements positioning
  - Background objects
  - Image grid layouts
  - Breakpoint: 780px

- **`BgLine.C395QmC0.css`** ✅ Integrated
  - Background vertical grid lines
  - Fixed/absolute positioning modes
  - Subtle opacity (#00000012)
  - Responsive column count
  - Breakpoint: 780px

- **`ThiArrow.D8TL0tof.css`** ✅ Integrated
  - Thin arrow icon component
  - Mobile responsive sizing
  - Breakpoint: 780px

## JavaScript Files (Identified - Not Integrated)

### Animation/Interaction Libraries
- **`GSAP Core Library`** (unnamed file, exports as `g`) ⚠️ Identified - GSAP 3.13.0 Core
  - **Purpose**: Main animation engine/library
  - **Features**:
    - Tween animations (to, from, fromTo, set)
    - Timeline management
    - Animation control (play, pause, reverse, restart)
    - Easing functions (Power, Elastic, Bounce, Back, etc.)
    - CSS property animations
    - Transform animations (x, y, z, rotation, scale, skew)
    - Color animations
    - Plugin system
    - CSSPlugin integrated (CSS property animations)
  - **Status**: Minified/compiled code
  - **Version**: 3.13.0
  - **Priority**: Required foundation for ScrollTrigger
  - **Note**: This is the core engine that powers all animations

- **`BCHDAHja.js`** ⚠️ Identified - GSAP ScrollTrigger + Observer Plugin
  - **Purpose**: Scroll-triggered animations plugin
  - **Features**:
    - Scroll-based animations
    - Parallax effects
    - Pin elements during scroll
    - Snap-to positions
    - Scroll direction detection
    - Velocity-based animations
    - Observer for gesture detection
  - **Status**: Minified/compiled code
  - **Requires**: GSAP Core Library (must load before this)
  - **Relationship**: Plugin that extends GSAP core
  - **Priority**: Only if scroll animations are needed

- **`app.DGUxOyHL.js`** ⚠️ Main Application Bundle
  - **Purpose**: Core application routing and logic
  - **Status**: SvelteKit/Vite compiled bundle
  - **Priority**: Not needed for CSS-only design matching

### Code-Split Chunks
- **`0.DhSCsrUR.js`** - Route chunk 0
- **`1-rTD-h1.js`** - Route chunk 1
- **`2.V0atcsiV.js`** - Route chunk 2 (16.2 kB)
- **`7.BI36NKM2.js`** - Route chunk 7 (17.5 kB)
- **`CQRSmPax.js`** - Shared utilities chunk
- **`NGlo9iGb.js`** - Shared component chunk

**Note**: These are code-split chunks and may contain component-specific logic.

## Integration Status

### ✅ Fully Integrated (CSS)
1. Global base styles
2. Layout system
3. Heading components
4. Card components
5. Button components
6. Link box components
7. Join/CTA sections
8. Number components
9. Background lines
10. Thin arrows

### ⚠️ Identified but Not Integrated (JavaScript)
- **GSAP Core Library** - Foundation animation engine (required for ScrollTrigger)
- **GSAP ScrollTrigger** (BCHDAHja.js) - Plugin for scroll animations (depends on GSAP Core)
- **Application routing** - Not needed for static design

**Note**: If integrating scroll animations, load order matters:
1. Load GSAP Core Library first
2. Load ScrollTrigger plugin second
3. Register plugins with GSAP

## Recommendations

1. **CSS Files**: All major visual components integrated ✅
2. **JavaScript Files**: Only integrate if scroll animations are required
3. **Testing**: Test CSS-only version first before adding JavaScript

## Usage Notes

- **Breakpoints**: 
  - Desktop: 897px+
  - Mobile: ≤896px
  - Small mobile: ≤780px

- **Fonts**: 
  - Primary: Noto Sans JP (Google Fonts)
  - Display: Noto Serif Display (for headings)

- **Colors**:
  - Text: #0d0d0d
  - Yellow accent: #ef0
  - Borders: #000

## File Naming Convention

Files follow pattern: `[ComponentName].[Hash].css` or `[Name].[Hash].js`
- Hash changes on each build
- Component names are descriptive
- CSS files in `assets/` or `chunks/`
- JS files in `nodes/` or `chunks/`

## Last Updated
- Date: Current session
- Reference: minna-no-ginko.com/careers page
- Status: CSS fully integrated, JS identified for future use

