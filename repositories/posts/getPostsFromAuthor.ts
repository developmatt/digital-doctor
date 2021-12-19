const getPostsFromAuthor = async (id: number) => {
    const res = await fetch(`${process.env.API_URL}users/${id}/posts`)
    if(res.status !== 200) return false
    const json = await res.json()
    return json
}

export default getPostsFromAuthor