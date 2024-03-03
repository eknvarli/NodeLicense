import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

class License extends Model {}

License.init({
    key: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'License'
});

export default License;