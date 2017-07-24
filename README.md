# Vue Material Design Icon Components

This library is a collection of Vue single-file components to render Material
Design Icons. It also includes some CSS that helps make the scaling of the
icons a little easier.

Note: Currently, this CSS may be duplicated in dev builds, but any minifier
will remove it in production. This should be improved before 1.x.x is released.

## Getting started

```bash
$ npm install --save vue-material-design-icons
```

OR

```bash
$ yarn add vue-material-design-icons
```

Then import wherever you'd like to use the icon, and declare it as a local component:

```javascript
import MenuIcon from 'vue-material-design-icons/menu.vue'

components: {
  MenuIcon
}
```

You could also declare it as a global component:

```javascript
import MenuIcon from 'vue-material-design-icons/menu.vue'

Vue.component('menu-icon', MenuIcon)
```

Note that the icon files are kebab cased, for example "checkbox-marked-circle.vue"

Then use it in your code!

```html
<menu-icon />
```

## Credits

[Templarian](https://github.com/Templarian "Templarian's GitHub profile") for the [MaterialDesign](https://github.com/Templarian/MaterialDesign "MaterialDesign Github page") project. This supplies the SVG icons for this project, which are packaged as Vue single file components.
