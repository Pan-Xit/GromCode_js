function fetchComments(userId, repoId) {
    return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
        .then(response => response.json())
}


export function getMostActiveDevs({ days, userId, repoId }) {
    return fetchComments(userId, repoId)
        .then(commentsData => {

            const commentsCount = countCommetsByUserInTimeInterval(commentsData, days)
                .sort((a, b) => b.count - a.count) // Get the biggest value first

            return commentsCount
                .filter(({ count }) => count === commentsCount[0].count)
        })
}


function countCommetsByUserInTimeInterval(data, daysPast) {
    const periodStart = new Date().setDate(new Date().getDate() - daysPast)
    const commentersInSearchedPeriod = data
        .map(({commit: {author}}) => author)
        .filter(({ date }) => new Date(date).getTime() >= periodStart)

    const uniqCommenters = new Set(commentersInSearchedPeriod.map(({ email }) => email))
    return [...uniqCommenters]
        .map(commenterEmail => {
            const commentsByCommenter = commentersInSearchedPeriod
                .filter(({ email }) => email === commenterEmail)
            return {
                count: commentsByCommenter.length,
                name: commentsByCommenter[0].name,
                email: commenterEmail,
            }
        })
}
