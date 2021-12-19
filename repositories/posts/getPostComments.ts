const getPostComments = async (id: number) => {
    const res = await fetch(`${process.env.API_URL}posts/${id}/comments`)
    if(res.status !== 200) return false
    const json = await res.json()
    return json
}

export default getPostComments