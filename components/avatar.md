# EAvatar

EAvatar 是一个用于显示用户头像的组件，支持多种尺寸和样式配置。

## 基本用法

```qml
import "components" as Components

Components.ETheme {
    id: theme
}

Components.EAvatar {
    width: 80
    height: 80
    source: "https://example.com/avatar.jpg"
    borderWidth: 2
    borderColor: theme.primaryColor
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `source` | `string` | `""` | 头像图片的路径或URL |
| `width` | `real` | `60` | 头像宽度 |
| `height` | `real` | `60` | 头像高度 |
| `radius` | `real` | `width/2` | 头像圆角半径，默认为宽度的一半（圆形） |
| `borderWidth` | `real` | `0` | 边框宽度 |
| `borderColor` | `color` | `"transparent"` | 边框颜色 |
| `placeholder` | `string` | `""` | 图片加载失败时显示的占位符文本 |
| `placeholderColor` | `color` | `theme.textSecondaryColor` | 占位符文本颜色 |
| `placeholderBackgroundColor` | `color` | `theme.surfaceVariantColor` | 占位符背景颜色 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `loadImage(source)` | `source: string` | `void` | 动态加载新的头像图片 |
| `clear()` | 无 | `void` | 清除当前头像，显示占位符 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `imageLoaded` | 无 | 图片加载成功时触发 |
| `imageFailed` | `error: string` | 图片加载失败时触发，返回错误信息 |

## 示例

### 不同尺寸的头像

```qml
RowLayout {
    spacing: 16
    
    Components.EAvatar {
        width: 40
        height: 40
        source: "https://example.com/avatar.jpg"
    }
    
    Components.EAvatar {
        width: 60
        height: 60
        source: "https://example.com/avatar.jpg"
    }
    
    Components.EAvatar {
        width: 100
        height: 100
        source: "https://example.com/avatar.jpg"
    }
}
```

### 带边框的头像

```qml
Components.EAvatar {
    width: 80
    height: 80
    source: "https://example.com/avatar.jpg"
    borderWidth: 3
    borderColor: theme.accentColor
    radius: 10  // 方形圆角头像
}
```

### 带占位符的头像

```qml
Components.EAvatar {
    width: 80
    height: 80
    source: "invalid-url.jpg"  // 无效的图片URL
    placeholder: "用户"
    placeholderColor: "white"
    placeholderBackgroundColor: theme.primaryColor
}
```

## 注意事项

- 建议使用正方形图片作为头像源，以获得最佳显示效果
- 支持本地路径和网络URL作为图片源
- 占位符文本只在图片加载失败时显示
- 当 `radius` 设置为宽度的一半时，头像将显示为圆形