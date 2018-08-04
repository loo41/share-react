## share-react

## Install npm

```js
    npm install share-react
```

## Install yarn

```js
    yarn add share-react
```


## Use

```js
    import {
        Douban,
        Facebook,
        Google,
        Qq,
        Qzone,        
        Twitter,
        Weibo,
        Linkedin,
        TencentWB,        
        BaiduPostBar,
        Email,
    } from 'share-react';

    <Douban        
        style={{}}
        data={{}}
        isExitWindows={}
        className={}
        disable={}
        windowHeight={}
        windowWidth={}
        children={}
        otherProps={{}}
        customWindow={}        
        closeWindow={}
    >
        <Children /> // 为任意node 推荐使用这种方式定制内部组件
    </Douban>
```

### props

| 属性 | 类型 | 默认值 | 描述 |
| ----| ----- | ----- | ---- |
| isExitWindows | Boolean | true | 控制窗口状态 (开|关)|
| className | String | 随机 | 窗口的名称 |
| style | object | {} | 分享盒子的样式 |
| disable | Boolean | false | 分享链接是否可以点击 |
| windowHeight | Number | 400 | 窗口的高度 |
| windowWidth | Number | 600 | 窗口的宽度 |
| children | node |  | 子节点 (建议使用 <Children />)|
| otherProps | object |  | 其他自定义props属性 |


### props method

| 方法 | 类型 |  描述 |
| -------------| --- | ------------------- |
| customWindow | fun | 自定义窗口 [arg为url]|
| closeWindow | fun | 关闭窗口发生的事件 [arg为窗口实例]|


### node props

|             组件           |                             props                               |
| -------------------------- | --------------------------------------------------------------- |
| Douban [豆瓣] | href: 链接 name: 名字   text: 文本   image: 图片 |
| Facebook [facebook] | url: 链接 |
| Google [谷歌] | url: 链接 |
| Qq [qq好友] | url: 链接  title: 标题  desc: 描述  source: ''  summary: 摘要  pics: 图片 |
| Qzone [qq空间] | url: 链接  title: 标题  desc: 描述  summary: 摘要  |
| Twitter [推特] | url: 链接  text: 文本  via: 经由  |
| Weibo [微博] | url: 链接  text: 文本  pics: 图片  appkey:   |
| Linkedin [点点] | url: 链接  title: 标题  summary: 摘要  source:   armin:  |
| TencentWB [腾讯微博] | url: 链接  title: 标题  pic: 图片  c:   a:  |
| BaiduPostBar [百度贴吧] | url: 链接  title: 标题  |
| Email [邮件] | subject:  项目名称  body: 项目 内容 |

```js
    data = {{
        url: ''
        ......
    }}
```


### about wechat

```desc
    由于微信是生成二维码，为了不引入多余的库 可以使用如下库
    qrcode.react(https://github.com/zpao/qrcode.react)
```

### License

MIT



### Illustration

share-react 主要应用于一些中国应用的分享功能

参考于

[share.js](https://github.com/overtrue/share.js)

[react-share](https://github.com/nygardk/react-share)
