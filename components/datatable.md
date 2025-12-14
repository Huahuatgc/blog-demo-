# EDataTable 组件

## 组件简介

EDataTable 是一个高性能表格组件，用于展示和管理结构化数据。它支持排序、过滤、分页和自定义列，适合构建数据管理和分析界面。

## 基本用法

```qml
import "components" as Components

Components.ETheme { id: theme }

Components.EDataTable {
    width: 500
    height: 300
    columns: [
        { name: "id", title: "ID", width: 60 },
        { name: "name", title: "姓名", width: 100 },
        { name: "age", title: "年龄", width: 80 },
        { name: "email", title: "邮箱", width: 200 }
    ]
    data: [
        { id: 1, name: "张三", age: 25, email: "zhangsan@example.com" },
        { id: 2, name: "李四", age: 30, email: "lisi@example.com" },
        { id: 3, name: "王五", age: 28, email: "wangwu@example.com" },
        { id: 4, name: "赵六", age: 35, email: "zhaoliu@example.com" },
        { id: 5, name: "钱七", age: 22, email: "qianqi@example.com" }
    ]
}
```

## 属性列表

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `columns` | `variant` | `[]` | 列配置数组 |
| `data` | `variant` | `[]` | 表格数据数组 |
| `pageSize` | `int` | `10` | 每页显示的行数 |
| `currentPage` | `int` | `1` | 当前页码 |
| `sortColumn` | `string` | `""` | 当前排序的列名 |
| `sortOrder` | `string` | `"asc"` | 排序顺序（asc/desc） |
| `showPagination` | `bool` | `true` | 是否显示分页控件 |
| `showSorting` | `bool` | `true` | 是否支持列排序 |
| `showHeader` | `bool` | `true` | 是否显示表头 |
| `showFooter` | `bool` | `false` | 是否显示表尾 |
| `showBorder` | `bool` | `true` | 是否显示边框 |
| `rowHeight` | `int` | `40` | 行高 |
| `headerHeight` | `int` | `45` | 表头高度 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `headerBackgroundColor` | `color` | `theme.surfaceColor` | 表头背景颜色 |
| `rowBackgroundColor` | `color` | `theme.surfaceColor` | 行背景颜色 |
| `alternatingRowColor` | `color` | `theme.surfaceColor.lighter(2)` | 交替行背景颜色 |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `headerTextColor` | `color` | `theme.textColor` | 表头文本颜色 |
| `borderColor` | `color` | `theme.borderColor` | 边框颜色 |
| `hoverColor` | `color` | `theme.primaryColor` | 悬停颜色 |
| `selectedColor` | `color` | `theme.primaryColor` | 选中颜色 |
| `borderRadius` | `real` | `8` | 圆角半径 |

## 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|--------|------|
| `setData(data)` | `variant` | 无 | 设置表格数据 |
| `setColumns(columns)` | `variant` | 无 | 设置表格列 |
| `addRow(row)` | `variant` | 无 | 添加一行数据 |
| `removeRow(index)` | `int` | 无 | 移除指定索引的行 |
| `updateRow(index, row)` | `int, variant` | 无 | 更新指定索引的行 |
| `clear()` | 无 | 无 | 清除所有数据 |
| `sort(column, order)` | `string, string` | 无 | 按指定列和顺序排序 |
| `filter(filterFunction)` | `function` | 无 | 过滤数据 |
| `goToPage(page)` | `int` | 无 | 跳转到指定页码 |
| `nextPage()` | 无 | 无 | 跳转到下一页 |
| `previousPage()` | 无 | 无 | 跳转到上一页 |

## 信号列表

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `rowClicked(index, row)` | `int, variant` | 行被点击时触发 |
| `rowDoubleClicked(index, row)` | `int, variant` | 行被双击时触发 |
| `headerClicked(column)` | `variant` | 表头被点击时触发 |
| `pageChanged(page)` | `int` | 页码改变时触发 |
| `sortChanged(column, order)` | `string, string` | 排序改变时触发 |

