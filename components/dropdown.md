# EDropdown 组件

## 组件简介

EDropdown 是一个下拉选择框组件，支持自定义选项、搜索过滤和动画效果。它提供了直观的用户界面和流畅的交互体验，适合构建需要从多个选项中选择的表单或设置界面。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.EDropdown {
    width: 250
    height: 50
    placeholder: "选择一个选项"
    options: [
        { "id": 1, "label": "选项 1", "value": "option1" },
        { "id": 2, "label": "选项 2", "value": "option2" },
        { "id": 3, "label": "选项 3", "value": "option3" },
        { "id": 4, "label": "选项 4", "value": "option4" }
    ]
    onOptionSelected: (option) => console.log("选择的选项:", option)
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `placeholder` | `string` | `""` | 占位符文本 |
| `value` | `variant` | `null` | 当前选中的值 |
| `label` | `string` | `""` | 当前选中的标签 |
| `options` | `variant` | `[]` | 选项列表 |
| `disabled` | `bool` | `false` | 是否禁用组件 |
| `searchable` | `bool` | `false` | 是否支持搜索过滤 |
| `open` | `bool` | `false` | 下拉菜单是否打开 |
| `maxHeight` | `int` | `300` | 下拉菜单的最大高度 |
| `duration` | `int` | `200` | 下拉动画持续时间（毫秒） |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `borderColor` | `color` | `theme.borderColor` | 边框颜色 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `placeholderColor` | `color` | `theme.textSecondaryColor` | 占位符文本颜色 |
| `selectedBackgroundColor` | `color` | `theme.primaryColor` | 选中选项的背景颜色 |
| `selectedTextColor` | `color` | `"white"` | 选中选项的文本颜色 |
| `borderRadius` | `real` | `8` | 圆角半径 |
| `borderWidth` | `real` | `1` | 边框宽度 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `openMenu()` | 无 | 无 | 打开下拉菜单 |
| `closeMenu()` | 无 | 无 | 关闭下拉菜单 |
| `toggleMenu()` | 无 | 无 | 切换下拉菜单状态 |
| `selectOption(option)` | `variant` | 无 | 选择指定选项 |
| `selectOptionByIndex(index)` | `int` | 无 | 通过索引选择选项 |
| `selectOptionByValue(value)` | `variant` | 无 | 通过值选择选项 |
| `clearSelection()` | 无 | 无 | 清除选择 |
| `filterOptions(query)` | `string` | `variant` | 过滤选项列表 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `optionSelected(option)` | `variant` | 当用户选择选项时触发 |
| `menuOpened()` | 无 | 当下拉菜单打开时触发 |
| `menuClosed()` | 无 | 当下拉菜单关闭时触发 |
| `valueChanged(value)` | `variant` | 当选中值改变时触发 |

## 扩展示例

### 带搜索功能的下拉菜单

```qml
Components.EDropdown {
    width: 250
    height: 50
    placeholder: "搜索并选择选项"
    searchable: true
    options: [
        { "id": 1, "label": "苹果", "value": "apple" },
        { "id": 2, "label": "香蕉", "value": "banana" },
        { "id": 3, "label": "橙子", "value": "orange" },
        { "id": 4, "label": "葡萄", "value": "grape" },
        { "id": 5, "label": "草莓", "value": "strawberry" },
        { "id": 6, "label": "蓝莓", "value": "blueberry" },
        { "id": 7, "label": "芒果", "value": "mango" },
        { "id": 8, "label": "菠萝", "value": "pineapple" }
    ]
    onOptionSelected: (option) => console.log("选择的水果:", option.label)
}
```

### 自定义样式的下拉菜单

```qml
Components.EDropdown {
    width: 250
    height: 50
    placeholder: "选择一个选项"
    backgroundColor: "#f5f5f5"
    borderColor: "#e0e0e0"
    textColor: "#333333"
    placeholderColor: "#9e9e9e"
    selectedBackgroundColor: "#2196f3"
    selectedTextColor: "white"
    borderRadius: 12
    borderWidth: 2
    
    options: [
        { "id": 1, "label": "红色", "value": "red" },
        { "id": 2, "label": "绿色", "value": "green" },
        { "id": 3, "label": "蓝色", "value": "blue" }
    ]
    onOptionSelected: (option) => console.log("选择的颜色:", option.label)
}
```

### 表单中的下拉菜单

```qml
Components.EAnimatedWindow {
    width: 400
    height: 350
    title: "用户信息表单"
    visible: true
    
    Column {
        anchors.fill: parent
        padding: 20
        spacing: 20
        
        Text {
            text: "用户信息表单"
            font.pointSize: 20
            font.bold: true
            color: theme.textColor
            anchors.horizontalCenter: parent.horizontalCenter
        }
        
        Column {
            spacing: 8
            
            Text {
                text: "用户名"
                color: theme.textColor
            }
            
            Components.EInput {
                width: parent.width
                height: 50
                placeholder: "请输入用户名"
            }
        }
        
        Column {
            spacing: 8
            
            Text {
                text: "性别"
                color: theme.textColor
            }
            
            Components.EDropdown {
                width: parent.width
                height: 50
                placeholder: "请选择性别"
                options: [
                    { "id": 1, "label": "男", "value": "male" },
                    { "id": 2, "label": "女", "value": "female" },
                    { "id": 3, "label": "其他", "value": "other" }
                ]
                onOptionSelected: (option) => console.log("选择的性别:", option.label)
            }
        }
        
        Column {
            spacing: 8
            
            Text {
                text: "兴趣爱好"
                color: theme.textColor
            }
            
            Components.EDropdown {
                width: parent.width
                height: 50
                placeholder: "请选择兴趣爱好"
                options: [
                    { "id": 1, "label": "阅读", "value": "reading" },
                    { "id": 2, "label": "运动", "value": "sports" },
                    { "id": 3, "label": "音乐", "value": "music" },
                    { "id": 4, "label": "旅行", "value": "travel" },
                    { "id": 5, "label": "摄影", "value": "photography" }
                ]
                searchable: true
                onOptionSelected: (option) => console.log("选择的兴趣爱好:", option.label)
            }
        }
        
        Components.EButton {
            text: "提交"
            anchors.horizontalCenter: parent.horizontalCenter
            backgroundColor: theme.primaryColor
            onClicked: console.log("表单提交")
        }
    }
}
```

## 最佳实践

1. **选项数量**：对于大量选项（超过20个），建议启用搜索功能
2. **选项格式**：保持选项格式一致，每个选项应包含id、label和value属性
3. **占位符文本**：使用清晰的占位符文本，指导用户如何使用下拉菜单
4. **样式统一**：与表单中其他组件保持一致的样式和交互方式
5. **性能优化**：对于动态加载的选项，考虑使用分页或懒加载策略

## 注意事项

- 选项列表中的每个选项必须包含唯一的id属性
- 搜索功能仅对选项的label属性进行匹配
- 下拉菜单的位置会自动调整，以确保在视口中可见
- 可以通过value、label或option属性获取当前选中的值
- 当禁用组件时，下拉菜单将无法打开和选择选项