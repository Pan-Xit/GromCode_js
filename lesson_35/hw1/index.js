export const parseUser = (jsonStr) => {
    try {
        const data = JSON.parse(jsonStr)
        return data
    } catch(error) {
        return null
    }
}