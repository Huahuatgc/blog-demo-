# ESlider 组件

## 组件简介

ESlider 是一个支持滑块动画的调节组件，用于在指定范围内选择数值。它提供了流畅的动画效果和直观的用户交互，适合构建音量调节、亮度控制等需要数值调节的功能。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.ESlider {
    width: 200
    height: 40
    value: 50
    minimum: 0
    maximum: 100
    onValueChanged: (value) => console.log("滑块值:", value)
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `value` | `real` | `0` | 当前滑块值 |
| `minimum` | `real` | `0` | 最小值 |
| `maximum` | `real` | `100` | 最大值 |
| `step` | `real` | `1` | 步长 |
| `disabled` | `bool` | `false` | 是否禁用组件 |
| `showValue` | `bool` | `false` | 是否显示当前值 |
| `showLabels` | `bool` | `false` | 是否显示最小值和最大值标签 |
| `orientation` | `Qt.Orientation` | `Qt.Horizontal` | 滑块方向（水平/垂直） |
| `duration` | `int` | `200` | 动画持续时间（毫秒） |
| `backgroundColor` | `color` | `theme.borderColor` | 背景颜色 |
| `progressColor` | `color` | `theme.primaryColor` | 进度条颜色 |
| `thumbColor` | `color` | `theme.primaryColor` | 滑块颜色 |
| `thumbHoverColor` | `color` | `theme.primaryColor.darker(10)` | 滑块悬停颜色 |
| `thumbPressedColor` | `color` | `theme.primaryColor.darker(20)` | 滑块按下颜色 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `borderRadius` | `real` | `10` | 进度条圆角半径 |
| `thumbRadius` | `real` | `12` | 滑块半径 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `setValue(value)` | `real` | 无 | 设置滑块值 |
| `increment(step)` | `real` | 无 | 增加滑块值 |
| `decrement(step)` | `real` | 无 | 减少滑块值 |
| `reset()` | 无 | 无 | 重置滑块值到最小值 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `valueChanged(value)` | `real` | 滑块值改变时触发 |
| `sliderPressed()` | 无 | 滑块被按下时触发 |
| `sliderReleased()` | 无 | 滑块被释放时触发 |
| `sliderMoved(value)` | `real` | 滑块移动时触发 |

## 扩展示例

### 垂直滑块

```qml
Components.ESlider {
    width: 40
    height: 200
    value: 75
    minimum: 0
    maximum: 100
    orientation: Qt.Vertical
    onValueChanged: (value) => console.log("垂直滑块值:", value)
}
```

### 显示当前值的滑块

```qml
Components.ESlider {
    width: 250
    height: 40
    value: 30
    minimum: 0
    maximum: 100
    showValue: true
    onValueChanged: (value) => console.log("滑块值:", value)
}
```

### 带标签的滑块

```qml
Components.ESlider {
    width: 250
    height: 40
    value: 60
    minimum: 0
    maximum: 100
    showLabels: true
    onValueChanged: (value) => console.log("滑块值:", value)
}
```

### 自定义样式的滑块

```qml
Components.ESlider {
    width: 300
    height: 40
    value: 45
    minimum: 0
    maximum: 100
    step: 5
    backgroundColor: "#e0e0e0"
    progressColor: "#ff4081"
    thumbColor: "#ff4081"
    thumbHoverColor: "#c51162"
    thumbPressedColor: "#ad1457"
    borderRadius: 20
    thumbRadius: 15
    onValueChanged: (value) => console.log("自定义滑块值:", value)
}
```

### 音量调节示例

```qml
FontLoader {
    id: iconFont
    source: "qrc:/new/prefix1/fonts/fontawesome-free-6.7.2-desktop/otfs/Font Awesome 6 Free-Solid-900.otf"
}

Components.EAnimatedWindow {
    width: 350
    height: 100
    title: "音量调节"
    visible: true
    
    Row {
        anchors.fill: parent
        padding: 20
        spacing: 16
        
        Text {
            font.family: iconFont.name
            text: "\uf028"  // 音量图标
            font.pointSize: 24
            color: theme.textColor
            anchors.verticalCenter: parent.verticalCenter
        }
        
        Components.ESlider {
            width: 200
            height: 40
            value: 70
            minimum: 0
            maximum: 100
            anchors.verticalCenter: parent.verticalCenter
            onValueChanged: (value) => {
                console.log("音量:", value)
                // 根据音量值改变图标
                if (value == 0) {
                    volumeIcon.text = "\uf026"
                } else if (value < 33) {
                    volumeIcon.text = "\uf027"
                } else if (value < 66) {
                    volumeIcon.text = "\uf028"
                } else {
                    volumeIcon.text = "\uf028"
                }
            }
        }
        
        Text {
            id: volumeIcon
            font.family: iconFont.name
            text: "\uf028"
            font.pointSize: 24
            color: theme.textColor
            anchors.verticalCenter: parent.verticalCenter
        }
    }
}
```

## 最佳实践

1. **范围设置**：根据实际需求合理设置最小值和最大值
2. **步长设置**：对于需要精确控制的场景，设置适当的步长
3. **视觉反馈**：为滑块值变化提供清晰的视觉反馈，如显示当前值
4. **样式统一**：与应用中其他调节组件保持一致的样式和交互方式
5. **性能优化**：避免在滑块值变化事件中执行过于复杂的操作

## 注意事项

- 滑块值会自动限制在最小值和最大值之间
- 对于垂直滑块，需要交换width和height属性
- 可以通过showValue和showLabels属性控制是否显示数值和标签
- 滑块支持触摸操作，在移动设备上有良好的体验
- 禁用状态下，滑块无法交互且颜色会变暗