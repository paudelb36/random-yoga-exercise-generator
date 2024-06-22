import React from "react";

// component to display single yoga exercise

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="exercise-card">
      <div className="exercise-text">
        <h2>{exercise.name}</h2>
        <p>
          <b>Description: </b>
          {exercise.description}
        </p>
        <p>
          <b>Impact: </b>
          {exercise.impact}
        </p>
      </div>
      <div className="exercise-image">
        <img src={exercise.imageURL} alt={exercise.name} />
      </div>
    </div>
  );
};

export default ExerciseCard;
