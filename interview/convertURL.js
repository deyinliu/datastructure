function convertURL(text) {
    const patten = /(https?\:\/\/)?\w+\.\w+[\w./&=-]*(\:\d+)?\b/g;
    const subPatten = /https?/;
    let newText = text.replace(patten, function(match) {
        if (match.search(subPatten) !== 0) {
            return `<a href='http://${match}'>${match}</a>`;
        } else {
            return `<a href='${match}'>${match}</a>`;
        }
    })
    return newText;
}
