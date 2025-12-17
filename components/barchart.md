# EBarChart 组件

## 组件简介
- 交互式柱状图组件，支持多数据系列显示。
- 支持悬停高亮、点击交互、自定义工具提示。
- 兼容单数据系列和多数据系列格式，支持图例显示。
- 内置网格参考线、圆角柱状图、平滑动画效果。

## 基本用法
```qml
import "components" as Components

Components.ETheme { id: theme }

Components.EBarChart {
    width: 600
    height: 500

    title: "Bar Chart"
    subtitle: "数据统计概览"

    // 多系列数据
    dataSeries: [
        {
            name: "Sales",
            color: theme.focusColor,
            data: [
                {label: "Jan", value: 120},
                {label: "Feb", value: 180}, 
                {label: "Mar", value: 237},
                {label: "Apr", value: 160},
                {label: "May", value: 90},
                {label: "Jun", value: 200}
            ]
        }
    ]

    onPointClicked: (seriesIndex, dataIndex, dataPoint) => 
        console.log("点击:", seriesIndex, dataIndex, dataPoint.label, dataPoint.value)
    onPointHovered: (seriesIndex, dataIndex, dataPoint) => 
        console.log("悬停:", seriesIndex, dataIndex, dataPoint.label)
}
```

## 属性列表
| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `title` | `string` | `"Bar Chart"` | 图表标题 |
| `subtitle` | `string` | `"数据统计概览"` | 副标题 |
| `dataSeries` | `var` | `[{ name, color, data: [{label,value}] }]` | 多系列数据 |
| `dataPoints` | `var` | `[]` | 简化数据（单系列），元素为 `{label,value}` |
| `barColor` | `color` | `theme.focusColor` | 默认柱状图颜色 |
| `tooltipColor` | `color` | `theme.primaryColor` | 工具提示背景色 |
| `tooltipTextColor` | `color` | `theme.textColor` | 工具提示文字颜色 |
| `hoveredSeriesIndex` | `int` | `-1` | 当前悬停的数据系列索引 |
| `hoveredDataIndex` | `int` | `-1` | 当前悬停的数据点索引 |
| `backgroundVisible` | `bool` | `true` | 是否显示背景 |
| `radius` | `real` | `20` | 外层圆角半径 |
| `fontSize` | `int` | `14` | 文本像素大小 |
| `titleFontSize` | `int` | `18` | 标题字体大小 |
| `subtitleFontSize` | `int` | `12` | 副标题字体大小 |
| `backgroundColor` | `color` | `theme.secondaryColor` | 背景颜色 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `subtitleColor` | `color` | `Qt.darker(theme.textColor, 1.5)` | 副标题颜色 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影 |
| `shadowColor` | `color` | `theme.shadowColor` | 阴影颜色 |
| `chartPadding` | `int` | `20` | 图表内边距 |
| `topPadding` | `int` | `90` | 上边距（标题区域） |
| `barSpacing` | `real` | `0.2` | 柱状图间距比例 (0-1) |
| `groupSpacing` | `real` | `0.3` | 组间距比例 (0-1) |
| `maxValue` | `real` | 自动计算 | 数据最大值（自动计算） |
| `chartWidth` | `real` | 自动计算 | 图表宽度（自动计算） |
| `chartHeight` | `real` | 自动计算 | 图表高度（自动计算） |

## 信号列表
| 信号名 | 参数 | 描述 |
|-------|------|------|
| `pointClicked(int, int, var)` | `seriesIndex, dataIndex, dataPoint` | 点击某数据点时触发 |
| `pointHovered(int, int, var)` | `seriesIndex, dataIndex, dataPoint` | 悬停于某数据点时触发 |

## 扩展示例

### 单系列数据（兼容模式）
```qml
Components.EBarChart {
    width: 600
    height: 400
    
    // 使用旧格式 - 单系列数据
    dataPoints: [
        {label: "Q1", value: 150},
        {label: "Q2", value: 230},
        {label: "Q3", value: 180},
        {label: "Q4", value: 290}
    ]
    
    barColor: "#4CAF50"
}
```

### 多系列柱状图
```qml
Components.EBarChart {
    width: 700
    height: 500
    
    title: "销售对比"
    subtitle: "各产品季度销售数据"
    
    dataSeries: [
        {
            name: "产品A",
            color: "#FF6384",
            data: [
                {label: "Q1", value: 120},
                {label: "Q2", value: 150},
                {label: "Q3", value: 180},
                {label: "Q4", value: 200}
            ]
        },
        {
            name: "产品B", 
            color: "#36A2EB",
            data: [
                {label: "Q1", value: 80},
                {label: "Q2", value: 110},
                {label: "Q3", value: 140},
                {label: "Q4", value: 170}
            ]
        },
        {
            name: "产品C",
            color: "#FFCE56",
            data: [
                {label: "Q1", value: 60},
                {label: "Q2", value: 90},
                {label: "Q3", value: 120},
                {label: "Q4", value: 150}
            ]
        }
    ]
}
```

### 自定义样式和交互
```qml
Components.EBarChart {
    width: 600
    height: 450
    
    title: "用户增长"
    subtitle: "月度新增用户数统计"
    
    backgroundColor: "#f5f5f5"
    textColor: "#333"
    barColor: "#4BC0C0"
    tooltipColor: "#333"
    tooltipTextColor: "white"
    
    barSpacing: 0.3  // 增加柱子间距
    groupSpacing: 0.4  // 增加组间距
    
    onPointClicked: (seriesIndex, dataIndex, dataPoint) => {
        console.log(`点击了 ${dataPoint.label}: ${dataPoint.value}`)
        // 可以在这里添加更多交互逻辑
    }
    
    dataPoints: [
        {label: "1月", value: 1200},
        {label: "2月", value: 1800},
        {label: "3月", value: 2370},
        {label: "4月", value: 1600},
        {label: "5月", value: 900},
        {label: "6月", value: 2000}
    ]
}
```

### 无背景简洁样式
```qml
Components.EBarChart {
    width: 500
    height: 350
    
    title: "简洁图表"
    subtitle: "最小化设计"
    
    backgroundVisible: false
    shadowEnabled: false
    
    dataPoints: [
        {label: "A", value: 45},
        {label: "B", value: 78},
        {label: "C", value: 32},
        {label: "D", value: 91}
    ]
}
```

## 注意事项
- X 轴标签来自数据的 `label` 字段，各系列应共享相同的数据点数量和顺序。
- 多系列数据时会自动显示图例，单系列数据时图例隐藏。
- 柱状图支持圆角设计，自动根据柱子宽度调整圆角半径。
- 工具提示位置会自动调整以避免超出图表边界。
- 悬停效果通过改变柱子透明度实现，提供更好的视觉反馈。
- 数据格式兼容性强，支持新旧两种数据格式无缝切换。


