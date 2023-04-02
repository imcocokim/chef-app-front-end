import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/filters`

async function getAll() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function deleteFilter(filterId) {
  const res = await fetch(`${BASE_URL}/${filterId}`, {
    method: 'DELETE',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  return await res.json()
}


export { 
  getAll,
  deleteFilter
}
