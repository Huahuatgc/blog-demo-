# ECheckBox

ECheckBox 是一个带有动画效果的复选框组件，提供良好的用户交互体验。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

Components.ECheckBox {
    checked: false
    text: "同意用户协议"
    onCheckedChanged: console.log("复选框状态:", checked)
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `checked` | `bool` | `false` | 是否选中 |
| `text` | `string` | `""` | 复选框文本 |
| `width` | `real` | `auto` | 复选框宽度，自动适应内容 |
| `height` | `real` | `24` | 复选框高度 |
| `checkSize` | `real` | `20` | 复选框图标大小 |
| `textColor` | `color` | `theme.textPrimaryColor` | 文本颜色 |
| `checkColor` | `color` | `theme.primaryColor` | 复选框选中颜色 |
| `borderColor` | `color` | `theme.outlineColor` | 复选框边框颜色 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 复选框背景颜色 |
| `disabled` | `bool` | `false` | 是否禁用 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `toggle()` | 无 | `void` | 切换复选框状态 |
| `setChecked(checked)` | `checked: bool` | `void` | 设置复选框选中状态 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `checkedChanged` | `checked: bool` | 复选框状态变化时触发 |
| `toggled` | `checked: bool` | 复选框被点击切换状态时触发 |

## 示例

### 基本复选框

```qml
ColumnLayout {
    spacing: 12
    
    Components.ECheckBox {
        text: "选项一"
        checked: true
    }
    
    Components.ECheckBox {
        text: "选项二"
    }
    
    Components.ECheckBox {
        text: "选项三（禁用）"
        disabled: true
    }
}
```

### 自定义样式的复选框

```qml
Components.ECheckBox {
    text: "自定义样式"
    checkSize: 24
    checkColor: theme.secondaryColor
    borderColor: theme.secondaryColor
    textColor: theme.secondaryColor
    
    // 自定义复选框背景
    background: Rectangle {
        color: theme.surfaceVariantColor
        radius: 4
        width: parent.width
        height: parent.height
    }
}
```

### 复选框组

```qml
ColumnLayout {
    spacing: 12
    
    property var selectedOptions: []
    
    function updateSelection(option, checked) {
        if (checked) {
            selectedOptions.push(option)
        } else {
            const index = selectedOptions.indexOf(option)
            if (index !== -1) {
                selectedOptions.splice(index, 1)
            }
        }
        console.log("选中的选项:", selectedOptions)
    }
    
    Components.ECheckBox {
        text: "苹果"
        onCheckedChanged: updateSelection(text, checked)
    }
    
    Components.ECheckBox {
        text: "香蕉"
        onCheckedChanged: updateSelection(text, checked)
    }
    
    Components.ECheckBox {
        text: "橙子"
        onCheckedChanged: updateSelection(text, checked)
    }
    
    Components.ECheckBox {
        text: "葡萄"
        onCheckedChanged: updateSelection(text, checked)
    }
}
```

## 注意事项

- 复选框的动画效果使用 SpringAnimation 实现，提供流畅的过渡效果
- 文本会自动换行以适应复选框宽度
- 禁用状态下，复选框会自动降低透明度并禁用交互