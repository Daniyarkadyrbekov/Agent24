/**
 * Created by daniarkadyrbekov on 16.05.17.
 */
'use strict';

const expr = require("express");

const app = expr();

app.use(expr.static('./'));

app.listen(process.env.PORT || 3000, '0.0.0.0', function () {
    console.log(`Example app listening on port ${process.env.PORT || 3000} !`);
});