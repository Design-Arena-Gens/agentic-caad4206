'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedFoot, setSelectedFoot] = useState<'left' | 'right' | null>(null);
  const [hoveredToe, setHoveredToe] = useState<number | null>(null);

  const Foot = ({ side, flipped }: { side: 'left' | 'right', flipped?: boolean }) => {
    const isSelected = selectedFoot === side;

    return (
      <div
        style={{
          position: 'relative',
          width: '300px',
          height: '400px',
          cursor: 'pointer',
          transform: flipped ? 'scaleX(-1)' : 'none',
          transition: 'transform 0.3s ease',
        }}
        onClick={() => setSelectedFoot(side)}
        onMouseEnter={() => setSelectedFoot(side)}
      >
        <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
          {/* Foot shape */}
          <ellipse
            cx="150"
            cy="250"
            rx="70"
            ry="140"
            fill="#f5d7c3"
            stroke="#d4a373"
            strokeWidth="2"
            style={{
              filter: isSelected ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' : 'drop-shadow(0 5px 10px rgba(0,0,0,0.2))',
              transition: 'filter 0.3s ease'
            }}
          />

          {/* Big toe */}
          <g onMouseEnter={() => setHoveredToe(0)} onMouseLeave={() => setHoveredToe(null)}>
            <ellipse
              cx="180"
              cy="90"
              rx="28"
              ry="38"
              fill="#f5d7c3"
              stroke="#d4a373"
              strokeWidth="2"
            />
            <ellipse
              cx="180"
              cy="75"
              rx="22"
              ry="18"
              fill="#000000"
              style={{
                filter: hoveredToe === 0 ? 'brightness(1.2)' : 'brightness(1)',
                transition: 'filter 0.2s ease'
              }}
            />
          </g>

          {/* Second toe */}
          <g onMouseEnter={() => setHoveredToe(1)} onMouseLeave={() => setHoveredToe(null)}>
            <ellipse
              cx="165"
              cy="50"
              rx="20"
              ry="30"
              fill="#f5d7c3"
              stroke="#d4a373"
              strokeWidth="2"
            />
            <ellipse
              cx="165"
              cy="38"
              rx="16"
              ry="14"
              fill="#000000"
              style={{
                filter: hoveredToe === 1 ? 'brightness(1.2)' : 'brightness(1)',
                transition: 'filter 0.2s ease'
              }}
            />
          </g>

          {/* Middle toe */}
          <g onMouseEnter={() => setHoveredToe(2)} onMouseLeave={() => setHoveredToe(null)}>
            <ellipse
              cx="145"
              cy="40"
              rx="18"
              ry="28"
              fill="#f5d7c3"
              stroke="#d4a373"
              strokeWidth="2"
            />
            <ellipse
              cx="145"
              cy="28"
              rx="14"
              ry="12"
              fill="#000000"
              style={{
                filter: hoveredToe === 2 ? 'brightness(1.2)' : 'brightness(1)',
                transition: 'filter 0.2s ease'
              }}
            />
          </g>

          {/* Fourth toe */}
          <g onMouseEnter={() => setHoveredToe(3)} onMouseLeave={() => setHoveredToe(null)}>
            <ellipse
              cx="125"
              cy="50"
              rx="16"
              ry="26"
              fill="#f5d7c3"
              stroke="#d4a373"
              strokeWidth="2"
            />
            <ellipse
              cx="125"
              cy="38"
              rx="12"
              ry="11"
              fill="#000000"
              style={{
                filter: hoveredToe === 3 ? 'brightness(1.2)' : 'brightness(1)',
                transition: 'filter 0.2s ease'
              }}
            />
          </g>

          {/* Pinky toe */}
          <g onMouseEnter={() => setHoveredToe(4)} onMouseLeave={() => setHoveredToe(null)}>
            <ellipse
              cx="108"
              cy="70"
              rx="14"
              ry="22"
              fill="#f5d7c3"
              stroke="#d4a373"
              strokeWidth="2"
            />
            <ellipse
              cx="108"
              cy="60"
              rx="10"
              ry="10"
              fill="#000000"
              style={{
                filter: hoveredToe === 4 ? 'brightness(1.2)' : 'brightness(1)',
                transition: 'filter 0.2s ease'
              }}
            />
          </g>

          {/* Shine effect on nails */}
          {[0, 1, 2, 3, 4].map((i) => {
            const positions = [
              { cx: 175, cy: 70 },
              { cx: 162, cy: 33 },
              { cx: 142, cy: 23 },
              { cx: 123, cy: 33 },
              { cx: 106, cy: 56 }
            ];
            return (
              <ellipse
                key={i}
                cx={positions[i].cx}
                cy={positions[i].cy}
                rx="4"
                ry="3"
                fill="rgba(255,255,255,0.4)"
                style={{
                  opacity: hoveredToe === i ? 1 : 0.6,
                  transition: 'opacity 0.2s ease'
                }}
              />
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '2rem',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        Feet with Black Polish
      </h1>

      <div style={{
        display: 'flex',
        gap: '60px',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '40px',
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: '30px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>
          <Foot side="left" />
          <span style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#667eea',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>Left Foot</span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>
          <Foot side="right" flipped />
          <span style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#764ba2',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>Right Foot</span>
        </div>
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '20px 30px',
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: '15px',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <p style={{
          fontSize: '1.1rem',
          color: '#333',
          margin: 0,
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          {hoveredToe !== null ? (
            <>✨ Hover over the toenails to see the glossy black polish shine! ✨</>
          ) : (
            <>Interactive feet visualization with sleek black toenail polish</>
          )}
        </p>
      </div>
    </main>
  );
}
