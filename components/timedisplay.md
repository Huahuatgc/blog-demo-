# ETimeDisplay 时间显示组件

## 组件概述

`ETimeDisplay` 是一个用于显示时间的组件，支持多种时间格式和样式。

## 基本用法

```qml
import "components" as Components
Components.ETimeDisplay {
    id: timeDisplay
    width: 150
    height: 50
    anchors.centerIn: parent
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `currentTime` | `date` | `new Date()` | 当前时间 |
| `timeFormat` | `string` | `"hh:mm:ss"` | 时间格式 |
| `text` | `string` | `""` | 显示的文本 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `backgroundColor` | `color` | `transparent` | 背景颜色 |
| `borderColor` | `color` | `transparent` | 边框颜色 |
| `borderRadius` | `real` | `0` | 边框圆角半径 |
| `fontSize` | `real` | `24` | 字体大小 |
| `fontWeight` | `int` | `Font.Normal` | 字体粗细 |
| `fontFamily` | `string` | `""` | 字体族 |
| `textAlignment` | `Qt.Alignment` | `Qt.AlignCenter` | 文本对齐方式 |
| `padding` | `real` | `0` | 内边距 |
| `autoUpdate` | `bool` | `true` | 是否自动更新时间 |
| `updateInterval` | `int` | `1000` | 自动更新间隔 (毫秒) |
| `showSeconds` | `bool` | `true` | 是否显示秒数 |
| `showAMPM` | `bool` | `false` | 是否显示上午/下午 |
| `showTimeZone` | `bool` | `false` | 是否显示时区 |
| `timeZoneOffset` | `int` | `0` | 时区偏移量 (小时) |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `updateTime` | `time: date` | `void` | 更新时间 |
| `setTimeFormat` | `format: string` | `void` | 设置时间格式 |
| `startAutoUpdate` | `interval: int` | `void` | 开始自动更新 |
| `stopAutoUpdate` | - | `void` | 停止自动更新 |
| `toggleSecondsDisplay` | `show: bool` | `void` | 切换秒数显示 |
| `toggleAMPMDisplay` | `show: bool` | `void` | 切换上午/下午显示 |
| `toggleTimeZoneDisplay` | `show: bool` | `void` | 切换时区显示 |
| `formatTime` | `time: date` | `string` | 格式化时间 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `timeUpdated` | `time: date` | 时间更新时触发 |
| `formatChanged` | `format: string` | 时间格式变化时触发 |
| `updateIntervalChanged` | `interval: int` | 更新间隔变化时触发 |

## 示例

### 自定义格式时间显示

```qml
import "components" as Components
Components.ETimeDisplay {
    id: customTimeDisplay
    width: 200
    height: 60
    timeFormat: "hh:mm AP"
    showAMPM: true
    showSeconds: false
    fontSize: 36
    fontWeight: Font.Bold
    textColor: "#2196F3"
    backgroundColor: "#F5F5F5"
    borderRadius: 8
    padding: 10
    anchors.centerIn: parent
}
```

### 带时区的时间显示

```qml
import "components" as Components
Components.ETimeDisplay {
    id: timeZoneDisplay
    width: 250
    height: 80
    timeFormat: "hh:mm:ss z"
    showTimeZone: true
    timeZoneOffset: 8 // GMT+8
    fontSize: 24
    textColor: "#FFFFFF"
    backgroundColor: "#333333"
    borderRadius: 12
    padding: 15
    anchors.centerIn: parent
}
```

### 静态时间显示

```qml
import "components" as Components
Components.ETimeDisplay {
    id: staticTimeDisplay
    width: 150
    height: 40
    autoUpdate: false
    text: "12:34:56"
    fontSize: 20
    textColor: theme.textColor
    anchors.centerIn: parent
}
```

## 设计说明

`ETimeDisplay` 组件提供了灵活的时间显示功能，支持以下时间格式：

- `hh`: 24小时制小时 (00-23)
- `h`: 12小时制小时 (1-12)
- `mm`: 分钟 (00-59)
- `ss`: 秒 (00-59)
- `AP`: 上午/下午 (AM/PM)
- `ap`: 上午/下午 (am/pm)
- `z`: 时区缩写

组件使用 Qt Quick 的 `Timer` 定时器更新时间，确保时间显示准确。

## 最佳实践

1. **选择合适的时间格式**：根据实际需求选择合适的时间格式
2. **合理设置尺寸**：根据界面大小调整组件的大小，确保清晰可读
3. **颜色搭配**：根据主题选择合适的颜色，确保与整体界面协调
4. **性能优化**：对于不需要秒级更新的场景，可以关闭秒数显示或增加更新间隔
5. **事件处理**：通过监听 `timeUpdated` 信号可以在时间变化时执行自定义逻辑

## 性能优化

- 组件内部使用 `Timer` 定时器更新时间，避免频繁的时间计算
- 静态时间显示可以关闭自动更新，节省资源
- 支持 `cache` 属性缓存组件渲染结果，减少重复渲染
- 当组件不可见时自动暂停时间更新，节省资源

## 兼容性

- 支持 Qt 6.5 及以上版本
- 兼容所有支持 QML 的平台
- 时间格式可能因平台本地化设置略有不同
- 时区显示依赖平台的时区设置

## 扩展功能

可以通过继承 `ETimeDisplay` 组件添加自定义功能：

```qml
import "components" as Components

Components.ETimeDisplay {
    id: extendedTimeDisplay
    width: 200
    height: 60
    anchors.centerIn: parent
    
    // 添加自定义功能
    property bool showMilliseconds: false
    
    // 重写时间格式化
    override function formatTime(time) {
        var formatted = super.formatTime(time)
        if (showMilliseconds) {
            var ms = time.getMilliseconds().toString().padStart(3, "0")
            formatted += "." + ms
        }
        return formatted
    }
    
    // 添加自定义信号
    signal timeSecondChanged(int)
    
    // 处理秒数变化
    onTimeUpdated: {
        timeSecondChanged(time.getSeconds())
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

Components.ETimeDisplay {
    id: themeTimeDisplay
    width: 150
    height: 50
    textColor: theme.textColor
    backgroundColor: theme.surfaceColor
    borderColor: theme.borderColor
    anchors.centerIn: parent
    
    // 主题变化时自动更新样式
    Connections {
        target: theme
        function onThemeChanged() {
            themeTimeDisplay.textColor = theme.textColor
            themeTimeDisplay.backgroundColor = theme.surfaceColor
            themeTimeDisplay.borderColor = theme.borderColor
        }
    }
}
```

## 布局示例

可以将多个 `ETimeDisplay` 组件组合使用：

```qml
import QtQuick 2.15
import QtQuick.Layouts 1.15
import "components" as Components

RowLayout {
    anchors.centerIn: parent
    spacing: 20
    
    // 本地时间
    Components.ETimeDisplay {
        width: 150
        height: 50
        showTimeZone: true
        timeZoneOffset: 0
        backgroundColor: theme.surfaceColor
        borderColor: theme.borderColor
        borderRadius: 8
        padding: 10
    }
    
    // 北京时间
    Components.ETimeDisplay {
        width: 150
        height: 50
        showTimeZone: true
        timeZoneOffset: 8
        backgroundColor: theme.surfaceColor
        borderColor: theme.borderColor
        borderRadius: 8
        padding: 10
    }
    
    // 纽约时间
    Components.ETimeDisplay {
        width: 150
        height: 50
        showTimeZone: true
        timeZoneOffset: -5
        backgroundColor: theme.surfaceColor
        borderColor: theme.borderColor
        borderRadius: 8
        padding: 10
    }
}
```