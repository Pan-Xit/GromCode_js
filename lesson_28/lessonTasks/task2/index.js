export function markFavorites(tree, favorites) {
    isFavorite = favorites.includes(tree.id)

    return {
        isFavorite,
        ...tree,
        nodes: tree.nodes.map(nod => markFavorites(nod, favorites)),
    }
}