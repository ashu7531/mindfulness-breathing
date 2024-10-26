import React, { useState } from 'react';
import './App.css';
import ExerciseCards from './components/ExerciseCards';
import BreathingSession from './components/BreathingSession';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showAllExercises, setShowAllExercises] = useState(true);

  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
    setShowAllExercises(false);
  };

  const handleShowAllExercises = () => {
    setShowAllExercises(true);
  };

  return (
    <div className="App">
      <div className="exercise-box">
        <ExerciseCards
          onSelectExercise={handleSelectExercise}
          selectedExercise={selectedExercise}
          showAllExercises={showAllExercises}
          onShowAllExercises={handleShowAllExercises}
        />
      </div>
      <div className="breathing-session-box">
        <BreathingSession selectedExercise={selectedExercise} />
      </div>
    </div>
  );
}

export default App;
