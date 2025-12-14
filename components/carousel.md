# ECarousel 组件

## 组件简介

ECarousel 是一个轮播组件，支持图片轮播、内容切换和自定义动画效果。它提供了流畅的过渡动画和直观的导航控制，适合构建图片展示、产品介绍或内容轮播等功能的应用。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.ECarousel {
    width: 400
    height: 250
    autoPlay: true
    interval: 3000
    
    // 轮播项
    CarouselItem {
        Image {
            anchors.fill: parent
            source: "qrc:/images/image1.jpg"
            fillMode: Image.PreserveAspectCrop
        }
    }
    
    CarouselItem {
        Image {
            anchors.fill: parent
            source: "qrc:/images/image2.jpg"
            fillMode: Image.PreserveAspectCrop
        }
    }
    
    CarouselItem {
        Image {
            anchors.fill: parent
            source: "qrc:/images/image3.jpg"
            fillMode: Image.PreserveAspectCrop
        }
    }
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `currentIndex` | `int` | `0` | 当前显示的轮播项索引 |
| `count` | `int` | `0` | 轮播项总数 |
| `autoPlay` | `bool` | `false` | 是否自动播放 |
| `interval` | `int` | `2000` | 自动播放间隔（毫秒） |
| `loop` | `bool` | `true` | 是否循环播放 |
| `enableControls` | `bool` | `true` | 是否显示导航控件 |
| `enableIndicators` | `bool` | `true` | 是否显示指示器 |
| `duration` | `int` | `500` | 过渡动画持续时间（毫秒） |
| `orientation` | `Qt.Orientation` | `Qt.Horizontal` | 轮播方向（水平/垂直） |
| `easingCurve` | `Animation` | `Easing.InOutQuad` | 过渡动画曲线 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `indicatorColor` | `color` | `theme.primaryColor` | 指示器颜色 |
| `controlColor` | `color` | `theme.textColor` | 导航控件颜色 |
| `controlBackgroundColor` | `color` | `rgba(0, 0, 0, 0.5)` | 导航控件背景颜色 |
| `borderRadius` | `real` | `8` | 圆角半径 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `next()` | 无 | 无 | 切换到下一个轮播项 |
| `previous()` | 无 | 无 | 切换到上一个轮播项 |
| `goTo(index)` | `int` | 无 | 跳转到指定索引的轮播项 |
| `start()` | 无 | 无 | 开始自动播放 |
| `stop()` | 无 | 无 | 停止自动播放 |
| `togglePlay()` | 无 | 无 | 切换自动播放状态 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `currentIndexChanged(index)` | `int` | 当前轮播项索引改变时触发 |
| `itemSelected(index)` | `int` | 用户选择轮播项时触发 |
| `playStarted()` | 无 | 自动播放开始时触发 |
| `playStopped()` | 无 | 自动播放停止时触发 |

## 扩展示例

### 带自定义内容的轮播

```qml
Components.ECarousel {
    width: 400
    height: 300
    autoPlay: true
    interval: 4000
    borderRadius: 12
    
    // 自定义内容轮播项
    CarouselItem {
        Rectangle {
            anchors.fill: parent
            color: theme.primaryColor
            
            Text {
                anchors.centerIn: parent
                text: "第一张幻灯片"
                color: "white"
                font.pointSize: 20
                font.bold: true
            }
        }
    }
    
    CarouselItem {
        Rectangle {
            anchors.fill: parent
            color: theme.secondaryColor
            
            Text {
                anchors.centerIn: parent
                text: "第二张幻灯片"
                color: "white"
                font.pointSize: 20
                font.bold: true
            }
        }
    }
    
    CarouselItem {
        Rectangle {
            anchors.fill: parent
            color: "#ff5722"
            
            Text {
                anchors.centerIn: parent
                text: "第三张幻灯片"
                color: "white"
                font.pointSize: 20
                font.bold: true
            }
        }
    }
}
```

### 垂直轮播

```qml
Components.ECarousel {
    width: 300
    height: 400
    autoPlay: true
    interval: 3000
    orientation: Qt.Vertical
    
    CarouselItem {
        Image {
            anchors.fill: parent
            source: "qrc:/images/image1.jpg"
            fillMode: Image.PreserveAspectCrop
        }
    }
    
    CarouselItem {
        Image {
            anchors.fill: parent
            source: "qrc:/images/image2.jpg"
            fillMode: Image.PreserveAspectCrop
        }
    }
    
    CarouselItem {
        Image {
            anchors.fill: parent
            source: "qrc:/images/image3.jpg"
            fillMode: Image.PreserveAspectCrop
        }
    }
}
```

### 产品展示轮播

```qml
Components.ECarousel {
    width: 400
    height: 450
    enableControls: true
    enableIndicators: true
    
    // 产品展示项
    CarouselItem {
        Column {
            anchors.fill: parent
            
            Image {
                width: parent.width
                height: 250
                source: "qrc:/images/product1.jpg"
                fillMode: Image.PreserveAspectCrop
            }
            
            Rectangle {
                width: parent.width
                height: 200
                color: theme.surfaceColor
                
                Text {
                    anchors.top: parent.top
                    anchors.left: parent.left
                    anchors.margins: 16
                    text: "产品名称 1"
                    color: theme.textColor
                    font.pointSize: 18
                    font.bold: true
                }
                
                Text {
                    anchors.top: parent.top
                    anchors.right: parent.right
                    anchors.margins: 16
                    text: "¥99.00"
                    color: "#ff5722"
                    font.pointSize: 18
                    font.bold: true
                }
                
                Text {
                    anchors.top: parent.top
                    anchors.left: parent.left
                    anchors.right: parent.right
                    anchors.topMargin: 50
                    anchors.leftMargin: 16
                    anchors.rightMargin: 16
                    text: "这是产品的详细描述，包括产品特点、规格参数等信息。"
                    color: theme.textSecondaryColor
                    wrapMode: Text.WrapAtWordBoundaryOrAnywhere
                }
                
                Components.EButton {
                    anchors.bottom: parent.bottom
                    anchors.right: parent.right
                    anchors.bottomMargin: 16
                    anchors.rightMargin: 16
                    text: "加入购物车"
                    backgroundColor: theme.primaryColor
                    onClicked: console.log("加入购物车")
                }
            }
        }
    }
    
    // 添加更多产品轮播项...
}
```

## 最佳实践

1. **轮播项内容**：保持轮播项内容简洁明了，避免过于复杂的布局
2. **自动播放**：合理设置自动播放间隔，一般为3-5秒
3. **导航控件**：根据轮播项内容和使用场景决定是否显示导航控件和指示器
4. **性能优化**：避免在轮播项中使用过多复杂的动画或大量图片
5. **响应式设计**：在不同屏幕尺寸下调整轮播组件的大小和布局

## 注意事项

- 轮播组件的性能受轮播项数量和内容复杂度影响，建议控制轮播项数量
- 图片轮播时，建议使用适当尺寸的图片，避免过大图片影响加载性能
- 自动播放功能可能会干扰用户阅读，建议在用户交互时暂停自动播放
- 垂直轮播时，注意调整导航控件的位置和样式
- 轮播组件支持触摸滑动，但需要在触摸设备上测试交互体验