# 组件API

## 组件概述

EvolveUI 提供了丰富的 QML 组件，所有组件都遵循统一的命名规范和设计风格。组件命名以 `E` 为前缀（如 `EButton`, `ECard`），便于识别和使用。

## 组件分类

### 基础组件

这些是构建用户界面的基本元素，包括按钮、输入框、选择控件等。

- [EButton](./../components/button.md) - 带图标和动画效果的圆角按钮
- [EAvatar](./../components/avatar.md) - 头像组件
- [EInput](./../components/input.md) - 支持焦点变色与阴影的输入框
- [ECheckBox](./../components/checkbox.md) - 动画复选框组件
- [ERadioButton](./../components/radiobutton.md) - 动画单选按钮组件
- [ESwitchButton](./../components/switchbutton.md) - 动画开关组件

### 容器组件

这些组件用于组织和布局其他组件，提供不同的容器效果。

- [ECard](./../components/card.md) - 基础卡片容器组件
- [EBlurCard](./../components/blurcard.md) - 高斯模糊卡片组件
- [EHoverCard](./../components/hovercard.md) - 鼠标悬停浮起卡片容器
- [ECardWithTextArea](./../components/cardwithtextarea.md) - 带文本区域的卡片容器
- [EDrawer](./../components/drawer.md) - 侧边栏组件

### 高级组件

这些组件提供更复杂的交互功能和视觉效果。

- [EAccordion](./../components/accordion.md) - 下拉信息栏
- [EAnimatedWindow](./../components/animatedwindow.md) - iPad OS 动画风格窗口
- [ECalendar](./../components/calendar.md) - 日历组件
- [ECarousel](./../components/carousel.md) - 轮播组件
- [EDropdown](./../components/dropdown.md) - 下拉选择框组件
- [EMenuButton](./../components/menubutton.md) - 菜单按钮组件
- [ENavBar](./../components/navbar.md) - 导航栏组件
- [ESlider](./../components/slider.md) - 支持滑块动画的调节组件
- [EToast](./../components/toast.md) - 支持消息提示的组件

### 数据展示组件

这些组件用于可视化和展示数据。

- [EAreaChart](./../components/areachart.md) - 折线图组件
- [EDataTable](./../components/datatable.md) - 高性能表格组件
- [EFitnessProgress](./../components/fitnessprogress.md) - 健身进度展示组件
- [EYearProgress](./../components/yearprogress.md) - 年度进度展示组件

### 其他组件

- [Aboutme](./../components/aboutme.md) - 带有打字机效果的介绍界面
- [EBatteryCard](./../components/batterycard.md) - 电池状态卡片组件
- [EClock](./../components/clock.md) - 时钟显示组件
- [EClockCard](./../components/clockcard.md) - 时钟卡片容器组件
- [EHitokotoCard](./../components/hitokotocard.md) - 一言卡片组件
- [ELoader](./../components/loader.md) - 加载动画组件
- [EMusicPlayer](./../components/musicplayer.md) - 音乐播放器组件
- [ENextHolidayCountdown](./../components/nextholidaycountdown.md) - 假期倒计时组件
- [ESimpleDatePicker](./../components/simpledatepicker.md) - 简易日期选择组件
- [ETimeDisplay](./../components/timedisplay.md) - 时间显示组件
- [EAlertDialog](./../components/alertdialog.md) - 弹窗组件

## 组件通用属性

虽然每个组件都有自己独特的属性，但许多组件共享一些通用属性：

| 属性名 | 类型 | 描述 |
|-------|------|------|
| `width` | `real` | 组件宽度 |
| `height` | `real` | 组件高度 |
| `x` | `real` | 组件 x 坐标 |
| `y` | `real` | 组件 y 坐标 |
| `visible` | `bool` | 组件是否可见 |
| `enabled` | `bool` | 组件是否可用 |
| `opacity` | `real` | 组件透明度（0-1） |
| `z` | `int` | 组件堆叠顺序 |

## 组件样式一致性

所有 EvolveUI 组件都遵循统一的设计规范：

- **圆角半径**：默认 8px，重要组件可使用 12px
- **阴影效果**：统一的阴影层级，区分组件重要性
- **颜色系统**：基于主题的颜色变量，确保一致性
- **动画曲线**：统一的缓动函数和动画时长
- **交互反馈**：悬停、点击等状态的统一反馈

## 组件最佳实践

1. **组件命名**：使用 PascalCase 命名组件，前缀 `E` 表示 EvolveUI 组件
2. **属性命名**：使用 camelCase 命名属性，清晰表达属性用途
3. **事件命名**：使用过去式命名事件，如 `clicked`, `hovered`
4. **组件复用**：将通用逻辑封装到自定义组件中，提高复用性
5. **性能优化**：避免过度使用复杂动画，合理使用 `opacity` 和 `visible` 属性

## 组件开发规范

如果您想为 EvolveUI 贡献组件，请遵循以下规范：

1. **文件结构**：每个组件一个独立的 QML 文件
2. **文档注释**：为组件、属性、方法添加详细的文档注释
3. **测试用例**：提供完整的组件测试用例
4. **示例代码**：提供多种使用场景的示例代码
5. **兼容性**：确保组件兼容 Qt 6.5 及以上版本

## 组件版本控制

每个组件都有自己的版本信息，您可以通过组件的 `version` 属性访问：

```qml
Components.EButton {
    Component.onCompleted: {
        console.log("EButton 版本:", version)
    }
}
```

## 组件更新日志
以下内容与 GitHub Releases（`sudoevolve/EvolveUI` 仓库）保持同步的简要版本：

### v1.3.7 (2025-11-19)

- 新增加载动画效果
- 新增音乐播放界面样式
- 新增吐丝消息（消息提示）相关动效
- 优化页面切换动画并修复若干 Bug

### v1.3.6.8-test (2025-11-12)

- 修复若干 Bug
- 添加歌词显示
- 新增类 Apple Music 动态专辑背景切换
- 新增取色板
- 新增实验性区域：液态玻璃、Shader 预览等

### v1.3.6 (2025-11-01)

- 添加软件图标
- 修改音乐播放逻辑，自动扫描 Windows 音乐目录及软件目录
- 添加音乐播放界面
- 添加多功能折线图组件（可自由选择样式）

### v1.3.4 (2025-10-21)

- 去除窗口边框，自绘最小化/关闭按钮
- 调整 Flickable 结构为 Loader 显示三个页面
- 新增时钟卡片（带天气 API）
- 新增电量显示组件
- 新增一言一图组件
- 新增假期倒计时组件
- 新增简单日历显示组件
- 新增弧形进度条显示组件
- 新增自定义弹窗组件
- 新增音乐播放器（自动专辑封面取色）

### v1.2.9 (2025-09-30)

- 修复两个 Issue
- 改进输入框边框效果

### v1.2.7 (2025-09-23)

- 内部优化与体验改进

### v1.2.5 (2025-09-14)

- 修复 List 和 DataTable 组件的圆角 Bug
- 添加页面切换动画
- 性能优化
- 更新默认壁纸

### v1.1.5 (2025-09-02)

- 更新 Carousel 组件（滚动轮播）效果与交互

### v1.0.0 (2025-12-01)

- 初始版本发布
- 包含 30+ 核心组件
- 支持浅色/深色主题切换
- 响应式布局优化