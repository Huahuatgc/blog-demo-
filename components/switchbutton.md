# ESwitchButton

ESwitchButton 是一个带有动画效果的开关组件，用于表示二进制状态的切换。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

Components.ESwitchButton {
    checked: true
    onCheckedChanged: console.log("开关状态:", checked)
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `checked` | `bool` | `false` | 开关是否打开 |
| `width` | `real` | `56` | 开关宽度 |
| `height` | `real` | `28` | 开关高度 |
| `handleSize` | `real` | `24` | 开关滑块大小 |
| `trackColor` | `color` | `theme.surfaceVariantColor` | 开关轨道颜色 |
| `trackCheckedColor` | `color` | `theme.primaryColor` | 开关打开时的轨道颜色 |
| `handleColor` | `color` | `theme.surfaceColor` | 开关滑块颜色 |
| `handleCheckedColor` | `color` | `theme.onPrimaryColor` | 开关打开时的滑块颜色 |
| `disabled` | `bool` | `false` | 是否禁用 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `toggle()` | 无 | `void` | 切换开关状态 |
| `setChecked(checked)` | `checked: bool` | `void` | 设置开关状态 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `checkedChanged` | `checked: bool` | 开关状态变化时触发 |
| `toggled` | `checked: bool` | 开关被点击切换状态时触发 |

## 示例

### 基本开关

```qml
ColumnLayout {
    spacing: 16
    
    RowLayout {
        spacing: 8
        
        Text {
            text: "开关一:"
            Layout.alignment: Qt.AlignVCenter
        }
        
        Components.ESwitchButton {
            id: switch1
        }
    }
    
    RowLayout {
        spacing: 8
        
        Text {
            text: "开关二 (已打开):"
            Layout.alignment: Qt.AlignVCenter
        }
        
        Components.ESwitchButton {
            id: switch2
            checked: true
        }
    }
    
    RowLayout {
        spacing: 8
        
        Text {
            text: "开关三 (禁用):"
            Layout.alignment: Qt.AlignVCenter
        }
        
        Components.ESwitchButton {
            id: switch3
            disabled: true
        }
    }
}
```

### 自定义样式的开关

```qml
Components.ESwitchButton {
    trackColor: theme.surfaceColor
    trackCheckedColor: theme.secondaryColor
    handleColor: theme.surfaceVariantColor
    handleCheckedColor: theme.onSecondaryColor
}
```

### 与其他组件联动的开关

```qml
ColumnLayout {
    spacing: 16
    
    Components.ESwitchButton {
        id: themeSwitch
        checked: theme.isDark
        onCheckedChanged: {
            theme.isDark = checked
        }
    }
    
    Text {
        text: theme.isDark ? "深色主题" : "浅色主题"
        font.bold: true
    }
    
    Components.EButton {
        text: theme.isDark ? "切换到浅色主题" : "切换到深色主题"
        onClicked: {
            themeSwitch.toggle()
        }
    }
}
```

### 大尺寸开关

```qml
Components.ESwitchButton {
    width: 72
    height: 36
    handleSize: 32
}
```

## 注意事项

- 开关的动画效果使用 SpringAnimation 实现，提供流畅的过渡效果
- 可以通过设置 trackColor 和 trackCheckedColor 来自定义开关的外观
- 开关的大小比例建议保持 2:1（宽度:高度）以获得最佳视觉效果
- 禁用状态下，开关会自动降低透明度并禁用交互