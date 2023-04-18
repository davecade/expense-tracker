import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { UserData } from "./Atoms/Atoms";
import { getInitialDataAsync } from './Api/Api'
import { T_UserData } from "./Types/Types";


function App() {
    const setUserData = useSetRecoilState(UserData);

    const fetchInitialData = async () => {
        const response: T_UserData = await getInitialDataAsync()
        console.log("response", response)
        setUserData(response)
    }

    useEffect(() => {
        fetchInitialData()
    }, []);

    return (
        <div className="App">
            <Navbar />
            <Main />
        </div>
    );
}

export default App;
