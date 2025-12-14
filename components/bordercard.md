# EBorderCard

EBorderCard 是一个带边框的卡片容器组件，用于突出显示重要内容，支持自定义边框颜色、宽度和样式。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

Components.EBorderCard {
    width: 300
    height: 200
    borderColor: theme.primaryColor
    
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 16
        spacing: 12
        
        Text {
            text: "边框卡片"
            font.pointSize: 18
            font.bold: true
            color: theme.textColor
        }
        
        Text {
            text: "这是一个带有边框的卡片组件，适合突出显示重要内容。边框颜色可以自定义，与主题保持一致。"
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
| `borderWidth` | `real` | `2` | 卡片边框宽度 |
| `borderColor` | `color` | `theme.primaryColor` | 卡片边框颜色 |
| `borderStyle` | `string` | `"solid"` | 边框样式，可选值："solid", "dashed", "dotted" |
| `shadowEnabled` | `bool` | `false` | 是否启用阴影效果 |
| `padding` | `real` | `0` | 卡片内边距 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `setBorderColor(color)` | `color: color` | `void` | 设置卡片边框颜色 |
| `setBorderWidth(width)` | `width: real` | `void` | 设置卡片边框宽度 |
| `setBorderStyle(style)` | `style: string` | `void` | 设置卡片边框样式 |
| `setBackgroundColor(color)` | `color: color` | `void` | 设置卡片背景颜色 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `clicked` | 无 | 卡片被点击时触发 |
| `hovered` | `hovered: bool` | 鼠标悬停状态变化时触发 |

## 示例

### 不同边框样式的卡片

```qml
ColumnLayout {
    anchors.centerIn: parent
    spacing: 20
    
    // 实线边框卡片
    Components.EBorderCard {
        width: 300
        height: 150
        borderColor: theme.primaryColor
        borderStyle: "solid"
        
        Text {
            anchors.centerIn: parent
            text: "实线边框卡片"
            font.pointSize: 16
            color: theme.textColor
        }
    }
    
    // 虚线边框卡片
    Components.EBorderCard {
        width: 300
        height: 150
        borderColor: theme.secondaryColor
        borderStyle: "dashed"
        
        Text {
            anchors.centerIn: parent
            text: "虚线边框卡片"
            font.pointSize: 16
            color: theme.textColor
        }
    }
    
    // 点线边框卡片
    Components.EBorderCard {
        width: 300
        height: 150
        borderColor: theme.successColor
        borderStyle: "dotted"
        
        Text {
            anchors.centerIn: parent
            text: "点线边框卡片"
            font.pointSize: 16
            color: theme.textColor
        }
    }
}
```

### 彩色边框卡片

```qml
Components.ETheme {
    id: theme
}

RowLayout {
    anchors.centerIn: parent
    spacing: 16
    
    Components.EBorderCard {
        width: 180
        height: 180
        borderColor: theme.primaryColor
        backgroundColor: "transparent"
        
        ColumnLayout {
            anchors.centerIn: parent
            spacing: 8
            
            Text {
                text: "主色调"
                font.pointSize: 14
                font.bold: true
                color: theme.primaryColor
            }
            
            Rectangle {
                width: 40
                height: 40
                color: theme.primaryColor
                radius: 8
            }
        }
    }
    
    Components.EBorderCard {
        width: 180
        height: 180
        borderColor: theme.secondaryColor
        backgroundColor: "transparent"
        
        ColumnLayout {
            anchors.centerIn: parent
            spacing: 8
            
            Text {
                text: "次色调"
                font.pointSize: 14
                font.bold: true
                color: theme.secondaryColor
            }
            
            Rectangle {
                width: 40
                height: 40
                color: theme.secondaryColor
                radius: 8
            }
        }
    }
    
    Components.EBorderCard {
        width: 180
        height: 180
        borderColor: theme.successColor
        backgroundColor: "transparent"
        
        ColumnLayout {
            anchors.centerIn: parent
            spacing: 8
            
            Text {
                text: "成功色"
                font.pointSize: 14
                font.bold: true
                color: theme.successColor
            }
            
            Rectangle {
                width: 40
                height: 40
                color: theme.successColor
                radius: 8
            }
        }
    }
}
```

### 带阴影的边框卡片

```qml
Components.ETheme {
    id: theme
}

Components.EBorderCard {
    width: 300
    height: 250
    borderColor: theme.primaryColor
    borderWidth: 3
    shadowEnabled: true
    
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 20
        spacing: 16
        
        Text {
            text: "带阴影的边框卡片"
            font.pointSize: 20
            font.bold: true
            color: theme.textColor
        }
        
        Text {
            text: "这个卡片同时启用了边框和阴影效果，创造出层次感更强的视觉效果。"
            color: theme.textSecondaryColor
            wrapMode: Text.WordWrap
        }
        
        Components.EButton {
            text: "立即体验"
            width: 140
            height: 40
            backgroundColor: theme.primaryColor
        }
    }
}
```

## 注意事项

- EBorderCard 适合用于突出显示重要内容，如警告、提示、重要信息等
- 边框样式支持 "solid", "dashed", "dotted" 三种基本样式
- 可以通过调整 borderWidth 和 borderColor 来创建不同粗细和颜色的边框
- 当同时启用边框和阴影时，建议将阴影效果调弱，以避免视觉冲突
- 在深色主题下，建议选择与主题对比明显的边框颜色，以确保内容可读性