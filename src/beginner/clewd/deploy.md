---
title: Clewd 安装教程
description: 一个简单易懂的 Clewd 安装配置指南
---

# Clewd 安装教程

## 环境准备

在开始安装 Clewd 之前，请确保你的系统满足以下条件：

1. 已安装 Node.js 和 npm
2. 可以正常访问外网（需要开启 VPN）

## 下载安装

::: tip 下载地址
请点击[这里](https://github.com/teralomaniac/clewd/archive/refs/heads/master.zip)下载最新版本的 Clewd 程序
:::

### 初始化步骤

1. 下载完成后解压文件

2. 运行 `start.bat` 进行初始化
   - 当看到以下提示时，表示初始化完成：
   ```
   config file created!
   edit config.js to set your settings and restart the program
   ```
   - 初始化完成后，你可以通过以下任一方式关闭终端：
     - 点击窗口右上角的 × 按钮
     - 按下 Ctrl + C 组合键

## 配置设置

### 配置 Cookie

1. 使用任意文本编辑器（IDE、记事本等）打开 `config.js` 文件

2. 找到 `"CookieArray": []` 这一行，在中括号内填入你的 Cookie

::: tip Cookie 配置示例
单个 Cookie：
```js
"CookieArray": ["sessionKey=sk-ant-sid01-123456(示例)"],
```

多个 Cookie：
```js
"CookieArray": [
    "sessionKey=sk-ant-sid01-123456(示例1cookie)",
    "sessionKey=sk-ant-sid01-123456(示例2cookie)"
],
```
:::

3. 删除配置文件中 `"Cookie": "SET YOUR COOKIE HERE",` 这一行的 `SET YOUR COOKIE HERE` 内容

::: warning 注意事项
- 确保 Cookie 格式正确
- 多个 Cookie 之间使用逗号分隔
- 每个 Cookie 都需要用引号包裹
:::
