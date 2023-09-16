import { useState } from "react"
import Wordle from "../components/Wordle";

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);// each guess is an array
    const [history, setHistory] = useState([]);// each guess is a string
    const [isCorrect, setIsCorrect] = useState(false);

    // format into array of letter objects
    const formatGuess = () => {

    };
    // guess array
    const addNewGuess = () => { };
    // handle and track current guess
    const handleKeyUp = ({ key }) => {
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            })
        }
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {

                    return prev + key;

                })
            }
        }

    };

    return { turn, currentGuess, guesses, isCorrect, handleKeyUp }
}

export default useWordle;