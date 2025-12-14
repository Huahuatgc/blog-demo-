# 主题API

## ETheme 组件

ETheme 是 EvolveUI 的核心主题管理组件，负责统一管理所有组件的颜色、尺寸、阴影等样式属性。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
    isDark: true // 初始化为深色主题
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `isDark` | `bool` | `false` | 是否启用深色主题 |
| `primaryColor` | `color` | `#6366f1` | 主色调 |
| `primaryColorLight` | `color` | `#818cf8` | 主色调亮色 |
| `primaryColorDark` | `color` | `#4f46e5` | 主色调暗色 |
| `secondaryColor` | `color` | `#8b5cf6` | 次色调 |
| `backgroundColor` | `color` | `#f8fafc` | 背景颜色 |
| `surfaceColor` | `color` | `#ffffff` | 表面颜色 |
| `textColor` | `color` | `#1e293b` | 文本颜色 |
| `textSecondaryColor` | `color` | `#64748b` | 次要文本颜色 |
| `borderColor` | `color` | `#e2e8f0` | 边框颜色 |
| `shadowColor` | `color` | `rgba(0, 0, 0, 0.1)` | 阴影颜色 |
| `successColor` | `color` | `#10b981` | 成功颜色 |
| `warningColor` | `color` | `#f59e0b` | 警告颜色 |
| `errorColor` | `color` | `#ef4444` | 错误颜色 |
| `onPrimaryColor` | `color` | `#ffffff` | 主色调上的文本颜色 |
| `onSecondaryColor` | `color` | `#ffffff` | 次色调上的文本颜色 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `toggleTheme()` | 无 | `void` | 切换主题模式（浅色/深色） |
| `setPrimaryColor(color)` | `color: color` | `void` | 设置主色调 |
| `setSecondaryColor(color)` | `color: color` | `void` | 设置次色调 |
| `reset()` | 无 | `void` | 重置主题为默认值 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `themeChanged` | `isDark: bool` | 主题切换时触发 |
| `primaryColorChanged` | `color: color` | 主色调变化时触发 |

## 主题配置示例

```qml
Components.ETheme {
    id: customTheme
    isDark: true
    primaryColor: "#0ea5e9"
    secondaryColor: "#22c55e"
    
    Component.onCompleted: {
        console.log("当前主题:", customTheme.isDark ? "深色" : "浅色")
        console.log("主色调:", customTheme.primaryColor)
    }
    
    onThemeChanged: (isDark) => {
        console.log("主题已切换为:", isDark ? "深色" : "浅色")
    }
}
```

## 全局主题访问

在应用程序中，您可以通过 `theme` 全局变量访问当前主题配置：

```qml
Components.EButton {
    backgroundColor: theme.primaryColor
    textColor: theme.onPrimaryColor
    radius: theme.borderRadius
}
```

## 自定义主题变量

您可以扩展 ETheme 组件以添加自定义主题变量：

```qml
Components.ETheme {
    id: extendedTheme
    
    // 添加自定义主题变量
    property color customAccentColor: isDark ? "#ff6b6b" : "#ee5a24"
    property int customSpacing: 16
    
    // 自定义方法
    function getCustomStyle(componentType) {
        switch(componentType) {
            case "card":
                return {
                    backgroundColor: surfaceColor,
                    borderRadius: 12,
                    shadowColor: shadowColor
                }
            case "button":
                return {
                    backgroundColor: primaryColor,
                    textColor: onPrimaryColor
                }
            default:
                return {}
        }
    }
}
```