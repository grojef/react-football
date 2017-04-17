/**
 * Created by kexiao on 17/4/17.
 */


export const FormatItem = (item) => {
    let [gameId, key] = item.split('-');

    let returnValue = [];

    returnValue.push('主');

    if (gameId === '4076') {
        returnValue.push('让');
    }
    switch (key) {
        case '3':
            returnValue.push('胜');
            break;
        case '1':
            returnValue.push('平');
            break;
        case '0':
            returnValue.push('负');
            break;
        default:
            ''
    }

    return returnValue.join('');

}

export const getValidMatches=(matches)=>{
   return  matches.filter((match) => {
        return Object.values(match.comment).filter(value => value === true).length > 0
    });
}





