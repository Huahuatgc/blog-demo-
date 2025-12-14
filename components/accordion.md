# EAccordion 组件

## 组件简介

EAccordion 是一个下拉信息栏组件，支持平滑的展开和收起动画效果。它通常用于展示可折叠的内容区域，帮助用户在有限空间内访问更多信息。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.EAccordion {
    width: 300
    height: 60
    title: "点击展开详情"
    content: "这是展开后的详细内容，支持多行文本显示。"
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `title` | `string` | `""` | 折叠面板的标题文本 |
| `content` | `string` | `""` | 折叠面板展开后的内容 |
| `expanded` | `bool` | `false` | 折叠面板是否展开 |
| `duration` | `int` | `300` | 展开/收起动画的持续时间（毫秒） |
| `titleColor` | `color` | `theme.textColor` | 标题文本颜色 |
| `contentColor` | `color` | `theme.textColor` | 内容文本颜色 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `borderRadius` | `real` | `8` | 圆角半径 |
| `padding` | `real` | `16` | 内边距 |
| `titleFontSize` | `int` | `16` | 标题字体大小 |
| `contentFontSize` | `int` | `14` | 内容字体大小 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `toggle()` | 无 | 无 | 切换折叠面板的展开/收起状态 |
| `expand()` | 无 | 无 | 展开折叠面板 |
| `collapse()` | 无 | 无 | 收起折叠面板 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `expandedChanged()` | `bool expanded` | 折叠面板展开状态改变时触发 |
| `toggled()` | `bool expanded` | 折叠面板状态切换时触发 |

## 扩展示例

### 自定义样式的折叠面板

```qml
Components.EAccordion {
    width: 350
    title: "自定义样式"
    content: "这个折叠面板使用了自定义的颜色和圆角样式。"
    titleColor: theme.primaryColor
    backgroundColor: theme.secondaryColor
    borderRadius: 12
    padding: 20
    titleFontSize: 18
    contentFontSize: 15
}
```

### 初始展开的折叠面板

```qml
Components.EAccordion {
    width: 300
    title: "初始展开的面板"
    content: "这个折叠面板在初始状态下是展开的。"
    expanded: true
}
```

### 嵌套折叠面板

```qml
Components.EAccordion {
    width: 350
    title: "主折叠面板"
    content: ""
    expanded: false
    
    Column {
        anchors.fill: parent
        spacing: 8
        
        Text {
            text: "这是主面板的内容"
            anchors.horizontalCenter: parent.horizontalCenter
        }
        
        Components.EAccordion {
            width: 300
            title: "嵌套折叠面板 1"
            content: "这是第一个嵌套折叠面板的内容"
            anchors.horizontalCenter: parent.horizontalCenter
        }
        
        Components.EAccordion {
            width: 300
            title: "嵌套折叠面板 2"
            content: "这是第二个嵌套折叠面板的内容"
            anchors.horizontalCenter: parent.horizontalCenter
        }
    }
}
```

## 最佳实践

1. **内容控制**：避免在折叠面板中放置过多内容，保持内容简洁明了
2. **标题设计**：使用清晰、简洁的标题，让用户快速了解面板内容
3. **嵌套层级**：避免过多的嵌套层级，一般不超过2-3层
4. **动画性能**：对于包含复杂内容的面板，可以适当调整动画时长或关闭动画
5. **响应式设计**：在不同屏幕尺寸下调整面板宽度，确保良好的显示效果

## 注意事项

- 折叠面板的内容区域高度会根据内容自动调整
- 可以在内容区域中放置任意 QML 组件，不限于文本
- 动画效果可能会影响性能，在低性能设备上可以考虑关闭动画
- 嵌套使用时要注意控制层级和布局，避免布局混乱