# uni-app-cloud-music
学习vue后的练习项目，使用uni-app进行开发
后端接口是Github大神Binaryify的开源项目，接口文档直接在百度搜索“网易云音乐API”作者是Binaryify。按提示运行后端代码

# 项目准备：

后端API官方文档：https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi

# API安装步骤：

git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
(不会使用git的小伙伴可以直接去仓库下载接口哦，接口仓库地址：https://github.com/Binaryify/NeteaseCloudMusicApi)


## 2.cd到安装api的文件夹

## 3 npm install

## 4.node app.js
成功运行后可以直接在浏览器中输入localhost:3000 访问后台文档

# 关于本项目
本仓库放前端代码
运行本项目需要提前安装hbuilderX 在项目中，点击运行即可选择在不同平台执行，目前可支持在H5手机端和小程序端进行运行

# 主要实现功能
包括首页热榜展示 搜索功能（包含搜索提示，历史搜索），播放功能（包含歌词滚动，展示评论数据等),
在官方歌单内选中歌曲可以在歌曲播完后自动播放下一首

![image](https://user-images.githubusercontent.com/33826376/125903525-47874383-93cb-4293-a06b-aa02df4d70ea.png)

![image](https://user-images.githubusercontent.com/33826376/125903718-b291cacb-a423-4b12-9924-0d5b9a46d983.png)

![image](https://user-images.githubusercontent.com/33826376/125904483-0103721d-1047-43b8-83fe-59b5c942603c.png)

# 待修复的bug
纯音乐无法打开（由于识别歌词出错导致）
# 后续更新
后续计划添加登录验证，播放进度条，自定义歌单等功能
