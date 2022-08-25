export default async function getPopulation(req, res) {


    const prefcode = req.query.id;

    const baseUrl = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefcode}`
    const getAllPopulation = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-API-KEY': 'WxVRnBQc8cAeBYOALjXmLL0FzEjphdgxXZI1x46U'
        },
    })

    const data = await getAllPopulation.json()

    // console.log(data);   
    const filteredData = data.result.data;
    try {
        res.json(filteredData);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}