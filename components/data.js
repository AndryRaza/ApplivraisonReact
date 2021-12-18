export async function getPacks(){
    //const token_ = await getToken()
    //const response = await fetch(API_URL+ '/activities',
    const response = await fetch('http://10.0.2.2:8000/api/packs',
    {
        method:"GET",
        headers: {
            'Accept': 'application/json', 
            'Content-Type' : 'application/json',
            //'Authorization': 'Bearer ' + token_
        }
    })
    const result = await response.json();
    return result;
};

export async function getPack(id){
    console.log(id)
    const response = await fetch('http://10.0.2.2:8000/api/pack/'+id,
    {
        method:"GET",
        headers: {
            'Accept': 'application/json', 
            'Content-Type' : 'application/json',
        }
    })
    const result = await response.json();
    console.log(result)
    return result;
};

