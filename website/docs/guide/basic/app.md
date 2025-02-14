---
title: 应用入口
order: 4
---

ICE 通过应用配置的方式渲染整个应用，开发者可以根据提供的配置定制应用。

## 应用配置文件

框架以 `src/app.ts` 作为应用配置文件：

```tsx
import { defineAppConfig } from 'ice';

export default defineAppConfig({
  app: {
    strict: true,
  },
});
```

> 推荐通过 `defineAppConfig()` 的方式导出应用配置，以获得良好的类型提示。

## 配置项

应用入口的配置项，支持应用常用的相关配置。

### app

#### `rootId`

根节点 id

- 类型：`string`
- 默认值 `ice-container`

#### `strict`

是否开启 React 的严格模式 (React.StrictMode)

- 类型 `boolean`
- 默认值 `false`

#### `errorBoundary`

是否启用内置的错误边界捕获能力

- 类型 `boolean`
- 默认值 `false`

### router

#### `type` 

路由类型

- 类型 `string`，可选值为 `hash` 或 `browser`
- 默认为 `browser`

#### `basename`

路由 basename

- 类型 `string`
- 默认值 `/`

## 应用级数据

可以在应用入口定义并导出 `getAppData` 方法，来获取应用级数据。示例：

```js
import type { GetAppData } from 'ice';

// ...

export const getAppData: GetAppData = () => {
  return new Promise((resolve) => {
    resolve({
      success: true,
      id: 34293
    });
  });
};
```

在页面或其他组件中，可以通过 `useAppData` 方法获取页面级数据。示例：

```js
import { useAppData } from 'ice';
import type { AppData } from 'ice';

export default function Home(props) {
  const appData = useAppData<AppData>();

  // ...
}
```

## 运行时拓展

应用入口除了支持定义应用配置之外，同时也承担运行时扩展的能力，比如权限配置：

```js
import { defineAppConfig } from 'ice';
import { defineAuthConfig } from '@ice/plugin-auth/esm/types';

// 导出 auth 相关的能力，该能力由 @ice/plugin-auth 插件提供
export const auth = defineAuthConfig(() => {
  return {
    initialAuth: {
      admin: true,
    },
  };
});

export default defineAppConfig({
  app: {
    strict: true,
  },
});
```

[//]: # (更多运行时插件能力，请参考[官方插件]&#40;/plugin/list/auth&#41;。)
