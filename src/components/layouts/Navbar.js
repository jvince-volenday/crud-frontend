import { Link } from "react-router-dom"
import { useRouteMatch } from "react-router-dom"




const color = "#f3f3f3"
const styles = {
  li: {
    height: "100%",
    color
  },
  link: {
    height: "100%",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    color
  }
}


function Navbar() {
 
  const links = [
    {
      title: "Users",
      slug: "users"
    },
    {
      title: "Create User",
      slug: "create-user"
    },
    /*{
      title: "Update User",
      slug: "update-user"
    },*/
  ]





  return (
    <>        
      <div style={{ height: "7rem", width: "100%", margin: "auto", boxShadow: "0 2px 10px black" }}>
        <div style={{ height: "100%", width: "90%", margin: "auto", paddingTop: "5px", display: "flex", justifyContent: "space-between" }}>
          <div style={{ ...styles.li, margin: 0 }}>
            <Link to="/create-user" style={{ ...styles.link }}>CRUD</Link>
          </div>

          <ul style={{ height: "100%", display: "flex" }}>
            {
              links
              ? links.length > 0 
                ? links.map((obj, i) => 
                  <NavbarLink key={obj.slug} slug={obj.slug} title={obj.title} /> ) 
                : null
              : null
            }

          </ul>
        </div>
      </div>
    </>
  )
}
export default Navbar





function NavbarLink({slug,title}) {

  const match = useRouteMatch()
  const link = `${match.url.split('/')[0]}/${slug}`


  return (
    <>
      <li style={{ ...styles.li }}>
        <Link to={link} style={{ ...styles.link }}>{title}</Link>
      </li>
    </>
  )
}
