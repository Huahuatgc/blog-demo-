# EHitokotoCard 一言卡片组件

## 组件概述

`EHitokotoCard` 是一个用于显示随机名言警句的卡片组件，支持从一言 API 获取数据，并提供了优雅的动画效果和自定义样式。

## 基本用法

```qml
import "components" as Components
Components.EHitokotoCard {
    id: hitokotoCard
    width: 400
    height: 200
    anchors.centerIn: parent
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `apiUrl` | `string` | `"https://v1.hitokoto.cn/"` | 一言 API 地址 |
| `text` | `string` | `"人生如戏，全靠演技"` | 显示的文本内容 |
| `author` | `string` | `"匿名"` | 文本作者 |
| `source` | `string` | `""` | 文本来源 |
| `type` | `string` | `""` | 文本类型 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `borderColor` | `color` | `theme.borderColor` | 边框颜色 |
| `borderRadius` | `real` | `16` | 边框圆角半径 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |
| `padding` | `real` | `20` | 内边距 |
| `textAlignment` | `Qt.Alignment` | `Qt.AlignCenter` | 文本对齐方式 |
| `fontSize` | `real` | `18` | 文本字体大小 |
| `authorFontSize` | `real` | `14` | 作者文本字体大小 |
| `animationEnabled` | `bool` | `true` | 是否启用动画效果 |
| `autoRefresh` | `bool` | `false` | 是否自动刷新内容 |
| `refreshInterval` | `int` | `30000` | 自动刷新间隔 (毫秒) |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `fetchNewHitokoto` | - | `void` | 从 API 获取新的一言内容 |
| `setHitokotoText` | `text: string, author: string, source: string` | `void` | 设置一言文本和作者 |
| `startAutoRefresh` | `interval: int` | `void` | 开始自动刷新 |
| `stopAutoRefresh` | - | `void` | 停止自动刷新 |
| `toggleAnimation` | `enabled: bool` | `void` | 切换动画效果 |
| `getHitokotoData` | - | `object` | 获取当前一言数据对象 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `hitokotoFetched` | `text: string, author: string, source: string` | 成功获取新一言时触发 |
| `fetchError` | `error: string` | 获取一言失败时触发 |
| `clicked` | - | 点击卡片时触发 |
| `autoRefresh` | - | 自动刷新时触发 |

## 示例

### 自定义样式一言卡片

```qml
import "components" as Components
Components.EHitokotoCard {
    id: customHitokotoCard
    width: 450
    height: 250
    textColor: "#FFFFFF"
    backgroundColor: "#2196F3"
    borderColor: "#1976D2"
    borderRadius: 20
    padding: 30
    fontSize: 22
    authorFontSize: 16
    textAlignment: Qt.AlignCenter | Qt.AlignVCenter
    anchors.centerIn: parent
    
    onClicked: {
        customHitokotoCard.fetchNewHitokoto()
    }
}
```

### 自动刷新一言卡片

```qml
import "components" as Components
Components.EHitokotoCard {
    id: autoRefreshHitokotoCard
    width: 400
    height: 200
    autoRefresh: true
    refreshInterval: 60000 // 每分钟刷新一次
    animationEnabled: true
    anchors.centerIn: parent
    
    onHitokotoFetched: {
        console.log("新一言已获取:", text, "- ", author)
    }
    
    onFetchError: {
        console.error("获取一言失败:", error)
    }
}
```

### 手动设置一言内容

```qml
import "components" as Components
Components.EHitokotoCard {
    id: manualHitokotoCard
    width: 400
    height: 200
    anchors.centerIn: parent
    
    Component.onCompleted: {
        // 手动设置一言内容
        manualHitokotoCard.setHitokotoText(
            "Stay hungry, stay foolish",
            "Steve Jobs",
            "斯坦福大学毕业典礼演讲"
        )
    }
}
```

## 设计说明

`EHitokotoCard` 组件采用卡片式设计，包含以下元素：

1. **一言文本**：居中显示的名言警句
2. **作者信息**：文本下方显示的作者和来源
3. **动画效果**：文本切换时的淡入淡出动画
4. **交互反馈**：点击卡片时的视觉反馈
5. **API 集成**：自动从一言 API 获取数据

## 最佳实践

1. **API 配置**：根据实际需求配置一言 API 地址和参数
2. **自动刷新**：合理设置自动刷新间隔，避免频繁请求 API
3. **错误处理**：通过监听 `fetchError` 信号处理 API 请求失败的情况
4. **样式定制**：根据主题选择合适的颜色和字体大小
5. **事件处理**：通过监听 `clicked` 信号为卡片添加点击交互

## 性能优化

- 组件内部使用 `XMLHttpRequest` 获取数据，避免阻塞 UI
- 自动刷新使用 `Timer` 定时器，合理设置间隔
- 动画效果使用 Qt Quick 的 `OpacityAnimator`，性能开销低
- 使用 `cache` 属性缓存组件渲染结果，减少重复渲染

## 兼容性

- 支持 Qt 6.5 及以上版本
- 兼容所有支持 QML 的平台
- 需要网络连接才能从 API 获取数据
- 支持离线模式，使用默认文本内容

## 扩展功能

可以通过继承 `EHitokotoCard` 组件添加自定义功能：

```qml
import "components" as Components

Components.EHitokotoCard {
    id: extendedHitokotoCard
    width: 400
    height: 200
    anchors.centerIn: parent
    
    // 添加自定义功能
    property string category: "文学"
    property int likes: 0
    
    function likeHitokoto() {
        likes++
        console.log("点赞数:", likes)
    }
    
    // 自定义 API 请求参数
    function fetchSpecificCategory(category) {
        this.category = category
        fetchNewHitokoto()
    }
    
    // 重写 API 请求逻辑
    override function fetchNewHitokoto() {
        // 自定义 API 请求逻辑
        console.log("获取特定分类的一言:", category)
    }
}
```

## 主题适配

组件自动适配当前主题（浅色/深色）：

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

Components.EHitokotoCard {
    id: themeHitokotoCard
    width: 400
    height: 200
    anchors.centerIn: parent
    
    // 主题变化时自动更新样式
    Connections {
        target: theme
        function onThemeChanged() {
            console.log("主题已切换")
        }
    }
}
```

## 布局示例

可以将多个 `EHitokotoCard` 组件组合使用：

```qml
import QtQuick.Layouts 1.15
import "components" as Components

ColumnLayout {
    anchors.centerIn: parent
    spacing: 20
    width: 400
    
    Components.EHitokotoCard {
        id: hitokotoCard1
        Layout.fillWidth: true
        height: 150
        backgroundColor: "#F5F5F5"
    }
    
    Components.EHitokotoCard {
        id: hitokotoCard2
        Layout.fillWidth: true
        height: 150
        backgroundColor: "#E3F2FD"
    }
    
    Components.EHitokotoCard {
        id: hitokotoCard3
        Layout.fillWidth: true
        height: 150
        backgroundColor: "#F3E5F5"
    }
}
```