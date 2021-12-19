const getTodos = async (page?: number) => {
    const res = await fetch(`${process.env.API_URL}todos${page ? `?page=${page}` : ''}`)
    if(res.status !== 200) return false
    const json = await res.json()
    return json
}

export default getTodos