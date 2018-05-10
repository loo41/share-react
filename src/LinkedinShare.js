import combination from './utils/combinationState';
import createShare from './utils/createShareFactory';

function linkdinLink({ url, title, desc, summary }) {
    let shareUrl = 'http://www.linkedin.com/shareArticle';
    return shareUrl + combination(...arguments);
}

const LinkdinShare = createShare('linkin', (props) => {
    const data = props.data || {}
    return {
        mini: data.mini || true,
        ro: data.ro || true,
        title: data.title || 'youngon',
        url: data.url || 'http://youngon.cn',
        summary: data.summary || '',
        source: data.source || '',
        armin: data.armin || '',
    }
}, linkdinLink);


export default LinkdinShare;
