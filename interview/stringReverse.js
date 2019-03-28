const stringReverse = str => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
    return newStr;
}
