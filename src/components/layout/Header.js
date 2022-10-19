import React from 'react';

import '../../styles/components/layout/Header.css'

const Header = (props) => {

    return (
        <header>
            <h1>
                <div class="Titulo">
                    <a class="faro" href="index.html">
                        <img src='img/Logo1.jpg' class="logo" alt="" />
                    </a>
                </div>

                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />

                    <button class="btn lupa1" type="submit">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </h1>
        </header>
    );

}

export default Header;