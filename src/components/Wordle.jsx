import React, { useEffect } from 'react'
import useWordle from '../hooks/UseWoordle'
import Grid from './Grid';

export default function Wordle({ solution }) {
    const { turn, currentGuess, guesses, isCorrect, handleKeyup } = useWordle(solution);
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);
        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup])
    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])
    return (
        <div>
            <div>solution - {solution}</div>
            <div>Current guess - {currentGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        </div>
    )
}
