---
title: 安卓一键脚本部署酒馆与 clewd 教程
description: 在安卓设备上使用一键脚本部署酒馆与配置 clewd 的详细教程
---

# 安卓一键脚本部署酒馆与 clewd 教程

::: details BiliBili 视频教程
<BiliBili bvid="BV12ooBYqE1p" />
:::

## 下载链接

**Termux 下载链接：**  
[https://www.123pan.com/s/P8OAjv-Glhtv.html](https://www.123pan.com/s/P8OAjv-Glhtv.html)

---

## 部署步骤

1. **打开 Termux 应用**  
    打开termux应用，将以下部署代码粘贴进去后按回车键↵安装
    ```bash
    curl -O https://ghproxy.net/https://raw.githubusercontent.com/LINKlang/termux_using_Claue/main/tisac.sh && chmod +x tisac.sh && ./tisac.sh
    ```

    等待ing...

    一段时间later...

2. **安装成功提示**  
   当终端出现如下图所示界面时，即代表安装成功：

   ![](/assets/image/script/image1.png)

3. **启动酒馆**
   按数字 **2** 启动酒馆，稍作等待后会出现网址 `http://127.0.0.1:8000/`（此网址只有在酒馆启动成功后才能访问）。

   ![](/assets/image/script/image2.png)

   将termux设置为保持后台运行/挂小窗到前台（必须操作，不同手机操作方法不一样，可以百度查询），然后在浏览器中输入上一步出现的蓝色网址进入酒馆页面

4. **保存酒馆用户信息**  
   在酒馆页面的用户（user）输入框中输入你的用户名，然后点击保存，进入酒馆主页面。

   ![](/assets/image/script/image3.png)

---

## 酒馆页面功能介绍

![](/assets/image/script/image4.png)

- **首行功能区**：常用功能主要包括第 1、2、4、7、9 项，分别对应：
  - 调整预设
  - 连接 AI
  - 设置世界书
  - 安装正则及酒馆插件
  - 角色卡聊天

---

## 启动 clewd

1. **创建新会话**  
   切换回 Termux，从左侧滑出控制台，点击 **New Session** 开启第二个进程 clewd。

   ![](/assets/image/script/image5.png)  
   ![](/assets/image/script/image6.png)

2. **启动 clewd 前的准备**  
   在启动 clewd 之前，先按 **3+3** 将小克 Claude 的 cookie（可在淘宝店铺内获取）粘贴进去。将全部 cookie 粘贴后，回车确认，再按屏幕上的 `CTRL + D`（使用英文键盘）返回界面。
    ![](/assets/image/script/image7.png)

3. **启动 clewd**  
   输入 **1** 启动 clewd，终端会显示如下信息，其中包括 `http://127.0.0.1:8444/v1` 和绿色邮箱（即 cookie 账号）：

---

## 网页端配置

1. **回到网页**  
   进入你的酒馆网页界面：

   ![](/assets/image/script/image8.png)

2. **自定义端点设置**  
   点击首行第二个插头图标，根据提示选择，并将 `http://127.0.0.1:8444/v1` 填入“自定义端点”中。导入 cookie 后，“可用模型”一栏将显示 `claude-3-7-sonnet-20250219`，选择后点击连接（请确保 tz 与后台保持运行）。

   成功连接后，将出现绿色图标：

   ![](/assets/image/script/image9.png)

3. **测试与角色卡配置**  
   发送测试消息后，若弹出 “successful” 的绿色提示，即代表连接成功。随后点击首行第九位的角色卡目录，选择角色卡；再点击右上角的角色卡按钮，即可进入聊天界面开始对话。

---