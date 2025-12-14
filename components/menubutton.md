# EMenuButton 组件

## 组件简介

EMenuButton 是一个菜单按钮组件，支持下拉菜单、子菜单和自定义样式。它提供了直观的用户界面和流畅的交互体验，适合构建包含多个操作选项的按钮。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.EMenuButton {
    width: 150
    height: 50
    text: "菜单按钮"
    
    MenuItem {
        text: "选项 1"
        onClicked: console.log("选择了选项 1")
    }
    
    MenuItem {
        text: "选项 2"
        onClicked: console.log("选择了选项 2")
    }
    
    MenuItem {
        text: "选项 3"
        onClicked: console.log("选择了选项 3")
    }
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `text` | `string` | `""` | 按钮文本 |
| `iconCharacter` | `string` | `""` | 图标字符（Font Awesome） |
| `iconFont` | `FontLoader` | `null` | 图标字体加载器 |
| `disabled` | `bool` | `false` | 是否禁用组件 |
| `open` | `bool` | `false` | 菜单是否打开 |
| `showArrow` | `bool` | `true` | 是否显示下拉箭头 |
| `duration` | `int` | `200` | 菜单动画持续时间（毫秒） |
| `backgroundColor` | `color` | `theme.primaryColor` | 背景颜色 |
| `textColor` | `color` | `"white"` | 文本颜色 |
| `hoverBackgroundColor` | `color` | `theme.primaryColor.darker(10)` | 悬停背景颜色 |
| `pressedBackgroundColor` | `color` | `theme.primaryColor.darker(20)` | 按下背景颜色 |
| `borderRadius` | `real` | `8` | 圆角半径 |
| `menuBackgroundColor` | `color` | `theme.surfaceColor` | 菜单背景颜色 |
| `menuItemColor` | `color` | `theme.textColor` | 菜单项文本颜色 |
| `menuItemHoverColor` | `color` | `theme.primaryColor` | 菜单项悬停文本颜色 |
| `menuItemHoverBackgroundColor` | `color` | `theme.surfaceColor.darker(5)` | 菜单项悬停背景颜色 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `openMenu()` | 无 | 无 | 打开菜单 |
| `closeMenu()` | 无 | 无 | 关闭菜单 |
| `toggleMenu()` | 无 | 无 | 切换菜单状态 |
| `addMenuItem(text, onClicked)` | `string, function` | `MenuItem` | 添加菜单项 |
| `removeMenuItem(menuItem)` | `MenuItem` | 无 | 移除菜单项 |
| `clearMenuItems()` | 无 | 无 | 清除所有菜单项 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `clicked()` | 无 | 按钮被点击时触发 |
| `menuOpened()` | 无 | 菜单打开时触发 |
| `menuClosed()` | 无 | 菜单关闭时触发 |

## 扩展示例

### 带图标的菜单按钮

```qml
FontLoader {
    id: iconFont
    source: "qrc:/new/prefix1/fonts/fontawesome-free-6.7.2-desktop/otfs/Font Awesome 6 Free-Solid-900.otf"
}

Components.EMenuButton {
    width: 180
    height: 50
    text: "文件操作"
    iconCharacter: "\uf0c7"  // 文件夹图标
    iconFont: iconFont
    
    MenuItem {
        text: "新建文件"
        onClicked: console.log("新建文件")
    }
    
    MenuItem {
        text: "打开文件"
        onClicked: console.log("打开文件")
    }
    
    MenuItem {
        text: "保存文件"
        onClicked: console.log("保存文件")
    }
    
    MenuItem {
        text: "另存为..."
        onClicked: console.log("另存为...")
    }
}
```

### 带分割线和子菜单的菜单按钮

```qml
Components.EMenuButton {
    width: 180
    height: 50
    text: "编辑操作"
    
    MenuItem {
        text: "撤销"
        onClicked: console.log("撤销")
    }
    
    MenuItem {
        text: "重做"
        onClicked: console.log("重做")
    }
    
    // 分割线
    MenuItem {
        text: "-"
        enabled: false
    }
    
    MenuItem {
        text: "复制"
        onClicked: console.log("复制")
    }
    
    MenuItem {
        text: "剪切"
        onClicked: console.log("剪切")
    }
    
    MenuItem {
        text: "粘贴"
        onClicked: console.log("粘贴")
    }
    
    // 分割线
    MenuItem {
        text: "-"
        enabled: false
    }
    
    // 子菜单
    MenuItem {
        text: "格式"
        subMenu: [
            MenuItem {
                text: "粗体"
                onClicked: console.log("粗体")
            },
            MenuItem {
                text: "斜体"
                onClicked: console.log("斜体")
            },
            MenuItem {
                text: "下划线"
                onClicked: console.log("下划线")
            }
        ]
    }
}
```

### 工具栏中的菜单按钮

```qml
Components.EAnimatedWindow {
    width: 500
    height: 100
    title: "工具栏示例"
    visible: true
    
    Row {
        anchors.fill: parent
        padding: 16
        spacing: 8
        
        Components.EMenuButton {
            width: 120
            height: 40
            text: "文件"
            backgroundColor: theme.primaryColor
            
            MenuItem {
                text: "新建"
                onClicked: console.log("新建")
            }
            
            MenuItem {
                text: "打开"
                onClicked: console.log("打开")
            }
            
            MenuItem {
                text: "保存"
                onClicked: console.log("保存")
            }
        }
        
        Components.EMenuButton {
            width: 120
            height: 40
            text: "编辑"
            backgroundColor: theme.secondaryColor
            
            MenuItem {
                text: "复制"
                onClicked: console.log("复制")
            }
            
            MenuItem {
                text: "剪切"
                onClicked: console.log("剪切")
            }
            
            MenuItem {
                text: "粘贴"
                onClicked: console.log("粘贴")
            }
        }
        
        Components.EMenuButton {
            width: 120
            height: 40
            text: "视图"
            backgroundColor: "#ff9800"
            
            MenuItem {
                text: "全屏"
                onClicked: console.log("全屏")
            }
            
            MenuItem {
                text: "缩放"
                onClicked: console.log("缩放")
            }
            
            MenuItem {
                text: "布局"
                onClicked: console.log("布局")
            }
        }
    }
}
```

## 最佳实践

1. **菜单项组织**：合理组织菜单项，使用分割线分隔不同类别的操作
2. **子菜单使用**：对于相关的操作选项，可以使用子菜单进行分组
3. **图标使用**：为常用操作添加图标，提高用户体验
4. **菜单位置**：确保菜单在视口中可见，避免超出屏幕范围
5. **交互反馈**：提供清晰的悬停和点击反馈，增强用户体验

## 注意事项

- 菜单按钮的文本和图标应该清晰表达按钮的功能
- 菜单项数量不宜过多，保持在10个以内
- 对于复杂的菜单结构，考虑使用其他组件（如导航栏）
- 菜单打开时，点击菜单项或点击外部区域都会关闭菜单
- 菜单按钮支持键盘导航，使用上下箭头选择菜单项，回车键确认选择