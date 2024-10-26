import React, { useState, useEffect } from 'react';
import './BreathingSession.css';
import { FaPlay, FaPause } from 'react-icons/fa';
import inhale from '../assets/inhale.mp3';
import exhale from '../assets/exhale.mp3';
import hold from '../assets/hold.mp3';

const breathingInSound = new Audio(inhale);
const breathingOutSound = new Audio(exhale);
const holdingSound = new Audio(hold);

function BreathingSession({ selectedExercise }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState('inhale');
  const [seconds, setSeconds] = useState(4);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let timerInterval = null;
    if (isPlaying) {
      timerInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else {
          switch (phase) {
            case 'inhale':
              setPhase('hold');
              setSeconds(7);
              break;
            case 'hold':
              setPhase('exhale');
              setSeconds(8);
              break;
            case 'exhale':
              setPhase('inhale');
              setSeconds(4);
              break;
            default:
              break;
          }
        }
      }, 1000);
    } else if (!isPlaying && seconds !== 0) {
      clearInterval(timerInterval);
    }
    return () => clearInterval(timerInterval);
  }, [isPlaying, seconds, phase]);

  useEffect(() => {
    if (isPlaying) {
      switch (phase) {
        case 'inhale':
          breathingInSound.play();
          break;
        case 'hold':
          holdingSound.play();
          break;
        case 'exhale':
          breathingOutSound.play();
          break;
        default:
          break;
      }
    }
  }, [phase, isPlaying]);

  return (
    <div className={`breathing-session ${phase}`}>
  <div className="circle-container">
    <div className={`animation-circle ${isPlaying ? 'playing' : ''}`}>
      <div className="phase-text">
        {phase.charAt(0).toUpperCase() + phase.slice(1)}
      </div>
      {isPlaying ? (
        <FaPause className="icon" onClick={togglePlayPause} />
      ) : (
        <FaPlay className="icon" onClick={togglePlayPause} />
      )}
      <p>{seconds} sec</p>
    </div>
  </div>
</div>
  );
}

export default BreathingSession;



