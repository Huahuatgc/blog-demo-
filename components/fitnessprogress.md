# EFitnessProgress 组件

## 组件简介

EFitnessProgress 是一个健身进度展示组件，用于可视化健身目标的完成情况。它提供了环形进度条和文字说明，适合构建健身追踪和目标管理应用。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.EFitnessProgress {
    width: 200
    height: 200
    progress: 0.75
    target: 10000
    current: 7500
    unit: "步"
    title: "今日步数"
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `progress` | `real` | `0` | 进度值（0-1） |
| `target` | `int` | `100` | 目标值 |
| `current` | `int` | `0` | 当前值 |
| `unit` | `string` | `""` | 数值单位 |
| `title` | `string` | `""` | 组件标题 |
| `showProgressText` | `bool` | `true` | 是否显示进度文本 |
| `showUnit` | `bool` | `true` | 是否显示单位 |
| `animated` | `bool` | `true` | 是否启用动画效果 |
| `animationDuration` | `int` | `1000` | 动画持续时间（毫秒） |
| `radius` | `real` | `80` | 环形进度条半径 |
| `strokeWidth` | `real` | `15` | 环形进度条宽度 |
| `backgroundColor` | `color` | `theme.borderColor` | 背景环形颜色 |
| `progressColor` | `color` | `theme.primaryColor` | 进度环形颜色 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `unitColor` | `color` | `theme.textSecondaryColor` | 单位文本颜色 |
| `titleColor` | `color` | `theme.textColor` | 标题文本颜色 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `setProgress(progress)` | `real` | 无 | 设置进度值 |
| `setTarget(target)` | `int` | 无 | 设置目标值 |
| `setCurrent(current)` | `int` | 无 | 设置当前值 |
| `update()` | 无 | 无 | 更新组件显示 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `progressChanged(progress)` | `real` | 进度值改变时触发 |
| `targetChanged(target)` | `int` | 目标值改变时触发 |
| `currentChanged(current)` | `int` | 当前值改变时触发 |

## 扩展示例

### 多个健身进度组件

```qml
Components.EAnimatedWindow {
    width: 450
    height: 300
    title: "健身进度展示"
    visible: true
    
    Row {
        anchors.fill: parent
        padding: 20
        spacing: 20
        
        Components.EFitnessProgress {
            width: 150
            height: 150
            progress: 0.75
            target: 10000
            current: 7500
            unit: "步"
            title: "今日步数"
            progressColor: "#4caf50"
        }
        
        Components.EFitnessProgress {
            width: 150
            height: 150
            progress: 0.6
            target: 30
            current: 18
            unit: "分钟"
            title: "运动时长"
            progressColor: "#2196f3"
        }
        
        Components.EFitnessProgress {
            width: 150
            height: 150
            progress: 0.85
            target: 2000
            current: 1700
            unit: "卡路里"
            title: "消耗热量"
            progressColor: "#ff5722"
        }
    }
}
```

### 自定义样式的健身进度组件

```qml
Components.EFitnessProgress {
    width: 250
    height: 250
    progress: 0.9
    target: 5
    current: 4.5
    unit: "公里"
    title: "今日跑步"
    
    radius: 100
    strokeWidth: 20
    backgroundColor: "#e0e0e0"
    progressColor: "#9c27b0"
    textColor: "#333333"
    unitColor: "#666666"
    titleColor: "#333333"
    
    showProgressText: true
    showUnit: true
    animated: true
    animationDuration: 1500
}
```

### 动态更新的健身进度组件

```qml
Components.EAnimatedWindow {
    width: 250
    height: 300
    title: "动态进度展示"
    visible: true
    
    Column {
        anchors.fill: parent
        padding: 20
        spacing: 20
        
        Components.EFitnessProgress {
            id: fitnessProgress
            width: 210
            height: 210
            progress: 0.5
            target: 100
            current: 50
            unit: "%"
            title: "完成度"
        }
        
        Row {
            spacing: 10
            anchors.horizontalCenter: parent.horizontalCenter
            
            Components.EButton {
                text: "减少"
                onClicked: {
                    fitnessProgress.current = Math.max(0, fitnessProgress.current - 10)
                    fitnessProgress.progress = fitnessProgress.current / fitnessProgress.target
                }
            }
            
            Components.EButton {
                text: "增加"
                onClicked: {
                    fitnessProgress.current = Math.min(fitnessProgress.target, fitnessProgress.current + 10)
                    fitnessProgress.progress = fitnessProgress.current / fitnessProgress.target
                }
            }
        }
    }
}
```

## 最佳实践

1. **进度值设置**：确保 progress 值在 0-1 范围内
2. **目标和当前值**：合理设置目标值和当前值，使进度展示有意义
3. **单位选择**：根据实际需求选择合适的单位，如步数、分钟、卡路里等
4. **颜色搭配**：使用与应用主题一致的颜色，或根据不同类型的健身数据使用不同颜色
5. **响应式设计**：在不同屏幕尺寸下调整组件大小，确保良好的显示效果

## 注意事项

- 进度值会自动限制在 0-1 范围内
- 当前值超过目标值时，进度条会显示为满
- 动画效果会使进度变化更平滑，但可能影响性能
- 组件支持触摸操作，但默认不提供交互功能
- 可以通过自定义样式改变组件的外观和尺寸