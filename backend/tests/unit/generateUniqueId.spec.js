const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique id', () => {
    it('should generate an unique Id', () => {
        const id_test = generateUniqueId();
        expect(id_test).toHaveLength(8);
    });
});