const getPosts = async (page?: number) => {
    const res = await fetch(`${process.env.API_URL}posts${page ? `?page=${page}` : ''}`)
    if(res.status !== 200) return false
    const json = await res.json()
    return json
}

export default getPosts