import combination from './utils/combinationState';
import createShare from './utils/createShareFactory';


function renrenLink({resourceUrl}) {
  let shareUrl = 'http://connect.qq.com/widget/shareqq/index.html';
  return shareUrl + combination(...arguments);
}



const RenrenShare = createShare('renren', (props) => {
    const data = props.data || {}
    return {
        resourceUrl: data.url || 'http://youngon.cn',
    }
}, renrenLink);


export default RenrenShare;
