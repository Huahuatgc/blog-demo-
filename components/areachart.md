# EAreaChart 组件

## 组件简介

EAreaChart 是一个折线图组件，用于可视化数据趋势和变化。它支持自定义样式、数据点标记和动画效果，适合构建数据分析和监控界面。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.EAreaChart {
    width: 400
    height: 300
    data: [
        { x: 0, y: 50 },
        { x: 1, y: 75 },
        { x: 2, y: 30 },
        { x: 3, y: 80 },
        { x: 4, y: 60 },
        { x: 5, y: 90 },
        { x: 6, y: 40 }
    ]
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `data` | `variant` | `[]` | 图表数据数组，每个元素包含 x 和 y 属性 |
| `xLabel` | `string` | `"X"` | X轴标签 |
| `yLabel` | `string` | `"Y"` | Y轴标签 |
| `title` | `string` | `""` | 图表标题 |
| `showGrid` | `bool` | `true` | 是否显示网格线 |
| `showAxes` | `bool` | `true` | 是否显示坐标轴 |
| `showDataPoints` | `bool` | `true` | 是否显示数据点 |
| `showArea` | `bool` | `true` | 是否显示填充区域 |
| `showLegend` | `bool` | `false` | 是否显示图例 |
| `animated` | `bool` | `true` | 是否启用动画效果 |
| `animationDuration` | `int` | `1000` | 动画持续时间（毫秒） |
| `lineColor` | `color` | `theme.primaryColor` | 线条颜色 |
| `areaColor` | `color` | `theme.primaryColor` | 填充区域颜色 |
| `areaOpacity` | `real` | `0.3` | 填充区域透明度 |
| `dataPointColor` | `color` | `theme.primaryColor` | 数据点颜色 |
| `gridColor` | `color` | `theme.borderColor` | 网格线颜色 |
| `axisColor` | `color` | `theme.textColor` | 坐标轴颜色 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `borderRadius` | `real` | `8` | 圆角半径 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `setData(data)` | `variant` | 无 | 设置图表数据 |
| `addDataPoint(x, y)` | `real, real` | 无 | 添加单个数据点 |
| `clearData()` | 无 | 无 | 清除所有数据 |
| `update()` | 无 | 无 | 更新图表显示 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `dataPointClicked(index, dataPoint)` | `int, variant` | 数据点被点击时触发 |
| `dataChanged()` | 无 | 数据改变时触发 |

## 扩展示例

### 多组数据的面积图

```qml
Components.EAreaChart {
    width: 400
    height: 300
    title: "多组数据趋势"
    showLegend: true
    
    data: [
        {
            name: "数据组 1",
            points: [
                { x: 0, y: 50 },
                { x: 1, y: 75 },
                { x: 2, y: 30 },
                { x: 3, y: 80 },
                { x: 4, y: 60 }
            ],
            lineColor: theme.primaryColor,
            areaColor: theme.primaryColor
        },
        {
            name: "数据组 2",
            points: [
                { x: 0, y: 30 },
                { x: 1, y: 45 },
                { x: 2, y: 60 },
                { x: 3, y: 40 },
                { x: 4, y: 70 }
            ],
            lineColor: theme.secondaryColor,
            areaColor: theme.secondaryColor
        }
    ]
}
```

### 自定义样式的面积图

```qml
Components.EAreaChart {
    width: 400
    height: 300
    title: "自定义样式图表"
    lineColor: "#ff4081"
    areaColor: "#ff4081"
    areaOpacity: 0.2
    dataPointColor: "#ff4081"
    gridColor: "#e0e0e0"
    axisColor: "#666666"
    textColor: "#333333"
    backgroundColor: "#f5f5f5"
    borderRadius: 12
    
    data: [
        { x: 0, y: 50 },
        { x: 1, y: 75 },
        { x: 2, y: 30 },
        { x: 3, y: 80 },
        { x: 4, y: 60 },
        { x: 5, y: 90 },
        { x: 6, y: 40 }
    ]
}
```

### 带有交互的数据图表

```qml
Components.EAnimatedWindow {
    width: 450
    height: 350
    title: "交互式数据图表"
    visible: true
    
    Column {
        anchors.fill: parent
        padding: 20
        spacing: 16
        
        Text {
            text: "数据趋势分析"
            font.pointSize: 20
            font.bold: true
            color: theme.textColor
            anchors.horizontalCenter: parent.horizontalCenter
        }
        
        Components.EAreaChart {
            width: 410
            height: 250
            data: [
                { x: 0, y: 50 },
                { x: 1, y: 75 },
                { x: 2, y: 30 },
                { x: 3, y: 80 },
                { x: 4, y: 60 },
                { x: 5, y: 90 },
                { x: 6, y: 40 }
            ]
            onDataPointClicked: (index, dataPoint) => {
                console.log("点击的数据点:", index, dataPoint)
                dataPointLabel.text = "数据点 " + index + ": x=" + dataPoint.x + ", y=" + dataPoint.y
            }
        }
        
        Text {
            id: dataPointLabel
            text: "点击数据点查看详细信息"
            color: theme.textSecondaryColor
            anchors.horizontalCenter: parent.horizontalCenter
        }
    }
}
```

## 最佳实践

1. **数据格式**：确保数据点的 x 和 y 值格式正确，且数据点数量适中
2. **颜色选择**：为多组数据选择对比鲜明的颜色，提高可读性
3. **标签设置**：设置清晰的坐标轴标签和图表标题，帮助用户理解数据
4. **交互设计**：为数据点添加点击事件，提供更详细的数据信息
5. **性能优化**：对于大量数据点，考虑关闭动画效果和数据点显示

## 注意事项

- 图表数据应按 x 值从小到大排序
- 填充区域的透明度建议设置在 0.2-0.5 之间，提高可读性
- 多组数据时，每组数据应包含 name 属性用于图例显示
- 图表支持触摸和鼠标点击交互
- 动画效果可能会影响性能，对于大量数据点建议关闭动画