# EMusicPlayer 音乐播放器组件

## 组件概述

`EMusicPlayer` 是一个功能完整的音乐播放器组件，支持播放控制、进度调节、音量控制和歌曲信息显示等功能。

## 基本用法

```qml
import "components" as Components
Components.EMusicPlayer {
    id: musicPlayer
    width: 400
    height: 120
    anchors.centerIn: parent
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|-------|------|-------|------|
| `currentSong` | `object` | `{ title: "默认歌曲", artist: "未知艺术家", album: "未知专辑", duration: 0 }` | 当前播放的歌曲信息 |
| `isPlaying` | `bool` | `false` | 是否正在播放 |
| `currentTime` | `int` | `0` | 当前播放时间 (秒) |
| `totalDuration` | `int` | `0` | 歌曲总时长 (秒) |
| `volume` | `int` | `80` | 音量 (0-100) |
| `isMuted` | `bool` | `false` | 是否静音 |
| `playbackRate` | `real` | `1.0` | 播放速度 |
| `loopMode` | `int` | `0` | 循环模式 (0: 单曲循环, 1: 列表循环, 2: 随机播放) |
| `showVolumeControl` | `bool` | `true` | 是否显示音量控制 |
| `showTimeDisplay` | `bool` | `true` | 是否显示时间信息 |
| `showProgressBar` | `bool` | `true` | 是否显示进度条 |
| `showAlbumArt` | `bool` | `true` | 是否显示专辑封面 |
| `albumArt` | `url` | `""` | 专辑封面图片 URL |
| `textColor` | `color` | `theme.textColor` | 文本颜色 |
| `backgroundColor` | `color` | `theme.surfaceColor` | 背景颜色 |
| `borderColor` | `color` | `theme.borderColor` | 边框颜色 |
| `borderRadius` | `real` | `12` | 边框圆角半径 |
| `shadowEnabled` | `bool` | `true` | 是否启用阴影效果 |
| `padding` | `real` | `15` | 内边距 |
| `spacing` | `real` | `10` | 组件间距 |

## 方法

| 方法名 | 参数 | 返回值 | 描述 |
|-------|------|-------|------|
| `play` | - | `void` | 播放音乐 |
| `pause` | - | `void` | 暂停音乐 |
| `togglePlayback` | - | `void` | 切换播放/暂停状态 |
| `stop` | - | `void` | 停止播放 |
| `next` | - | `void` | 播放下一首 |
| `previous` | - | `void` | 播放上一首 |
| `seekTo` | `time: int` | `void` | 跳转到指定时间 |
| `setVolume` | `volume: int` | `void` | 设置音量 |
| `toggleMute` | - | `void` | 切换静音状态 |
| `setLoopMode` | `mode: int` | `void` | 设置循环模式 |
| `setPlaybackRate` | `rate: real` | `void` | 设置播放速度 |
| `loadSong` | `song: object` | `void` | 加载歌曲 |
| `formatTime` | `seconds: int` | `string` | 将秒数格式化为时间字符串 |

## 信号

| 信号名 | 参数 | 描述 |
|-------|------|------|
| `playbackStarted` | - | 开始播放时触发 |
| `playbackPaused` | - | 暂停播放时触发 |
| `playbackStopped` | - | 停止播放时触发 |
| `timeChanged` | `current: int, total: int` | 播放时间变化时触发 |
| `volumeChanged` | `volume: int, muted: bool` | 音量变化时触发 |
| `songChanged` | `song: object` | 歌曲变化时触发 |
| `loopModeChanged` | `mode: int` | 循环模式变化时触发 |
| `playbackRateChanged` | `rate: real` | 播放速度变化时触发 |
| `nextSongRequested` | - | 请求播放下一首时触发 |
| `previousSongRequested` | - | 请求播放上一首时触发 |

## 示例

### 完整功能音乐播放器

```qml
import "components" as Components
Components.EMusicPlayer {
    id: fullMusicPlayer
    width: 450
    height: 150
    backgroundColor: "#212121"
    textColor: "#FFFFFF"
    borderColor: "#333333"
    borderRadius: 20
    padding: 20
    spacing: 15
    anchors.centerIn: parent
    
    // 加载歌曲
    Component.onCompleted: {
        fullMusicPlayer.loadSong({
            title: "Shape of You",
            artist: "Ed Sheeran",
            album: "÷ (Divide)",
            duration: 233,
            albumArt: "https://example.com/shape-of-you.jpg"
        })
    }
    
    // 信号处理
    onPlaybackStarted: {
        console.log("音乐开始播放")
    }
    
    onSongChanged: {
        console.log("当前歌曲:", song.title, "- ", song.artist)
    }
}
```

### 简化版音乐播放器

```qml
import "components" as Components
Components.EMusicPlayer {
    id: simpleMusicPlayer
    width: 350
    height: 80
    showVolumeControl: false
    showAlbumArt: false
    backgroundColor: theme.surfaceColor
    borderColor: theme.borderColor
    borderRadius: 8
    anchors.centerIn: parent
}
```

### 自定义音乐播放列表

```qml
import QtQuick 2.15
import QtQuick.Layouts 1.15
import "components" as Components

