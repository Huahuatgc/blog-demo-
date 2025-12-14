# EBlurCard

EBlurCard 是一个带有高斯模糊背景效果的卡片组件，适用于需要突出内容同时保持视觉层次感的场景。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

// 背景图片
Image {
    anchors.fill: parent
    source: "https://example.com/background.jpg"
    fillMode: Image.PreserveAspectCrop
    opacity: 0.7
}

Components.EBlurCard {
    width: 300
    height: 200
    anchors.centerIn: parent
    
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 16
        spacing: 12
        
        Text {
            text: "高斯模糊卡片"
            font.pointSize: 18
            font.bold: true
            color: "white"
        }
        
        Text {
            text: "这是一个带有高斯模糊背景效果的卡片，适合在图片背景上使用，增强内容可读性。"
            color: "white"
            wrapMode: Text.WordWrap
        }
        
        Components.EButton {
            text: "了解更多"
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

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `width` | `real` | `280` | 卡片宽度 |
| `height` | `real` | `200` | 卡片高度 |
| `radius` | `real` | `8` | 卡片圆角半径 |
| `backgroundColor` | `color` | `"rgba(255, 255, 255, 0.3)"` | 卡片背景颜色（支持透明度） |
| `blurRadius` | `real` | `10` | 高斯模糊半径 |
| `borderWidth` | `real` | `0` | 卡片边框宽度 |
| `borderColor` | `color` | `"transparent"` | 卡片边框颜色 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |
| `shadowColor` | `color` | `"rgba(0, 0, 0, 0.2)"` | 卡片阴影颜色 |
| `padding` | `real` | `0` | 卡片内边距 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `setBlurRadius(radius)` | `radius: real` | `void` | 设置高斯模糊半径 |
| `setBackgroundColor(color)` | `color: color` | `void` | 设置卡片背景颜色 |
| `setShadowEnabled(enabled)` | `enabled: bool` | `void` | 设置是否启用阴影效果 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `clicked` | 无 | 卡片被点击时触发 |
| `hovered` | `hovered: bool` | 鼠标悬停状态变化时触发 |

## 示例

### 深色主题下的模糊卡片

```qml
Components.ETheme {
    id: theme
    isDark: true
}

// 深色背景
Rectangle {
    anchors.fill: parent
    gradient: Gradient {
        GradientStop { position: 0.0; color: "#1a1a2e" }
        GradientStop { position: 1.0; color: "#16213e" }
    }
}

Components.EBlurCard {
    width: 320
    height: 220
    anchors.centerIn: parent
    backgroundColor: "rgba(50, 50, 80, 0.6)"
    blurRadius: 15
    
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 16
        spacing: 12
        
        Text {
            text: "深色主题卡片"
            font.pointSize: 18
            font.bold: true
            color: "white"
        }
        
        Text {
            text: "在深色主题背景下，模糊卡片可以创造出优雅的玻璃态效果。"
            color: "rgba(255, 255, 255, 0.8)"
            wrapMode: Text.WordWrap
        }
        
        Components.EButton {
            text: "开始使用"
            width: 120
            height: 36
            backgroundColor: theme.primaryColor
        }
    }
}
```

### 带图片和文字的复杂模糊卡片

```qml
Components.ETheme {
    id: theme
}

// 背景图片
Image {
    anchors.fill: parent
    source: "https://example.com/nature.jpg"
    fillMode: Image.PreserveAspectCrop
    opacity: 0.8
}

Components.EBlurCard {
    width: 350
    height: 400
    anchors.centerIn: parent
    radius: 12
    blurRadius: 20
    backgroundColor: "rgba(255, 255, 255, 0.2)"
    borderWidth: 1
    borderColor: "rgba(255, 255, 255, 0.3)"
    
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 20
        spacing: 16
        
        // 卡片标题
        Text {
            text: "自然风景"
            font.pointSize: 24
            font.bold: true
            color: "white"
        }
        
        // 图片描述
        Text {
            text: "大自然的美丽景色总是能让人心情愉悦。这张卡片使用了高斯模糊效果，让文字内容更加突出。"
            color: "white"
            wrapMode: Text.WordWrap
            Layout.fillHeight: true
        }
        
        // 操作按钮组
        RowLayout {
            spacing: 12
            
            Components.EButton {
                text: "保存"
                width: 100
                height: 36
                backgroundColor: "rgba(255, 255, 255, 0.3)"
                textColor: "white"
                borderColor: "white"
                borderWidth: 1
            }
            
            Components.EButton {
                text: "分享"
                width: 100
                height: 36
                backgroundColor: theme.primaryColor
            }
            
            Components.EButton {
                text: "下载"
                width: 100
                height: 36
                backgroundColor: theme.secondaryColor
            }
        }
    }
}
```

### 响应式模糊卡片网格

```qml
Components.ETheme {
    id: theme
}

// 背景渐变
Rectangle {
    anchors.fill: parent
    gradient: Gradient {
        GradientStop { position: 0.0; color: "#667eea" }
        GradientStop { position: 1.0; color: "#764ba2" }
    }
}

Flow {
    anchors.fill: parent
    anchors.margins: 20
    spacing: 20
    flow: Flow.LeftToRight
    
    Repeater {
        model: 6
        
        Components.EBlurCard {
            width: 280
            height: 180
            radius: 10
            blurRadius: 15
            backgroundColor: "rgba(255, 255, 255, 0.15)"
            
            ColumnLayout {
                anchors.fill: parent
                anchors.margins: 16
                spacing: 12
                
                Text {
                    text: "卡片 " + (index + 1)
                    font.pointSize: 16
                    font.bold: true
                    color: "white"
                }
                
                Text {
                    text: "这是一个响应式模糊卡片网格布局的示例。"
                    color: "rgba(255, 255, 255, 0.9)"
                    wrapMode: Text.WordWrap
                }
            }
        }
    }
}
```

## 注意事项

- EBlurCard 需要在有背景内容（如图片、颜色渐变）的情况下才能显示出模糊效果
- 模糊半径越大，性能消耗越高，建议根据实际需求调整
- 在深色背景上使用时，建议使用半透明深色背景色以获得更好的视觉效果
- 可以通过调整 backgroundColor 的 alpha 通道来控制卡片的透明度
- 模糊卡片适合用于创建现代、优雅的 UI 界面，特别是在图片背景上展示内容