## 扩展示例

### 带有排序和分页的表格

```qml
Components.EDataTable {
    width: 500
    height: 300
    columns: [
        { name: "id", title: "ID", width: 60, sortable: true },
        { name: "name", title: "姓名", width: 100, sortable: true },
        { name: "age", title: "年龄", width: 80, sortable: true },
        { name: "email", title: "邮箱", width: 200 }
    ]
    data: [
        { id: 1, name: "张三", age: 25, email: "zhangsan@example.com" },
        { id: 2, name: "李四", age: 30, email: "lisi@example.com" },
        { id: 3, name: "王五", age: 28, email: "wangwu@example.com" },
        // 添加更多数据...
    ]
    pageSize: 5
    showPagination: true
    showSorting: true
    
    onSortChanged: (column, order) => console.log("排序:", column, order)
    onPageChanged: (page) => console.log("页码:", page)
}
```

### 自定义列渲染的表格

```qml
Components.EDataTable {
    width: 500
    height: 300
    columns: [
        { name: "id", title: "ID", width: 60 },
        { 
            name: "name", 
            title: "姓名", 
            width: 100,
            renderer: function(row) {
                return "<b>" + row.name + "</b>";
            }
        },
        { name: "age", title: "年龄", width: 80 },
        { 
            name: "action", 
            title: "操作", 
            width: 120,
            renderer: function(row) {
                return "<button>编辑</button> <button>删除</button>";
            }
        }
    ]
    data: [
        { id: 1, name: "张三", age: 25 },
        { id: 2, name: "李四", age: 30 },
        { id: 3, name: "王五", age: 28 }
    ]
}
```

### 响应式表格

```qml
Components.EAnimatedWindow {
    width: 600
    height: 400
    title: "响应式表格示例"
    visible: true
    
    Column {
        anchors.fill: parent
        padding: 20
        spacing: 16
        
        Text {
            text: "用户数据表格"
            font.pointSize: 20
            font.bold: true
            color: theme.textColor
            anchors.horizontalCenter: parent.horizontalCenter
        }
        
        Components.EDataTable {
            width: parent.width - 40
            height: 300
            columns: [
                { name: "id", title: "ID", width: 60 },
                { name: "name", title: "姓名", width: 100 },
                { name: "age", title: "年龄", width: 80 },
                { name: "email", title: "邮箱", width: 200 },
                { name: "phone", title: "电话", width: 150 }
            ]
            data: [
                { id: 1, name: "张三", age: 25, email: "zhangsan@example.com", phone: "13800138000" },
                { id: 2, name: "李四", age: 30, email: "lisi@example.com", phone: "13800138001" },
                { id: 3, name: "王五", age: 28, email: "wangwu@example.com", phone: "13800138002" },
                { id: 4, name: "赵六", age: 35, email: "zhaoliu@example.com", phone: "13800138003" },
                { id: 5, name: "钱七", age: 22, email: "qianqi@example.com", phone: "13800138004" },
                // 添加更多数据...
            ]
            showPagination: true
            pageSize: 10
            
            onRowClicked: (index, row) => console.log("点击的行:", index, row.name)
        }
    }
}
```

## 最佳实践

1. **数据管理**：对于大量数据，考虑使用分页和懒加载策略
2. **列配置**：根据数据类型和重要性合理设置列宽和排序功能
3. **性能优化**：避免在渲染函数中执行复杂的计算或DOM操作
4. **用户体验**：提供清晰的视觉反馈，如悬停效果、选中状态等
5. **响应式设计**：在不同屏幕尺寸下调整表格宽度和列显示

## 注意事项

- 表格组件支持虚拟滚动，适合处理大量数据
- 可以通过renderer函数自定义列的渲染方式
- 排序功能默认对所有可排序列启用
- 分页控件会自动根据数据量显示
- 表格支持键盘导航，使用上下箭头选择行，回车键确认选择