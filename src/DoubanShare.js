import combination from './utils/combinationState';
import createShare from './utils/createShareFactory';


function DoubanLink({href, name, text, image, starid, aid, style}) {
  let shareUrl = 'http://shuo.douban.com/!service/share';
  return shareUrl + combination(...arguments);
}



const DoubanShare = createShare('douban', (props) => {
    const data = props.data || {}
    return {
        href: data.url || '',
        name: data.name || '',
        text: data.text || '',
        image: data.image || '',
        starid: '0',
        aid: '0',
        style: '11'
    }
}, DoubanLink);


export default DoubanShare;