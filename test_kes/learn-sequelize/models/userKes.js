module.exports = (sequelize, DataTypes) => {
    return sequelize.define('userKes', {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('now()'),
      },
    }, {
      timestamps: false,
    });
  };
  