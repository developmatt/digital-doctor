const getUser = async (user: number) => {
    const res = await fetch(`${process.env.API_URL}users/${user}`)
    if(res.status !== 200) return false
    const json = await res.json()
    return json
}

export default getUser