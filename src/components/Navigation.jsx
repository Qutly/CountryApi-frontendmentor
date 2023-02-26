import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/Navigation.css";
import styled from "styled-components";

const NavStyled = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
top: 0;
position: fixed;
align-items: center;
background-color: ${(props) => props.theme.input};
color: ${(props) => props.theme.tittles};
box-shadow: 1px 1px 1px 1px ${(props) => props.theme.shadows};
z-index: 1;

@media only screen and (max-width:425px) {
    font-size: xx-small;
    padding-bottom: .5rem;
    alignt-items: center;
    padding-top: .5em;
}
`

const Navigation = ({ changeTheme, mode }) => {
    return (
            <NavStyled>
                <h2 className="navbar-left">Where in the world?</h2>
                    {mode === "light"
                    ?
                    <div className="website-mode">
                        <i onClick={(e) => changeTheme()} className="icon bi bi-brightness-high-fill"></i>
                        <p className="navbar-right">Light Mode</p>
                    </div>
                    :
                    <div className="website-mode">
                        <i onClick={(e) => changeTheme()} className="icon bi bi-moon-fill"></i>
                        <p className="navbar-right">Dark Mode</p>
                    </div>
                    }
            </NavStyled>   
    )
}

export default Navigation