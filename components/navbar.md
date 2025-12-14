# ENavBar 组件

## 组件简介

ENavBar 是一个导航栏组件，支持自定义标题、图标和导航项。它提供了响应式设计和流畅的交互体验，适合构建应用的顶部导航界面。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.ENavBar {
    width: 400
    height: 60
    title: "应用标题"
    
    NavItem {
        text: "首页"
        icon: "\uf015"  // Font Awesome 图标
        active: true
        onClicked: console.log("切换到首页")
    }
    
    NavItem {
        text: "分类"
        icon: "\uf0c9"  // Font Awesome 图标
        onClicked: console.log("切换到分类")
    }
    
    NavItem {
        text: "我的"
        icon: "\uf007"  // Font Awesome 图标
        onClicked: console.log("切换到我的")
    }
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `title` | `string` | `""` | 导航栏标题 |
| `showBackButton` | `bool` | `false` | 是否显示返回按钮 |
| `showTitle` | `bool` | `true` | 是否显示标题 |
| `showShadow` | `bool` | `true` | 是否显示阴影效果 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `activeColor` | `color` | `theme.primaryColor` | 激活项颜色 |
| `iconColor` | `color` | `theme.textColor` | 图标颜色 |
| `activeIconColor` | `color` | `theme.primaryColor` | 激活项图标颜色 |
| `backButtonColor` | `color` | `theme.textColor` | 返回按钮颜色 |
| `shadowColor` | `color` | `theme.shadowColor` | 阴影颜色 |
| `shadowBlur` | `int` | `10` | 阴影模糊程度 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `setActiveItem(index)` | `int` | 无 | 设置激活的导航项 |
| `getActiveItem()` | 无 | `int` | 获取当前激活的导航项索引 |
| `addNavItem(text, icon, onClicked)` | `string, string, function` | `NavItem` | 添加导航项 |
| `removeNavItem(navItem)` | `NavItem` | 无 | 移除导航项 |
| `clearNavItems()` | 无 | 无 | 清除所有导航项 |
| `setTitle(title)` | `string` | 无 | 设置导航栏标题 |
| `showBack(show)` | `bool` | 无 | 显示/隐藏返回按钮 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `backButtonClicked()` | 无 | 返回按钮被点击时触发 |
| `navItemClicked(index, navItem)` | `int, NavItem` | 导航项被点击时触发 |
| `activeItemChanged(index, navItem)` | `int, NavItem` | 激活导航项改变时触发 |

## 扩展示例

### 带返回按钮的导航栏

```qml
Components.ENavBar {
    width: 400
    height: 60
    title: "详情页"
    showBackButton: true
    
    onBackButtonClicked: console.log("返回上一页")
}
```

### 自定义样式的导航栏

```qml
Components.ENavBar {
    width: 400
    height: 60
    title: "自定义导航栏"
    backgroundColor: "#2196f3"
    textColor: "white"
    activeColor: "#ffeb3b"
    iconColor: "white"
    activeIconColor: "#ffeb3b"
    backButtonColor: "white"
    
    NavItem {
        text: "首页"
        icon: "\uf015"
        active: true
        onClicked: console.log("切换到首页")
    }
    
    NavItem {
        text: "发现"
        icon: "\uf128"
        onClicked: console.log("切换到发现")
    }
    
    NavItem {
        text: "我的"
        icon: "\uf007"
        onClicked: console.log("切换到我的")
    }
}
```

### 应用顶部导航栏

```qml
Components.EAnimatedWindow {
    width: 450
    height: 600
    title: ""
    visible: true
    
    Column {
        anchors.fill: parent
        spacing: 0
        
        Components.ENavBar {
            width: parent.width
            height: 60
            title: "应用名称"
            showBackButton: false
            
            NavItem {
                text: "首页"
                icon: "\uf015"
                active: true
                onClicked: console.log("切换到首页")
            }
            
            NavItem {
                text: "分类"
                icon: "\uf0c9"
                onClicked: console.log("切换到分类")
            }
            
            NavItem {
                text: "设置"
                icon: "\uf013"
                onClicked: console.log("切换到设置")
            }
        }
        
        Rectangle {
            width: parent.width
            height: parent.height - 60
            color: theme.surfaceColor
            
            Text {
                anchors.centerIn: parent
                text: "应用内容区域"
                color: theme.textColor
                font.pointSize: 18
            }
        }
    }
}
```

## 最佳实践

1. **导航项数量**：保持导航项数量在3-5个之间，避免过多导致界面拥挤
2. **图标使用**：使用一致的图标风格，建议使用Font Awesome图标库
3. **响应式设计**：在不同屏幕尺寸下调整导航栏的布局和元素大小
4. **激活状态**：清晰标识当前激活的导航项，提高用户体验
5. **交互反馈**：提供清晰的点击和悬停反馈，增强用户体验

## 注意事项

- 导航栏组件需要配合图标字体使用，建议使用Font Awesome图标库
- 导航项的文本应该简洁明了，避免过长
- 可以通过设置showBackButton属性为true来显示返回按钮
- 导航栏支持自定义左侧和右侧操作按钮
- 在移动设备上，导航栏会自动调整布局以适应屏幕尺寸