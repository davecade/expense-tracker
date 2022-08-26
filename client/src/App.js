import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    getInitialData,
    savings,
    carExpenses,
    uberTax,
    petrol,
    loans,
} from "./Atoms/Atoms";

function App() {
    const initialData = useRecoilValue(getInitialData);
    const setSavings = useSetRecoilState(savings);
    const setCarExpenses = useSetRecoilState(carExpenses);
    const setUberTax = useSetRecoilState(uberTax);
    const setPetrol = useSetRecoilState(petrol);
    const setLoans = useSetRecoilState(loans);

    const setInitialData = () => {
        setSavings(initialData.savings.total);
        setCarExpenses(initialData.carExpenses.total);
        setUberTax(initialData.uberTax.total);
        setPetrol(initialData.petrol.total);
        setLoans(initialData.loans.total);
    };

    useEffect(() => {
        setInitialData();
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
