// import React, { useState } from 'react';
// import './App.css';
// import ExerciseCards from './components/ExerciseCards';
// import BreathingSession from './components/BreathingSession';

// function App() {
//   const [selectedExercise, setSelectedExercise] = useState(null);

//   const handleSelectExercise = (exercise) => {
//     setSelectedExercise(exercise);
//   };

//   return (
//     <div className="App">
//       <ExerciseCards onSelectExercise={handleSelectExercise} />
//       <BreathingSession selectedExercise={selectedExercise} />
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import ExerciseCards from './components/ExerciseCards';
import BreathingSession from './components/BreathingSession';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showAllExercises, setShowAllExercises] = useState(true);

  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
    setShowAllExercises(false); // Show only selected exercise on smaller screens
  };

  const handleShowAllExercises = () => {
    setShowAllExercises(true); // Display all exercises again
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
