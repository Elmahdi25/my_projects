import { Component } from "react";
import imoji from '../images/imoji.png';
import './style/NoPage.css'
class NoPage extends Component {
    render() {
        return (
            <div>
                <body className="NoPage">
                    <img src={imoji} />
                    <h1>404</h1>
                    <h4>Page not found</h4>
                    <h2>Oops! The page you're looking for seems to be on a coffee break.</h2>
                </body>

            </div>
        );
    }
}
export default NoPage;