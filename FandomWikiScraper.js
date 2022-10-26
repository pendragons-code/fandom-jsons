async function retrieve(a){
	const axios = await import("axios")
	const request = {
		method: 'GET',
		url: a	
	}
	let response = await axios.default(request)
	return response
}

module.exports = { retrieve: retrieve }
