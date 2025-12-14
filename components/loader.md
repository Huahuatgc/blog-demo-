# ELoader 加载动画组件

## 组件概述

`ELoader` 是一个现代化的加载动画组件，提供多种动画样式和自定义选项，用于在数据加载、页面切换等场景中提供视觉反馈。

## 基本用法

```qml
import "components" as Components
Components.ELoader {
    id: loader
    width: 100
    height: 100
    anchors.centerIn: parent
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `type` | `string` | `"spinner"` | 加载动画类型 ("spinner", "pulse", "dots", "circle", "line") |
| `size` | `real` | `50` | 动画尺寸 |
| `color` | `color` | `theme.primaryColor` | 动画颜色 |
| `backgroundColor` | `color` | `transparent` | 背景颜色 |
| `strokeWidth` | `real` | `4` | 描边宽度 (适用于 spinner 和 circle 类型) |
| `speed` | `real` | `1.0` | 动画速度倍数 |
| `opacity` | `real` | `1.0` | 组件透明度 |
| `visible` | `bool` | `true` | 组件可见性 |
| `z` | `int` | `9999` | 组件堆叠顺序 |
| `showText` | `bool` | `false` | 是否显示加载文本 |
| `text` | `string` | `"加载中..."` | 加载文本内容 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `fontSize` | `real` | `14` | 文本字体大小 |
| `center` | `bool` | `true` | 是否居中显示 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `start` | - | `void` | 开始动画 |
| `stop` | - | `void` | 停止动画 |
| `reset` | - | `void` | 重置动画 |
| `setType` | `type: string` | `void` | 设置动画类型 |
| `setColor` | `color: color` | `void` | 设置动画颜色 |
| `setSize` | `size: real` | `void` | 设置动画尺寸 |
| `setSpeed` | `speed: real` | `void` | 设置动画速度 |
| `setVisible` | `visible: bool` | `void` | 设置组件可见性 |
| `isRunning` | - | `bool` | 获取动画运行状态 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `started` | - | 动画开始时触发 |
| `stopped` | - | 动画停止时触发 |
| `typeChanged` | `type: string` | 动画类型变化时触发 |
| `sizeChanged` | `size: real` | 动画尺寸变化时触发 |
| `colorChanged` | `color: color` | 动画颜色变化时触发 |

## 示例

### 脉冲加载动画

```qml
import "components" as Components
Components.ELoader {
    id: pulseLoader
    width: 80
    height: 80
    type: "pulse"
    color: "#FF4444"
    size: 60
    speed: 1.5
    anchors.centerIn: parent
}
```

### 点式加载动画

```qml
import "components" as Components
Components.ELoader {
    id: dotsLoader
    width: 100
    height: 40
    type: "dots"
    color: "#2196F3"
    size: 20
    speed: 0.8
    showText: true
    text: "正在加载..."
    anchors.centerIn: parent
}
```

### 圆形加载动画

```qml
import "components" as Components
Components.ELoader {
    id: circleLoader
    width: 120
    height: 120
    type: "circle"
    color: "#4CAF50"
    strokeWidth: 6
    size: 80
    speed: 1.2
    anchors.centerIn: parent
}
```

### 线性加载动画

```qml
import "components" as Components
Components.ELoader {
    id: lineLoader
    width: 200
    height: 20
    type: "line"
    color: "#FF9800"
    size: 200
    speed: 1.0
    anchors.centerIn: parent
}
```

## 设计说明

`ELoader` 组件提供了多种动画类型，满足不同场景的需求：

1. **Spinner**：经典的旋转加载动画，适用于大多数场景
2. **Pulse**：脉冲式动画，简洁现代
3. **Dots**：三个点依次跳动，适合轻量级加载场景
4. **Circle**：圆形进度动画，适合长时间加载场景
5. **Line**：线性进度条，适合有明确进度的场景

组件采用 SVG 技术实现，确保动画在各种尺寸下都清晰锐利。

## 最佳实践

1. **选择合适的动画类型**：根据加载时间和场景选择合适的动画类型
2. **合理设置尺寸**：根据界面大小调整动画尺寸，确保清晰可见
3. **颜色搭配**：使用主题主色调或与界面协调的颜色
4. **添加文本提示**：对于长时间加载，考虑添加文本提示
5. **控制显示时机**：仅在必要时显示加载动画，避免过度使用

## 性能优化

- 使用 SVG 技术实现动画，性能开销低
- 动画基于 `RotationAnimation` 和 `PropertyAnimation` 实现，效率高
- 组件内部使用 `onCompleted` 信号进行初始化，避免不必要的计算
- 支持 `cache` 属性缓存组件渲染结果

## 兼容性

- 支持 Qt 6.5 及以上版本
- 兼容所有支持 QML 和 SVG 的平台
- 动画效果在所有平台上表现一致
- 不依赖外部资源，可独立使用

## 扩展功能

可以通过继承 `ELoader` 组件添加自定义动画类型：

```qml
import "components" as Components
import QtQuick 2.15

Components.ELoader {
    id: customLoader
    width: 100
    height: 100
    anchors.centerIn: parent
    
    // 自定义动画元素
    Rectangle {
        id: customAnimation
        width: parent.size
        height: parent.size
        radius: parent.size / 2
        color: "transparent"
        border.width: parent.strokeWidth
        border.color: parent.color
        
        // 自定义动画
        RotationAnimation on rotation {
            from: 0
            to: 360
            duration: 1000 / parent.speed
            loops: Animation.Infinite
            easing.type: Easing.Linear
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

Components.ELoader {
    id: themeLoader
    width: 100
    height: 100
    color: theme.primaryColor
    anchors.centerIn: parent
    
    // 主题变化时自动更新颜色
    Connections {
        target: theme
        function onThemeChanged() {
            themeLoader.color = theme.primaryColor
        }
    }
}
```

## 布局示例

可以将 `ELoader` 组件与其他组件结合使用：

```qml
import QtQuick 2.15
import QtQuick.Layouts 1.15
import "components" as Components

Rectangle {
    width: 400
    height: 300
    color: theme.surfaceColor
    anchors.centerIn: parent
    
    // 加载遮罩
    Rectangle {
        id: overlay
        anchors.fill: parent
        color: Qt.rgba(0, 0, 0, 0.5)
        visible: isLoading
        
        Components.ELoader {
            anchors.centerIn: parent
            type: "spinner"
            size: 80
            color: "#FFFFFF"
            showText: true
            text: "数据加载中..."
            textColor: "#FFFFFF"
        }
    }
    
    // 内容区域
    Text {
        text: isLoading ? "" : "加载完成！"
        anchors.centerIn: parent
        color: theme.textColor
        font.pixelSize: 24
    }
    
    property bool isLoading: true
    
    // 模拟加载过程
    Timer {
        interval: 3000
        running: true
        onTriggered: {
            isLoading = false
        }
    }
}
```