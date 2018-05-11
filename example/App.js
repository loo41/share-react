import React, { Component } from 'react';
import './App.css';
import './font/iconfont.css'
import {
  Douban, Facebook,
  Google, Qq, Qzone,        
  Twitter, Weibo,
  Linkedin, TencentWB,        
  BaiduPostBar, Email} from 'share-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Douban
          style={{background: 'black'}}
          data={{
            url: 'http://youngon.cn'
          }}
        >
          <span className="icon iconfont icon-douban" style={{color: 'white'}}>
          </span>
        </Douban>
        <Qq
          data={{
            url: 'http://youngon.cn'
          }}
        >
          <span className="icon iconfont icon-qq"></span>
        </Qq>
        <Qzone
          data={{
            url: 'http://youngon.cn'
          }}
        >
          <span className="icon iconfont icon-qqkongjian"></span>
        </Qzone>
        <Weibo
          data={{
            url: 'http://youngon.cn'
          }}
        >
          <span className="icon iconfont icon-weibo"></span>
        </Weibo>
        <BaiduPostBar
          data={{
            url: 'http://youngon.cn'
          }}
        >
          <span className="icon iconfont icon-CN_baidutieba"></span>
        </BaiduPostBar>
        <TencentWB>
          <span className="icon iconfont icon-CN_tencentweiboB"></span>
        </TencentWB>
        <Linkedin>
          <span className="icon iconfont icon-linkedin"></span>
        </Linkedin>
        <Email>
          <span className="icon iconfont icon-185078emailmailstreamline"></span>
        </Email>
        <Google>
          <span className="icon iconfont icon-google"></span>
        </Google>
        <Facebook>
          <span className="icon iconfont icon-facebook"></span>
        </Facebook>
        <Twitter>
          <span className="icon iconfont icon-twitter"></span>
        </Twitter>
      </div>
    );
  }
}

export default App;
