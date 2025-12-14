# EInput

EInput 是一个支持焦点变色与阴影效果的输入框组件，提供良好的用户交互体验。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

Components.EInput {
    width: 300
    placeholderText: "请输入用户名"
    text: ""
    onTextChanged: console.log("输入内容:", text)
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `text` | `string` | `""` | 输入框当前文本内容 |
| `placeholderText` | `string` | `""` | 占位符文本 |
| `width` | `real` | `280` | 输入框宽度 |
| `height` | `real` | `48` | 输入框高度 |
| `radius` | `real` | `8` | 输入框圆角半径 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 输入框背景颜色 |
| `borderColor` | `color` | `theme.outlineColor` | 输入框边框颜色 |
| `borderWidth` | `real` | `1` | 输入框边框宽度 |
| `textColor` | `color` | `theme.textPrimaryColor` | 输入框文本颜色 |
| `placeholderColor` | `color` | `theme.textDisabledColor` | 占位符文本颜色 |
| `focusColor` | `color` | `theme.primaryColor` | 获得焦点时的边框颜色 |
| `errorColor` | `color` | `theme.errorColor` | 错误状态时的边框颜色 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |
| `focusShadowEnabled` | `bool` | `true` | 获得焦点时是否增强阴影效果 |
| `passwordEchoMode` | `enum` | `TextInput.Normal` | 密码输入模式，可选值：Normal, Password, NoEcho, PasswordEchoOnEdit |
| `readOnly` | `bool` | `false` | 是否只读 |
| `enabled` | `bool` | `true` | 是否启用 |
| `validator` | `validator` | `null` | 输入验证器 |
| `inputMask` | `string` | `""` | 输入掩码 |
| `maxLength` | `int` | `0` | 最大输入长度，0表示无限制 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `clear()` | 无 | `void` | 清除输入框内容 |
| `selectAll()` | 无 | `void` | 全选输入框内容 |
| `setFocus()` | 无 | `void` | 使输入框获得焦点 |
| `setError(error)` | `error: bool` | `void` | 设置输入框错误状态 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `textChanged` | `text: string` | 文本内容变化时触发 |
| `editingFinished` | 无 | 编辑完成时触发（按下Enter或失去焦点） |
| `returnPressed` | 无 | 按下Enter键时触发 |
| `focusChanged` | `focused: bool` | 焦点状态变化时触发 |
| `errorChanged` | `error: bool` | 错误状态变化时触发 |

## 示例

### 不同类型的输入框

```qml
ColumnLayout {
    spacing: 16
    
    // 普通文本输入
    Components.EInput {
        width: 300
        placeholderText: "请输入用户名"
    }
    
    // 密码输入
    Components.EInput {
        width: 300
        placeholderText: "请输入密码"
        passwordEchoMode: TextInput.Password
    }
    
    // 带验证器的邮箱输入
    Components.EInput {
        width: 300
        placeholderText: "请输入邮箱"
        validator: RegExpValidator {
            regExp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        }
    }
    
    // 只读输入框
    Components.EInput {
        width: 300
        text: "只读内容"
        readOnly: true
    }
    
    // 错误状态输入框
    Components.EInput {
        id: errorInput
        width: 300
        placeholderText: "请输入内容"
        onEditingFinished: {
            if (text.length < 5) {
                errorInput.setError(true)
            } else {
                errorInput.setError(false)
            }
        }
    }
}
```

### 带图标的输入框

```qml
RowLayout {
    width: 300
    spacing: 8
    
    // 图标
    Text {
        text: "\uf007"  // 用户图标
        font.family: "Font Awesome 6 Free Solid"
        font.pointSize: 18
        color: theme.textSecondaryColor
        Layout.alignment: Qt.AlignVCenter
    }
    
    // 输入框
    Components.EInput {
        width: parent.width - 40
        placeholderText: "用户名"
        background: Rectangle {
            color: theme.surfaceColor
            radius: 8
        }
    }
}
```

## 注意事项

- 输入框的焦点效果会自动适应主题的颜色变化
- 使用验证器时，输入内容会实时验证
- 密码输入模式支持不同的显示方式，可根据需求选择
- 建议在表单中使用时，结合错误状态提示用户输入是否正确