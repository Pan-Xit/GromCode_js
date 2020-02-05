export const getOwnProps = (obj) => 
    Object.entries(obj)
    .filter(([_, value]) => typeof value !== 'function')
    .map(([key, _]) => key)