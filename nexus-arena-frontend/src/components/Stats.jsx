import { useState } from "react";
import video from "../assets/Intro-Video.mp4";

function Stats() {
  const [play, setPlay] = useState(true);

  return (
    <section className="stats-container">

      {/* Left Side - Video */}
      <div className="video-wrapper">
        {!play && (
          <div className="video-overlay" onClick={() => setPlay(true)}>
            <div className="play-btn">▶</div>
          </div>
        )}
        
        {play && (
          <video
            width="100%"
            height="500px"
            controls
            autoPlay
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Right Side - Stats */}
      <div className="stats">

        <div className="stat-card">
          <h2>🎓 10,000+</h2>
          <p>Verified Students</p>
        </div>

        <div className="stat-card">
          <h2>🪄 1,500+</h2>
          <p>Top Rated Courses</p>
        </div>

        <div className="stat-card">
          <h2>⭐ 4.8/5</h2>
          <p>Average Rating</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;