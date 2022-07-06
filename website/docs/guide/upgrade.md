---
title: 从 Rax 迁移
order: 20
---

本文档面向的是使用 Rax App 的开发者，提供迁移到 ICE 的方式。React 的社区生态显著优于 Rax，切换到 React 之后可以享受到更多的 React 生态，部分复杂场景（富文本、脑图等）可以大幅度降低成本。

## 如何升级

ICE 提供了 [rax-compat](https://github.com/ice-lab/ice-next/tree/master/packages/rax-compat) 以支持 [Rax](https://github.com/alibaba/rax) 到 React 运行时的切换。

`rax-compat` 通过对 React 的能力的封装，在内部抹平了 Rax 与 React 使用上的一些差异，同时导出了与 Rax 一致的 API 等能力，通过 alias 来将源码中的 rax 用 rax-compat 来替换，即可桥接上 React 的运行时能力。

## 安装与使用

用户可以直接通过引入插件 [@ice/plugin-rax-compat](https://www.npmjs.com/package/@ice/plugin-rax-compat) 来完成在 ICE 中运行 Rax 应用。

```bash
$ npm i @ice/plugin-rax-compat --save-dev
```

```js
import compatRax from '@ice/plugin-rax-compat';

export default defineConfig({
  // ...
  plugins: [
    // ...
    compatRax({
      inlineStyle: true,
    }),
  ],
});
```

## `rax-compat` 兼容性

### Rax 核心 API

`rax-compat` 会抹平 Rax 核心 API 与 React API 的诧异，用户使用 rax DSL 可以无缝衔接到 React Runtime 上，具体的 Rax 核心 API，可以参考[Rax 官网](https://rax.js.org/docs/api/DOM)。

### Appear & Disappear

rax DSL 迁移用户依旧可以像之前一样使用 onAppear 以及 onDisapper 事件，如

```jsx
import { createElement } from "rax";

function APP {
  return <div
    onAppear={() => {
      alert('appear')
    }}
    onDisappear={() => {
      alert('disappear')
    }}
  >
    APP
  </div>
}
```

原 Rax DSL 迁移过来并使用兼容模式无需做任何改造，[appear-polyfill](https://www.npmjs.com/package/appear-polyfill) 会嵌入在 `rax-compat` 中自动做这部分处理，用户无需特殊处理以及引入。

对于 React 用户，推荐使用 React 标准的方式，详情见[@待补充文档]()。

### 样式的处理

rpx 是什么？rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1物理像素。

当打开 @ice/plugin-rax-compat 插件的 `inlineStyle` 时，以 `.module.css` 结尾的文件会默认走 CSS Module 的模式。此外，当 `width` 等属性没有单位如 `width: 300`，该模式下会自动补齐 `rpx` 单位并最终转化成 `vw`，同理，写了 `rpx` 单位的值也一样会被转化成 `vw`。这块逻辑与之前 rax-driver 中处理的逻辑是一致的，rax DSL 用户无需做任何修改。

