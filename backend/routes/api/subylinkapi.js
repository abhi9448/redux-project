const express = require("express");
const router = express.Router();
const db = require("../../db/mongodb");
const tablename = 'subtutorials';

router.get('/ylinkapi/:sub/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const subject = req.params.sub;
    //console.log(req.params);
    const condition = {"sub":subject}
    db.get().collection(tablename)
        .find(condition).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

router.get('/ylink/:ylinkid/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const yid = req.params.ylinkid;
    //console.log(req.params);
    const condition = { "ylinks.id" : yid}
    db.get().collection(tablename)
        .find(condition, ).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

router.post('/ylinkapi/', function(req, res) {
    const {sub, srno, title, ylink, id} = req.body;
    //console.log(req.body);
    const ylinks = {
        "srno": srno,
        "title": title,
        "ylink": ylink,
        "id": id,
    }
    const udata = db.get().collection(tablename)
                    .update(
                        { sub: sub},
                        {$push: {'ylinks': ylinks }},
                        function (err, results) {
                            console.log(results);
                            res.send({error: err, affected: results});
                            //db.get().close();
                        }
                    );
    console.log(udata);
});

module.exports = router;