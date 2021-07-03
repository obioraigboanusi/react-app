import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../NavBar';


function AppLayout({ children }) {

    return (
        <>
            <Navbar />
            <main>

                {children}

            </main>
        </>
    )
}

AppLayout.prototype = {
    children: PropTypes.element
};

export default AppLayout;