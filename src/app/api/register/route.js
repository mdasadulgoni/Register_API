// 1. Import Area

const URL = process.env.STRAPI_BASE_URL
// 2. Define Area
async function POST(req){
    // Recieve the payload
    const res = await req.json()

    // Call the straoi API
    const res2 = await fetch(`${URL}/api/auth/local/register`,{
                                method: 'POST',
                                headers: {
                                            'Content-Type': 'application/json',
                                         },
                                 body: JSON.stringify(res),
                            });
    const data = await res2.json()

    // return statment 
    return Response.json(
        {
            mag:"Hi",
            data:res,
            data2:data
        }
    )
}

// 3. Export Area
// 3.1 Default Expoer
// 3.2 Named Export
module.exports = {POST}