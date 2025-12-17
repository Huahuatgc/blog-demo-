---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "EvolveUI"
  text: "现代化 Qt6 QML 组件库"
  tagline: 为跨平台应用提供一致、优雅、响应式的 UI 体验
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quickstart
    - theme: alt
      text: 组件文档
      link: /components/aboutme

features:
  - icon: 🔧
    title: 主题系统统一管理
    details: 支持浅色/深色主题切换，颜色、阴影、边框统一由 Theme.qml 控制，轻松实现品牌一致性。
  
  - icon: 🎨
    title: 组件风格一致
    details: 所有组件遵循统一命名规范、圆角、阴影、多态配色和动态交互反馈，确保整体视觉和谐。
  
  - icon: ⚙️
    title: 组件可复用性强
    details: 每个组件均可独立使用，支持灵活参数配置，轻松嵌入任意 QML 应用，提高开发效率。
  
  - icon: 🎯
    title: 高质量动效支持
    details: 广泛使用 MultiEffect 和 SpringAnimation 实现柔和动画，提升用户体验和界面生动性。
  
  - icon: 📐
    title: 响应式布局优化
    details: 自动适配窗口尺寸，支持 Layout 自适应大小与间距，适用于桌面和移动设备。
  
  - icon: 📦
    title: 丰富的组件库
    details: 提供 30+ 高质量组件，涵盖基础控件、容器、数据展示、高级交互等多种场景需求。
---

## 📦 已实现组件

EvolveUI 提供了丰富的组件库，满足各种 UI 开发需求：

### 基础组件
- **Aboutme** - 带有打字机效果的介绍界面
- **EAvatar** - 头像组件
- **EButton** - 带图标 + 动画的圆角按钮组件
- **EInput** - 支持焦点变色与阴影的输入框
- **ECheckBox** - 动画复选框组件
- **ERadioButton** - 动画单选组件
- **ESwitchButton** - 动画开关组件

### 容器组件
- **ECard** - 基础卡片容器组件
- **EBlurCard** - 高斯模糊卡片组件
- **EHoverCard** - 鼠标悬停浮起卡片容器组件
- **ECardWithTextArea** - 带文本区域的卡片容器组件
- **EDrawer** - 侧边栏组件

### 高级组件
- **EAccordion** - 下拉信息栏
- **EAnimatedWindow** - iPad OS 动画风格窗口组件
- **ECalendar** - 日历组件
- **ECarousel** - 轮播组件
- **EDropdown** - 下拉选择框组件
- **EMenuButton** - 菜单按钮组件
- **ENavBar** - 导航栏组件
- **ESlider** - 支持滑块动画的调节组件
- **EToast** - 支持消息提示的组件

### 数据展示
- **EAreaChart** - 折线图组件
- **EDataTable** - 高性能表格组件
- **EFitnessProgress** - 健身进度展示组件
- **EYearProgress** - 年度进度展示组件

### 其他组件
- **EBatteryCard** - 电池状态卡片组件
- **EClock** - 时钟显示组件
- **EClockCard** - 时钟卡片容器组件
- **EHitokotoCard** - 一言卡片组件
- **ELoader** - 加载动画组件
- **EMusicPlayer** - 音乐播放器组件
- **ENextHolidayCountdown** - 假期倒计时组件
- **ESimpleDatePicker** - 简易日期选择组件
- **ETimeDisplay** - 时间显示组件
- **EAlertDialog** - 弹窗组件

## 🚀 快速开始

### 1. 安装依赖
```bash
# 确保已安装 Qt 6.5 及以上版本
# 克隆项目
git clone https://github.com/sudoevolve/EvolveUI.git

# 进入项目目录
cd EvolveUI
```

### 2. 创建新项目
使用提供的脚手架脚本快速创建项目：
```bash
# 运行脚手架脚本
tools\New-EvolveUIProject.bat
```

### 3. 引入组件
在 QML 文件中引入 EvolveUI 组件：
```qml
import "components" as Components

// 导入主题
Components.ETheme {
    id: theme
}

// 使用组件
Components.EButton {
    text: "提交"
    iconCharacter: "\uf1d8"
    onClicked: console.log("Clicked!")
}
```

## 📖 文档指南

- [介绍](/guide/introduction) - 了解 EvolveUI 的核心概念和设计理念
- [快速开始](/guide/quickstart) - 一步步创建你的第一个 EvolveUI 应用
- [主题系统](/guide/theme) - 学习如何使用和自定义主题
- [组件复用](/guide/reuse) - 掌握组件复用的最佳实践
- [响应式布局](/guide/responsive) - 实现适配多端设备的响应式界面

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

- [GitHub 仓库](https://github.com/sudoevolve/EvolveUI)
- [提交 Issue](https://github.com/sudoevolve/EvolveUI/issues)
- [贡献指南](https://github.com/sudoevolve/EvolveUI/blob/main/CONTRIBUTING.md)

## 📄 许可证

EvolveUI 使用 MIT 许可证，详见 [LICENSE](https://github.com/sudoevolve/EvolveUI/blob/main/LICENSE) 文件。

## 📞 联系方式

- 项目作者：sudoevolve
- GitHub：[https://github.com/sudoevolve](https://github.com/sudoevolve)
- 项目地址：[https://github.com/sudoevolve/EvolveUI](https://github.com/sudoevolve/EvolveUI)


