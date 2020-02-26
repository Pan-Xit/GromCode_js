import { markFavorites } from './index.js'

const testTree = {
    id: 'id-1',
    name: 'Products',
    nodes: [
        {
            id: 'id-2',
            name: 'Food',
            nodes: []
        },
    ],
};

const testFavorites = ['id-2'];

it('should return tree of objects with marks isFavorite for each nod', () => {
    const resultToString = '{"isFavorite":false,"id":"id-1","name":"Products","nodes":[{"isFavorite":true,"id":"id-2","name":"Food","nodes":[]}]}';

    expect(JSON.stringify(markFavorites(testTree, testFavorites))).toEqual(resultToString)
})