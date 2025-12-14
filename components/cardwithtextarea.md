# ECardWithTextArea

ECardWithTextArea 是一个带有文本区域的卡片容器组件，特别适合用于展示长文本内容或表单输入场景。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

Components.ECardWithTextArea {
    width: 400
    height: 300
    title: "文本区域卡片"
    
    // 文本区域的内容可以通过 content 属性设置
    content: "这是文本区域的默认内容。ECardWithTextArea 组件提供了一个带标题和文本区域的卡片容器，适合用于展示长文本或表单输入场景。"
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `width` | `real` | `360` | 卡片宽度 |
| `height` | `real` | `280` | 卡片高度 |
| `radius` | `real` | `8` | 卡片圆角半径 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 卡片背景颜色 |
| `title` | `string` | `""` | 卡片标题 |
| `titleColor` | `color` | `theme.textColor` | 标题颜色 |
| `titleFontSize` | `real` | `16` | 标题字体大小 |
| `content` | `string` | `""` | 文本区域内容 |
| `contentColor` | `color` | `theme.textSecondaryColor` | 文本内容颜色 |
| `contentFontSize` | `real` | `14` | 文本内容字体大小 |
| `readOnly` | `bool` | `true` | 文本区域是否只读 |
| `placeholderText` | `string` | `""` | 文本区域占位符文本 |
| `borderWidth` | `real` | `0` | 卡片边框宽度 |
| `borderColor` | `color` | `"transparent"` | 卡片边框颜色 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |
| `padding` | `real` | `16` | 卡片内边距 |
| `titleContentSpacing` | `real` | `12` | 标题与文本区域的间距 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `setTitle(title)` | `title: string` | `void` | 设置卡片标题 |
| `setContent(content)` | `content: string` | `void` | 设置文本区域内容 |
| `getContent()` | 无 | `string` | 获取当前文本区域内容 |
| `setReadOnly(readOnly)` | `readOnly: bool` | `void` | 设置文本区域是否只读 |
| `setBackgroundColor(color)` | `color: color` | `void` | 设置卡片背景颜色 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `contentChanged` | `content: string` | 文本区域内容变化时触发 |
| `focused` | `focused: bool` | 文本区域获取/失去焦点时触发 |
| `clicked` | 无 | 卡片被点击时触发 |

## 示例

### 可编辑的文本区域卡片

```qml
Components.ETheme {
    id: theme
}

Components.ECardWithTextArea {
    width: 400
    height: 300
    title: "编辑笔记"
    readOnly: false
    placeholderText: "在这里输入您的笔记..."
    content: "" // 初始为空
    
    onContentChanged: (content) => {
        console.log("笔记内容已更新:", content)
    }
}
```

### 带有提交按钮的表单卡片

```qml
Components.ETheme {
    id: theme
}

Components.ECardWithTextArea {
    width: 450
    height: 350
    title: "反馈表单"
    readOnly: false
    placeholderText: "请输入您的反馈意见..."
    
    // 自定义卡片内容布局
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 16
        spacing: 16
        
        // 标题
        Text {
            text: "反馈表单"
            font.pointSize: 18
            font.bold: true
            color: theme.textColor
        }
        
        // 文本输入区域
        TextArea {
            Layout.fillWidth: true
            Layout.fillHeight: true
            placeholderText: "请输入您的反馈意见..."
            color: theme.textColor
            backgroundColor: "transparent"
            borderColor: theme.borderColor
            borderWidth: 1
            radius: 6
            padding: 12
            wrapMode: Text.WordWrap
            
            onTextChanged: {
                console.log("反馈内容:", text)
            }
        }
        
        // 提交按钮
        RowLayout {
            Layout.alignment: Qt.AlignRight
            spacing: 12
            
            Components.EButton {
                text: "取消"
                width: 100
                height: 36
                backgroundColor: "transparent"
                borderColor: theme.borderColor
                borderWidth: 1
                textColor: theme.textColor
            }
            
            Components.EButton {
                text: "提交反馈"
                width: 120
                height: 36
                backgroundColor: theme.primaryColor
                
                onClicked: {
                    console.log("反馈已提交")
                }
            }
        }
    }
}
```

### 带有格式化文本的展示卡片

```qml
Components.ETheme {
    id: theme
}

Components.ECardWithTextArea {
    width: 400
    height: 300
    title: "产品说明"
    
    // 自定义内容展示
    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 16
        spacing: 12
        
        Text {
            text: "产品说明"
            font.pointSize: 18
            font.bold: true
            color: theme.textColor
        }
        
        // 产品特点列表
        ColumnLayout {
            spacing: 8
            
            RowLayout {
                spacing: 8
                
                Rectangle {
                    width: 8
                    height: 8
                    color: theme.primaryColor
                    radius: 4
                    anchors.verticalCenter: parent.verticalCenter
                }
                
                Text {
                    text: "高质量材料制造"
                    color: theme.textSecondaryColor
                }
            }
            
            RowLayout {
                spacing: 8
                
                Rectangle {
                    width: 8
                    height: 8
                    color: theme.primaryColor
                    radius: 4
                    anchors.verticalCenter: parent.verticalCenter
                }
                
                Text {
                    text: "精湛工艺，细节完美"
                    color: theme.textSecondaryColor
                }
            }
            
            RowLayout {
                spacing: 8
                
                Rectangle {
                    width: 8
                    height: 8
                    color: theme.primaryColor
                    radius: 4
                    anchors.verticalCenter: parent.verticalCenter
                }
                
                Text {
                    text: "持久耐用，品质保证"
                    color: theme.textSecondaryColor
                }
            }
            
            RowLayout {
                spacing: 8
                
                Rectangle {
                    width: 8
                    height: 8
                    color: theme.primaryColor
                    radius: 4
                    anchors.verticalCenter: parent.verticalCenter
                }
                
                Text {
                    text: "7天无理由退换货"
                    color: theme.textSecondaryColor
                }
            }
        }
        
        // 价格信息
        Text {
            text: "¥ 199.00"
            font.pointSize: 24
            font.bold: true
            color: theme.primaryColor
            Layout.alignment: Qt.AlignCenter
        }
    }
}
```

## 注意事项

- ECardWithTextArea 组件默认提供了一个带标题和文本区域的卡片容器
- 通过设置 `readOnly` 属性，可以控制文本区域是否可编辑
- 可以完全自定义卡片内容布局，实现更复杂的界面效果
- 适合用于展示产品说明、用户反馈、笔记记录等场景
- 在移动端使用时，建议调整卡片宽度以适应屏幕尺寸