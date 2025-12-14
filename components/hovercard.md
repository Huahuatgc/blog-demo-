# EHoverCard

EHoverCard 是一个鼠标悬停时会产生浮起效果的卡片容器组件，用于增强用户交互体验。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

Components.EHoverCard {
    width: 300
    height: 200
    
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 16
        spacing: 12
        
        Text {
            text: "悬停卡片"
            font.pointSize: 18
            font.bold: true
            color: theme.textColor
        }
        
        Text {
            text: "将鼠标悬停在此卡片上，观察卡片的浮起效果和阴影变化。"
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
| `hoverOffset` | `real` | `-8` | 悬停时卡片上浮的距离（负值向上） |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |
| `shadowColor` | `color` | `theme.shadowColor` | 卡片阴影颜色 |
| `shadowBlur` | `real` | `8` | 卡片阴影模糊程度 |
| `hoverShadowBlur` | `real` | `16` | 悬停时卡片阴影模糊程度 |
| `transitionDuration` | `int` | `300` | 悬停动画持续时间（毫秒） |
| `padding` | `real` | `0` | 卡片内边距 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `setHoverOffset(offset)` | `offset: real` | `void` | 设置悬停时卡片上浮的距离 |
| `setTransitionDuration(duration)` | `duration: int` | `void` | 设置悬停动画持续时间 |
| `setBackgroundColor(color)` | `color: color` | `void` | 设置卡片背景颜色 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `clicked` | 无 | 卡片被点击时触发 |
| `hovered` | `hovered: bool` | 鼠标悬停状态变化时触发 |

## 示例

### 带有图片的悬停卡片

```qml
Components.ETheme {
    id: theme
}

Components.EHoverCard {
    width: 320
    height: 400
    radius: 12
    hoverOffset: -12
    
    ColumnLayout {
        anchors.fill: parent
        spacing: 0
        
        // 卡片图片
        Image {
            width: parent.width
            height: 200
            fillMode: Image.PreserveAspectCrop
            source: "https://example.com/product.jpg"
            radius: Qt.rect(12, 12, 0, 0) // 只设置顶部圆角
        }
        
        // 卡片内容
        ColumnLayout {
            anchors.fill: parent
            anchors.margins: 20
            spacing: 16
            
            Text {
                text: "产品名称"
                font.pointSize: 20
                font.bold: true
                color: theme.textColor
            }
            
            Text {
                text: "这是一个精美的产品展示卡片，鼠标悬停时会产生优雅的浮起效果。"
                color: theme.textSecondaryColor
                wrapMode: Text.WordWrap
            }
            
            Text {
                text: "¥ 99.00"
                font.pointSize: 24
                font.bold: true
                color: theme.primaryColor
            }
            
            Components.EButton {
                text: "立即购买"
                width: 140
                height: 40
                backgroundColor: theme.primaryColor
            }
        }
    }
}
```

### 多个悬停卡片组成的网格

```qml
Components.ETheme {
    id: theme
}

GridLayout {
    anchors.fill: parent
    anchors.margins: 20
    columns: 3
    columnSpacing: 20
    rowSpacing: 20
    
    Repeater {
        model: 6
        
        Components.EHoverCard {
            width: 280
            height: 220
            
            ColumnLayout {
                anchors.fill: parent
                anchors.margins: 16
                spacing: 12
                
                Text {
                    text: "卡片 " + (index + 1)
                    font.pointSize: 16
                    font.bold: true
                    color: theme.textColor
                }
                
                Text {
                    text: "这是悬停卡片网格布局的示例，每个卡片都有独立的悬停效果。"
                    color: theme.textSecondaryColor
                    wrapMode: Text.WordWrap
                }
                
                Rectangle {
                    width: parent.width
                    height: 60
                    color: theme.primaryColor
                    radius: 6
                    opacity: 0.2
                }
            }
        }
    }
}
```

### 自定义悬停效果的卡片

```qml
Components.ETheme {
    id: theme
}

Components.EHoverCard {
    width: 300
    height: 200
    radius: 12
    backgroundColor: theme.primaryColor
    hoverOffset: -10
    shadowColor: "rgba(0, 0, 0, 0.2)"
    hoverShadowBlur: 24
    transitionDuration: 500
    
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 20
        spacing: 16
        
        Text {
            text: "自定义悬停卡片"
            font.pointSize: 20
            font.bold: true
            color: "white"
        }
        
        Text {
            text: "这个卡片使用了自定义的悬停效果，包括更长的过渡时间和更大的阴影变化。"
            color: "rgba(255, 255, 255, 0.9)"
            wrapMode: Text.WordWrap
        }
        
        Components.EButton {
            text: "查看详情"
            width: 120
            height: 36
            backgroundColor: "rgba(255, 255, 255, 0.2)"
            textColor: "white"
            borderColor: "white"
            borderWidth: 1
        }
    }
}
```

## 注意事项

- EHoverCard 适合用于展示列表项、产品卡片等需要用户交互的内容
- 悬停效果使用了动画过渡，使交互更加流畅自然
- 可以通过调整 `hoverOffset`、`hoverShadowBlur` 和 `transitionDuration` 来自定义悬停效果
- 在移动端，触摸操作会触发类似悬停的效果
- 建议不要在同一页面使用过多的悬停卡片，以免影响性能