export default async function getPrefCode(req, res) {

    const baseUrl = `https://opendata.resas-portal.go.jp/api/v1/prefectures`
    const getAllPrefCode = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-API-KEY': 'WxVRnBQc8cAeBYOALjXmLL0FzEjphdgxXZI1x46U'
        },
    })

    const data = await getAllPrefCode.json()

    // console.log(data);   
    try {
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}