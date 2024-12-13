import React from 'react'
import Cookies from 'universal-cookie';
const App = () => {
    const cookies = new Cookies(null, { path: '/' });
    cookies.set('token', '1gh231g3h12g3h12g3h12gh');
    console.log(cookies.get('token'));
    return (
        <div>

        </div>
    )
}

export default App