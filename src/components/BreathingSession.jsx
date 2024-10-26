// import React, { useState, useEffect } from 'react';
// import './BreathingSession.css';
// import { FaPlay, FaPause } from 'react-icons/fa'; // Import play and pause icons
// import inhale from '../assets/inhale.mp3';
// import exhale from '../assets/exhale.mp3';
// import hold from '../assets/hold.mp3'; // New hold sound

// // Create audio objects
// const breathingInSound = new Audio(inhale);
// const breathingOutSound = new Audio(exhale);
// const holdingSound = new Audio(hold); // New hold sound object

// function BreathingSession({ selectedExercise }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [phase, setPhase] = useState('inhale'); // Track current phase
//   const [seconds, setSeconds] = useState(4); // Start with inhale time

//   // Function to toggle between play and pause
//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   // Effect to handle breathing timer and phase transitions
//   useEffect(() => {
//     let timerInterval = null;
//     if (isPlaying) {
//       timerInterval = setInterval(() => {
//         if (seconds > 0) {
//           setSeconds((prev) => prev - 1);
//         } else {
//           switch (phase) {
//             case 'inhale':
//               setPhase('hold');
//               setSeconds(7); // Set to hold time
//               break;
//             case 'hold':
//               setPhase('exhale');
//               setSeconds(8); // Set to exhale time
//               break;
//             case 'exhale':
//               setPhase('inhale');
//               setSeconds(4); // Reset to inhale time
//               break;
//             default:
//               break;
//           }
//         }
//       }, 1000);
//     } else if (!isPlaying && seconds !== 0) {
//       clearInterval(timerInterval);
//     }
//     return () => clearInterval(timerInterval);
//   }, [isPlaying, seconds, phase]);

//   // Effect to play the appropriate sound based on the breathing cycle
//   useEffect(() => {
//     if (isPlaying) {
//       switch (phase) {
//         case 'inhale':
//           breathingInSound.play();
//           break;
//         case 'hold':
//           holdingSound.play();
//           break;
//         case 'exhale':
//           breathingOutSound.play();
//           break;
//         default:
//           break;
//       }
//     }
//   }, [phase, isPlaying]); // Plays the sound when phase changes and if it's playing

//   return (
//     <div className={`breathing-session ${phase}`}>
//       <div className="circle-container">
//         <div className="animation-circle">
//           {isPlaying ? (
//             <FaPause className="icon" onClick={togglePlayPause} />
//           ) : (
//             <FaPlay className="icon" onClick={togglePlayPause} />
//           )}
//           <p>{seconds} sec</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BreathingSession;


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
    if (selectedExercise) {
      setIsPlaying(!isPlaying);
    }
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
        <div className="animation-circle">
          {isPlaying ? (
            <FaPause className="icon" onClick={togglePlayPause} />
          ) : (
            <FaPlay className="icon" onClick={togglePlayPause} style={{ animation: !selectedExercise ? 'blink 1s infinite' : 'none' }} />
          )}
          <p>{seconds} sec</p>
          
        </div>
      </div>
      {!selectedExercise && <p className="blink-text">Select an exercise to start</p>}
    </div>
  );
}

export default BreathingSession;
