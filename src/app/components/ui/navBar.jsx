import React from "react"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <ul className="nav ">
                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/">
                            Главная
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/historyOperations">
                            История операций
                        </Link>
                    </li>
                </ul>
            </div>
                <div>
                    <button>
                        Войти
                    </button>
                </div>
        </div>
    )
}

export default NavBar