import React from "react";
import { Link } from "react-router-dom";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useParams } from "react-router-dom";

const Timer = () => {
    let { task } = useParams();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: 'dark:text-white' }}>
                {task}
            </h1>
            
            <CountdownCircleTimer
                isPlaying
                duration={60}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[45, 30, 15, 0]}
                size={400} // Decreased the size
            >
                {({ remainingTime }) => (
                    <div style={{ fontSize: '10vw', fontWeight: 'bold', color: 'white' }}>
                        {remainingTime}
                    </div>
                )}
            </CountdownCircleTimer>

            <Link to="/activity">
                <button
                    style={{
                        marginTop: '20px', // Added margin-top for space
                        background: '#d08b2a',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '5px',
                        fontSize: '1.5rem', // Increased font size
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                >
                    Exit
                </button>
            </Link>
        </div>
    );
};

export default Timer;
