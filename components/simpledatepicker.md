# ESimpleDatePicker 简易日期选择组件

## 组件概述

`ESimpleDatePicker` 是一个轻量级的日期选择组件，提供简洁的日期选择界面，支持自定义范围和样式。

## 基本用法

```qml
import "components" as Components
Components.ESimpleDatePicker {
    id: datePicker
    width: 300
    height: 250
    anchors.centerIn: parent
    
    onDateSelected: {
        console.log("选择的日期:", selectedDate)
    }
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `selectedDate` | `date` | `new Date()` | 选中的日期 |
| `currentDate` | `date` | `new Date()` | 当前显示的日期 |
| `minDate` | `date` | `new Date(1900, 0, 1)` | 最小可选日期 |
| `maxDate` | `date` | `new Date(2100, 11, 31)` | 最大可选日期 |
| `showTodayButton` | `bool` | `true` | 是否显示今天按钮 |
| `showClearButton` | `bool` | `true` | 是否显示清除按钮 |
| `showYearSelector` | `bool` | `true` | 是否显示年份选择器 |
| `showMonthSelector` | `bool` | `true` | 是否显示月份选择器 |
| `showWeekdays` | `bool` | `true` | 是否显示星期几 |
| `weekdayFormat` | `string` | `"short"` | 星期显示格式 ("short", "long", "narrow") |
| `monthFormat` | `string` | `"long"` | 月份显示格式 ("short", "long", "narrow", "numeric") |
| `yearFormat` | `string` | `"numeric"` | 年份显示格式 ("numeric", "2-digit") |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `borderColor` | `color` | `theme.borderColor` | 边框颜色 |
| `borderRadius` | `real` | `12` | 边框圆角半径 |
| `selectedColor` | `color` | `theme.primaryColor` | 选中日期的颜色 |
| `todayColor` | `color` | `theme.accentColor` | 今天日期的颜色 |
| `headerBackgroundColor` | `color` | `theme.surfaceColor` | 头部背景颜色 |
| `headerTextColor` | `color` | `theme.textColor` | 头部文本颜色 |
| `buttonBackgroundColor` | `color` | `theme.surfaceColor` | 按钮背景颜色 |
| `buttonTextColor` | `color` | `theme.textColor` | 按钮文本颜色 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |
| `padding` | `real` | `10` | 内边距 |
| `spacing` | `real` | `5` | 间距 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `selectDate` | `date: date` | `void` | 选择指定日期 |
| `selectToday` | - | `void` | 选择今天 |
| `clearSelection` | - | `void` | 清除选择 |
| `showDate` | `date: date` | `void` | 显示指定日期所在的月份 |
| `nextMonth` | - | `void` | 显示下个月 |
| `previousMonth` | - | `void` | 显示上个月 |
| `nextYear` | - | `void` | 显示下一年 |
| `previousYear` | - | `void` | 显示上一年 |
| `setDateRange` | `min: date, max: date` | `void` | 设置日期范围 |
| `isDateEnabled` | `date: date` | `bool` | 检查日期是否可选 |
| `formatDate` | `date: date` | `string` | 格式化日期 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `dateSelected` | `selectedDate: date` | 选择日期时触发 |
| `dateRangeChanged` | `min: date, max: date` | 日期范围变化时触发 |
| `monthChanged` | `year: int, month: int` | 月份变化时触发 |
| `todaySelected` | `today: date` | 选择今天时触发 |
| `selectionCleared` | - | 清除选择时触发 |

## 示例

### 自定义日期范围

```qml
import "components" as Components
Components.ESimpleDatePicker {
    id: customDatePicker
    width: 350
    height: 300
    backgroundColor: "#FFFFFF"
    borderColor: "#E0E0E0"
    borderRadius: 16
    selectedColor: "#2196F3"
    todayColor: "#4CAF50"
    anchors.centerIn: parent
    
    // 设置日期范围
    Component.onCompleted: {
        var minDate = new Date()
        var maxDate = new Date()
        maxDate.setFullYear(maxDate.getFullYear() + 1)
        customDatePicker.setDateRange(minDate, maxDate)
    }
    
    onDateSelected: {
        console.log("选择的日期:", selectedDate.toLocaleDateString())
    }
}
```

### 简化版日期选择器

```qml
import "components" as Components
Components.ESimpleDatePicker {
    id: simpleDatePicker
    width: 250
    height: 200
    showTodayButton: false
    showClearButton: false
    showYearSelector: false
    backgroundColor: theme.surfaceColor
    borderColor: theme.borderColor
    borderRadius: 8
    anchors.centerIn: parent
}
```

### 集成到表单

```qml
import QtQuick 2.15
import QtQuick.Layouts 1.15
import "components" as Components

