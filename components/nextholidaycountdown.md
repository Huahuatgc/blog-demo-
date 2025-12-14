# ENextHolidayCountdown 假期倒计时组件

## 组件概述

`ENextHolidayCountdown` 是一个用于显示下一个假期倒计时的组件，支持自定义假期数据和样式。

## 基本用法

```qml
import "components" as Components
Components.ENextHolidayCountdown {
    id: holidayCountdown
    width: 300
    height: 150
    anchors.centerIn: parent
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `holidays` | `array` | `[]` | 假期数据数组 |
| `nextHoliday` | `object` | `{}` | 下一个假期信息 |
| `currentDate` | `date` | `new Date()` | 当前日期 |
| `targetDate` | `date` | `new Date()` | 目标假期日期 |
| `daysRemaining` | `int` | `0` | 剩余天数 |
| `hoursRemaining` | `int` | `0` | 剩余小时数 |
| `minutesRemaining` | `int` | `0` | 剩余分钟数 |
| `secondsRemaining` | `int` | `0` | 剩余秒数 |
| `showDays` | `bool` | `true` | 是否显示剩余天数 |
| `showHours` | `bool` | `true` | 是否显示剩余小时数 |
| `showMinutes` | `bool` | `true` | 是否显示剩余分钟数 |
| `showSeconds` | `bool` | `true` | 是否显示剩余秒数 |
| `showTotalTime` | `bool` | `false` | 是否显示总剩余时间 |
| `showHolidayName` | `bool` | `true` | 是否显示假期名称 |
| `showHolidayDate` | `bool` | `true` | 是否显示假期日期 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `borderColor` | `color` | `theme.borderColor` | 边框颜色 |
| `borderRadius` | `real` | `16` | 边框圆角半径 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |
| `padding` | `real` | `20` | 内边距 |
| `fontSize` | `real` | `18` | 文本字体大小 |
| `titleFontSize` | `real` | `24` | 标题字体大小 |
| `animationEnabled` | `bool` | `true` | 是否启用动画效果 |
| `autoUpdate` | `bool` | `true` | 是否自动更新倒计时 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `updateCountdown` | - | `void` | 更新倒计时信息 |
| `setCurrentDate` | `date: date` | `void` | 设置当前日期 |
| `setTargetDate` | `date: date` | `void` | 设置目标日期 |
| `setHolidays` | `holidays: array` | `void` | 设置假期数据 |
| `findNextHoliday` | - | `object` | 查找下一个假期 |
| `calculateTimeRemaining` | - | `object` | 计算剩余时间 |
| `formatDate` | `date: date` | `string` | 格式化日期 |
| `formatTime` | `seconds: int` | `string` | 格式化时间 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `countdownUpdated` | `days: int, hours: int, minutes: int, seconds: int` | 倒计时更新时触发 |
| `holidayChanged` | `holiday: object` | 假期变化时触发 |
| `targetDateReached` | `holiday: object` | 到达目标日期时触发 |

## 示例

### 自定义假期倒计时

```qml
import "components" as Components
Components.ENextHolidayCountdown {
    id: customHolidayCountdown
    width: 350
    height: 200
    backgroundColor: "#F5F5F5"
    borderColor: "#E0E0E0"
    borderRadius: 20
    padding: 25
    fontSize: 20
    titleFontSize: 28
    anchors.centerIn: parent
    
    // 设置自定义假期
    holidays: [
        { name: "春节", date: "2026-01-29" },
        { name: "清明节", date: "2026-04-04" },
        { name: "劳动节", date: "2026-05-01" },
        { name: "端午节", date: "2026-06-04" },
        { name: "中秋节", date: "2026-09-11" },
        { name: "国庆节", date: "2026-10-01" }
    ]
    
    // 信号处理
    onTargetDateReached: {
        console.log(holiday.name, "到了！")
    }
}
```

### 简化版假期倒计时

```qml
import "components" as Components
Components.ENextHolidayCountdown {
    id: simpleHolidayCountdown
    width: 250
    height: 100
    showHours: false
    showMinutes: false
    showSeconds: false
    backgroundColor: theme.surfaceColor
    borderColor: theme.borderColor
    borderRadius: 8
    anchors.centerIn: parent
}
```

### 实时更新倒计时

```qml
import "components" as Components
Components.ENextHolidayCountdown {
    id: realtimeHolidayCountdown
    width: 400
    height: 250
    showDays: true
    showHours: true
    showMinutes: true
    showSeconds: true
    showTotalTime: false
    animationEnabled: true
    autoUpdate: true
    backgroundColor: "#4CAF50"
    textColor: "#FFFFFF"
    borderColor: "#388E3C"
    borderRadius: 20
    padding: 30
    anchors.centerIn: parent
    
    // 加载自定义假期
    Component.onCompleted: {
        realtimeHolidayCountdown.setHolidays([
            { name: "元旦", date: "2026-01-01" },
            { name: "春节", date: "2026-01-29" },
            { name: "国庆节", date: "2026-10-01" }
        ])
        realtimeHolidayCountdown.findNextHoliday()
    }
}
```

## 设计说明

`ENextHolidayCountdown` 组件采用卡片式设计，包含以下元素：

1. **假期名称**：显示下一个假期的名称
2. **剩余时间**：以天、时、分、秒的形式显示剩余时间
3. **假期日期**：显示假期的具体日期
4. **动画效果**：数字变化时的淡入淡出动画
5. **交互反馈**：到达目标日期时的信号通知

## 最佳实践

1. **数据配置**：合理配置假期数据，确保日期格式正确
2. **显示选项**：根据实际需求选择显示的时间单位
3. **样式定制**：根据主题选择合适的颜色和字体大小
4. **性能优化**：对于不需要秒级更新的场景，可以关闭秒数显示
5. **事件处理**：通过监听信号可以在假期到达时执行自定义逻辑

## 性能优化

- 组件内部使用 `Timer` 定时器更新倒计时，默认每秒更新一次
- 时间计算使用 `Date` 对象的差值计算，性能开销低
- 支持 `cache` 属性缓存组件渲染结果，减少重复渲染
- 当组件不可见时自动暂停倒计时更新，节省资源

## 兼容性

- 支持 Qt 6.5 及以上版本
- 兼容所有支持 QML 的平台
- 依赖 `Date` 对象，确保系统日期设置正确

## 扩展功能

可以通过继承 `ENextHolidayCountdown` 组件添加自定义功能：

```qml
import "components" as Components

