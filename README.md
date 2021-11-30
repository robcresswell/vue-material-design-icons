# Vue Material Design Icon Components

This library is a collection of Vue single-file components to render Material
Design Icons, sourced from the
[MaterialDesign project](https://github.com/Templarian/MaterialDesign 'MaterialDesign Github page').
It also includes some CSS that helps make the scaling of the icons a little
easier.

## Getting started

1. Install the package

   ```console
   yarn add vue-material-design-icons
   ```

   **OR**

   ```console
   npm i vue-material-design-icons
   ```

2. Import the icon, and declare it as a local component:

   ```javascript
   import MenuIcon from 'vue-material-design-icons/Menu.vue';

   components: {
     MenuIcon;
   }
   ```

   **OR**

   Declare it as a global component:

   ```javascript
   import MenuIcon from 'vue-material-design-icons/Menu.vue';

   Vue.component('menu-icon', MenuIcon);
   ```

   > **Note** Icon files are pascal cased, e.g. `CheckboxMarkedCircle.vue`, and
   > their default name has `Icon` appended e.g. `CheckboxMarkedCircleIcon`.

3. Then use it in your template code!

   ```html
   <menu-icon />
   ```

4. **Optional** Add the included stylesheet. This few lines of CSS will cause
   the icons to scale with any surrounding text, which can be helpful when you
   primarily style with CSS. Note that if you intend to handle sizing with the
   `size` prop, you probably don't want to use this as it may conflict.

   ```javascript
   import 'vue-material-design-icons/styles.css';
   ```

## Props

- `title` - This changes the hover tooltip as well as the title shown to screen
  readers. For accessibility purposes, if a `title` is not provided, then the
  icon is hidden from screen readers. This is to force developers to use
  meaningful titles for their icon usage.

  Example:

  ```html
  <android-icon title="this is an icon!" />
  ```

- `fillColor` - This property allows you to set the fill colour of an icon via
  JS instead of requiring CSS changes. Note that any CSS values, such as
  `fill: currentColor;` provided by the optional CSS file, may override colours
  set with this prop.

  Example:

  ```html
  <android-icon fillColor="#FF0000" />
  ```

- `size` - This property overrides the `width` and `height` attributes on the
  SVG. The default is `24`.

  Example:

  ```html
  <android-icon :size="48" />
  ```

## Icons

A list of the icons can be found at the
[Material Design Icons website](https://materialdesignicons.com/ 'Material Design Icons website'). The icons packaged here are pascal cased
versions of the names displayed on the website, to match the
[Vue Style Guide](https://vuejs.org/v2/style-guide/). For example, the icon
named `ultra-high-definition` would be imported as
`"vue-material-design-icons/UltraHighDefinition.vue"`.

## Tips

- Use `resolve` in your Webpack config to clean up the imports:

  ```javascript
  resolve: {
    alias : {
      "icons": path.resolve(__dirname, "node_modules/vue-material-design-icons")
    },
    extensions: [
      ".vue"
    ]
  }
  ```

  This will give you much shorter and more readable imports, like
  `import Android from "icons/Android"`, rather than
  `import Android from "vue-material-design-icons/Android.vue"`. Much better!

- If you want custom sizing, add your own css to adjust the height and width of the icons

  ```css
  .material-design-icon.icon-2x {
    height: 2em;
    width: 2em;
  }

  .material-design-icon.icon-2x > .material-design-icon__svg {
    height: 2em;
    width: 2em;
  }
  ```

  Then add your size class

  ```html
  <fullscreen-icon class="icon-2x" />
  ```

  While I recommend using CSS for styling, you can also pass in a `size` prop,
  detailed in the `Props` section above.

## Credits

[Austin Andrews / Templarian](https://github.com/Templarian "Templarian's GitHub profile") for
the [MaterialDesign](https://github.com/Templarian/MaterialDesign 'MaterialDesign Github page')
project. This supplies the SVG icons for this project, which are packaged as
Vue single file components.

[Elliot Dahl](http://www.elliotdahl.com/ "Elliot Dahl's website") for
[this article on prototypr.io](https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4 'Align SVG Icons to Text and Say Goodbye to Font Icons'). This is where the
recommended CSS comes from.

[Attila Max Ruf / therufa](https://github.com/therufa "therufa's GitHub Profile")
for the [mdi-vue](https://github.com/therufa/mdi-vue 'mdi-vue') library which
inspired this one. It also produces single file components from material
design icons.
