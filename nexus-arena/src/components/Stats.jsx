function Stats() {
  return (
    <section className="stats-container">

      {/* Left Side - Video */}
      <div className="video-section">
        <iframe
          width="100%"
          height="450px"
          src="https://www.youtube.com/embed/0zHE6kTPMOc?autoplay=1&mute=1&controls=1"
          title="Nexus Arena Intro"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
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