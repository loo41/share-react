import combination from './utils/combinationState';
import createShare from './utils/createShareFactory';


function TencentLink({href, name, text, image, starid, aid, style}) {
  let shareUrl = 'http://share.v.t.qq.com/index.php';
  return shareUrl + combination(...arguments);
}

const TencentShare = createShare('tencent', (props) => {
    const data = props.data || {}
    return {
        c: data.c || 'share',
        a: data.a || 'index',
        title: data.title || '',
        url: data.url || '',
        pic: data.pic || '',
    }
}, TencentLink);


export default TencentShare;