# EClock 时钟显示组件

## 组件概述

`EClock` 是一个现代化的时钟显示组件，提供数字和模拟两种显示模式，支持自定义样式和时区设置。

## 基本用法

```qml
import "components" as Components
Components.EClock {
    id: clock
    width: 200
    height: 200
    anchors.centerIn: parent
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `clockMode` | `string` | `"digital"` | 时钟模式 ("digital" 或 "analog") |
| `timeZone` | `int` | `0` | 时区偏移量 (小时) |
| `showSeconds` | `bool` | `true` | 是否显示秒数 |
| `showDate` | `bool` | `false` | 是否显示日期 |
| `showDay` | `bool` | `false` | 是否显示星期 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `backgroundColor` | `color` | `transparent` | 背景颜色 |
| `borderColor` | `color` | `theme.borderColor` | 边框颜色 |
| `borderRadius` | `real` | `0` | 边框圆角半径 |
| `fontSize` | `real` | `48` | 字体大小 (数字模式) |
| `clockFaceColor` | `color` | `theme.surfaceColor` | 时钟表盘颜色 (模拟模式) |
| `hourHandColor` | `color` | `theme.primaryColor` | 时针颜色 (模拟模式) |
| `minuteHandColor` | `color` | `theme.primaryColor` | 分针颜色 (模拟模式) |
| `secondHandColor` | `color` | `theme.accentColor` | 秒针颜色 (模拟模式) |
| `tickColor` | `color` | `theme.textColor` | 刻度颜色 (模拟模式) |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `setClockMode` | `mode: string` | `void` | 设置时钟模式 |
| `setTimeZone` | `offset: int` | `void` | 设置时区偏移量 |
| `updateTime` | `hour: int, minute: int, second: int` | `void` | 手动更新时间 |
| `toggleSecondsDisplay` | `show: bool` | `void` | 切换秒数显示 |
| `toggleDateDisplay` | `show: bool` | `void` | 切换日期显示 |
| `getCurrentTime` | - | `DateTime` | 获取当前时间对象 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `timeChanged` | `hour: int, minute: int, second: int` | 时间变化时触发 |
| `modeChanged` | `mode: string` | 时钟模式变化时触发 |
| `timeZoneChanged` | `offset: int` | 时区变化时触发 |

## 示例

### 模拟时钟模式

```qml
import "components" as Components
Components.EClock {
    id: analogClock
    width: 250
    height: 250
    clockMode: "analog"
    showSeconds: true
    showDate: true
    showDay: true
    clockFaceColor: "#FFFFFF"
    hourHandColor: "#333333"
    minuteHandColor: "#666666"
    secondHandColor: "#FF4444"
    tickColor: "#999999"
    anchors.centerIn: parent
}
```

### 数字时钟模式

```qml
import "components" as Components
Components.EClock {
    id: digitalClock
    width: 300
    height: 100
    clockMode: "digital"
    showSeconds: true
    showDate: false
    fontSize: 64
    textColor: "#2196F3"
    anchors.centerIn: parent
}
```

### 多时区时钟

```qml
import QtQuick.Layouts 1.15
import "components" as Components

ColumnLayout {
    anchors.centerIn: parent
    spacing: 20
    
    Components.EClock {
        width: 150
        height: 150
        clockMode: "analog"
        timeZone: 0 // GMT
        clockFaceColor: "#F5F5F5"
    }
    
    Components.EClock {
        width: 150
        height: 150
        clockMode: "analog"
        timeZone: 8 // GMT+8 (China)
        clockFaceColor: "#F5F5F5"
    }
    
    Components.EClock {
        width: 150
        height: 150
        clockMode: "analog"
        timeZone: -5 // GMT-5 (US East)
        clockFaceColor: "#F5F5F5"
    }
}
```

## 设计说明

`EClock` 组件采用了现代化的设计理念，具有以下特点：

1. **双模式显示**：支持数字和模拟两种时钟模式，满足不同的设计需求
2. **高度可定制**：提供丰富的属性用于自定义颜色、字体、大小等
3. **时区支持**：可以显示不同时区的时间
4. **动态效果**：模拟时钟的指针平滑转动，数字时钟的时间实时更新
5. **响应式设计**：自动适应不同的屏幕尺寸

## 最佳实践

1. **选择合适的模式**：数字模式适合需要精确时间显示的场景，模拟模式适合装饰性场景
2. **合理设置尺寸**：根据使用场景调整时钟的大小，确保清晰可读
3. **颜色搭配**：根据主题选择合适的颜色，确保时钟与整体界面协调
4. **性能优化**：对于多个时钟实例，考虑共享时间源以提高性能
5. **事件处理**：通过监听信号可以在时间变化时执行自定义逻辑

## 性能优化

- 组件内部使用 `Timer` 定时器更新时间，避免频繁的时间计算
- 模拟时钟的指针使用 `rotation` 属性动画，性能开销低
- 支持 `cache` 属性缓存组件渲染结果，减少重复渲染
- 当组件不可见时自动暂停时间更新，节省资源

## 兼容性

- 支持 Qt 6.5 及以上版本
- 兼容所有支持 QML 的平台
- 数字时钟模式在所有平台上表现一致
- 模拟时钟模式可能因平台渲染差异略有不同

## 扩展功能

可以通过继承 `EClock` 组件添加自定义功能：

```qml
import "components" as Components

Components.EClock {
    id: customClock
    width: 200
    height: 200
    clockMode: "analog"
    anchors.centerIn: parent
    
    // 添加自定义功能
    property int alarmHour: 8
    property int alarmMinute: 30
    
    function checkAlarm() {
        var currentTime = getCurrentTime()
        return currentTime.getHours() === alarmHour && currentTime.getMinutes() === alarmMinute
    }
    
    // 自定义信号
    signal alarmTriggered
    
    // 检查闹钟
    onTimeChanged: {
        if (checkAlarm()) {
            alarmTriggered()
        }
    }
}
```