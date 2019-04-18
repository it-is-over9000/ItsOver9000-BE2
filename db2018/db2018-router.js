const router = require('express').Router();
const Games = require('./db2018-model.js');

router.post('/', (req, res) => {
    
    // let dummyArray = [];

    // for(let i = 1; i <= 30; i++) {
    //     dummyArray.push(Math.round((Math.random() * 181)));
    // }
    
    let dummyOutlook = Math.round((Math.random() * 70) + 51);

    // for(let i = 0; i < dummyArray.length; i++) {
    //     dummyOutlook = dummyOutlook + dummyArray[i];
    // }
    // console.log(dummyArray);
    // dummyOutlook = Math.round(dummyOutlook/30);
    console.log('Dummy Outlook', dummyOutlook)

    let response = ({dummyOutlook});
    
    res.status(200).json(response);
})



module.exports = router;