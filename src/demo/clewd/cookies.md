---
title: Cookie 获取教程
description: 本教程将指导您如何获取 Claude 的 Cookie，这是使用 Clewd 的必要步骤
icon: material-symbols:cookie-outline
order: 1
category:
  - 入门教程
  - Clewd 部署
tag:
  - Clewd
  - Cookie
---

::: info 重要提示
本教程将指导您如何获取 Claude 的 Cookie。这是配置 Clewd 的必要步骤，请仔细阅读并按步骤操作。
:::

## 准备工作

::: tip 前置条件
在开始之前，请确保您已经：

- 拥有一个可用的 Claude 账号
- 准备好可以访问 Claude 官网的 VPN
:::

## 获取步骤

::: tabs
@tab Chrome

1. 访问 [Chrome 网上应用店](https://chrome.google.com/webstore/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm)
2. 点击「添加至 Chrome」按钮
3. 在弹出的确认窗口中点击「添加扩展程序」

@tab Edge

1. 访问 [Microsoft Edge 加载项](https://microsoftedge.microsoft.com/addons/detail/cookieeditor/neaplmfkghagebokkhpjpoebhdledlfi)
2. 点击「获取」按钮
3. 在弹出的确认窗口中点击「添加扩展」

@tab Firefox

1. 访问 [Firefox 附加组件](https://addons.mozilla.org/zh-CN/firefox/addon/cookie-editor/)
2. 点击「添加到 Firefox」按钮
3. 在弹出的确认窗口中点击「添加」
:::

### 登录 Claude

::: warning 注意
请确保您的 VPN 已开启并且可以正常访问外网。
:::

1. 访问 [Claude 官网](https://claude.ai)
2. 使用您的账号登录
3. 确保成功进入对话界面

### 获取 Cookie

::: details 详细步骤
1. 登录成功后，点击浏览器工具栏中的 Cookie-Editor 图标
2. 在打开的插件界面中，查找 "sessionKey" 项
3. "Value" 字段中类似 "sk-ant-sid01-xxxxxx" 的内容就是您需要的 Cookie
:::

## 常见问题

::: danger Cookie 安全提醒
- Cookie 是您的账号凭证，请勿分享给他人
:::

### Cookie 有效期

::: note
- Cookie 通常有 7 天的有效期
- 如果提示 Cookie 失效，请检查 Claude 账号状态，若依旧有效，请重新获取
:::

### 复制注意事项

::: tip 复制建议
1. 确保完整复制整个 Cookie 字符串
2. 不要包含多余的空格或换行
3. 复制后可以粘贴到记事本检查格式
:::
