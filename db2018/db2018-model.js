const db = require('../data/dbConfig.js');

module.exports = {
    dummyPost
}

async function dummyPost(fen) {
    // this would typically access a db, but I'm going to set up the dummyInfo here
    const dummyArray = [];

    for(let i = 1; i <= 10; i++) {
        dummyArray.push((Math.random() * 3) - 1);
    }
    
    const dummyOutlook = 0;

    for(let i = 0; i < dummyArray.length; i++) {
        dummyOutlook = dummyOutlook + dummyArray[i];
    }

    dummyOutlook = Math.round(dummyOutlook/10);

    return ({dummyArray, dummyOutlook});
}