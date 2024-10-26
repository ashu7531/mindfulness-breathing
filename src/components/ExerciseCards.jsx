import React, { useState } from 'react';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import './ExerciseCards.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const exercises = [
  { id: 1, name: 'Deep Relaxation', image: img1, description: 'Deep Relaxation' },
  { id: 2, name: 'Reduce Stress', image: img2, description: 'Reduce Stress' },
  { id: 3, name: 'Boost Focus', image: img3, description: 'Boost Focus' }
];

function ExerciseCards({ onSelectExercise }) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentExerciseIndex((prevIndex) => (prevIndex === 0 ? exercises.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentExerciseIndex((prevIndex) => (prevIndex === exercises.length - 1 ? 0 : prevIndex + 1));
  };

  const currentExercise = exercises[currentExerciseIndex];

  return (
    <div className="exercise-cards-container">
      <button className="nav-button left" onClick={handlePrevious}>
          <FaChevronLeft />
        </button>
      <div className="exercise-card highlight-card">
        

        <div className="card" onClick={() => onSelectExercise(currentExercise)}>
          <img src={currentExercise.image} alt={currentExercise.name} className="card-img-top" />
          <div className="card-body">
            <h5>{currentExercise.description}</h5>
          </div>
        </div>

        
      </div>
      <button className="nav-button right" onClick={handleNext}>
          <FaChevronRight />
        </button>
    </div>
  );
}

export default ExerciseCards;
