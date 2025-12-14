# EYearProgress 组件

## 组件简介

EYearProgress 是一个年度进度展示组件，用于可视化当前年份的流逝进度。它提供了环形进度条和文字说明，适合构建时间管理和年度目标追踪应用。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.EYearProgress {
    width: 200
    height: 200
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `currentDate` | `date` | `new Date()` | 当前日期 |
| `progress` | `real` | `0` | 年度进度值（0-1） |
| `showProgressText` | `bool` | `true` | 是否显示进度文本 |
| `showYear` | `bool` | `true` | 是否显示年份 |
| `animated` | `bool` | `true` | 是否启用动画效果 |
| `animationDuration` | `int` | `1000` | 动画持续时间（毫秒） |
| `radius` | `real` | `80` | 环形进度条半径 |
| `strokeWidth` | `real` | `15` | 环形进度条宽度 |
| `backgroundColor` | `color` | `theme.borderColor` | 背景环形颜色 |
| `progressColor` | `color` | `theme.primaryColor` | 进度环形颜色 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `yearColor` | `color` | `theme.textSecondaryColor` | 年份文本颜色 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `setDate(date)` | `date` | 无 | 设置当前日期 |
| `calculateProgress()` | 无 | `real` | 计算年度进度值 |
| `update()` | 无 | 无 | 更新组件显示 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `progressChanged(progress)` | `real` | 进度值改变时触发 |
| `dateChanged(date)` | `date` | 日期改变时触发 |

## 扩展示例

### 自定义样式的年度进度组件

```qml
Components.EYearProgress {
    width: 250
    height: 250
    
    radius: 100
    strokeWidth: 20
    backgroundColor: "#e0e0e0"
    progressColor: "#4caf50"
    textColor: "#333333"
    yearColor: "#666666"
    
    showProgressText: true
    showYear: true
    animated: true
    animationDuration: 1500
}
```

### 带有时间信息的年度进度组件

```qml
Components.EAnimatedWindow {
    width: 300
    height: 350
    title: "年度进度展示"
    visible: true
    
    Column {
        anchors.fill: parent
        padding: 20
        spacing: 20
        
        Components.EYearProgress {
            width: 260
            height: 260
            progressColor: theme.primaryColor
        }
        
        Text {
            id: timeInfo
            text: "当前时间: " + new Date().toLocaleString()
            color: theme.textColor
            anchors.horizontalCenter: parent.horizontalCenter
            font.pointSize: 14
        }
        
        Timer {
            interval: 1000
            running: true
            repeat: true
            onTriggered: {
                timeInfo.text = "当前时间: " + new Date().toLocaleString()
            }
        }
    }
}
```

### 多个年度进度对比组件

```qml
Components.EAnimatedWindow {
    width: 600
    height: 300
    title: "年度进度对比"
    visible: true
    
    Row {
        anchors.fill: parent
        padding: 20
        spacing: 20
        
        Components.EYearProgress {
            width: 200
            height: 200
            progressColor: "#ff5722"
        }
        
        Column {
            anchors.fill: parent
            spacing: 16
            
            Text {
                text: "年度进度详情"
                font.pointSize: 18
                font.bold: true
                color: theme.textColor
            }
            
            Text {
                id: daysPassed
                text: "已过天数: " + Math.floor(new Date() - new Date(new Date().getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24)
                color: theme.textColor
                font.pointSize: 14
            }
            
            Text {
                id: daysRemaining
                text: "剩余天数: " + (365 - Math.floor(new Date() - new Date(new Date().getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24))
                color: theme.textColor
                font.pointSize: 14
            }
            
            Text {
                id: yearPercentage
                text: "年度进度: " + Math.round((Math.floor(new Date() - new Date(new Date().getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24) / 365) * 100) + "%"
                color: theme.textColor
                font.pointSize: 14
            }
            
            Timer {
                interval: 1000
                running: true
                repeat: true
                onTriggered: {
                    var days = Math.floor(new Date() - new Date(new Date().getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24)
                    daysPassed.text = "已过天数: " + days
                    daysRemaining.text = "剩余天数: " + (365 - days)
                    yearPercentage.text = "年度进度: " + Math.round((days / 365) * 100) + "%"
                }
            }
        }
    }
}
```

## 最佳实践

1. **自动更新**：使用 Timer 组件定期更新日期和进度，确保显示的是最新信息
2. **样式统一**：与应用中其他进度组件保持一致的样式和交互方式
3. **响应式设计**：在不同屏幕尺寸下调整组件大小，确保良好的显示效果
4. **性能优化**：避免过于频繁的更新，建议每分钟或每小时更新一次即可
5. **用户体验**：提供清晰的进度文本和年份显示，帮助用户快速理解信息

## 注意事项

- 进度值会自动根据当前日期计算，无需手动设置
- 组件支持闰年计算，会自动调整年度天数
- 动画效果会使进度变化更平滑，但可能影响性能
- 可以通过设置 currentDate 属性显示特定日期的年度进度
- 组件默认显示当前日期的年度进度