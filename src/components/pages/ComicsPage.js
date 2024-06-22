import {Helmet, HelmetProvider} from "react-helmet-async";

import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const ComicsPage = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Page with list of our comics"
                    />
                    <title>Comics page</title>
                </Helmet>
            </HelmetProvider>

            <AppBanner/>

            <ErrorBoundary>
                <ComicsList/>
            </ErrorBoundary>
        </>
    )
}

export default ComicsPage;