import { defineConfig } from 'vitepress'

const base = '/'; // 仓库名称

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "EvolveUI",
  description: "现代化、高度风格统一的 Qt6 QML 前端组件库，致力于为跨平台应用程序提供一致、优雅、响应式的 UI 体验。",
  head: [
    // 基础SEO元数据
    ['meta', { name: 'keywords', content: 'EvolveUI, Qt6, QML, UI组件库, 跨平台, 前端框架, Qt组件, QML组件' }],
    ['meta', { name: 'author', content: 'sudoevolve' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    
    // SEO优化元数据
    ['meta', { name: 'description', content: '现代化、高度风格统一的 Qt6 QML 前端组件库，致力于为跨平台应用程序提供一致、优雅、响应式的 UI 体验。' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
    ['meta', { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
    
    // 社交媒体元数据 - Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'EvolveUI - Qt6 QML 组件库' }],
    ['meta', { property: 'og:description', content: '现代化、高度风格统一的 Qt6 QML 前端组件库，致力于为跨平台应用程序提供一致、优雅、响应式的 UI 体验。' }],
    ['meta', { property: 'og:url', content: 'https://sudoevolve.github.io/EvolveUI/' }],
    ['meta', { property: 'og:site_name', content: 'EvolveUI' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:image', content: 'https://sudoevolve.github.io/EvolveUI/og-image.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    
    // 社交媒体元数据 - Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'EvolveUI - Qt6 QML 组件库' }],
    ['meta', { name: 'twitter:description', content: '现代化、高度风格统一的 Qt6 QML 前端组件库，致力于为跨平台应用程序提供一致、优雅、响应式的 UI 体验。' }],
    ['meta', { name: 'twitter:image', content: 'https://sudoevolve.github.io/EvolveUI/twitter-image.png' }],
    ['meta', { name: 'twitter:site', content: '@sudoevolve' }],
    ['meta', { name: 'twitter:creator', content: '@sudoevolve' }],
    
    // 结构化数据 - JSON-LD
    ['script', { type: 'application/ld+json' }, `{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "EvolveUI",
      "description": "现代化、高度风格统一的 Qt6 QML 前端组件库，致力于为跨平台应用程序提供一致、优雅、响应式的 UI 体验。",
      "url": "https://sudoevolve.github.io/EvolveUI/",
      "author": {
        "@type": "Person",
        "name": "sudoevolve"
      },
      "publisher": {
        "@type": "Person",
        "name": "sudoevolve"
      },
      "inLanguage": "zh-CN",
      "keywords": "EvolveUI, Qt6, QML, UI组件库, 跨平台"
    }`],
    
    // 性能优化
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
  ],
  markdown: {
    // 代码块优化配置
    lineNumbers: true, // 显示行号
    highlightLines: true, // 支持行高亮
    tabWidth: 2, // 设置缩进为2个空格
    languageMap: {
      // 添加QML语言支持
      qml: {
        name: 'qml',
        aliases: ['qtqml', 'qt-qml']
      }
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  // SEO优化配置
  sitemap: {
    hostname: 'https://sudoevolve.github.io/EvolveUI/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/node_modules/', '/.vitepress/'] }
      ],
      additionalSitemaps: [
        'https://sudoevolve.github.io/EvolveUI/sitemap.xml'
      ]
    },
    exclude: ['/404.html']
  },
  
  // 性能优化配置
  vite: {
    build: {
      minify: 'terser', // 使用terser进行代码压缩，比默认的esbuild压缩率更高
      terserOptions: {
        compress: {
          drop_console: true, // 移除console语句
          drop_debugger: true // 移除debugger语句
        }
      },
      rollupOptions: {
        output: {
        }
      }
    },

  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    codeCopy: {
      // 代码块复制功能配置
      buttonText: '复制',
      timeout: 2000, // 复制成功提示显示时间（毫秒）
      showInMobile: true, // 在移动端也显示复制按钮
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/aboutme' },
      { text: 'API', link: '/api/theme' },
      { text: 'GitHub', link: 'https://github.com/sudoevolve/EvolveUI', target: '_blank' }
    ],

    sidebar: {
      // 侧边栏响应式配置
      autoCollapseCategories: true, // 自动折叠非当前分类的侧边栏
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
      ],
      '/api/': [
        {
          text: 'API参考',
          items: [
            { text: '主题API', link: '/api/theme' },
            { text: '组件API', link: '/api/components' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sudoevolve/EvolveUI' }
    ],

    search: {
      provider: 'local',
      options: {
        // 搜索功能优化配置
        maxResults: 10, // 最多显示10个搜索结果
        snippetLength: 50, // 搜索结果摘要长度
        threshold: 0.1, // 搜索匹配阈值，值越小匹配越宽松
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '未找到结果',
                resetButtonTitle: '清除查询',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        },
        // 搜索权重配置，影响搜索结果排序
        weightMap: {
          frontmatter: 3, // 页面元数据权重
          headings: 2, // 标题权重
          content: 1 // 内容权重
        }
      }
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    editLink: {
      pattern: 'https://github.com/sudoevolve/EvolveUI/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    footer: {
      message: '使用 <a href="https://vitepress.dev" target="_blank">VitePress</a> 构建',
      copyright: '© 2025 sudoevolve. 保留所有权利。'
    }
  }
})
