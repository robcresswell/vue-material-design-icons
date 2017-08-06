# Vue Material Design Icon Components

This library is a collection of Vue single-file components to render Material
Design Icons, sourced from the
[MaterialDesign](https://github.com/Templarian/MaterialDesign
"MaterialDesign Github page") project.
It also includes some CSS that helps make the scaling of the icons a little
easier.

## Getting started

1. Install the package

    ```bash
    $ npm install --save vue-material-design-icons
    ```

    OR

    ```bash
    $ yarn add vue-material-design-icons
    ```

2. **Optional, but recommended** Add the included stylesheet to your root JS
   file, usually `index.js` or `main.js`:

    ```javascript
    import 'vue-material-design-icons/styles.css'
    ```

3. Import the icon, and declare it as a local component:

    ```javascript
    import MenuIcon from 'vue-material-design-icons/menu.vue'

    components: {
      MenuIcon
    }
    ```

    OR

    Declare it as a global component:

    ```javascript
    import MenuIcon from 'vue-material-design-icons/menu.vue'

    Vue.component('menu-icon', MenuIcon)
    ```

    > **Note** Icon files are kebab cased, e.g. `checkbox-marked-circle.vue`, and
    > their default name has `-icon` appended e.g. `checkbox-marked-circle-icon`.

4. Then use it in your template code!

    ```html
    <menu-icon />
    ```

## Icons

A list of the icons can be found at the
[Material Design Icons website](https://materialdesignicons.com/
"Material Design Icons website"). The icons packaged here match the names
displayed on the website, such as `ultra-high-definition`, with the `.vue`
extension; that icon would be imported as
`'vue-material-design-icons/ultra-high-definition.vue'`.

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
  `import Android from 'icons/android'`, rather than
  `import Android from 'vue-material-design-icons/android.vue'`. Much better!

## Credits

[Austin Andrews / Templarian](https://github.com/Templarian "Templarian's GitHub profile") for
the [MaterialDesign](https://github.com/Templarian/MaterialDesign "MaterialDesign Github page")
project. This supplies the SVG icons for this project, which are packaged as
Vue single file components.

[Elliot Dahl](http://www.elliotdahl.com/ "Elliot Dahl's website") for
[this article on prototypr.io](https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4 
"Align SVG Icons to Text and Say Goodbye to Font Icons"). This is where the
recommended CSS comes from.
