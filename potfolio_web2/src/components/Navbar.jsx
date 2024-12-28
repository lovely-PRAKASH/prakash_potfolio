import "./Navbar.scss"
const Navbar = () => {
    return (
        // nav compo created
        <div className="navbar">
            <div className="wrapper">
                <span>Prakash Arthanarisamy</span>
                <div className="social">
                    <a href="#"><img src="./facebook.png" alt="facebook" /></a>
                    <a href="#"><img src="./instagram.png" alt="" /></a>
                    <a href="#"><img src="./youtube.png" alt="" /></a>
                    <a href="#"><img src="./dribbble.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
