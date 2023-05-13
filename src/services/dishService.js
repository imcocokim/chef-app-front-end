import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/dishes`

async function getAll() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch data')
  }
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

async function deleteDish(dishId) {
  const res = await fetch(`${BASE_URL}/${dishId}`, {
    method: 'DELETE',
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
  })
  return await res.json()
}

async function editDish(dishId, updatedFields) {
  const res = await fetch(`${BASE_URL}/${dishId}`, {
    method: 'PUT',
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedFields)
  })
  return await res.json()
}




export { 
  getAll,
  create,
  deleteDish,
  editDish

}
