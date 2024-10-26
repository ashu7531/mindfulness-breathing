import React, { useState } from 'react';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import './ExerciseCards.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const exercises = [
  { id: 1, name: 'Box Breathing', image: img1, link: 'https://www.medicalnewstoday.com/articles/321805', timeStamp: {'inhale': 4, 'hold': 4, 'exhale': 4, 'hold': 4} },
  { id: 2, name: 'Reduce Stress', image: img2, link: 'https://www.medicalnewstoday.com/articles/324417', timeStamp: {'inhale': 4, 'hold': 7, 'exhale': 8} },
  { id: 3, name: 'Resonant Breathing', image: img3,  link: 'https://www.healthline.com/health/breathing-exercise#resonant-breathing', timeStamp: {'inhale': 5, 'exhale': 5} }
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
            <a href={currentExercise.link}><h5>{currentExercise.name}</h5></a>
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