ColumnLayout {
    width: 400
    height: 350
    spacing: 20
    padding: 20
    anchors.centerIn: parent
    
    // 表单标题
    Text {
        text: "预约日期"
        font.pixelSize: 24
        color: theme.textColor
        Layout.alignment: Qt.AlignCenter
    }
    
    // 日期选择器
    Components.ESimpleDatePicker {
        id: formDatePicker
        Layout.fillWidth: true
        Layout.fillHeight: true
        backgroundColor: theme.surfaceColor
        borderColor: theme.borderColor
        borderRadius: 12
    }
    
    // 提交按钮
    Components.EButton {
        text: "提交预约"
        width: 200
        height: 40
        backgroundColor: theme.primaryColor
        textColor: "#FFFFFF"
        Layout.alignment: Qt.AlignCenter
        
        onClicked: {
            console.log("预约日期:", formDatePicker.selectedDate.toLocaleDateString())
        }
    }
}
```

## 设计说明

`ESimpleDatePicker` 组件采用表格布局，包含以下元素：

1. **头部**：显示当前月份和年份，提供月份和年份切换按钮
2. **星期行**：显示星期几的表头
3. **日期网格**：以网格形式显示当月的所有日期
4. **操作按钮**：包含今天和清除按钮

组件使用 Qt Quick 的 `Calendar` 模型获取日期数据，确保日期计算准确。

## 最佳实践

1. **设置合理的日期范围**：根据实际需求设置最小和最大可选日期
2. **选择合适的显示格式**：根据界面语言和习惯选择合适的日期格式
3. **样式定制**：根据主题选择合适的颜色和圆角，确保与整体界面协调
4. **事件处理**：通过监听 `dateSelected` 信号可以获取用户选择的日期
5. **性能优化**：对于频繁更新的场景，考虑缓存日期计算结果

## 性能优化

- 组件内部使用 `CalendarModel` 获取日期数据，避免重复计算
- 日期网格使用 `GridView` 实现，支持虚拟滚动
- 使用 `cache` 属性缓存组件渲染结果，减少重复渲染
- 仅在需要时更新日期显示，避免不必要的计算

## 兼容性

- 支持 Qt 6.5 及以上版本
- 兼容所有支持 QML 的平台
- 依赖 `QtQuick.Controls` 模块的 `CalendarModel`
- 日期格式可能因平台本地化设置略有不同

## 扩展功能

可以通过继承 `ESimpleDatePicker` 组件添加自定义功能：

```qml
import "components" as Components

Components.ESimpleDatePicker {
    id: extendedDatePicker
    width: 300
    height: 250
    anchors.centerIn: parent
    
    // 添加自定义功能
    property bool disableWeekends: false
    
    // 重写日期启用检查
    override function isDateEnabled(date) {
        if (disableWeekends) {
            var day = date.getDay()
            return day !== 0 && day !== 6 && super.isDateEnabled(date)
        }
        return super.isDateEnabled(date)
    }
    
    // 添加自定义信号
    signal dateDoubleClicked(date)
    
    // 处理双击事件
    MouseArea {
        anchors.fill: parent
        onDoubleClicked: {
            dateDoubleClicked(selectedDate)
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

Components.ESimpleDatePicker {
    id: themeDatePicker
    width: 300
    height: 250
    backgroundColor: theme.surfaceColor
    textColor: theme.textColor
    borderColor: theme.borderColor
    selectedColor: theme.primaryColor
    todayColor: theme.accentColor
    anchors.centerIn: parent
    
    // 主题变化时自动更新样式
    Connections {
        target: theme
        function onThemeChanged() {
            themeDatePicker.backgroundColor = theme.surfaceColor
            themeDatePicker.textColor = theme.textColor
            themeDatePicker.borderColor = theme.borderColor
            themeDatePicker.selectedColor = theme.primaryColor
            themeDatePicker.todayColor = theme.accentColor
        }
    }
}
```

## 布局示例

可以将多个 `ESimpleDatePicker` 组件组合使用：

```qml
import QtQuick 2.15
import QtQuick.Layouts 1.15
import "components" as Components

RowLayout {
    width: 700
    height: 300
    spacing: 20
    padding: 20
    anchors.centerIn: parent
    
    // 开始日期选择器
    Components.ESimpleDatePicker {
        id: startDatePicker
        Layout.fillWidth: true
        Layout.fillHeight: true
        backgroundColor: theme.surfaceColor
        borderColor: theme.borderColor
        borderRadius: 12
        
        onDateSelected: {
            // 更新结束日期的最小可选日期
            endDatePicker.minDate = selectedDate
        }
    }
    
    // 结束日期选择器
    Components.ESimpleDatePicker {
        id: endDatePicker
        Layout.fillWidth: true
        Layout.fillHeight: true
        backgroundColor: theme.surfaceColor
        borderColor: theme.borderColor
        borderRadius: 12
        
        onDateSelected: {
            // 更新开始日期的最大可选日期
            startDatePicker.maxDate = selectedDate
        }
    }
}
```