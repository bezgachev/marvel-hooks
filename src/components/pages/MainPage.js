import { useState } from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from "../charSearchForm/CharSearchForm";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import SidebarHandler from "../../utils/SidebarHandler";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {
    const [selectedChar, setChar] = useState(null);
    const {elementRefs} = SidebarHandler();

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <> 
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Marvel information portal"
                    />
                    <title>Marvel information portal</title>
                </Helmet>
            </HelmetProvider>

            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundary>
                <div className="char__sidebar" ref={elementRefs}>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharSearchForm/>
                    </ErrorBoundary>
                </div>

            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;