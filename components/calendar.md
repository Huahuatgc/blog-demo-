# ECalendar 组件

## 组件简介

ECalendar 是一个功能丰富的日历组件，支持日期选择、事件标记和自定义样式。它提供了直观的用户界面和流畅的交互体验，适合构建需要日期选择或日程管理功能的应用。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.ECalendar {
    width: 320
    height: 350
    onDateSelected: (date) => console.log("选择的日期:", date)
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `currentDate` | `date` | `new Date()` | 当前显示的日期 |
| `selectedDate` | `date` | `new Date()` | 当前选中的日期 |
| `showToday` | `bool` | `true` | 是否高亮显示今天的日期 |
| `showWeekdays` | `bool` | `true` | 是否显示星期几标题 |
| `showMonthNavigation` | `bool` | `true` | 是否显示月份导航控件 |
| `enableSelection` | `bool` | `true` | 是否允许选择日期 |
| `events` | `variant` | `[]` | 日历事件列表 |
| `weekdayFormat` | `int` | `Qt::ShortDayName` | 星期几显示格式 |
| `monthFormat` | `int` | `Qt::LongMonthName` | 月份显示格式 |
| `primaryColor` | `color` | `theme.primaryColor` | 主要颜色（选中日期） |
| `secondaryColor` | `color` | `theme.secondaryColor` | 次要颜色（事件标记） |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `textPrimaryColor` | `color` | `theme.textColor` | 主要文本颜色 |
| `textSecondaryColor` | `color` | `theme.textSecondaryColor` | 次要文本颜色 |
| `borderRadius` | `real` | `8` | 圆角半径 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `selectDate(date)` | `date` | `bool` | 选择指定日期 |
| `goToToday()` | 无 | `void` | 跳转到今天的日期 |
| `nextMonth()` | 无 | `void` | 显示下一个月 |
| `previousMonth()` | 无 | `void` | 显示上一个月 |
| `nextYear()` | 无 | `void` | 显示下一年 |
| `previousYear()` | 无 | `void` | 显示上一年 |
| `addEvent(event)` | `variant` | `bool` | 添加日历事件 |
| `removeEvent(eventId)` | `int` | `bool` | 移除日历事件 |
| `getEventsForDate(date)` | `date` | `variant` | 获取指定日期的事件 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `dateSelected(date)` | `date` | 当用户选择日期时触发 |
| `monthChanged(month, year)` | `int, int` | 当显示的月份改变时触发 |
| `yearChanged(year)` | `int` | 当显示的年份改变时触发 |
| `eventClicked(event)` | `variant` | 当用户点击事件时触发 |

## 扩展示例

### 带事件标记的日历

```qml
Components.ECalendar {
    width: 320
    height: 350
    
    // 初始化事件
    Component.onCompleted: {
        addEvent({ id: 1, date: new Date(2025, 11, 25), title: "圣诞节", color: theme.primaryColor })
        addEvent({ id: 2, date: new Date(2025, 11, 31), title: "新年夜", color: theme.secondaryColor })
        addEvent({ id: 3, date: new Date(2026, 0, 1), title: "新年", color: theme.primaryColor })
    }
    
    onDateSelected: (date) => console.log("选择的日期:", date)
    onEventClicked: (event) => console.log("点击的事件:", event.title)
}
```

### 自定义样式的日历

```qml
Components.ECalendar {
    width: 320
    height: 350
    primaryColor: "#ff4081"
    secondaryColor: "#03a9f4"
    backgroundColor: "#f5f5f5"
    textPrimaryColor: "#333333"
    textSecondaryColor: "#666666"
    borderRadius: 12
    
    onDateSelected: (date) => console.log("选择的日期:", date)
}
```

### 日期选择器模式

```qml
Components.EAnimatedWindow {
    width: 350
    height: 400
    title: "日期选择器"
    visible: true
    
    Column {
        anchors.fill: parent
        padding: 20
        spacing: 16
        
        Components.ECalendar {
            width: 310
            height: 320
            anchors.horizontalCenter: parent.horizontalCenter
            onDateSelected: (date) => selectedDateText.text = "选择的日期: " + date.toLocaleDateString()
        }
        
        Text {
            id: selectedDateText
            anchors.horizontalCenter: parent.horizontalCenter
            text: "选择的日期: " + new Date().toLocaleDateString()
            color: theme.textColor
        }
        
        Components.EButton {
            text: "确认"
            anchors.horizontalCenter: parent.horizontalCenter
            onClicked: parent.parent.hide()
        }
    }
}
```

## 最佳实践

1. **事件管理**：合理组织和管理日历事件，避免过多事件导致界面拥挤
2. **性能优化**：对于大量事件，考虑使用分页或懒加载策略
3. **日期格式**：根据用户地区设置合适的日期和星期格式
4. **交互反馈**：为日期选择和事件点击提供清晰的视觉反馈
5. **可访问性**：确保日历组件支持键盘导航和屏幕阅读器

## 注意事项

- 日历组件依赖 Qt 6.5 及以上版本的日期时间 API
- 事件数据格式应为包含 id、date、title 和 color 属性的对象数组
- 大量事件可能会影响组件性能，建议限制同时显示的事件数量
- 自定义样式时，注意保持日期选择和事件标记的可见性
- 组件支持的日期范围为 1900 年到 2100 年