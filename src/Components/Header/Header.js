import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{

    render(){
        return(
            <div className='header'>
                <h1>Shelfie</h1>
                <Link to='/' className='header_button'><div>Dashboard</div></Link>
                <Link to='/add' className='header_button'><div>Add to Inventory</div></Link>
            </div>
        )
    }

}

export default Header;