# EAlertDialog 弹窗组件

## 组件概述

`EAlertDialog` 是一个现代化的弹窗组件，支持自定义标题、内容、按钮和样式。

## 基本用法

```qml
import "components" as Components
Components.EAlertDialog {
    id: alertDialog
    anchors.centerIn: parent
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `visible` | `bool` | `false` | 是否可见 |
| `title` | `string` | `"提示"` | 弹窗标题 |
| `content` | `string` | `"内容"` | 弹窗内容 |
| `icon` | `string` | `""` | 弹窗图标 |
| `iconColor` | `color` | `theme.primaryColor` | 图标颜色 |
| `type` | `string` | `"info"` | 弹窗类型 ("info", "success", "warning", "error") |
| `showTitle` | `bool` | `true` | 是否显示标题 |
| `showContent` | `bool` | `true` | 是否显示内容 |
| `showIcon` | `bool` | `true` | 是否显示图标 |
| `showCloseButton` | `bool` | `true` | 是否显示关闭按钮 |
| `showOverlay` | `bool` | `true` | 是否显示遮罩层 |
| `overlayColor` | `color` | `Qt.rgba(0, 0, 0, 0.5)` | 遮罩层颜色 |
| `animationEnabled` | `bool` | `true` | 是否启用动画效果 |
| `modal` | `bool` | `true` | 是否模态弹窗 |
| `closeOnOverlayClick` | `bool` | `false` | 点击遮罩层是否关闭弹窗 |
| `closeOnEscape` | `bool` | `true` | 按ESC键是否关闭弹窗 |
| `width` | `real` | `400` | 弹窗宽度 |
| `height` | `real` | `200` | 弹窗高度 |
| `minWidth` | `real` | `300` | 最小宽度 |
| `minHeight` | `real` | `150` | 最小高度 |
| `maxWidth` | `real` | `600` | 最大宽度 |
| `maxHeight` | `real` | `400` | 最大高度 |
| `titleColor` | `color` | `theme.textColor` | 标题颜色 |
| `contentColor` | `color` | `theme.textColor` | 内容颜色 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `borderColor` | `color` | `theme.borderColor` | 边框颜色 |
| `borderRadius` | `real` | `16` | 边框圆角半径 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |
| `padding` | `real` | `20` | 内边距 |
| `spacing` | `real` | `15` | 间距 |
| `titleFontSize` | `real` | `20` | 标题字体大小 |
| `contentFontSize` | `real` | `16` | 内容字体大小 |
| `buttons` | `array` | `[]` | 按钮配置数组 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `open` | - | `void` | 打开弹窗 |
| `close` | - | `void` | 关闭弹窗 |
| `toggle` | - | `void` | 切换弹窗显示/隐藏 |
| `setTitle` | `title: string` | `void` | 设置标题 |
| `setContent` | `content: string` | `void` | 设置内容 |
| `setType` | `type: string` | `void` | 设置弹窗类型 |
| `addButton` | `button: object` | `void` | 添加按钮 |
| `clearButtons` | - | `void` | 清除所有按钮 |
| `setButtons` | `buttons: array` | `void` | 设置按钮数组 |
| `setIcon` | `icon: string, color: color` | `void` | 设置图标和颜色 |
| `setSize` | `width: real, height: real` | `void` | 设置弹窗大小 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `opened` | - | 弹窗打开时触发 |
| `closed` | - | 弹窗关闭时触发 |
| `buttonClicked` | `button: object, index: int` | 按钮点击时触发 |
| `closeButtonClicked` | - | 关闭按钮点击时触发 |
| `overlayClicked` | - | 遮罩层点击时触发 |
| `escapePressed` | - | ESC键按下时触发 |

## 示例

### 信息弹窗

```qml
import "components" as Components
Components.EAlertDialog {
    id: infoDialog
    title: "信息"
    content: "这是一条信息提示" 
    type: "info"
    anchors.centerIn: parent
}

