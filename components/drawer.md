# EDrawer

EDrawer 是一个侧边栏组件，用于展示导航菜单、设置选项或其他辅助内容，支持从左侧或右侧滑出。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

Rectangle {
    id: mainContainer
    anchors.fill: parent
    color: theme.backgroundColor
    
    Components.EButton {
        id: openDrawerButton
        text: "打开侧边栏"
        anchors.centerIn: parent
        
        onClicked: {
            drawer.open()
        }
    }
    
    Components.EDrawer {
        id: drawer
        width: 280
        
        ColumnLayout {
            anchors.fill: parent
            spacing: 0
            
            // 侧边栏头部
            Rectangle {
                width: parent.width
                height: 80
                color: theme.primaryColor
                
                Text {
                    text: "侧边栏"
                    color: "white"
                    font.pointSize: 18
                    font.bold: true
                    anchors.centerIn: parent
                }
            }
            
            // 导航菜单
            ColumnLayout {
                anchors.fill: parent
                spacing: 0
                
                // 菜单项1
                Rectangle {
                    width: parent.width
                    height: 50
                    color: "transparent"
                    
                    MouseArea {
                        anchors.fill: parent
                        hoverEnabled: true
                        
                        onEntered: {
                            parent.color = theme.backgroundColor
                        }
                        
                        onExited: {
                            parent.color = "transparent"
                        }
                        
                        onClicked: {
                            console.log("菜单项1被点击")
                            drawer.close()
                        }
                        
                        RowLayout {
                            anchors.fill: parent
                            anchors.margins: 16
                            spacing: 12
                            
                            Rectangle {
                                width: 24
                                height: 24
                                color: theme.primaryColor
                                radius: 4
                            }
                            
                            Text {
                                text: "菜单项1"
                                color: theme.textColor
                                font.pointSize: 14
                            }
                        }
                    }
                }
                
                // 菜单项2
                Rectangle {
                    width: parent.width
                    height: 50
                    color: "transparent"
                    
                    MouseArea {
                        anchors.fill: parent
                        hoverEnabled: true
                        
                        onEntered: {
                            parent.color = theme.backgroundColor
                        }
                        
                        onExited: {
                            parent.color = "transparent"
                        }
                        
                        onClicked: {
                            console.log("菜单项2被点击")
                            drawer.close()
                        }
                        
                        RowLayout {
                            anchors.fill: parent
                            anchors.margins: 16
                            spacing: 12
                            
                            Rectangle {
                                width: 24
                                height: 24
                                color: theme.secondaryColor
                                radius: 4
                            }
                            
                            Text {
                                text: "菜单项2"
                                color: theme.textColor
                                font.pointSize: 14
                            }
                        }
                    }
                }
                
                // 菜单项3
                Rectangle {
                    width: parent.width
                    height: 50
                    color: "transparent"
                    
                    MouseArea {
                        anchors.fill: parent
                        hoverEnabled: true
                        
                        onEntered: {
                            parent.color = theme.backgroundColor
                        }
                        
                        onExited: {
                            parent.color = "transparent"
                        }
                        
                        onClicked: {
                            console.log("菜单项3被点击")
                            drawer.close()
                        }
                        
                        RowLayout {
                            anchors.fill: parent
                            anchors.margins: 16
                            spacing: 12
                            
                            Rectangle {
                                width: 24
                                height: 24
                                color: theme.successColor
                                radius: 4
                            }
                            
                            Text {
                                text: "菜单项3"
                                color: theme.textColor
                                font.pointSize: 14
                            }
                        }
                    }
                }
            }
        }
    }
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `width` | `real` | `260` | 侧边栏宽度 |
| `height` | `real` | `parent.height` | 侧边栏高度（默认与父容器相同） |
| `position` | `string` | `"left"` | 侧边栏位置，可选值："left", "right" |
| `backgroundColor` | `color` | `theme.surfaceColor` | 侧边栏背景颜色 |
| `overlayColor` | `color` | `"rgba(0, 0, 0, 0.5)"` | 遮罩层颜色 |
| `animationDuration` | `int` | `300` | 滑入/滑出动画持续时间（毫秒） |
| `open` | `bool` | `false` | 是否打开侧边栏 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `open()` | 无 | `void` | 打开侧边栏 |
| `close()` | 无 | `void` | 关闭侧边栏 |
| `toggle()` | 无 | `void` | 切换侧边栏开关状态 |
| `setPosition(position)` | `position: string` | `void` | 设置侧边栏位置（"left" 或 "right"） |
| `setWidth(width)` | `width: real` | `void` | 设置侧边栏宽度 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `opened` | 无 | 侧边栏打开时触发 |
| `closed` | 无 | 侧边栏关闭时触发 |
| `toggled` | `open: bool` | 侧边栏开关状态变化时触发 |

## 示例

### 从右侧滑出的侧边栏

```qml
Components.ETheme {
    id: theme
}

Rectangle {
    id: mainContainer
    anchors.fill: parent
    color: theme.backgroundColor
    
    Components.EButton {
        id: openRightDrawerButton
        text: "打开右侧侧边栏"
        anchors.centerIn: parent
        
        onClicked: {
            rightDrawer.open()
        }
    }
    
    Components.EDrawer {
        id: rightDrawer
        position: "right"
        width: 320
        
        ColumnLayout {
            anchors.fill: parent
            spacing: 16
            anchors.margins: 16
            
            Text {
                text: "右侧侧边栏"
                font.pointSize: 20
                font.bold: true
                color: theme.textColor
            }
            
            Text {
                text: "这是一个从右侧滑出的侧边栏示例，适合展示设置选项或辅助内容。"
                color: theme.textSecondaryColor
                wrapMode: Text.WordWrap
            }
            
            Components.EButton {
                text: "关闭侧边栏"
                onClicked: {
                    rightDrawer.close()
                }
            }
        }
    }
}
```

### 带有导航菜单的侧边栏

```qml
Components.ETheme {
    id: theme
}

Rectangle {
    id: mainContainer
    anchors.fill: parent
    color: theme.backgroundColor
    
    Components.EButton {
        id: openNavDrawerButton
        text: "打开导航菜单"
        anchors.left: parent.left
        anchors.top: parent.top
        anchors.margins: 16
        
        onClicked: {
            navDrawer.open()
        }
    }
    
    Components.EDrawer {
        id: navDrawer
        width: 280
        
        ColumnLayout {
            anchors.fill: parent
            spacing: 0
            
            // 侧边栏头部
            Rectangle {
                width: parent.width
                height: 120
                color: theme.primaryColor
                
                ColumnLayout {
                    anchors.centerIn: parent
                    spacing: 8
                    
                    Components.EAvatar {
                        width: 60
                        height: 60
                        backgroundColor: "white"
                        
                        Text {
                            anchors.centerIn: parent
                            text: "U"
                            color: theme.primaryColor
                            font.pointSize: 24
                            font.bold: true
                        }
                    }
                    
                    Text {
                        text: "用户名"
                        color: "white"
                        font.pointSize: 16
                        font.bold: true
                    }
                }
            }
            
            // 导航菜单
            ColumnLayout {
                anchors.fill: parent
                spacing: 4
                
                // 菜单项模板
                function createMenuItem(text, iconColor, action) {
                    return Rectangle {
                        width: parent.width
                        height: 48
                        color: "transparent"
                        
                        MouseArea {
                            anchors.fill: parent
                            hoverEnabled: true
                            
                            onEntered: {
                                parent.color = theme.backgroundColor
                            }
                            
                            onExited: {
                                parent.color = "transparent"
                            }
                            
                            onClicked: {
                                action()
                                navDrawer.close()
                            }
                            
                            RowLayout {
                                anchors.fill: parent
                                anchors.margins: 16
                                spacing: 16
                                
                                Rectangle {
                                    width: 24
                                    height: 24
                                    color: iconColor
                                    radius: 4
                                }
                                
                                Text {
                                    text: text
                                    color: theme.textColor
                                    font.pointSize: 15
                                }
                            }
                        }
                    }
                }
                
                // 创建菜单项
                Loader {
                    sourceComponent: createMenuItem("首页", theme.primaryColor, function() { console.log("首页") })
                }
                
                Loader {
                    sourceComponent: createMenuItem("个人中心", theme.secondaryColor, function() { console.log("个人中心") })
                }
                
                Loader {
                    sourceComponent: createMenuItem("设置", theme.textSecondaryColor, function() { console.log("设置") })
                }
                
                Loader {
                    sourceComponent: createMenuItem("帮助", theme.successColor, function() { console.log("帮助") })
                }
                
                Loader {
                    sourceComponent: createMenuItem("关于", theme.warningColor, function() { console.log("关于") })
                }
            }
        }
    }
}
```

### 带有遮罩层透明度控制的侧边栏

```qml
Components.ETheme {
    id: theme
}

Rectangle {
    id: mainContainer
    anchors.fill: parent
    color: theme.backgroundColor
    
    Components.EButton {
        id: openCustomDrawerButton
        text: "打开自定义侧边栏"
        anchors.centerIn: parent
        
        onClicked: {
            customDrawer.open()
        }
    }
    
    Components.EDrawer {
        id: customDrawer
        width: 300
        animationDuration: 400
        
        // 自定义遮罩层
        Rectangle {
            id: customOverlay
            anchors.fill: parent.parent
            color: "rgba(0, 0, 0, 0.3)"
            opacity: 0
            
            MouseArea {
                anchors.fill: parent
                onClicked: {
                    customDrawer.close()
                }
            }
        }
        
        // 侧边栏内容
        Rectangle {
            anchors.fill: parent
            color: theme.surfaceColor
            
            ColumnLayout {
                anchors.fill: parent
                anchors.margins: 20
                spacing: 20
                
                Text {
                    text: "自定义侧边栏"
                    font.pointSize: 24
                    font.bold: true
                    color: theme.textColor
                }
                
                Text {
                    text: "这个侧边栏使用了自定义的遮罩层和动画效果，可以根据需要进行调整。"
                    color: theme.textSecondaryColor
                    wrapMode: Text.WordWrap
                }
                
                Components.EButton {
                    text: "关闭侧边栏"
                    onClicked: {
                        customDrawer.close()
                    }
                }
            }
        }
        
        // 自定义打开/关闭动画
        onOpenChanged: {
            if (open) {
                customOverlay.opacity = 1
            } else {
                customOverlay.opacity = 0
            }
        }
    }
}
```

## 注意事项

- EDrawer 适合用于展示导航菜单、设置选项、用户信息等辅助内容
- 支持从左侧或右侧滑出，通过 `position` 属性设置
- 可以通过 `animationDuration` 属性调整动画速度
- 点击遮罩层默认会关闭侧边栏，可以通过自定义遮罩层来修改此行为
- 在移动设备上，侧边栏是常用的导航模式，提升了屏幕空间利用率
- 建议侧边栏宽度在 260-320px 之间，以确保内容清晰可读