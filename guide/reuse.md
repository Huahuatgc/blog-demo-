# 组件复用

EvolveUI 设计的核心原则之一是组件的可复用性。每个组件都可以独立使用，并支持灵活的参数配置，使您能够轻松地将它们集成到任何 QML 应用程序中。

## 组件基本使用

### 导入组件

所有组件都位于 `components` 文件夹中，可以通过以下方式导入：

```qml
import "components" as Components
```

使用 `Components` 命名空间可以避免命名冲突，并使代码结构更清晰。

### 创建组件实例

创建组件实例非常简单，就像使用内置的 QML 组件一样：

```qml
Components.EButton {
    text: "提交"
    onClicked: console.log("按钮被点击了!")
}
```

## 组件参数配置

EvolveUI 组件提供了丰富的参数，允许您根据需要自定义组件的外观和行为。

### EButton 组件参数示例

```qml
Components.EButton {
    text: "提交"
    iconCharacter: "\uf1d8"  // Font Awesome 图标
    iconSize: 20  // 图标大小
    textSize: 16  // 文本大小
    width: 120  // 按钮宽度
    height: 40  // 按钮高度
    primary: true  // 是否为主按钮样式
    disabled: false  // 是否禁用
    onClicked: submitForm()  // 点击事件处理
}
```

### EInput 组件参数示例

```qml
Components.EInput {
    placeholderText: "请输入邮箱"
    text: userEmail  // 绑定数据
    width: 300  // 输入框宽度
    height: 40  // 输入框高度
    textSize: 16  // 文本大小
    passwordMode: false  // 是否为密码模式
    readOnly: false  // 是否只读
    validator: RegExpValidator { regExp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }  // 邮箱验证
    onTextChanged: validateEmail()  // 文本变化事件处理
}
```

## 组件组合使用

EvolveUI 组件可以轻松组合使用，创建更复杂的界面。

### 表单示例

```qml
ColumnLayout {
    spacing: theme.spacing
    
    Text {
        text: "用户注册"
        font.pixelSize: 24
        color: theme.textColor
    }
    
    Components.EInput {
        placeholderText: "用户名"
        Layout.fillWidth: true
    }
    
    Components.EInput {
        placeholderText: "邮箱"
        Layout.fillWidth: true
    }
    
    Components.EInput {
        placeholderText: "密码"
        passwordMode: true
        Layout.fillWidth: true
    }
    
    RowLayout {
        spacing: theme.smallSpacing
        
        Components.ECheckBox {
            text: "我同意服务条款"
        }
        
        Text {
            text: "了解更多"
            color: theme.primaryColor
            font.underline: true
            MouseArea {
                anchors.fill: parent
                onClicked: openTerms()
            }
        }
    }
    
    Components.EButton {
        text: "注册"
        primary: true
        Layout.fillWidth: true
        onClicked: registerUser()
    }
}
```

### 卡片示例

```qml
Components.EHoverCard {
    width: 300
    height: 200
    
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
            text: "用户名"
            font.pixelSize: 18
            color: theme.textColor
            Layout.alignment: Qt.AlignHCenter
        }
        
        Text {
            text: "这是用户的简介信息，描述用户的特点和兴趣爱好。"
            font.pixelSize: 14
            color: theme.secondaryTextColor
            wrapMode: Text.WordWrap
            Layout.fillWidth: true
        }
        
        RowLayout {
            spacing: theme.smallSpacing
            Layout.fillWidth: true
            Layout.alignment: Qt.AlignHCenter
            
            Components.EButton {
                text: "关注"
                small: true
            }
            
            Components.EButton {
                text: "发送消息"
                small: true
                primary: false
            }
        }
    }
}
```

## 自定义组件

您可以基于 EvolveUI 组件创建自定义组件，以满足特定需求。

### 创建自定义组件

```qml
// CustomButton.qml
import QtQuick 2.15
import "components" as Components

Components.EButton {
    // 默认属性
    primary: true
    width: 150
    height: 45
    
    // 自定义属性
    property bool isCritical: false
    
    // 根据自定义属性修改样式
    color: isCritical ? theme.errorColor : theme.primaryColor
    textColor: "#ffffff"
    
    // 自定义行为
    onClicked: {
        if (isCritical) {
            console.log("执行关键操作")
        } else {
            console.log("执行普通操作")
        }
    }
}
```

### 使用自定义组件

```qml
import QtQuick 2.15
import "." as CustomComponents

ColumnLayout {
    spacing: theme.spacing
    
    CustomComponents.CustomButton {
        text: "普通按钮"
    }
    
    CustomComponents.CustomButton {
        text: "关键按钮"
        isCritical: true
    }
}
```

## 组件复用最佳实践

1. **保持组件单一职责**：每个组件应该只负责一项功能，这样更容易复用

2. **提供合理的默认值**：为组件参数提供合理的默认值，减少使用时的配置工作量

3. **使用主题属性**：在自定义组件中使用主题属性，确保与应用程序的整体风格一致

4. **添加适当的注释**：为组件添加清晰的注释，说明组件的用途、参数和使用方法

5. **测试组件**：确保组件在各种情况下都能正常工作，包括不同的尺寸、主题和数据

6. **避免过度定制**：不要为了满足特定需求而过度定制组件，这会降低组件的可复用性

## 组件生命周期

了解组件的生命周期可以帮助您更好地使用和自定义组件：

1. **组件创建**：当您创建组件实例时，组件的 `Component.onCompleted` 信号会被触发
2. **属性更新**：当组件的属性发生变化时，相关的绑定会自动更新
3. **组件销毁**：当组件不再被引用时，组件的 `Component.onDestruction` 信号会被触发

```qml
Components.EButton {
    text: "生命周期示例"
    
    Component.onCompleted: {
        console.log("按钮组件创建完成")
    }
    
    onTextChanged: {
        console.log("按钮文本已更新为:", text)
    }
    
    Component.onDestruction: {
        console.log("按钮组件即将销毁")
    }
}
```

## 下一步

- 查看 [响应式布局](/guide/responsive) 了解如何创建适配不同设备的界面
- 浏览 [组件文档](/components/aboutme) 了解所有可用组件的详细信息
- 查看 [API 参考](/api/components) 了解组件的完整 API
