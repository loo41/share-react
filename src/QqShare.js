import combination from './utils/combinationState';
import createShare from './utils/createShareFactory';


function qqLink({url, title, desc, source, summary, pics}) {
  let shareUrl = 'http://connect.qq.com/widget/shareqq/index.html';
  return shareUrl + combination(...arguments);
}



const QqShare = createShare('qq', (props) => {
    const data = props.data || {}
    return {
        url: data.url || 'http://youngon.cn',
        title: data.title || '',
        desc: data.desc || '',
        source: data.source || '',
        summary: data.summary || '',
        pics: data.pics || ''
    }
}, qqLink);


export default QqShare;