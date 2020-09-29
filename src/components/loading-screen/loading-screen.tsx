import React from 'react';

export const LoadingScreen: React.FC<{}> = () => (
  <section className="loading-screen">
    <div className="loading-screen__sentences-container">
      <div className="loading-screen__sentence">Some text 1</div>
      <div
        className="loading-screen__sentence"
        style={{ position: 'absolute', right: '-100%', top: 0 }}
      >
        Some text 2
      </div>
      <div
        className="loading-screen__sentence"
        style={{ position: 'absolute', right: '-200%', top: 0 }}
      >
        Some text 3
      </div>
      <div
        className="loading-screen__sentence"
        style={{ position: 'absolute', right: '-300%', top: 0 }}
      >
        Some text 4
      </div>
      <div
        className="loading-screen__sentence"
        style={{ position: 'absolute', right: '-400%', top: 0 }}
      >
        Some text 5
      </div>
    </div>
    <div className="loading-screen__outer-bar">
      <div className="loading-screen__inner-bar" />
    </div>
  </section>
);
