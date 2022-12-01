import React from 'react';

import '../../styles/components/layout/Header.css'

const Header = (props) => {

    return (
        <header>
            <h1>
                <div class="Titulo">
                    <a class="faro" href="/">
                        <img src='img/Logo1.jpg' class="logo" alt="" />
                    </a>
                </div>
            </h1>
        </header>
    );

}

export default Header;