import combination from './utils/combinationState';
import createShare from './utils/createShareFactory';


function EmailLink({subject, body}) {
  let shareUrl = 'mailto:';
  return shareUrl + combination(...arguments);
}



const EmailShare = createShare('email', (props) => {
    const data = props.data || {}
    return {
        subject: data.Subject || '',
        body: data.body || '',
    }
}, EmailLink, false);


export default EmailShare;