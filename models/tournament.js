module.exports = function(sequlize, DataTypes) {
  const Tournament = sequlize.define("tournament", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    tournamentName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    teamAmount: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Tournament;
};
