# ECard

ECard 是一个基础卡片容器组件，用于组织和展示相关内容，支持阴影、圆角和边框等样式配置。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

Components.ECard {
    width: 300
    height: 200
    
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 16
        spacing: 12
        
        Text {
            text: "卡片标题"
            font.pointSize: 18
            font.bold: true
            color: theme.textColor
        }
        
        Text {
            text: "这是卡片内容，用于展示相关信息。卡片组件可以包含文本、按钮、图片等多种元素。"
            color: theme.textSecondaryColor
            wrapMode: Text.WordWrap
        }
        
        Components.EButton {
            text: "了解更多"
            width: 120
            height: 36
        }
    }
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `width` | `real` | `280` | 卡片宽度 |
| `height` | `real` | `200` | 卡片高度 |
| `radius` | `real` | `8` | 卡片圆角半径 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 卡片背景颜色 |
| `borderWidth` | `real` | `0` | 卡片边框宽度 |
| `borderColor` | `color` | `"transparent"` | 卡片边框颜色 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |
| `shadowColor` | `color` | `theme.shadowColor` | 卡片阴影颜色 |
| `shadowBlur` | `real` | `8` | 卡片阴影模糊程度 |
| `padding` | `real` | `0` | 卡片内边距 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `setShadowEnabled(enabled)` | `enabled: bool` | `void` | 设置是否启用阴影效果 |
| `setBackgroundColor(color)` | `color: color` | `void` | 设置卡片背景颜色 |
| `setBorder(borderWidth, borderColor)` | `borderWidth: real, borderColor: color` | `void` | 设置卡片边框 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `clicked` | 无 | 卡片被点击时触发 |
| `hovered` | `hovered: bool` | 鼠标悬停状态变化时触发 |

## 示例

### 带图片的卡片

```qml
Components.ECard {
    width: 300
    height: 350
    radius: 12
    
    ColumnLayout {
        anchors.fill: parent
        spacing: 0
        
        // 卡片图片
        Image {
            width: parent.width
            height: 180
            fillMode: Image.PreserveAspectCrop
            source: "https://example.com/image.jpg"
        }
        
        // 卡片内容
        ColumnLayout {
            anchors.fill: parent
            anchors.margins: 16
            spacing: 12
            
            Text {
                text: "精美图片展示"
                font.pointSize: 16
                font.bold: true
                color: theme.textColor
            }
            
            Text {
                text: "这是一个带有图片的卡片示例，可以用于展示产品、文章或其他视觉内容。"
                color: theme.textSecondaryColor
                wrapMode: Text.WordWrap
                Layout.fillWidth: true
            }
            
            // 操作按钮
            RowLayout {
                Layout.alignment: Qt.AlignRight
                spacing: 8
                
                Components.EButton {
                    text: "收藏"
                    width: 80
                    height: 32
                    backgroundColor: theme.secondaryColor
                }
                
                Components.EButton {
                    text: "查看"
                    width: 80
                    height: 32
                }
            }
        }
    }
}
```

### 带边框的卡片

```qml
Components.ECard {
    width: 300
    height: 200
    borderWidth: 2
    borderColor: theme.primaryColor
    backgroundColor: "transparent"
    
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 16
        spacing: 12
        
        Text {
            text: "带边框的卡片"
            font.pointSize: 18
            font.bold: true
            color: theme.textColor
        }
        
        Text {
            text: "这个卡片使用了边框样式，适合需要突出显示的内容。"
            color: theme.textSecondaryColor
            wrapMode: Text.WordWrap
        }
    }
}
```

### 响应式卡片

```qml
RowLayout {
    anchors.fill: parent
    anchors.margins: 16
    spacing: 16
    
    Components.ECard {
        Layout.fillWidth: true
        Layout.preferredHeight: 200
        Layout.maximumWidth: 400
        
        Text {
            anchors.centerIn: parent
            text: "卡片 1"
            font.pointSize: 16
            color: theme.textColor
        }
    }
    
    Components.ECard {
        Layout.fillWidth: true
        Layout.preferredHeight: 200
        Layout.maximumWidth: 400
        
        Text {
            anchors.centerIn: parent
            text: "卡片 2"
            font.pointSize: 16
            color: theme.textColor
        }
    }
    
    Components.ECard {
        Layout.fillWidth: true
        Layout.preferredHeight: 200
        Layout.maximumWidth: 400
        
        Text {
            anchors.centerIn: parent
            text: "卡片 3"
            font.pointSize: 16
            color: theme.textColor
        }
    }
}
```

## 注意事项

- 卡片组件是容器组件，可以包含各种其他组件
- 建议根据内容合理设置卡片的宽度和高度
- 可以通过组合多个卡片组件创建复杂的布局
- 阴影效果可能会影响性能，在需要高性能的场景下可以关闭阴影
- 卡片组件支持 Qt Quick Layouts，可以方便地实现响应式布局