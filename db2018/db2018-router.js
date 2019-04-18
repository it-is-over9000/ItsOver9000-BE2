const router = require('express').Router();
const Games = require('./db2018-model.js');

router.post('/', (req, res) => {
    
    let dummyArray = [];

    for(let i = 1; i <= 30; i++) {
        dummyArray.push((Math.random() * 2) - 1);
    }
    
    let dummyOutlook = 0;

    for(let i = 0; i < dummyArray.length; i++) {
        dummyOutlook = dummyOutlook + dummyArray[i];
    }
    console.log(dummyArray);
    dummyOutlook = Math.round(dummyOutlook/10);

    let response = ({dummyArray, dummyOutlook});
    
    res.status(200).json(response);
})



module.exports = router;