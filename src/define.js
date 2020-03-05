import { memoize } from 'cerebro-tools'

const getDefinitions = (query) => {
    const q = encodeURIComponent(query)
    const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${q}?key=3b81631f-8ab7-4d24-aeff-c5e83e091b17`
    return fetch(url)
        .then(response => response.json())
        .then(response => {
            var res = response || []
            res['title'] = query
            return res
        })
}


export default memoize(getDefinitions, {
  length: false,
  promise: 'then',
  // Expire translation cache in 30 minutes
  maxAge: 30 * 60 * 1000,
  preFetch: true
})