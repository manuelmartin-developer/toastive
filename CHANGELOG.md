# Changelog

<!-- All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). -->

<br /><br />

## [1.2.0] - 2026-07-16

### Added

- **Accessibility out of the box**: ARIA `role` + `aria-live` (polite for info/success, assertive for error/warning), `aria-atomic`, close button `aria-label`, keyboard focus + <kbd>Esc</kbd> to close, and `prefers-reduced-motion` support.
- **Dark mode** via the `theme` prop (`'light'` or `'dark'`, default `'light'`).
- **Action button** via `action: { label, onClick, closeOnClick? }`.
- **`pauseOnHover`** (default `true`) pauses the timer on hover/focus.
- **`maxVisible`** in `setDefaults()` caps active toasts per position (FIFO eviction).
- **`setDefaults()` / `clearToasts(position?)`** for global config and bulk removal.
- **`customIcon`** prop to override the default variant icon.

### Changed

- Drag to dismiss is now vertical (top → up, bottom → down), implemented with the Web Animations API for smooth handoff from the drag position.
- Entry/exit transitions use the FLIP technique so existing toasts glide into their new slots instead of jumping.

<br /><br />

## [1.1.0] - 2025-01-28

### Added

- `draggable` prop to enable or disable closing by dragging.

## [1.0.3] - 2025-01-26

### Fixed

- Some improvements in `toastive`.

## [1.0.2] - 2025-01-26

### Fixed

- Fix `toastive` styles.
- Remove unused code.

## [1.0.1] - 2025-01-25

### Fixed

- Enhance `toastive` styles.
- Improve update method.

## [1.0.0] - 2025-01-21

### Added

- Initial release
