const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');  

// add prefix of '/comments' and '/pizzas' to routes created in 'comments-routes, and 'pizza-routes.js' respectively
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);



module.exports = router;