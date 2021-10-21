// link from react allows the page to load faster by not refreshing the page"
import { Link } from "react-router-dom"

const footer = () => {
    return (
        <footer className="">
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default footer
