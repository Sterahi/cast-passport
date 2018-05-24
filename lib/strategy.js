var util     = require('util'),
    Strategy = require('passport-strategy')


function CastStrategy() {
    Strategy.call(this)
}

util.inheirits(CastStrategy, Strategy)
