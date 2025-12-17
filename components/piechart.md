# EPieChart

## 组件简介
- 饼图/环形图组件，展示数据占比；支持悬停高亮与百分比标签。
- 兼容单系列简化格式 `dataPoints`，或使用 `dataSeries` 的首个系列。

## 基本用法
```qml
import "components" as Components

Components.ETheme { id: theme }

// 使用简化数据点格式
Components.EPieChart {
    width: 600
    height: 500

    title: "Pie Chart"
    subtitle: "数据占比分析"

    dataPoints: [
        { label: "Category A", value: 30 },
        { label: "Category B", value: 20 },
        { label: "Category C", value: 15 },
        { label: "Category D", value: 25 },
        { label: "Category E", value: 10 }
    ]

    // 环形图：设置内半径
    innerRadius: 60

    onPointClicked: (i, point) => console.log("点击:", i, point.label, point.value)
    onPointHovered: (i, point) => console.log("悬停:", i, point.label)
}
```

## 属性列表
| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `title` | `string` | `"Pie Chart"` | 图表标题 |
| `subtitle` | `string` | `"数据占比分析"` | 副标题 |
| `dataSeries` | `variant` | `[{ name, data: [{label,value,color}] }]` | 数据系列，组件仅使用首个系列 |
| `dataPoints` | `variant` | `[]` | 简化数据（单系列），元素为 `{label,value,color?}` |
| `innerRadius` | `real` | `0` | 内半径，大于 0 时显示为环形图 |
| `showLabels` | `bool` | `true` | 是否在扇区显示百分比标签 |
| `tooltipColor` | `color` | `theme.primaryColor` | 提示框背景色 |
| `tooltipTextColor` | `color` | `theme.textColor` | 提示框文字颜色 |
| `hoveredIndex` | `int` | `-1` | 当前悬停的扇区索引 |
| `backgroundVisible` | `bool` | `true` | 是否显示背景 |
| `radius` | `real` | `20` | 外层圆角 |
| `fontSize` | `int` | `14` | 文本像素大小 |
| `titleFontSize` | `int` | `18` | 标题大小 |
| `subtitleFontSize` | `int` | `12` | 副标题大小 |
| `backgroundColor` | `color` | `theme.secondaryColor` | 背景颜色（同时用于扇区间隔线） |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `subtitleColor` | `color` | `Qt.darker(theme.textColor, 1.5)` | 副标题颜色 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影 |
| `shadowColor` | `color` | `theme.shadowColor` | 阴影颜色 |
| `chartPadding` | `int` | `20` | 图表内边距 |
| `topPadding` | `int` | `90` | 上边距（标题区） |
| `totalValue` | `real` | 动态计算 | 总值，只读 |

## 信号列表
| 信号名 | 参数 | 描述 |
|-------|------|------|
| `pointClicked(index, dataPoint)` | `int, variant` | 点击某扇区时触发 |
| `pointHovered(index, dataPoint)` | `int, variant` | 悬停于某扇区时触发 |

## 扩展示例
### 使用数据系列
```qml
Components.EPieChart {
    width: 520
    height: 420
    dataSeries: [
        {
            name: "Distribution",
            data: [
                { label: "A", value: 30, color: "#FF6384" },
                { label: "B", value: 20, color: "#36A2EB" },
                { label: "C", value: 15, color: "#FFCE56" },
                { label: "D", value: 25, color: "#4BC0C0" },
                { label: "E", value: 10, color: "#9966FF" }
            ]
        }
    ]
}
```

### 环形图与标签
```qml
Components.EPieChart {
    width: 520
    height: 420
    innerRadius: 80
    showLabels: true
    dataPoints: [
        { label: "Cat A", value: 5 },
        { label: "Cat B", value: 3 },
        { label: "Cat C", value: 2 }
    ]
}
```

## 注意事项
- 当同时设置 `dataPoints` 与 `dataSeries` 时，组件优先使用 `dataPoints`。
- 若数据项未指定 `color`，组件会自动分配默认色板。
- 当某扇区占比过小（角度很小）时，可能不显示百分比标签。


