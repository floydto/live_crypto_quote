import React from 'react';
import { Link } from 'gatsby';

function Navbar() {
    return (
        <div>
            <Link to="/spot">spot</Link><br />
            <Link to="/future">future</Link>
        </div>
    )
}

export default Navbar
