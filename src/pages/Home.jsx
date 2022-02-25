import Header from "../components/Header";
import Router from "../routers/Router";
import { BrowserRouter } from "react-router-dom";

const Home = () => {
    return (      
        <>      
            <BrowserRouter>
                <Header />
                <br/><br/>
                <Router />
            </BrowserRouter>
        </>
    );
}

export default Home;