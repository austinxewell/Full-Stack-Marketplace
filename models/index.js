const User = require('./User');
const NewListing = require('./NewListing');

User.hasMany(NewListing, {
    foreignKey: 'user_id'
});

NewListing.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, NewListing };