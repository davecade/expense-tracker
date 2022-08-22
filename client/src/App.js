import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import {
    GetInitialData,
    AmountState,
    Savings,
    CarExpenses,
} from "./Atoms/Atoms";

function App() {
    const initialData = useRecoilValue(GetInitialData);
    const setAmount = useSetRecoilState(AmountState);
    const setSavings = useSetRecoilState(Savings);
    const setCarExpenses = useSetRecoilState(CarExpenses);

    const setInitialData = () => {
        setAmount(initialData.savings.total + initialData.carExpenses.total);
        setSavings(initialData.savings.total);
        setCarExpenses(initialData.carExpenses.total);
    };

    useEffect(() => {
        setInitialData();
    }, []);
      
    return (
        <div className="App">
            <Navbar />
            <Main />
        </div>
    );
}

export default App;
