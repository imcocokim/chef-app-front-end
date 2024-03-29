// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Filter from './components/Filter/Filter'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as filterService from './services/filterService'
import * as dishService from './services/dishService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [filters, setFilters] = useState([])
  const [dishes, setDishes] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchAllFilters = async () => {
      const filterData = await filterService.getAll()
      setFilters(filterData)
    }
    fetchAllFilters()
  }, [])

  const handleDeleteFilter = async (id) => {
    await filterService.deleteFilter(id)
    setFilters(filters.filter(filter => filter._id !== id))
  }

  useEffect(() => {
    const fetchAllDishes = async () => {
      const dishData = await dishService.getAll()
      setDishes(dishData)
    }
    fetchAllDishes()
  }, [])

  const handleAddDish = async (dishData) => {
    try {
      const newDish = await dishService.create(dishData)
      setDishes([...dishes, newDish])
    } catch (error) {
      console.log(error)
    }
  }
  
  

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route 
        path="/" 
        element={
          <Landing 
            user={user} 
            filters={filters} 
            handleDeleteFilter={handleDeleteFilter}
            dishes={dishes}
            handleAddDish={handleAddDish}
            setDishes={setDishes}
          />} 
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
