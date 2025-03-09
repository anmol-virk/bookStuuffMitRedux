import { Link } from "react-router-dom"

const Header = () => {

    return(
        <>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
<button><Link to={"/books/add"}>Add a Book</Link></button>         
      </div>
    </div>
  </div>
</nav>
        </>
    )
}

export default Header