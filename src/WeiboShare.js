import combination from './utils/combinationState';
import createShare from './utils/createShareFactory';


function weiboLink({url, title, pics, appkey}) {
  let shareUrl = 'https://service.weibo.com/share/share.php';
  return shareUrl + combination(...arguments);
}



const WeiboShare = createShare('weibo', (props) => {
    const data = props.data || {}
    return {
        url: data.url || '',
        title: data.title || '',
        pics: data.pics || '',
        appkey: data.appkey || ''
    }
}, weiboLink);


export default WeiboShare;