# 响应式布局

EvolveUI 提供了强大的响应式布局支持，帮助您创建能够自动适配不同窗口尺寸和设备的界面。通过合理使用 Qt Quick Layouts 和 EvolveUI 组件，您可以轻松实现跨平台的响应式设计。

## 响应式设计原则

### 1. 流动布局

使用相对单位和弹性布局，使界面能够根据容器尺寸自动调整。

```qml
ColumnLayout {
    anchors.fill: parent
    padding: theme.spacing
    spacing: theme.spacing
    
    Components.EButton {
        text: "响应式按钮"
        Layout.fillWidth: true  // 按钮宽度随容器变化
    }
    
    Components.EInput {
        placeholderText: "响应式输入框"
        Layout.fillWidth: true  // 输入框宽度随容器变化
    }
}
```

### 2. 断点设计

根据不同的屏幕尺寸设置断点，调整界面布局和组件大小。

```qml
Rectangle {
    width: parent.width
    height: parent.height
    
    ColumnLayout {
        anchors.fill: parent
        padding: width < 600 ? 10 : 20  // 小屏幕使用小 padding
        spacing: width < 600 ? 10 : 20  // 小屏幕使用小间距
        
        Text {
            text: "响应式标题"
            font.pixelSize: width < 600 ? 20 : 30  // 根据屏幕宽度调整字体大小
            Layout.fillWidth: true
        }
    }
}
```

### 3. 组件适配

使用组件的响应式属性，使组件能够根据容器尺寸自动调整样式。

```qml
Components.ECard {
    width: parent.width
    height: width < 600 ? 200 : 300  // 小屏幕使用小高度
    
    // 小屏幕隐藏部分内容
    visible: width < 600 ? false : true
}
```

## Qt Quick Layouts

EvolveUI 推荐使用 Qt Quick Layouts 实现响应式布局，包括 `RowLayout`、`ColumnLayout`、`GridLayout` 和 `Flow`。

### RowLayout 和 ColumnLayout

用于创建水平和垂直布局，组件可以根据可用空间自动调整大小。

```qml
RowLayout {
    anchors.fill: parent
    spacing: theme.spacing
    
    Components.EButton {
        text: "按钮 1"
        Layout.fillWidth: true  // 按钮将平分可用宽度
    }
    
    Components.EButton {
        text: "按钮 2"
        Layout.fillWidth: true  // 按钮将平分可用宽度
    }
    
    Components.EButton {
        text: "按钮 3"
        Layout.fillWidth: true  // 按钮将平分可用宽度
    }
}
```

### GridLayout

用于创建网格布局，组件可以自动排列并调整大小。

```qml
GridLayout {
    anchors.fill: parent
    columns: width < 600 ? 2 : 3  // 根据屏幕宽度调整列数
    spacing: theme.spacing
    
    // 创建 6 个卡片组件
    Repeater {
        model: 6
        
        Components.ECard {
            Layout.fillWidth: true
            Layout.fillHeight: true
            
            Text {
                text: "卡片 " + (index + 1)
                anchors.centerIn: parent
            }
        }
    }
}
```

### Flow

用于创建流式布局，组件会根据容器宽度自动换行。

```qml
Flow {
    anchors.fill: parent
    spacing: theme.spacing
    
    // 创建多个标签组件
    Repeater {
        model: ["标签 1", "标签 2", "标签 3", "标签 4", "标签 5", "标签 6", "标签 7", "标签 8"]
        
        Rectangle {
            width: label.width + 20
            height: 30
            radius: 15
            color: theme.primaryColor
            
            Text {
                id: label
                text: modelData
                anchors.centerIn: parent
                color: "white"
                font.pixelSize: 14
            }
        }
    }
}
```

## 响应式组件示例

### 响应式导航栏

