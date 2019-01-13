import head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <head>
            <title>NextJS App</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css"/>
        </head>
        <Navbar/>
        <div className="container">
        {props.children}
        </div>
    </div>
);

export default Layout;