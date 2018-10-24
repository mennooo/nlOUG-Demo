/* global demo $ */
demo.location = {}

;((location) => {
  // Using a REST api to get locations in the Netherlands
  const version = 'v3'
  const baseUrl = `https://geodata.nationaalgeoregister.nl/locatieserver/${version}/`
  const suggestUrl = `${baseUrl}/suggest?q=`
  const lookupUrl = `${baseUrl}/lookup?id=`

  // Handler to do REST requests and parse response
  async function request (url, query) {
    const result = await $.getJSON(url + query)
    if (result.response.docs[0]) {
      return result.response.docs[0]
    } else {
      throw new Error('Could not get location')
    }
  }

  // Take an address and return address details as a promise
  async function getAddress (addressQuery) {
    const suggestion = await request(suggestUrl, addressQuery)
    const address = await request(lookupUrl, suggestion.id)
    return `The city is ${address.woonplaatsnaam} and the zipcode is ${address.postcode}`
  }

  // export public functions
  location.getAddress = getAddress
})(demo.location)
