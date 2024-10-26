// import React from 'react';
// import img1 from '../assets/img1.jpeg';
// import img2 from '../assets/img2.jpeg';
// import img3 from '../assets/img3.jpeg';
// import './ExerciseCards.css';
// import { FaArrowLeft } from 'react-icons/fa';

// const exercises = [
//   { id: 1, name: 'Deep Relaxation', image: img1, description: 'Deep Relaxation' },
//   { id: 2, name: 'Reduce Stress', image: img2, description: 'Reduce Stress' },
//   { id: 3, name: 'Boost Focus', image: img3, description: 'Boost Focus' }
// ];

// function ExerciseCards() {
//   const [selectedExercise, setSelectedExercise] = useState(null);

//   const handleSelectExercise = (exercise) => {
//     setSelectedExercise(exercise);
//   };

//   return (
//     <div className="container">
//       <div className="row text-center">
//         {exercises.map((exercise) => (
//           <div
//             className={`col-md-4 col-sm-12 ${selectedExercise && selectedExercise.id !== exercise.id ? 'hide' : ''} ${selectedExercise?.id === exercise.id ? 'highlight-card' : ''}`}
//             key={exercise.id}
//             onClick={() => handleSelectExercise(exercise)}
//           >
//             <div className="card">
//               <img src={exercise.image} alt={exercise.name} className="card-img-top" />
//               <div className="card-body">
//                 <h5>{exercise.description}</h5>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Display selected exercise details below cards (if any) */}
//       {selectedExercise ? (
//         <div className="selected-exercise-details">
//           <h2>{selectedExercise.name}</h2>
//         </div>
//       ) : (<div><h2>Select a exercise</h2></div>)}
//     </div>
//   );
// }

// export default ExerciseCards;


import React from 'react';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import './ExerciseCards.css';
import { FaArrowLeft } from 'react-icons/fa';

const exercises = [
  { id: 1, name: 'Deep Relaxation', image: img1, description: 'Deep Relaxation' },
  { id: 2, name: 'Reduce Stress', image: img2, description: 'Reduce Stress' },
  { id: 3, name: 'Boost Focus', image: img3, description: 'Boost Focus' }
];

function ExerciseCards({ onSelectExercise, selectedExercise, showAllExercises, onShowAllExercises }) {
  return (
    <div className="exercise-cards-container">
      {!showAllExercises && (
        <button className="show-all-button" onClick={onShowAllExercises}>
          <FaArrowLeft />
        </button>
        // {setSelectedExercise(null)}
      )}

      <div className="row text-center">
        {exercises.map((exercise) => (
          <div
            className={`col-md-4 col-sm-12 ${!showAllExercises && selectedExercise && selectedExercise.id !== exercise.id ? 'hide' : ''} ${selectedExercise?.id === exercise.id ? 'highlight-card' : ''}`}
            key={exercise.id}
            onClick={() => onSelectExercise(exercise)}
          >
            <div className="card">
              <img src={exercise.image} alt={exercise.name} className="card-img-top" />
              <div className="card-body">
                <h5>{exercise.description}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseCards;
