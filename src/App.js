import 'styles/styles.css'
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "components/layouts/Navbar"
import Footer from "components/layouts/Footer"
import UserRoutes  from 'pages/users/UserRoutes'





function App() {
  return (
    <>
      <div style={{ minHeight: "10rem", height: "100vh" }}>
        <Router>
          <Navbar />
          <UserRoutes />
          <Footer />
        </Router>
      </div>
    </>
  )
}
export default App
