# 芋头通讯 | TARO Communication

基于 Astro 搭建的个人静态网站，主要用于发布本地 MDX 文章。

## 当前功能

- 首页 + About 页面
- 三个内容栏目
  - `TARO product`
  - `TARO landscape`
  - `TARO memory`
- 本地 `MDX` 文章写作
- 深色模式切换
- RSS
- sitemap
- 文章页的点赞/点踩本地占位交互
- 评论区预留位置

## 本地开发

```sh
npm install
npm run dev
```

本地预览地址通常是 `http://localhost:4321`。

## 构建

```sh
npm run build
```

构建结果会输出到 `dist/`，可直接用于 Cloudflare Pages 部署。

## 写文章

所有文章放在：

```text
src/content/posts/
```

新建一个 `.mdx` 文件，例如：

```text
src/content/posts/my-new-post.mdx
```

文章 Frontmatter 格式：

```mdx
---
title: 一篇新文章
description: 这篇文章的摘要
pubDate: 2026-03-27
tags:
  - 标签一
  - 标签二
category: product
featured: false
draft: false
---

这里开始写正文。
```

## 分类字段

`category` 目前支持这三个值：

- `product`
- `landscape`
- `memory`

## 后续可继续增强

- 接入真实匿名评论系统
- 接入真实点赞/点踩统计
- 增加封面图与文章列表缩略图
- 增加标签页、归档页
- 补充 SEO 细节和社交分享图
