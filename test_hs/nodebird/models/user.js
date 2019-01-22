module.exports = (sequelize, Datatypes) => (
    sequelize.defime('user', {
        email: {
            type: Datatypes.STRING(40),
            allowNull: false,
            unique: true
        },
        nick: {
            type: Datatypes.STRING(15),
            allowNull: false
        },
        password: {
            type: Datatypes.STRING(100),
            allowNull: true
        },
        provier: {
            type: Datatypes.STRING(10),
            allowNull: false,
            defaultValue: 'local'
        },
        snsId: {
            type: Datatypes.STRING(30),
            allowNull: true
        }
    }, {
        timestamp: true,
        paranoid: true
    }));