# EToast 组件

## 组件简介

EToast 是一个支持消息提示的组件，用于向用户显示短期的通知信息。它提供了多种类型的消息样式和动画效果，适合构建操作成功提示、错误提醒等需要临时显示的消息功能。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.EButton {
    text: "显示消息提示"
    onClicked: toast.show("操作成功", "success")
}

Components.EToast {
    id: toast
    width: 250
    height: 60
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `visible` | `bool` | `false` | 组件是否可见 |
| `message` | `string` | `""` | 消息文本 |
| `type` | `string` | `"info"` | 消息类型（info/success/error/warning） |
| `duration` | `int` | `3000` | 消息显示持续时间（毫秒） |
| `position` | `string` | `"top"` | 消息位置（top/center/bottom） |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `iconColor` | `color` | `theme.textColor` | 图标颜色 |
| `borderRadius` | `real` | `8` | 圆角半径 |
| `padding` | `int` | `16` | 内边距 |
| `shadowColor` | `color` | `theme.shadowColor` | 阴影颜色 |
| `shadowBlur` | `int` | `10` | 阴影模糊程度 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `show(message, type, duration)` | `string, string, int` | 无 | 显示消息提示 |
| `hide()` | 无 | 无 | 隐藏消息提示 |
| `info(message, duration)` | `string, int` | 无 | 显示信息类型消息 |
| `success(message, duration)` | `string, int` | 无 | 显示成功类型消息 |
| `error(message, duration)` | `string, int` | 无 | 显示错误类型消息 |
| `warning(message, duration)` | `string, int` | 无 | 显示警告类型消息 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `shown()` | 无 | 消息显示时触发 |
| `hidden()` | 无 | 消息隐藏时触发 |

## 扩展示例

### 不同类型的消息提示

```qml
Components.EAnimatedWindow {
    width: 400
    height: 300
    title: "消息提示示例"
    visible: true
    
    Column {
        anchors.fill: parent
        padding: 20
        spacing: 16
        
        Components.EButton {
            text: "显示信息消息"
            onClicked: toast.info("这是一条信息消息")
        }
        
        Components.EButton {
            text: "显示成功消息"
            onClicked: toast.success("操作成功")
        }
        
        Components.EButton {
            text: "显示错误消息"
            onClicked: toast.error("操作失败，请重试")
        }
        
        Components.EButton {
            text: "显示警告消息"
            onClicked: toast.warning("警告：请检查输入")
        }
    }
    
    Components.EToast {
        id: toast
        width: 250
        height: 60
        position: "top"
    }
}
```

### 自定义位置的消息提示

```qml
Components.EAnimatedWindow {
    width: 400
    height: 300
    title: "消息位置示例"
    visible: true
    
    Column {
        anchors.fill: parent
        padding: 20
        spacing: 16
        
        Components.EButton {
            text: "显示顶部消息"
            onClicked: topToast.show("顶部消息", "info")
        }
        
        Components.EButton {
            text: "显示中心消息"
            onClicked: centerToast.show("中心消息", "success")
        }
        
        Components.EButton {
            text: "显示底部消息"
            onClicked: bottomToast.show("底部消息", "error")
        }
    }
    
    Components.EToast {
        id: topToast
        width: 250
        height: 60
        position: "top"
    }
    
    Components.EToast {
        id: centerToast
        width: 250
        height: 60
        position: "center"
    }
    
    Components.EToast {
        id: bottomToast
        width: 250
        height: 60
        position: "bottom"
    }
}
```

### 自定义样式的消息提示

```qml
Components.EAnimatedWindow {
    width: 400
    height: 300
    title: "自定义消息样式"
    visible: true
    
    Column {
        anchors.fill: parent
        padding: 20
        spacing: 16
        
        Components.EButton {
            text: "显示自定义样式消息"
            onClicked: customToast.show("自定义样式消息", "success")
        }
    }
    
    Components.EToast {
        id: customToast
        width: 300
        height: 70
        backgroundColor: "#f5f5f5"
        textColor: "#333333"
        borderRadius: 12
        padding: 20
        shadowColor: "rgba(0, 0, 0, 0.2)"
        shadowBlur: 15
    }
}
```

## 最佳实践

1. **消息内容**：保持消息内容简洁明了，避免过长的文本
2. **消息类型**：根据消息性质选择合适的消息类型（info/success/error/warning）
3. **显示时长**：根据消息重要性设置合适的显示时长，一般为2-5秒
4. **消息位置**：根据应用布局选择合适的消息位置，避免遮挡重要内容
5. **样式一致性**：与应用中其他提示组件保持一致的样式和交互方式

## 注意事项

- 消息提示组件应放置在应用的顶层容器中，确保消息能覆盖其他内容
- 可以同时显示多个消息提示，但建议不要超过3个
- 消息提示会自动隐藏，无需手动关闭
- 长时间显示的消息可能会影响用户体验，建议使用对话框替代
- 消息类型会影响消息的图标和颜色，确保选择正确的类型