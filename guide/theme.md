# 主题系统

EvolveUI 提供了强大的主题系统，允许您轻松管理应用程序的视觉风格，包括颜色、阴影、边框等。主题系统由 `Theme.qml` 统一控制，支持浅色和深色主题切换。

## 主题概述

### 主题文件结构

```
components/
└── Theme.qml  # 主题定义文件
```

### 主题核心概念

- **颜色调色板**：预定义的颜色集合，用于统一应用程序的色彩方案
- **主题模式**：支持浅色（light）和深色（dark）两种模式
- **动态切换**：运行时可切换主题模式，所有组件自动更新样式

## 使用主题

### 导入主题

在应用程序的根 QML 文件中导入主题：

```qml
import "components" as Components

Components.ETheme {
    id: theme
}
```

### 访问主题属性

所有主题属性都可以通过 `theme` 对象访问：

```qml
Rectangle {
    color: theme.primaryColor  // 使用主题的主色调
    border.color: theme.borderColor  // 使用主题的边框颜色
    radius: theme.borderRadius  // 使用主题的圆角半径
    shadow.color: theme.shadowColor  // 使用主题的阴影颜色
}
```

### 切换主题

使用 `toggleTheme()` 方法切换主题模式：

```qml
Components.EButton {
    text: theme.isDark ? "切换到浅色主题" : "切换到深色主题"
    onClicked: theme.toggleTheme()
}
```

或者直接设置 `isDark` 属性：

```qml
theme.isDark = true  // 切换到深色主题
theme.isDark = false  // 切换到浅色主题
```

## 主题属性

### 颜色属性

| 属性名 | 描述 | 浅色主题默认值 | 深色主题默认值 |
|--------|------|----------------|----------------|
| `primaryColor` | 主色调 | `#6366f1` | `#818cf8` |
| `secondaryColor` | 次要色调 | `#8b5cf6` | `#a78bfa` |
| `backgroundColor` | 背景色 | `#ffffff` | `#121212` |
| `surfaceColor` | 表面色 | `#f8fafc` | `#1e293b` |
| `textColor` | 文本颜色 | `#1e293b` | `#f1f5f9` |
| `secondaryTextColor` | 次要文本颜色 | `#64748b` | `#94a3b8` |
| `borderColor` | 边框颜色 | `#e2e8f0` | `#334155` |
| `shadowColor` | 阴影颜色 | `rgba(0, 0, 0, 0.1)` | `rgba(0, 0, 0, 0.3)` |
| `successColor` | 成功颜色 | `#10b981` | `#34d399` |
| `warningColor` | 警告颜色 | `#f59e0b` | `#fbbf24` |
| `errorColor` | 错误颜色 | `#ef4444` | `#f87171` |
| `infoColor` | 信息颜色 | `#3b82f6` | `#60a5fa` |

### 尺寸属性

| 属性名 | 描述 | 默认值 |
|--------|------|--------|
| `borderRadius` | 边框圆角半径 | `8` |
| `smallBorderRadius` | 小边框圆角半径 | `4` |
| `largeBorderRadius` | 大边框圆角半径 | `12` |
| `shadowBlur` | 阴影模糊半径 | `10` |
| `smallShadowBlur` | 小阴影模糊半径 | `5` |
| `largeShadowBlur` | 大阴影模糊半径 | `15` |
| `spacing` | 默认间距 | `16` |
| `smallSpacing` | 小间距 | `8` |
| `largeSpacing` | 大间距 | `24` |

## 自定义主题

### 修改现有主题

您可以直接修改 `Theme.qml` 文件来自定义主题属性：

```qml
// Theme.qml
Item {
    // 颜色定义
    property color primaryColor: isDark ? "#8b5cf6" : "#6366f1"
    property color secondaryColor: isDark ? "#a78bfa" : "#8b5cf6"
    // ... 其他颜色定义
    
    // 尺寸定义
    property int borderRadius: 10  // 修改默认圆角半径
    property int shadowBlur: 12  // 修改默认阴影模糊半径
    // ... 其他尺寸定义
}
```

### 添加自定义属性

您也可以在 `Theme.qml` 中添加自定义属性：

```qml
// Theme.qml
Item {
    // 自定义颜色
    property color customColor: isDark ? "#ff6b6b" : "#ee5a24"
    
    // 自定义尺寸
    property int customSpacing: 32
    
    // 自定义字体
    property font customFont: FontLoader { source: "qrc:/fonts/custom.ttf" }
}
```

然后在组件中使用这些自定义属性：

```qml
Text {
    text: "自定义文本"
    color: theme.customColor
    font: theme.customFont
    font.pixelSize: 18
}
```

## 主题最佳实践

1. **统一使用主题属性**：所有组件都应该使用主题中定义的颜色、尺寸等属性，而不是硬编码值

2. **避免直接修改 Theme.qml**：如果可能，尽量通过扩展而不是修改核心主题文件，以便于后续更新

3. **保持主题一致性**：确保主题属性的命名和使用方式一致，提高代码可维护性

4. **测试两种主题模式**：确保所有组件在浅色和深色主题下都能正常显示

5. **考虑可访问性**：确保文本和背景的对比度符合可访问性标准

## 主题与组件

EvolveUI 的所有组件都已经集成了主题系统，会自动响应主题变化。当您切换主题时，所有使用了主题属性的组件都会自动更新样式，无需额外代码。

```qml
// 组件会自动响应主题变化
Components.EButton {
    text: "主题感知按钮"
    // 无需手动更新颜色、阴影等属性
}

Components.EInput {
    placeholderText: "主题感知输入框"
    // 无需手动更新颜色、边框等属性
}
```

## 下一步

- 查看 [组件复用](/guide/reuse) 了解如何高效复用组件
- 查看 [响应式布局](/guide/responsive) 了解如何适配不同设备
- 浏览 [组件文档](/components/aboutme) 了解所有可用组件
