# Aboutme 组件

带有打字机效果的介绍界面组件，用于展示个人或项目信息。

## 示例

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

Components.Aboutme {
    anchors.fill: parent
    title: "欢迎使用 EvolveUI"
    subtitle: "现代化 Qt6 QML 组件库"
    description: "为跨平台应用提供一致、优雅、响应式的 UI 体验。"
    author: "sudoevolve"
    github: "https://github.com/sudoevolve/EvolveUI"
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `title` | string | "EvolveUI" | 主标题文本 |
| `subtitle` | string | "Modern QML Component Library" | 副标题文本 |
| `description` | string | "A modern, highly styled Qt6 QML front-end component library." | 描述文本 |
| `author` | string | "sudoevolve" | 作者名称 |
| `github` | string | "https://github.com/sudoevolve/EvolveUI" | GitHub 仓库链接 |
| `textColor` | color | `theme.textColor` | 文本颜色 |
| `backgroundColor` | color | `theme.backgroundColor` | 背景颜色 |
| `typeSpeed` | int | 50 | 打字机效果速度（毫秒/字符） |
| `showCursor` | bool | true | 是否显示光标 |
| `cursorColor` | color | `theme.primaryColor` | 光标颜色 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|--------|------|--------|------|
| `startTyping()` | 无 | 无 | 开始打字机效果 |
| `stopTyping()` | 无 | 无 | 停止打字机效果 |
| `reset()` | 无 | 无 | 重置打字机效果 |

## 信号

| 信号名 | 参数 | 描述 |
|--------|------|------|
| `typingCompleted()` | 无 | 打字机效果完成时触发 |

## 示例代码

### 自定义样式

```qml
Components.Aboutme {
    anchors.fill: parent
    title: "我的项目"
    subtitle: "创新的解决方案"
    description: "这是一个使用 EvolveUI 构建的现代化应用程序，提供了丰富的功能和优雅的界面。"
    author: "开发者名称"
    github: "https://github.com/developer/project"
    
    // 自定义样式
    typeSpeed: 30  // 更快的打字速度
    cursorColor: theme.secondaryColor  // 使用次要色调作为光标颜色
    showCursor: true
    
    // 监听信号
    onTypingCompleted: {
        console.log("打字机效果完成")
    }
}
```

### 动态更新内容

```qml
Components.Aboutme {
    id: aboutme
    anchors.fill: parent
    
    // 初始内容
    title: "初始标题"
    subtitle: "初始副标题"
    description: "初始描述"
}

// 动态更新内容
Timer {
    interval: 3000
    running: true
    repeat: false
    onTriggered: {
        aboutme.title = "更新后的标题"
        aboutme.subtitle = "更新后的副标题"
        aboutme.description = "更新后的描述内容"
        aboutme.reset()  // 重置打字机效果
        aboutme.startTyping()  // 开始新的打字效果
    }
}
```

## 注意事项

1. **性能考虑**：打字机效果会频繁更新 UI，在低端设备上可能会影响性能。可以通过调整 `typeSpeed` 属性平衡效果和性能。

2. **文本长度**：过长的文本可能会导致打字机效果持续时间过长，影响用户体验。建议控制文本长度或提供跳过功能。

3. **字体支持**：确保使用的字体支持所有需要显示的字符，特别是非 ASCII 字符。

4. **响应式设计**：在小屏幕设备上，长文本可能会换行或溢出。建议根据屏幕尺寸调整文本内容或字体大小。
