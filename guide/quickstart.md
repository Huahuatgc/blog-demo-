# 快速开始

本指南将帮助您快速上手 EvolveUI 组件库，包括环境搭建、项目创建和组件使用。

## 前提条件

在开始之前，请确保您的开发环境满足以下要求：

- **Qt 版本**：Qt 6.5 及以上版本（建议 6.9+）
- **开发工具**：Qt Creator 或其他支持 QML 的 IDE
- **操作系统**：Windows、macOS、Linux

## 1. 获取 EvolveUI

### 方法一：克隆 GitHub 仓库

```bash
git clone https://github.com/sudoevolve/EvolveUI.git
cd EvolveUI
```

### 方法二：下载 ZIP 包

从 [GitHub Releases](https://github.com/sudoevolve/EvolveUI/releases) 页面下载最新版本的 ZIP 包，然后解压到您的工作目录。

## 2. 创建新项目

EvolveUI 提供了便捷的脚手架脚本，可以帮助您快速创建一个包含基础框架的新项目。

### 使用脚手架脚本

1. 进入项目根目录下的 `tools` 文件夹
2. 双击运行 `New-EvolveUIProject.bat` 文件（Windows）
3. 按照提示输入以下信息：

   - **Project Name**：您新项目的名称（例如: MyApp）
   - **Destination Directory**：项目将被创建在哪个目录下（默认为当前目录 `.`）
   - **Template Name**：使用哪个模板（默认为 `basic`）

### 手动创建项目

如果您不想使用脚手架脚本，也可以手动创建项目：

1. 创建一个新的 Qt Quick 项目
2. 将 EvolveUI 的 `components` 文件夹复制到您的项目目录
3. 在项目的 `.pro` 文件中添加必要的依赖

## 3. 引入组件

在 QML 文件中引入 EvolveUI 组件非常简单：

### 导入组件模块

```qml
import "components" as Components
```

### 导入主题

```qml
Components.ETheme {
    id: theme
}
```

### 使用组件

```qml
Components.EButton {
    text: "提交"
    iconCharacter: "\uf1d8"  // Font Awesome 图标代码
    onClicked: console.log("按钮被点击了!")
}
```

## 4. 运行项目

1. 在 Qt Creator 中打开项目
2. 选择适合您的构建配置（Debug 或 Release）
3. 点击运行按钮或按下 `Ctrl+R`

## 5. 第一个示例

下面是一个完整的示例，展示如何创建一个包含 EvolveUI 组件的简单应用：

```qml
import QtQuick 2.15
import QtQuick.Window 2.15
import QtQuick.Layouts 1.15
import "components" as Components

Window {
    width: 800
    height: 600
    visible: true
    title: "EvolveUI 示例"

    // 导入主题
    Components.ETheme {
        id: theme
    }

    ColumnLayout {
        anchors.centerIn: parent
        spacing: 20

        // 使用按钮组件
        Components.EButton {
            text: "点击我"
            iconCharacter: "\uf0a9"  // 手形图标
            onClicked: {
                // 显示消息提示
                toast.show("欢迎使用 EvolveUI!")
            }
        }

        // 使用输入框组件
        Components.EInput {
            placeholderText: "请输入您的姓名"
            Layout.preferredWidth: 300
        }

        // 使用开关按钮组件
        Components.ESwitchButton {
            text: "启用功能"
            checked: true
        }

        // 使用消息提示组件
        Components.EToast {
            id: toast
        }
    }
}
```

## 6. 下一步

- 查看 [主题系统](/guide/theme) 了解如何自定义主题
- 查看 [组件复用](/guide/reuse) 了解如何高效复用组件
- 查看 [响应式布局](/guide/responsive) 了解如何适配不同设备
- 浏览 [组件文档](/components/aboutme) 了解所有可用组件

## 常见问题

### Q: 为什么组件没有显示？

A: 请检查以下几点：
- 是否正确导入了组件模块
- 是否设置了组件的可见性（visible: true）
- 是否为组件设置了合适的大小和位置

### Q: 主题切换不生效？

A: 请确保：
- 只创建了一个 ETheme 实例
- 所有组件都正确引用了主题属性

### Q: 动画效果不流畅？

A: 请尝试：
- 使用 Qt 6.9+ 版本
- 确保启用了硬件加速
- 减少同时运行的动画数量

如果您遇到其他问题，请查看 [GitHub Issues](https://github.com/sudoevolve/EvolveUI/issues) 或提交新的 Issue。
