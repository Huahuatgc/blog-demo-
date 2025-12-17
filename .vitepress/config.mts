import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'EvolveUI',
  description: '现代化 Qt6 QML 组件库文档',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/aboutme' },
      { text: 'API', link: '/api/components' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '主题系统', link: '/guide/theme' },
            { text: '组件复用', link: '/guide/reuse' },
            { text: '响应式布局', link: '/guide/responsive' }
          ]
        }
      ],

      '/api/': [
        {
          text: 'API',
          items: [
            { text: '组件 API', link: '/api/components' },
            { text: '主题 API', link: '/api/theme' }
          ]
        }
      ],

      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Aboutme', link: '/components/aboutme' },
            { text: 'EAvatar', link: '/components/avatar' },
            { text: 'EButton', link: '/components/button' },
            { text: 'EInput', link: '/components/input' },
            { text: 'ECheckBox', link: '/components/checkbox' },
            { text: 'ERadioButton', link: '/components/radiobutton' },
            { text: 'ESwitchButton', link: '/components/switchbutton' }
          ]
        },
        {
          text: '容器组件',
          items: [
            { text: 'ECard', link: '/components/card' },
            { text: 'EBorderCard', link: '/components/bordercard' },
            { text: 'EBlurCard', link: '/components/blurcard' },
            { text: 'EHoverCard', link: '/components/hovercard' },
            { text: 'ECardWithTextArea', link: '/components/cardwithtextarea' },
            { text: 'EDrawer', link: '/components/drawer' }
          ]
        },
        {
          text: '高级组件',
          items: [
            { text: 'EAccordion', link: '/components/accordion' },
            { text: 'EAnimatedWindow', link: '/components/animatedwindow' },
            { text: 'ECalendar', link: '/components/calendar' },
            { text: 'ECarousel', link: '/components/carousel' },
            { text: 'EDropdown', link: '/components/dropdown' },
            { text: 'EMenuButton', link: '/components/menubutton' },
            { text: 'ENavBar', link: '/components/navbar' },
            { text: 'ESlider', link: '/components/slider' },
            { text: 'EToast', link: '/components/toast' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'EAreaChart', link: '/components/areachart' },
            { text: 'EDataTable', link: '/components/datatable' },
            { text: 'EFitnessProgress', link: '/components/fitnessprogress' },
            { text: 'EYearProgress', link: '/components/yearprogress' }
          ]
        },
        {
          text: '其他组件',
          items: [
            { text: 'EBatteryCard', link: '/components/batterycard' },
            { text: 'EClock', link: '/components/clock' },
            { text: 'EClockCard', link: '/components/clockcard' },
            { text: 'EHitokotoCard', link: '/components/hitokotocard' },
            { text: 'ELoader', link: '/components/loader' },
            { text: 'EMusicPlayer', link: '/components/musicplayer' },
            { text: 'ENextHolidayCountdown', link: '/components/nextholidaycountdown' },
            { text: 'ESimpleDatePicker', link: '/components/simpledatepicker' },
            { text: 'ETimeDisplay', link: '/components/timedisplay' },
            { text: 'EAlertDialog', link: '/components/alertdialog' }
          ]
        }
      ]
    }
  }
})


