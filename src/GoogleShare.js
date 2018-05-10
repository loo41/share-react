import combination from './utils/combinationState';
import createShare from './utils/createShareFactory';


function googleLink({url}) {
  let shareUrl = 'https://plus.google.com/share';
  return shareUrl + combination(...arguments);
}



const GoogleShare = createShare('google', (props) => {
    const data = props.data || {}
    return {
        url: data.url || 'http://youngon.cn'
    }
}, googleLink);


export default GoogleShare;