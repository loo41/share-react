import combination from './utils/combinationState';
import createShare from './utils/createShareFactory';



function TwitterLink({url, text, via}) {
  let shareUrl = 'https://twitter.com/intent/tweet'
  return shareUrl + combination(...arguments);
}



const TwitterShare = createShare('twitter', (props) => {
    const data = props.data || {}
    return {
        url: data.url || '',
        text: data.text || '',
        via: data.via || ''
    }
}, TwitterLink);


export default TwitterShare;