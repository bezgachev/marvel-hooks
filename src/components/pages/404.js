import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from 'react-router-dom';
import {Helmet, HelmetProvider} from "react-helmet-async";

const Page404 = ({link = '/', text = 'Back to main page'}) => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Page doesn't exist"
                    />
                    <title>Page 404</title>
                </Helmet>
            </HelmetProvider>


            <ErrorMessage/>

            <p style={{'textAlign': 'center', 'fontWeight': 'regular', 'fontSize': '24px'}}>Page doesn't exist</p>

            <Link
            className="button button__main"
            style={{'margin': '30px auto 0 auto', 'maxWidth': '170px', 'display': 'block'}}
            to={link}>
                <div className="inner">
                    {text}
                </div>
            </Link>
        </div>
    )
}

export default Page404;