# EAnimatedWindow 组件

## 组件简介

EAnimatedWindow 是一个 iPad OS 动画风格的窗口组件，支持平滑的窗口过渡效果和手势操作。它提供了现代化的窗口外观和交互体验，适合构建桌面或平板应用界面。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.EAnimatedWindow {
    width: 400
    height: 300
    title: "动画窗口"
    visible: true
    
    Rectangle {
        anchors.fill: parent
        color: theme.surfaceColor
        
        Text {
            anchors.centerIn: parent
            text: "窗口内容"
            color: theme.textColor
            font.pointSize: 16
        }
    }
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `title` | `string` | `""` | 窗口标题 |
| `visible` | `bool` | `false` | 窗口是否可见 |
| `closable` | `bool` | `true` | 是否显示关闭按钮 |
| `resizable` | `bool` | `false` | 窗口是否可调整大小 |
| `movable` | `bool` | `true` | 窗口是否可拖动 |
| `duration` | `int` | `400` | 窗口动画持续时间（毫秒） |
| `borderRadius` | `real` | `12` | 窗口圆角半径 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 窗口背景颜色 |
| `titleBarColor` | `color` | `theme.surfaceColor` | 标题栏背景颜色 |
| `titleColor` | `color` | `theme.textColor` | 标题文本颜色 |
| `shadowColor` | `color` | `theme.shadowColor` | 窗口阴影颜色 |
| `shadowBlur` | `int` | `20` | 窗口阴影模糊程度 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `show()` | 无 | 无 | 显示窗口，带有动画效果 |
| `hide()` | 无 | 无 | 隐藏窗口，带有动画效果 |
| `close()` | 无 | 无 | 关闭窗口，带有动画效果 |
| `toggleVisibility()` | 无 | 无 | 切换窗口可见性，带有动画效果 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `closed()` | 无 | 窗口关闭时触发 |
| `shown()` | 无 | 窗口显示时触发 |
| `hidden()` | 无 | 窗口隐藏时触发 |
| `resized()` | `real width, real height` | 窗口大小改变时触发 |
| `moved()` | `real x, real y` | 窗口位置改变时触发 |

## 扩展示例

### 带自定义内容的窗口

```qml
Components.EAnimatedWindow {
    width: 450
    height: 350
    title: "自定义内容窗口"
    visible: true
    
    Column {
        anchors.fill: parent
        padding: 20
        spacing: 16
        
        Text {
            text: "窗口内容区域"
            font.pointSize: 20
            font.bold: true
            color: theme.textColor
        }
        
        Components.EButton {
            text: "点击按钮"
            anchors.horizontalCenter: parent.horizontalCenter
            onClicked: console.log("按钮被点击")
        }
        
        Rectangle {
            width: parent.width - 40
            height: 1
            color: theme.borderColor
        }
        
        Text {
            text: "这是一个带自定义内容的动画窗口示例"
            color: theme.textColor
            wrapMode: Text.WrapAtWordBoundaryOrAnywhere
        }
    }
}
```

### 模态窗口效果

```qml
Components.EAnimatedWindow {
    width: 300
    height: 200
    title: "模态窗口"
    visible: true
    
    // 添加半透明背景遮罩
    Rectangle {
        anchors.fill: parent.parent
        color: Qt.rgba(0, 0, 0, 0.5)
        z: -1
    }
    
    Column {
        anchors.fill: parent
        padding: 20
        spacing: 16
        
        Text {
            text: "确认操作"
            font.pointSize: 18
            font.bold: true
            color: theme.textColor
        }
        
        Text {
            text: "您确定要执行此操作吗？"
            color: theme.textColor
            wrapMode: Text.WrapAtWordBoundaryOrAnywhere
        }
        
        Row {
            anchors.horizontalCenter: parent.horizontalCenter
            spacing: 16
            
            Components.EButton {
                text: "取消"
                onClicked: parent.parent.hide()
            }
            
            Components.EButton {
                text: "确定"
                backgroundColor: theme.primaryColor
                onClicked: {
                    console.log("执行操作")
                    parent.parent.hide()
                }
            }
        }
    }
}
```

### 可调整大小的窗口

```qml
Components.EAnimatedWindow {
    width: 400
    height: 300
    title: "可调整大小窗口"
    visible: true
    resizable: true
    
    Column {
        anchors.fill: parent
        padding: 20
        
        Text {
            text: "拖动右下角可调整窗口大小"
            color: theme.textColor
        }
        
        Rectangle {
            anchors.fill: parent
            anchors.topMargin: 10
            color: theme.surfaceColor
            border.color: theme.borderColor
            border.width: 1
            
            // 右下角调整大小手柄
            Rectangle {
                width: 20
                height: 20
                anchors.right: parent.right
                anchors.bottom: parent.bottom
                color: theme.primaryColor
                opacity: 0.5
            }
        }
    }
}
```

## 最佳实践

1. **窗口尺寸**：根据内容合理设置窗口初始尺寸，避免过大或过小
2. **标题简洁**：窗口标题应简洁明了，准确反映窗口功能
3. **交互设计**：根据应用场景决定窗口是否可拖动、调整大小或关闭
4. **动画性能**：对于复杂窗口内容，可适当调整动画时长或关闭动画以提升性能
5. **模态使用**：仅在需要用户立即关注的情况下使用模态窗口

## 注意事项

- 窗口组件需要在顶层 QML 文件中使用，或在适当的父容器中使用
- 可调整大小功能可能需要额外的手势处理逻辑
- 窗口动画效果在移动设备上可能有不同的表现
- 多个窗口同时显示时，注意窗口的堆叠顺序和用户体验
- 关闭窗口时，确保正确清理资源，避免内存泄漏