export default function combination(stateObject) {
    return '?' + Object.keys(stateObject)
                    .filter(key => !!stateObject[key])
                    .map(key => `${key}=${encodeURIComponent(stateObject[key])}`)
                    .join('&');
}
