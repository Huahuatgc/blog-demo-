# ERadioButton

ERadioButton 是一个带有动画效果的单选按钮组件，支持单选组功能。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

ColumnLayout {
    spacing: 12
    
    // 单选组
    property string selectedOption: "option1"
    
    Components.ERadioButton {
        text: "选项一"
        checked: selectedOption === "option1"
        onCheckedChanged: {
            if (checked) selectedOption = "option1"
        }
    }
    
    Components.ERadioButton {
        text: "选项二"
        checked: selectedOption === "option2"
        onCheckedChanged: {
            if (checked) selectedOption = "option2"
        }
    }
    
    Components.ERadioButton {
        text: "选项三"
        checked: selectedOption === "option3"
        onCheckedChanged: {
            if (checked) selectedOption = "option3"
        }
    }
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `checked` | `bool` | `false` | 是否选中 |
| `text` | `string` | `""` | 单选按钮文本 |
| `width` | `real` | `auto` | 单选按钮宽度，自动适应内容 |
| `height` | `real` | `24` | 单选按钮高度 |
| `radioSize` | `real` | `20` | 单选按钮图标大小 |
| `textColor` | `color` | `theme.textPrimaryColor` | 文本颜色 |
| `radioColor` | `color` | `theme.primaryColor` | 单选按钮选中颜色 |
| `borderColor` | `color` | `theme.outlineColor` | 单选按钮边框颜色 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 单选按钮背景颜色 |
| `disabled` | `bool` | `false` | 是否禁用 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `toggle()` | 无 | `void` | 切换单选按钮状态 |
| `setChecked(checked)` | `checked: bool` | `void` | 设置单选按钮选中状态 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `checkedChanged` | `checked: bool` | 单选按钮状态变化时触发 |
| `toggled` | `checked: bool` | 单选按钮被点击切换状态时触发 |

## 示例

### 基本单选按钮组

```qml
ColumnLayout {
    spacing: 12
    
    property string selectedGender: "male"
    
    Text {
        text: "请选择性别:" 
        font.bold: true
    }
    
    Components.ERadioButton {
        text: "男"
        checked: selectedGender === "male"
        onCheckedChanged: {
            if (checked) selectedGender = "male"
        }
    }
    
    Components.ERadioButton {
        text: "女"
        checked: selectedGender === "female"
        onCheckedChanged: {
            if (checked) selectedGender = "female"
        }
    }
    
    Components.ERadioButton {
        text: "保密（禁用）"
        checked: selectedGender === "secret"
        disabled: true
        onCheckedChanged: {
            if (checked) selectedGender = "secret"
        }
    }
    
    Text {
        text: "您选择的性别是: " + selectedGender
        marginTop: 16
    }
}
```

### 自定义样式的单选按钮

```qml
Components.ERadioButton {
    text: "自定义样式"
    radioSize: 24
    radioColor: theme.errorColor
    borderColor: theme.errorColor
    textColor: theme.errorColor
    
    // 自定义单选按钮背景
    background: Rectangle {
        color: theme.surfaceVariantColor
        radius: 4
        width: parent.width
        height: parent.height
    }
}
```

### 水平排列的单选按钮组

```qml
RowLayout {
    spacing: 24
    
    property string selectedSize: "medium"
    
    Text {
        text: "尺码:"
        font.bold: true
        Layout.alignment: Qt.AlignVCenter
    }
    
    Components.ERadioButton {
        text: "S"
        checked: selectedSize === "small"
        onCheckedChanged: {
            if (checked) selectedSize = "small"
        }
    }
    
    Components.ERadioButton {
        text: "M"
        checked: selectedSize === "medium"
        onCheckedChanged: {
            if (checked) selectedSize = "medium"
        }
    }
    
    Components.ERadioButton {
        text: "L"
        checked: selectedSize === "large"
        onCheckedChanged: {
            if (checked) selectedSize = "large"
        }
    }
    
    Components.ERadioButton {
        text: "XL"
        checked: selectedSize === "xlarge"
        onCheckedChanged: {
            if (checked) selectedSize = "xlarge"
        }
    }
}
```

## 注意事项

- 单选按钮通常需要分组使用，确保在同一组中只有一个选项被选中
- 可以使用一个共享的属性来管理单选组的选中状态
- 单选按钮的动画效果使用 SpringAnimation 实现，提供流畅的过渡效果
- 禁用状态下，单选按钮会自动降低透明度并禁用交互