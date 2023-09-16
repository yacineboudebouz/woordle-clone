import { useState } from "react"

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);// each guess is an array
    const [history, setHistory] = useState([]);// each guess is a string
    const [isCorrect, setIsCorrect] = useState(false);

    // format into array of letter objects
    const formatGuess = () => { };
    // guess array
    const addNewGuess = () => { };
    // handle and track current guess
    const handleKeyUp = () => { };

    return { turn, currentGuess, guesses, isCorrect, handleKeyUp }
}

export default useWordle;