Components.EButton {
    text: "显示信息弹窗"
    onClicked: {
        infoDialog.open()
    }
    anchors.centerIn: parent
}
```

### 成功弹窗

```qml
import "components" as Components
Components.EAlertDialog {
    id: successDialog
    title: "成功"
    content: "操作成功完成"
    type: "success"
    anchors.centerIn: parent
    
    // 自定义按钮
    Component.onCompleted: {
        successDialog.setButtons([
            {
                text: "确定",
                color: "#4CAF50",
                onClicked: function() {
                    successDialog.close()
                }
            }
        ])
    }
}
```

### 警告弹窗

```qml
import "components" as Components
Components.EAlertDialog {
    id: warningDialog
    title: "警告"
    content: "您确定要执行此操作吗？"
    type: "warning"
    closeOnOverlayClick: true
    anchors.centerIn: parent
    
    Component.onCompleted: {
        warningDialog.setButtons([
            {
                text: "取消",
                color: "#9E9E9E",
                onClicked: function() {
                    warningDialog.close()
                }
            },
            {
                text: "确定",
                color: "#FF9800",
                onClicked: function() {
                    console.log("执行操作")
                    warningDialog.close()
                }
            }
        ])
    }
}
```

### 错误弹窗

```qml
import "components" as Components
Components.EAlertDialog {
    id: errorDialog
    title: "错误"
    content: "操作执行失败，请稍后重试"
    type: "error"
    showCloseButton: true
    anchors.centerIn: parent
}
```

## 设计说明

`EAlertDialog` 组件采用现代化的设计风格，包含以下元素：

1. **遮罩层**：半透明背景，突出弹窗内容
2. **标题栏**：显示弹窗标题和关闭按钮
3. **内容区**：显示弹窗内容
4. **图标**：根据弹窗类型显示不同的图标
5. **按钮区**：包含一个或多个操作按钮
6. **动画效果**：打开和关闭时的淡入淡出动画

组件支持四种预设类型，每种类型有对应的图标和颜色：

- **info**：蓝色信息图标
- **success**：绿色成功图标
- **warning**：橙色警告图标
- **error**：红色错误图标

## 最佳实践

1. **选择合适的弹窗类型**：根据信息的重要性和类型选择合适的弹窗类型
2. **简洁明了的内容**：保持标题和内容简洁，避免冗长的文本
3. **合理的按钮配置**：根据操作需求配置按钮，最多不超过3个
4. **适当的动画效果**：使用动画增强用户体验，但避免过度动画
5. **事件处理**：通过监听信号可以在弹窗打开、关闭或按钮点击时执行自定义逻辑

## 性能优化

- 组件内部使用 `PropertyAnimation` 实现动画，性能开销低
- 弹窗不可见时自动释放资源
- 支持 `cache` 属性缓存组件渲染结果
- 遮罩层使用简单的矩形，渲染性能高

## 兼容性

- 支持 Qt 6.5 及以上版本
- 兼容所有支持 QML 的平台
- 依赖 `QtQuick.Controls` 模块的 `Dialog` 组件
- 动画效果可能因平台渲染差异略有不同

## 扩展功能

可以通过继承 `EAlertDialog` 组件添加自定义功能：

```qml
import "components" as Components

Components.EAlertDialog {
    id: extendedAlertDialog
    title: "自定义弹窗"
    content: "这是一个自定义弹窗"
    anchors.centerIn: parent
    
    // 添加自定义功能
    property bool showProgress: false
    property int progress: 0
    
    // 重写内容区域
    function customContent() {
        return Column {
            spacing: 10
            Text {
                text: "进度：" + progress + "%"
                color: theme.textColor
                font.pixelSize: 16
            }
            Rectangle {
                width: 300
                height: 10
                color: "#E0E0E0"
                radius: 5
                Rectangle {
                    width: parent.width * (progress / 100)
                    height: parent.height
                    color: theme.primaryColor
                    radius: 5
                }
            }
        }
    }
    
    // 打开弹窗时显示进度
    onOpened: {
        if (showProgress) {
            // 显示自定义进度内容
            console.log("显示进度")
        }
    }
}
```

## 主题适配

组件自动适配当前主题（浅色/深色）：

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

Components.EAlertDialog {
    id: themeAlertDialog
    title: "主题弹窗"
    content: "这是一个自适应主题的弹窗"
    backgroundColor: theme.surfaceColor
    titleColor: theme.textColor
    contentColor: theme.textColor
    borderColor: theme.borderColor
    anchors.centerIn: parent
    
    // 主题变化时自动更新样式
    Connections {
        target: theme
        function onThemeChanged() {
            themeAlertDialog.backgroundColor = theme.surfaceColor
            themeAlertDialog.titleColor = theme.textColor
            themeAlertDialog.contentColor = theme.textColor
            themeAlertDialog.borderColor = theme.borderColor
        }
    }
}
```

## 布局示例

可以将 `EAlertDialog` 组件与其他组件结合使用：

```qml
import QtQuick 2.15
import QtQuick.Layouts 1.15
import "components" as Components

Rectangle {
    width: 500
    height: 400
    color: theme.background
    anchors.centerIn: parent
    
    ColumnLayout {
        anchors.centerIn: parent
        spacing: 20
        
        // 信息弹窗按钮
        Components.EButton {
            text: "显示信息弹窗"
            onClicked: {
                infoDialog.open()
            }
        }
        
        // 成功弹窗按钮
        Components.EButton {
            text: "显示成功弹窗"
            onClicked: {
                successDialog.open()
            }
        }
        
        // 警告弹窗按钮
        Components.EButton {
            text: "显示警告弹窗"
            onClicked: {
                warningDialog.open()
            }
        }
        
        // 错误弹窗按钮
        Components.EButton {
            text: "显示错误弹窗"
            onClicked: {
                errorDialog.open()
            }
        }
    }
    
    // 信息弹窗
    Components.EAlertDialog {
        id: infoDialog
        title: "信息"
        content: "这是一条信息提示"
        type: "info"
        anchors.centerIn: parent
    }
    
    // 成功弹窗
    Components.EAlertDialog {
        id: successDialog
        title: "成功"
        content: "操作成功完成"
        type: "success"
        anchors.centerIn: parent
    }
    
    // 警告弹窗
    Components.EAlertDialog {
        id: warningDialog
        title: "警告"
        content: "您确定要执行此操作吗？"
        type: "warning"
        anchors.centerIn: parent
    }
    
    // 错误弹窗
    Components.EAlertDialog {
        id: errorDialog
        title: "错误"
        content: "操作执行失败，请稍后重试"
        type: "error"
        anchors.centerIn: parent
    }
}
```