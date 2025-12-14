# EClockCard 时钟卡片容器组件

## 组件概述

`EClockCard` 是一个包含时钟显示的卡片容器组件，提供了时钟、日期、星期和其他信息的组合展示，支持自定义样式和交互效果。

## 基本用法

```qml
import "components" as Components
Components.EClockCard {
    id: clockCard
    width: 300
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
| `showDate` | `bool` | `true` | 是否显示日期 |
| `showDay` | `bool` | `true` | 是否显示星期 |
| `showWeather` | `bool` | `false` | 是否显示天气信息 |
| `weatherIcon` | `string` | `"sunny"` | 天气图标 |
| `temperature` | `string` | `"25°C"` | 温度信息 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `borderColor` | `color` | `theme.borderColor` | 边框颜色 |
| `borderRadius` | `real` | `16` | 边框圆角半径 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |
| `padding` | `real` | `20` | 内边距 |
| `clockSize` | `real` | `100` | 时钟组件大小 |
| `animationEnabled` | `bool` | `true` | 是否启用动画效果 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `setClockMode` | `mode: string` | `void` | 设置时钟模式 |
| `setTimeZone` | `offset: int` | `void` | 设置时区偏移量 |
| `updateWeatherInfo` | `icon: string, temp: string` | `void` | 更新天气信息 |
| `toggleSecondsDisplay` | `show: bool` | `void` | 切换秒数显示 |
| `toggleDateDisplay` | `show: bool` | `void` | 切换日期显示 |
| `toggleWeatherDisplay` | `show: bool` | `void` | 切换天气显示 |
| `getCurrentTime` | - | `DateTime` | 获取当前时间对象 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `timeChanged` | `hour: int, minute: int, second: int` | 时间变化时触发 |
| `clicked` | - | 点击卡片时触发 |
| `modeChanged` | `mode: string` | 时钟模式变化时触发 |

## 示例

### 模拟时钟卡片

```qml
import "components" as Components
Components.EClockCard {
    id: analogClockCard
    width: 350
    height: 250
    clockMode: "analog"
    showSeconds: true
    showDate: true
    showDay: true
    showWeather: true
    weatherIcon: "cloudy"
    temperature: "18°C"
    backgroundColor: "#FFFFFF"
    borderColor: "#E0E0E0"
    borderRadius: 20
    anchors.centerIn: parent
    
    onClicked: {
        console.log("时钟卡片被点击")
    }
}
```

### 数字时钟卡片

```qml
import "components" as Components
Components.EClockCard {
    id: digitalClockCard
    width: 300
    height: 200
    clockMode: "digital"
    showSeconds: true
    showDate: false
    showDay: false
    showWeather: false
    backgroundColor: "#333333"
    textColor: "#FFFFFF"
    borderColor: "#555555"
    anchors.centerIn: parent
}
```

### 多时区时钟卡片

```qml
import QtQuick.Layouts 1.15
import "components" as Components

RowLayout {
    anchors.centerIn: parent
    spacing: 20
    
    Components.EClockCard {
        width: 250
        height: 180
        clockMode: "analog"
        timeZone: 0 // GMT
        showDate: true
        showDay: true
        backgroundColor: "#F5F5F5"
    }
    
    Components.EClockCard {
        width: 250
        height: 180
        clockMode: "analog"
        timeZone: 8 // GMT+8 (China)
        showDate: true
        showDay: true
        backgroundColor: "#F5F5F5"
    }
}
```

## 设计说明

`EClockCard` 组件采用卡片式设计，包含以下元素：

1. **时钟显示**：支持数字和模拟两种模式
2. **日期显示**：当前日期信息
3. **星期显示**：当前星期几
4. **天气信息**：可选的天气图标和温度显示
5. **交互效果**：悬停和点击动画

组件内部使用 `EClock` 组件实现时钟功能，提供了统一的接口和样式控制。

## 最佳实践

1. **选择合适的时钟模式**：数字模式适合简洁的界面，模拟模式适合装饰性界面
2. **合理配置显示内容**：根据实际需求选择显示的信息（日期、星期、天气等）
3. **颜色搭配**：根据主题选择合适的颜色，确保卡片与整体界面协调
4. **尺寸调整**：根据使用场景调整卡片的大小，确保内容清晰可读
5. **事件处理**：通过监听 `clicked` 信号可以为卡片添加点击交互

## 性能优化

- 组件内部使用 `EClock` 组件，共享时间源以提高性能
- 天气信息和其他静态内容使用 `cache` 属性缓存
- 动画效果使用 Qt Quick 的属性动画，性能开销低
- 当组件不可见时自动暂停时钟更新，节省资源

## 兼容性

- 支持 Qt 6.5 及以上版本
- 兼容所有支持 QML 的平台
- 依赖 `EClock` 组件，确保该组件已正确导入

## 扩展功能

可以通过继承 `EClockCard` 组件添加自定义功能：

```qml
import "components" as Components

Components.EClockCard {
    id: customClockCard
    width: 300
    height: 200
    anchors.centerIn: parent
    
    // 添加自定义功能
    property string location: "Beijing"
    property string ipAddress: ""
    
    function updateLocationInfo() {
        // 自定义逻辑获取位置信息
        location = "New York"
        ipAddress = "192.168.1.1"
    }
    
    // 自定义显示内容
    Component.onCompleted: {
        updateLocationInfo()
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

Components.EClockCard {
    id: themeClockCard
    width: 300
    height: 200
    anchors.centerIn: parent
    
    // 主题变化时自动更新样式
    Connections {
        target: theme
        function onThemeChanged() {
            console.log("主题已切换")
        }
    }
}
```

## 布局示例

可以将多个 `EClockCard` 组件组合使用：

```qml
import QtQuick.Layouts 1.15
import "components" as Components

GridLayout {
    anchors.centerIn: parent
    columns: 2
    rows: 2
    spacing: 20
    
    Components.EClockCard {
        width: 250
        height: 180
        clockMode: "analog"
        timeZone: 0
        showWeather: true
        weatherIcon: "sunny"
        temperature: "25°C"
    }
    
    Components.EClockCard {
        width: 250
        height: 180
        clockMode: "digital"
        timeZone: 8
        showWeather: true
        weatherIcon: "cloudy"
        temperature: "18°C"
    }
    
    Components.EClockCard {
        width: 250
        height: 180
        clockMode: "analog"
        timeZone: -5
        showWeather: true
        weatherIcon: "rainy"
        temperature: "12°C"
    }
    
    Components.EClockCard {
        width: 250
        height: 180
        clockMode: "digital"
        timeZone: -8
        showWeather: true
        weatherIcon: "snowy"
        temperature: "-5°C"
    }
}
```