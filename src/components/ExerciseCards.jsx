// import React, { useState } from 'react';
// import img1 from '../assets/img1.jpeg';
// import img2 from '../assets/img2.jpeg';
// import img3 from '../assets/img3.jpeg';
// import './ExerciseCards.css';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const exercises = [
//   { id: 1, name: 'Box Breathing', image: img1, link: 'https://www.medicalnewstoday.com/articles/321805', timeStamp: {'inhale': 4, 'hold': 4, 'exhale': 4, 'hold': 4} },
//   { id: 2, name: 'Reduce Stress', image: img2, link: 'https://www.medicalnewstoday.com/articles/324417', timeStamp: {'inhale': 4, 'hold': 7, 'exhale': 8} },
//   { id: 3, name: 'Resonant Breathing', image: img3,  link: 'https://www.healthline.com/health/breathing-exercise#resonant-breathing', timeStamp: {'inhale': 5, 'exhale': 5} }
// ];

// function ExerciseCards({ onSelectExercise }) {
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

//   const handlePrevious = () => {
//     setCurrentExerciseIndex((prevIndex) => (prevIndex === 0 ? exercises.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentExerciseIndex((prevIndex) => (prevIndex === exercises.length - 1 ? 0 : prevIndex + 1));
//   };

//   const currentExercise = exercises[currentExerciseIndex];

//   return (
//     <div className="exercise-cards-container">
//       <button className="nav-button left" onClick={handlePrevious}>
//           <FaChevronLeft />
//         </button>
//       <div className="exercise-card highlight-card">
        

//         <div className="card" onClick={() => onSelectExercise(currentExercise)}>
//           <img src={currentExercise.image} alt={currentExercise.name} className="card-img-top" />
//           <div className="card-body">
//             <a href={currentExercise.link}><h5>{currentExercise.name}</h5></a>
//           </div>
//         </div>

        
//       </div>
//       <button className="nav-button right" onClick={handleNext}>
//           <FaChevronRight />
//         </button>
//     </div>
//   );
// }

// export default ExerciseCards;

import React, { useState } from 'react';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import './ExerciseCards.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Updated exercises array with goal attribute
const exercises = [
  { id: 1, name: 'Box Breathing', image: img1, link: 'https://www.medicalnewstoday.com/articles/321805', timeStamp: { inhale: 4, holdIn: 4, exhale: 4, holdOut: 4 }, goal: 'Focus' },
  { id: 2, name: 'Reduce Stress (4-7-8)', image: img2, link: 'https://www.medicalnewstoday.com/articles/324417', timeStamp: { inhale: 4, holdIn: 7, exhale: 8 }, goal: 'Calm' },
  { id: 3, name: 'Resonant Breathing', image: img3, link: 'https://www.healthline.com/health/breathing-exercise#resonant-breathing', timeStamp: { inhale: 5, exhale: 5 }, goal: 'Relaxation' },
  { id: 4, name: 'Equal Breathing', image: img1, link: 'https://www.example.com', timeStamp: { inhale: 4, exhale: 4 }, goal: 'Calm' },
  { id: 5, name: 'Pursed-Lip Breathing', image: img2, link: 'https://www.example.com', timeStamp: { inhale: 2, exhale: 4 }, goal: 'Relaxation' },
  { id: 6, name: 'Breath Counting', image: img3, link: 'https://www.example.com', timeStamp: {}, goal: 'Focus' },
  { id: 7, name: 'Kapalabhati Pranayama', image: img1, link: 'https://www.example.com', timeStamp: { exhale: 1, inhale: 1 }, goal: 'Focus' },
];

function ExerciseCards({ onSelectExercise }) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [filter, setFilter] = useState('All'); // Initialize filter state

  const handlePrevious = () => {
    setCurrentExerciseIndex((prevIndex) => (prevIndex === 0 ? filteredExercises.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentExerciseIndex((prevIndex) => (prevIndex === filteredExercises.length - 1 ? 0 : prevIndex + 1));
  };

  // Filter exercises based on selected goal
  const filteredExercises = filter === 'All' ? exercises : exercises.filter(ex => ex.goal === filter);

  const currentExercise = filteredExercises[currentExerciseIndex];

  return (
    <div className='outer-container'>
      <div className="filter-container">
        <select
          id="filter"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentExerciseIndex(0); // Reset to first item of filtered list
          }}
        >
          <option value="All">All Goals</option>
          <option value="Focus">Focus</option>
          <option value="Calm">Calm</option>
          <option value="Relaxation">Relaxation</option>
        </select>
      </div>

      <div className="exercise-cards-container">
        <button className="nav-button left" onClick={handlePrevious}>
          <FaChevronLeft />
        </button>
        
        <div className="exercise-card highlight-card">
          <div className="card" onClick={() => onSelectExercise(currentExercise)}>
            <img src={currentExercise.image} alt={currentExercise.name} className="card-img-top" />
            <div className="card-body">
  <a href={currentExercise.link}><h5>{currentExercise.name}</h5></a>
  <div className='time-stamp-container'>
    {Object.entries(currentExercise.timeStamp).map(([key, value]) => (
      <p key={key}>
        {`${key.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + key.slice(1)}: ${value}s`}
      </p>
    ))}
  </div>
</div>

          </div>
        </div>
        
        <button className="nav-button right" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default ExerciseCards;
