# EButton

EButton 是一个带图标和动画效果的圆角按钮组件，支持多种状态和样式配置。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

// 导入图标字体
FontLoader {
    id: iconFont
    source: "qrc:/new/prefix1/fonts/fontawesome-free-6.7.2-desktop/otfs/Font Awesome 6 Free-Solid-900.otf"
}

Components.EButton {
    text: "提交"
    iconCharacter: "\uf1d8"  // Font Awesome 图标代码
    onClicked: console.log("按钮被点击")
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `text` | `string` | `""` | 按钮显示文本 |
| `iconCharacter` | `string` | `""` | 图标字符（支持 Font Awesome） |
| `iconSize` | `real` | `16` | 图标大小 |
| `iconPosition` | `string` | `"left"` | 图标位置，可选值："left", "right", "top", "bottom" |
| `width` | `real` | `120` | 按钮宽度 |
| `height` | `real` | `40` | 按钮高度 |
| `radius` | `real` | `8` | 按钮圆角半径 |
| `backgroundColor` | `color` | `theme.primaryColor` | 按钮背景颜色 |
| `textColor` | `color` | `theme.onPrimaryColor` | 按钮文本颜色 |
| `iconColor` | `color` | `theme.onPrimaryColor` | 按钮图标颜色 |
| `borderWidth` | `real` | `0` | 边框宽度 |
| `borderColor` | `color` | `"transparent"` | 边框颜色 |
| `disabled` | `bool` | `false` | 是否禁用按钮 |
| `loading` | `bool` | `false` | 是否显示加载状态 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `setLoading(loading)` | `loading: bool` | `void` | 设置按钮的加载状态 |
| `setDisabled(disabled)` | `disabled: bool` | `void` | 设置按钮的禁用状态 |
| `setText(text)` | `text: string` | `void` | 设置按钮显示文本 |
| `setIcon(icon)` | `icon: string` | `void` | 设置按钮图标 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `clicked` | 无 | 按钮被点击时触发 |
| `hovered` | `hovered: bool` | 鼠标悬停状态变化时触发 |
| `pressed` | `pressed: bool` | 按钮按下状态变化时触发 |

## 示例

### 不同样式的按钮

```qml
ColumnLayout {
    spacing: 12
    
    // 主按钮
    Components.EButton {
        text: "主按钮"
        backgroundColor: theme.primaryColor
    }
    
    // 次要按钮
    Components.EButton {
        text: "次要按钮"
        backgroundColor: theme.secondaryColor
    }
    
    // 带图标的按钮
    Components.EButton {
        text: "带图标"
        iconCharacter: "\uf067"
        iconPosition: "right"
    }
    
    // 边框按钮
    Components.EButton {
        text: "边框按钮"
        backgroundColor: "transparent"
        borderWidth: 2
        borderColor: theme.primaryColor
        textColor: theme.primaryColor
        iconColor: theme.primaryColor
    }
    
    // 禁用按钮
    Components.EButton {
        text: "禁用按钮"
        disabled: true
    }
    
    // 加载状态按钮
    Components.EButton {
        text: "加载中"
        loading: true
    }
}
```

### 动态改变按钮状态

```qml
Components.EButton {
    id: dynamicButton
    text: "点击我"
    iconCharacter: "\uf0a9"
    
    onClicked: {
        dynamicButton.setLoading(true)
        dynamicButton.setText("处理中...")
        
        // 模拟异步操作
        Timer {
            interval: 2000
            running: true
            onTriggered: {
                dynamicButton.setLoading(false)
                dynamicButton.setText("完成")
                
                // 3秒后恢复原状
                Timer {
                    interval: 3000
                    running: true
                    onTriggered: {
                        dynamicButton.setText("点击我")
                    }
                }
            }
        }
    }
}
```

## 注意事项

- 确保已正确加载 Font Awesome 字体文件，否则图标可能无法显示
- 按钮的动画效果会自动适应主题的颜色变化
- 当按钮处于 `loading` 状态时，点击事件将被忽略
- 建议在长文本按钮上使用适当的宽度或启用自动换行