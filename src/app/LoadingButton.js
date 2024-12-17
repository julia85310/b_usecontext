import { useContext } from "react";
import LoadingContext from "./LoadingContext";
import Spinner from "./Spinner";

export default function LoadingButton(){

    const {loading, startLoading, stopLoading} = useContext(LoadingContext);

    function carga(){
        startLoading();/*
        setTimeout(() => {
            stopLoading();
        }, 2000); */
    }

    return (
        loading? <Spinner></Spinner> :
        <button onClick={carga}>Cargar datos</button>
    );
}