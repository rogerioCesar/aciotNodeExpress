const pointModels = require('../../model/point');
const policyModels = require('../../model/policy');

module.exports = {
    RootQuery: {
        findAllPoints: async() => {
            try {
                const getPoint = await pointModels.find();
                return getPoint;
            } catch (error) {
                return error;
            }
        },

        findAllPolicies: async() => {
            try {
                const getPolicies = await policyModels.find();
                return getPolicies;
            } catch (error) {
                return error;
            }
        }
    }
}