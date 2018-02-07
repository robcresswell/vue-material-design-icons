# Changelog

## [1.1.0] - 2018-02-07

### Added
- Added a `fillColor` prop that lets you set a fill colour via component prop
  rather than CSS. Thanks to [Sagar Subedi](https://gitlab.com/sagarSubedi) for
  the change.

### Changed
- Modified the base template to set a default title via prop definition, instead
  of using a computed prop. This shouldn't make any outward difference, but makes
  the code a little cleaner.

### Fixed
- Improved the package.json scripts so that they work from a fresh clone
  of the repo.

## [1.0.0] - 2018-01-09

### Added
- Added a "Props" section to the README
- Added a `decorative` prop that toggles whether icons are hidden from
  screen readers. This is false by default (i.e. icons are shown to screen
  readers)

### Changed
- Changed the icon IDs to classes (i.e. `#android-icon` is now `.android-icon`)
  to avoid invalid HTML when using the same icon multiple times in one page
- Changed the `aria-labelled-by` attribute to an `aria-label` attribute to
  avoid using duplicate IDs
- Changed the wrapping element from a `<div>` to a `<span>`

## [0.8.2] - 2017-12-13

### Changed
- Small improvements to the README, such as extra tips, and formatting fixes

## [0.8.1] - 2017-12-11

### Fixed
- Fixed the excessive padding around the `title`

## [0.8.0] - 2017-12-11

### Changed
- Updated the `MaterialDesign-SVG` dependency, adding many new icons
- Updated to a new version of `mustache`
- Added credit referencing the `mdi-vue` library

## [0.7.1] - 2017-08-06

### Added
- Added a "Tips" section to the `README`

## [0.7.0] - 2017-08-06

### Added
- Added a `title` prop to the icons, allowing the title to be customised. The
  default is still `<icon-name>-icon`, e.g. `android-icon`

### Changed
- Changed the title ID from `<icon-name>-title` to `<icon-name>-icon-title`

## [0.6.3] - 2017-07-27

### Fixed
- Added a note about finding the icon list to the `README`

## [0.6.2] - 2017-07-27

### Fixed
- Made the icon source more explicit in the `README`

## [0.6.1] - 2017-07-25

### Fixed
- Added the missing `CHANGELOG` entry for 0.6.0

## [0.6.0] - 2017-07-25

### Changed
- Changed from the
  [MaterialDesign](https://github.com/Templarian/MaterialDesign) repo to
  [MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG) repo
  to take advantage of the smaller repo and compressed paths. Overall, this
  reduces the size of this repo and its distributed icons. Yay!

## [0.5.0] - 2017-07-25

### Changed
- Updated the `README` to make install steps clearer and added additional
  credits
- Small fixes to the `CHANGELOG` formatting

## [0.4.0] - 2017-07-25

### Changed
- The CSS is no longer included in each component by default. It can be
  optionally added by including `vue-material-design-icons/styles.css`
- `README` updated to include adding the CSS

## [0.3.1] - 2017-07-24

### Changed
- Updated the package.json keywords
- Small fixes to `README` and `CHANGELOG`

## [0.3.0] - 2017-07-24

### Added
- Added a `CHANGELOG` to better track updates
- Added `LICENSE` to distributed package

### Changed
- Split out CSS from the template file, to reduce the overall package size
