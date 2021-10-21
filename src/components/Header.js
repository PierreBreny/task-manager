import PropTypes from "prop-types"
import { useLocation } from "react-router"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            {/* This line allows to see on which root we are currently on */}
            {location.pathname === "/" && (
            <Button color={showAdd ? "red" : "black"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: "Task Manager",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
