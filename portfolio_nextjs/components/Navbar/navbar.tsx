import "./navbar.css"
const Navbar = () => {
    return(
        <div className="navbar-wrapper flex justify-center gap-8 p-2">
            <div className="button">About</div>
            <div className="button">Skills</div>
            <div className="button">Projects</div>
            <div className="button">Contact</div>
        </div>
    )
}
export default Navbar;