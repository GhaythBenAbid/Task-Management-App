const router = require('express').Router();
const client = require('../models/client');
const bcrypt = require('bcrypt');


router.post('/register', (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const user = new client({
        username : req.body.username,
        email : req.body.email,
        password : hashedPassword
    });

    user.save((err) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'User created!'});
    });

});


router.post('/login', (req, res) => {
    client.findOne({email: req.body.email}, (err, user) => {
        if(err) {
            res.json(err);
        }
        if(!user) {
            res.json({message: 'User not found'});
        }
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                res.json({
                    message : "User found",
                    user : user
                
                });
            } else {
                res.json({message: 'Incorrect password'});
            }
        }
    });
});


//get all users
router.get('/', (req, res) => {
    client.find({}, (err, users) => {
        if(err) {
            res.send(err);
        }
        res.json(users);
    });
});

//delete user
router.delete('/:id', (req, res) => {
    client.remove({_id: req.params.id}, (err, user) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'User deleted'});
    });
});




module.exports = router;