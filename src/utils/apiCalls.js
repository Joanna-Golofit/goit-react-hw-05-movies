const getApiData = (url) => {
  return fetch(url).then((dataJson) => dataJson.json())    
}

export {getApiData}