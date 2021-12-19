const getPost = async (id: number) => {
    const res = await fetch(`${process.env.API_URL}posts/${id}`)
    if(res.status !== 200) return false
    const json = await res.json()
    return json
}

export default getPost