Components.ENextHolidayCountdown {
    id: extendedHolidayCountdown
    width: 300
    height: 150
    anchors.centerIn: parent
    
    // 添加自定义功能
    property string currentYear: new Date().getFullYear().toString()
    property int workDaysRemaining: 0
    
    function calculateWorkDaysRemaining() {
        // 自定义逻辑计算剩余工作日
        workDaysRemaining = daysRemaining - Math.floor(daysRemaining / 7) * 2
        return workDaysRemaining
    }
    
    // 重写假期查找逻辑
    override function findNextHoliday() {
        // 自定义假期查找逻辑
        var holiday = super.findNextHoliday()
        calculateWorkDaysRemaining()
        return holiday
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

Components.ENextHolidayCountdown {
    id: themeHolidayCountdown
    width: 300
    height: 150
    backgroundColor: theme.surfaceColor
    textColor: theme.textColor
    borderColor: theme.borderColor
    anchors.centerIn: parent
    
    // 主题变化时自动更新样式
    Connections {
        target: theme
        function onThemeChanged() {
            themeHolidayCountdown.backgroundColor = theme.surfaceColor
            themeHolidayCountdown.textColor = theme.textColor
            themeHolidayCountdown.borderColor = theme.borderColor
        }
    }
}
```

## 布局示例

可以将 `ENextHolidayCountdown` 组件与其他组件结合使用：

```qml
import QtQuick 2.15
import QtQuick.Layouts 1.15
import "components" as Components

Rectangle {
    width: 600
    height: 300
    color: theme.background
    anchors.centerIn: parent
    
    RowLayout {
        anchors.fill: parent
        spacing: 20
        padding: 20
        
        // 假期倒计时
        Components.ENextHolidayCountdown {
            Layout.fillWidth: true
            Layout.fillHeight: true
            backgroundColor: theme.surfaceColor
            borderColor: theme.borderColor
            borderRadius: 16
            showSeconds: false
        }
        
        // 年度进度
        Components.EYearProgress {
            Layout.fillWidth: true
            Layout.fillHeight: true
            backgroundColor: theme.surfaceColor
            borderColor: theme.borderColor
            borderRadius: 16
        }
    }
}
```