let link = "https://typemoon.fandom.com/wiki/Galahad"
async function retrieve(a){
	const axios = await import("axios")
	const request = {
		method: 'GET',
		url: a	
	}
	let response = await axios.default(request)
	return response
}

async function potato(link){
	console.log( await retrieve(link))
}
potato(link)
