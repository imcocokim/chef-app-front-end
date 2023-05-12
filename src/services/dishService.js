import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/dishes`

async function getAll() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}
async function create(postDish) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postDish)
  })
  return await res.json()
}




export { 
  getAll,
  create

}
