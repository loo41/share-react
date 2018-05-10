import combination from './utils/combinationState';
import createShare from './utils/createShareFactory';



function qzoneLink({url, title, desc, summary}) {
  let shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey';
  return shareUrl + combination(...arguments);
}



const QzoneShare = createShare('qzone', (props) => {
    const data = props.data || {}
    return {
        url: data.url || '',
        title: data.title || '',
        desc: data.desc || '',
        summary: data.summary || ''
    }
}, qzoneLink);


export default QzoneShare;