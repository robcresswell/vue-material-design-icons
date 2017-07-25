# Vue Material Design Icon Components

This library is a collection of Vue single-file components to render Material
Design Icons. It also includes some CSS that helps make the scaling of the
icons a little easier.

## Getting started

```bash
$ npm install --save vue-material-design-icons
```

OR

```bash
$ yarn add vue-material-design-icons
```

Then import wherever you'd like to use the icon, and declare it as a local
component:

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

**Note** Icon files are kebab cased, e.g. `checkbox-marked-circle.vue`, and
their default name has `-icon` appended e.g. `checkbox-marked-circle-icon`.

Then use it in your code!

```html
<menu-icon />
```

## Credits

[Templarian](https://github.com/Templarian "Templarian's GitHub profile") for
the [MaterialDesign](https://github.com/Templarian/MaterialDesign "MaterialDesign Github page")
project. This supplies the SVG icons for this project, which are packaged as
Vue single file components.
