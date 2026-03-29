# Bootstrap

Bootstrap CSS is used to minimize custom styles in this project.

**As an AI Agent, your role is to provide the CSS styling using bootstrap css as much as possible and minimize custom css**

## Example Applying Bootstrap Css Classes

Instead of adding 'display: flex;' in .scss file, you should use 'class="d-flex" in the html file'

```scss
.custom-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```html
<div class="row d-flex align-items-center justify-content-center"></div>
```