Rectangle {
    width: 500
    height: 400
    color: theme.background
    anchors.centerIn: parent
    
    ColumnLayout {
        anchors.fill: parent
        spacing: 10
        
        // 音乐播放器
        Components.EMusicPlayer {
            id: player
            Layout.fillWidth: true
            height: 120
        }
        
        // 播放列表
        ListView {
            id: playlistView
            Layout.fillWidth: true
            Layout.fillHeight: true
            spacing: 5
            
            model: [
                { title: "Song 1", artist: "Artist 1" },
                { title: "Song 2", artist: "Artist 2" },
                { title: "Song 3", artist: "Artist 3" }
            ]
            
            delegate: Rectangle {
                width: parent.width
                height: 50
                color: index === currentIndex ? theme.primaryColor : theme.surfaceColor
                
                MouseArea {
                    anchors.fill: parent
                    onClicked: {
                        player.loadSong(modelData)
                        player.play()
                        currentIndex = index
                    }
                }
                
                Text {
                    text: modelData.title + " - " + modelData.artist
                    anchors.centerIn: parent
                    color: index === currentIndex ? "#FFFFFF" : theme.textColor
                }
            }
        }
        
        property int currentIndex: 0
    }
}
```

## 设计说明

`EMusicPlayer` 组件采用现代化的设计风格，包含以下元素：

1. **专辑封面**：显示当前播放歌曲的专辑封面
2. **歌曲信息**：显示歌曲标题、艺术家和专辑名称
3. **播放控制按钮**：播放/暂停、上一首、下一首等控制按钮
4. **进度条**：显示播放进度和总时长
5. **时间信息**：显示当前播放时间和总时长
6. **音量控制**：音量调节滑块和静音按钮
7. **循环模式**：单曲循环、列表循环、随机播放等模式切换

## 最佳实践

1. **数据集成**：将组件与实际的音乐播放服务集成，提供真实的音频播放功能
2. **样式定制**：根据应用主题定制组件的颜色、圆角和阴影效果
3. **性能优化**：对于大量歌曲列表，考虑使用虚拟列表提高性能
4. **错误处理**：添加错误处理逻辑，确保在音乐播放失败时提供友好的提示
5. **用户体验**：提供流畅的动画效果和直观的交互反馈

## 性能优化

- 组件内部使用 `Timer` 定时器更新时间信息，避免频繁的时间计算
- 专辑封面使用 `Image` 组件的 `sourceSize` 属性控制加载大小，避免内存浪费
- 使用 `cache` 属性缓存组件渲染结果，减少重复渲染
- 当组件不可见时自动暂停音乐播放，节省资源

## 兼容性

- 支持 Qt 6.5 及以上版本
- 兼容所有支持 QML 的平台
- 音频播放功能依赖平台的多媒体支持
- 专辑封面支持本地文件和网络图片

## 扩展功能

可以通过继承 `EMusicPlayer` 组件添加自定义功能：

```qml
import "components" as Components

Components.EMusicPlayer {
    id: extendedMusicPlayer
    width: 400
    height: 120
    anchors.centerIn: parent
    
    // 添加自定义功能
    property string currentPlaylist: "默认播放列表"
    property int totalSongs: 0
    
    function addToFavorites() {
        // 自定义逻辑添加到收藏
        console.log("添加到收藏:", currentSong.title)
    }
    
    function createPlaylist(name) {
        // 自定义逻辑创建播放列表
        console.log("创建播放列表:", name)
    }
    
    // 自定义信号
    signal playlistChanged(string playlistName)
}
```