import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';
import exercises from '../data/exercise';
import styled from 'styled-components';

const ExerciseList = () => {

    const [randomExercise, setRandomexercise] = useState(null); // Using useState to keep track of the selected exercise

    //function to generate random exercise

    const handleGenerateExercise = () => {
        const randomIndex = Math.floor(Math.random() * exercises.length); // Generate a random index based on the length of the exercises array
        setRandomexercise(exercises[randomIndex]);  // Update the state with the randomly selected exercise
    };

  return (
    <Container>
      <Button onClick={handleGenerateExercise}>Generate Exercise</Button>

      {randomExercise && <ExerciseCard exercise={randomExercise}/>}
    </Container>
  );
};

export default ExerciseList;

const Container = styled.div`
  
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
    padding: 10px 20px;
    cursor: pointer;
    background-color: #36cbdf;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 10px;
`;