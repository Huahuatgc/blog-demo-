# EBatteryCard 电池状态卡片组件

## 组件概述

`EBatteryCard` 是一个用于显示电池状态的卡片组件，提供了电池电量、充电状态和其他相关信息的可视化展示。

## 基本用法

```qml
import "components" as Components
Components.EBatteryCard {
    id: batteryCard
    width: 300
    height: 150
    anchors.centerIn: parent
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `batteryLevel` | `int` | `80` | 电池电量百分比 (0-100) |
| `isCharging` | `bool` | `false` | 是否正在充电 |
| `voltage` | `real` | `3.8` | 电池电压 |
| `temperature` | `real` | `25.5` | 电池温度 (摄氏度) |
| `capacity` | `real` | `3500` | 电池容量 (mAh) |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `borderColor` | `color` | `theme.borderColor` | 边框颜色 |
| `borderRadius` | `real` | `12` | 边框圆角半径 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `updateBatteryInfo` | `level: int, charging: bool, volt: real, temp: real, cap: real` | `void` | 更新所有电池信息 |
| `setBatteryLevel` | `level: int` | `void` | 设置电池电量 |
| `setChargingState` | `charging: bool` | `void` | 设置充电状态 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `batteryLevelChanged` | `level: int` | 电池电量变化时触发 |
| `chargingStateChanged` | `charging: bool` | 充电状态变化时触发 |

## 示例

### 自定义电池状态卡片

```qml
import "components" as Components
Components.EBatteryCard {
    id: customBatteryCard
    width: 350
    height: 180
    batteryLevel: 65
    isCharging: true
    voltage: 4.1
    temperature: 32.0
    capacity: 4000
    borderColor: "#4CAF50"
    borderRadius: 16
    anchors.centerIn: parent
}
```

### 实时更新电池状态

```qml
import "components" as Components
import QtQml 2.15

Components.EBatteryCard {
    id: dynamicBatteryCard
    width: 300
    height: 150
    anchors.centerIn: parent
}

Timer {
    interval: 5000
    running: true
    repeat: true
    onTriggered: {
        var newLevel = Math.floor(Math.random() * 100);
        var isCharging = Math.random() > 0.5;
        dynamicBatteryCard.updateBatteryInfo(newLevel, isCharging, 3.9, 28.5, 3500);
    }
}
```

## 设计说明

`EBatteryCard` 组件采用卡片式设计，包含以下元素：

1. **电池图标**：直观显示电池电量和充电状态
2. **电量百分比**：清晰显示当前电量
3. **充电状态指示**：充电时显示闪电图标
4. **详细信息**：电压、温度和容量等技术参数
5. **动态效果**：电量变化时的平滑过渡动画

## 最佳实践

1. **实时数据集成**：可以与系统 API 集成，实时显示设备电池状态
2. **主题适配**：组件会自动适配当前主题（浅色/深色）
3. **尺寸调整**：根据实际需求调整组件的宽度和高度
4. **批量更新**：使用 `updateBatteryInfo` 方法可以一次性更新所有电池信息，提高性能
5. **事件监听**：通过监听信号可以在电池状态变化时执行自定义逻辑

## 性能优化

- 组件内部使用 `onCompleted` 信号进行初始化，避免不必要的计算
- 电量变化时使用 `PropertyAnimation` 实现平滑过渡，不影响性能
- 使用 `cache` 属性缓存组件渲染结果，减少重复渲染

## 兼容性

- 支持 Qt 6.5 及以上版本
- 兼容所有支持 QML 的平台（Windows、macOS、Linux、Android、iOS）

## 扩展功能

可以通过继承 `EBatteryCard` 组件添加自定义功能：

```qml
import "components" as Components

Components.EBatteryCard {
    id: extendedBatteryCard
    width: 300
    height: 150
    anchors.centerIn: parent
    
    // 添加自定义功能
    function getBatteryHealth() {
        // 根据电池信息计算健康状态
        return "良好";
    }
    
    // 覆盖默认样式
    Component.onCompleted: {
        // 自定义样式逻辑
    }
}
```