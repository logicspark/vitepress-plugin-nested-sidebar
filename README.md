<a id="readme-top"></a>

<div align="center">
  <h1>:electric_plug: Vitepress Plugin - Nested Sidebar</h1>

Generate Nested sidebar. Support Multiple Sidebar. Support TypeScript

Developed by [Logic Spark](https://logicspark.com) team

[![npm](https://img.shields.io/npm/v/vitepress-theme-api)][package-url]
[![Typescript](https://img.shields.io/badge/typescript-100%25-blue)][typescript-url]
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/logicspark/awesome-social-button/blob/main/LICENSE)

</div>
<br/>
<div align="center">
  <a href="#sunglasses_video-demo">Video Demo</a> - 
  <a href="#building_construction-built-with">Built With</a> - 
  <a href="#rocket-getting-started">Getting Started</a> - 
  <a href="#fire-usage">Usage</a> -
  <a href="#books-license">License</a> -
  <a href="#pray-acknowledgement">Acknowledgement</a>
</div>

<br/>

## :sunglasses: Video Demo

Basic Sidebar

https://github.com/logicspark/vitepress-plugin-nested-sidebar/assets/135820109/cb3ac955-32d2-407c-8359-0e8d2402314f

Multiple Sidebar

https://github.com/logicspark/vitepress-plugin-nested-sidebar/assets/135820109/69e1acb5-9a1c-4ace-bc8a-43e4f49ae4fe

## :building_construction: Built With

1. [![Typescript][typescript]][typescript-url]
2. [![Vite][vite]][vite-url]

## :rocket: Getting Started

### Prerequisite

The plugin is created with Vite + TypeScript. To start using this library, please make sure to install the following external libraries first:

- [Node.js](https://nodejs.org/en)
- [Vitepress](https://vitepress.dev/)

_Support Node.js 18.12.0 (LTS) and above_

### Installation

There are a few ways you can install Plugin, namely npm, yarn and pnpm. If you install via npm, here is a single cmd to install this library

```sh
  npm install vitepress-plugin-nested-sidebar
```

#### Other options

- yarn

```sh
  yarn add vitepress-plugin-nested-sidebar
```

- pnpm

```sh
  pnpm add vitepress-plugin-nested-sidebar
```

## :fire: Usage

You will need to import `generateSidebar` function and `Layout.vue` file. Without `Layout.vue` file, the lib may not work properly.

### Import generateSidebar Function

You will need to import function to `generateSidebar` menu under `themeConfig` setting of [.vitpress/config.mts](https://github.com/logicspark/vitepress-plugin-nested-sidebar/blob/develop/example/default/.vitepress/config.mts) file:

```js
import VitepressPluginNestedSidebar from "vitepress-plugin-nested-sidebar";
```

</div>

### Options of generateSidebar Function

There is one required option, `sidebars`. The option supports both native basic and multiple sidebars which are native to Vitepress.

\_Note: For more details of both types of sidebars, please check out [Sidebar](https://vitepress.dev/reference/default-theme-sidebar) of Vitepress documentation.

| Options              | Type              | Required | Description                                                                                                                                                                                               |
| -------------------- | ----------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`sidebars`**       | `object`\|`array` | Yes      | define sidebar menu name and link .md file in order to generate the headers <br/> <br/> use `array` for [Basic sidebar](#basic-sidebar)<br/> <br/> use `object` for [Multiple sidebar](#multiple-sidebar) |
| **`excludeFile`**    | `array`           | Optional | exclude file to not to generate in the sidebar menu                                                                                                                                                       |
| **`includeIndexMd`** | `boolean`         | Optional | generate the sidebar menu item from index.md                                                                                                                                                              |

## Basic Sidebar

```javascript
[
  {
    text: string; /*optional*/ /*sidebar name*/
    link: string; /*optional*/ /*link to .md file*/
    collapsed: boolean; /*optional*/
  }
]
```

## Multiple Sidebar

```javascript
{
  ['file':string]:{
    text: string; /*optional*/
    link: string; /*optional*/
    collapsed: boolean; /*optional*/
  }
}
```

### Utility Functions

These 4 functions support the `generateSidebar` to work as intended:

**calculateAndHighlightHeader** - Check for scroll position with respect to the nearest header

```js
calculateAndHighlightHeader(
header:{
  text,
  link,
  items,
},
options:{
  idName, /*optional /*in case of use another div to scroll*/
  adjustOffsetTop /*optional*/
})

```

**checkMultipleSidebar** - Check `themeConfig` sidebar if it is multiple or not

```js
checkMultipleSidebar(sidebar:Object | Array)
```

**resetHeader** - Use to reset scroll position to the top

```js
resetHeader();
```

**filterSidebar** - Filter the sidebar

```js
filterSidebar(compare:string)
```

#### Importance of Layout.vue

The utility functions need information from `theme` `site` and `page` which is retrieved from `useData` of the `vitepress` lib. And because the information can only be used within the `.vue` file, without the `Layout.vue` file, the utility functions may not work.

### Import Utility Functions from Theme

Per Vitepress's [Setup Wizard](https://vitepress.dev/guide/getting-started#setup-wizard), there are three options

1. Default Theme
2. Default Theme + Customization
3. Custom Theme

#### Option 1: Default Theme

1. Create `Layout.vue` and `index.ts` files
2. Import the function into the `Layout.vue` file

```js
import VitepressPluginNestedSidebar from "vitepress-plugin-nested-sidebar";

const { utility } = VitepressPluginNestedSidebar;

const {
  calculateAndHighlightHeader,
  resetHeader,
  filterSidebar,
  checkMultipleSidebar,
} = utility;
```

_Note_: You can also apply this instruction to **Option 2** and **Option 3**. For the full sample in accordance with the live demo, please see our [example](https://github.com/logicspark/vitepress-plugin-nested-sidebar/blob/develop/example/default-and-custom/.vitepress/theme/Layout.vue) directory.

## :books: License

Distributed under the MIT License. See [`LICENSE`](https://github.com/logicspark/vitpress-theme-api/blob/main/LICENSE) for more information.

Vitepress is licensed under MIT License. Click [here](https://github.com/vuejs/vitepress/blob/main/LICENSE) for more information.

## :pray: Acknowledgement

- [Vitepress](https://vitepress.dev/)
- [Img Shields](https://shields.io)

[Vitepress-url]: https://vitepress.dev/
[TypeScript]: https://img.shields.io/badge/typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[Html]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://www.w3schools.com/html/
[Css]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://www.w3schools.com/css/
[Vue]: https://img.shields.io/badge/vue.js-42B883?style=for-the-badge&logo=vuedotjs&logoColor=white
[Vue-url]: https://vuejs.org/
[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vitejs.dev/
[package-url]: https://www.npmjs.com/package/vitepress-theme-api
