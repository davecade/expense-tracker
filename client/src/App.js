import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getInitialData } from "./Atoms/Atoms";

function App() {
    const [initialData, setInitialData] = useRecoilState(getInitialData);

    useEffect(() => {
        setInitialData(initialData);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="App">
            <Navbar />
            <Main />
        </div>
    );
}

export default App;