```qml
Components.ENavBar {
    id: navbar
    width: parent.width
    height: 60
    
    RowLayout {
        anchors.fill: parent
        padding: theme.spacing
        spacing: theme.spacing
        
        // 品牌标识
        Text {
            text: "EvolveUI"
            font.pixelSize: 20
            font.bold: true
            color: theme.textColor
        }
        
        // 导航链接 - 在小屏幕上隐藏
        RowLayout {
            spacing: theme.spacing
            visible: navbar.width > 768
            
            Components.EButton {
                text: "首页"
                small: true
                flat: true
            }
            
            Components.EButton {
                text: "指南"
                small: true
                flat: true
            }
            
            Components.EButton {
                text: "组件"
                small: true
                flat: true
            }
            
            Components.EButton {
                text: "API"
                small: true
                flat: true
            }
        }
        
        // 右侧操作区
        Item {
            Layout.fillWidth: true  // 占据剩余空间
        }
        
        Components.EButton {
            text: "登录"
            small: true
        }
        
        Components.EButton {
            text: "注册"
            small: true
            primary: true
        }
        
        // 移动端菜单按钮 - 在大屏幕上隐藏
        Components.EButton {
            iconCharacter: "\uf0c9"
            small: true
            flat: true
            visible: navbar.width <= 768
            onClicked: drawer.open()
        }
    }
    
    // 移动端侧边栏
    Components.EDrawer {
        id: drawer
        width: Math.min(parent.width * 0.8, 300)
        height: parent.height
        
        ColumnLayout {
            anchors.fill: parent
            padding: theme.spacing
            spacing: theme.spacing
            
            Components.EButton {
                text: "首页"
                Layout.fillWidth: true
                flat: true
            }
            
            Components.EButton {
                text: "指南"
                Layout.fillWidth: true
                flat: true
            }
            
            Components.EButton {
                text: "组件"
                Layout.fillWidth: true
                flat: true
            }
            
            Components.EButton {
                text: "API"
                Layout.fillWidth: true
                flat: true
            }
        }
    }
}
```

### 响应式卡片列表

```qml
GridLayout {
    anchors.fill: parent
    columns: {
        if (parent.width < 600) 1,
        else if (parent.width < 1024) 2,
        else if (parent.width < 1440) 3,
        else 4
    }  // 根据屏幕宽度调整列数
    spacing: theme.spacing
    
    // 创建多个卡片组件
    Repeater {
        model: 12
        
        Components.EHoverCard {
            Layout.fillWidth: true
            Layout.minimumHeight: 200
            
            ColumnLayout {
                anchors.fill: parent
                padding: theme.spacing
                spacing: theme.smallSpacing
                
                Components.EAvatar {
                    source: "https://example.com/avatar.jpg"
                    size: 60
                    Layout.alignment: Qt.AlignHCenter
                }
                
                Text {
                    text: "卡片 " + (index + 1)
                    font.pixelSize: 18
                    color: theme.textColor
                    Layout.alignment: Qt.AlignHCenter
                }
                
                Text {
                    text: "这是卡片的描述信息，在小屏幕上可能会被截断。"
                    font.pixelSize: 14
                    color: theme.secondaryTextColor
                    wrapMode: Text.WordWrap
                    Layout.fillWidth: true
                }
            }
        }
    }
}
```

## 响应式设计最佳实践

1. **移动优先**：先设计移动设备界面，然后逐步扩展到桌面设备

2. **最小化断点**：尽量减少断点数量，保持代码简洁

3. **使用相对单位**：使用相对单位（如百分比、`theme.spacing`）而不是绝对像素值

4. **测试不同尺寸**：在不同的屏幕尺寸下测试界面，确保布局合理

5. **避免内容溢出**：确保文本和组件不会超出容器边界

6. **优化触摸目标**：为移动设备设计足够大的触摸目标（至少 44x44 像素）

## 下一步

- 浏览 [组件文档](/components/aboutme) 了解所有可用组件的响应式属性
- 查看 [API 参考](/api/components) 了解组件的完整 API
- 查看 [GitHub 示例](https://github.com/sudoevolve/EvolveUI/tree/main/examples) 了解更多响应式设计示例
