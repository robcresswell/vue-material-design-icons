import type { ComponentOptionsMixin, DefineComponent } from 'vue';

// Every icon shares the same props and emits, so a single declaration is
// mapped onto each `*.vue` file via `typesVersions` in package.json.
declare const Icon: DefineComponent<
  {
    /**
     * Hover tooltip and accessible label. If omitted, the icon is hidden from
     * screen readers.
     */
    title?: string;
    /** Fill colour of the SVG. Defaults to `currentColor`. */
    fillColor?: string;
    /** Width and height of the SVG. Defaults to `24`. */
    size?: number;
  },
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  { click: (event: MouseEvent) => true }
>;

export default Icon;
