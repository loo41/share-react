import combination from './utils/combinationState';
import createShare from './utils/createShareFactory';


function facebookLink({url}) {
  let shareUrl = 'https://www.facebook.com/sharer/sharer.php';
  return shareUrl + combination(...arguments);
}



const FacebookShare = createShare('facebook', (props) => {
    const data = props.data || {}
    return {
        u: data.url || 'http://youngon.cn'
    }
}, facebookLink);


export default FacebookShare;