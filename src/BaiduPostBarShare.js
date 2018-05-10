import combination from './utils/combinationState';
import createShare from './utils/createShareFactory';


function BaiduLink({url, title}) {
  let shareUrl = 'http://tieba.baidu.com/f/commit/share/openShareApi';
  return shareUrl + combination(...arguments);
}



const BaiduPostBarShare = createShare('baidu', (props) => {
    const data = props.data || {}
    return {
        url: data.url || 'http://youngon.cn',
        title: data.title || '',
    }
}, BaiduLink);


export default BaiduPostBarShare;