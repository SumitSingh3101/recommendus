import React from "react";

const AboutMe = () => {
    return (
      <>
        <div style={{ overflow: "hidden", height: "92.7vh", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              backdropFilter: "blur(10px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "4vw",
            }}
          >
            <img
              style={{ borderRadius: "50%" }}
              src="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg"
              alt="Sumit Singh Ranawat"
            />
            <div style={{ width: "fit-content" }}>
              <h1 style={{ fontSize: "4vw", color: "#d1d5db" }}>Namaste Doston!</h1>
              <h1 style={{ fontSize: "4vw", color: "#facc15" }}>I'm Sumit Singh Ranawat</h1>
              <p style={{ width: "30vw", color: "#d1d5db", fontSize: "1vw" }}>
                Currently pursuing a BTech in CSE (Hons.) with a specialization in Full Stack Development at Lovely Professional University. Passionate about web development, I excel in working with Express, MongoDB, MySQL, and have expertise in programming languages like C, C++, Python, and JavaScript. Skilled in Data Structures and Algorithms, I enjoy bringing websites to life through animations and innovative design thinking. Let’s explore the limitless potential of technology together!
              </p>
              <br />
              <div style={{ display: "flex", gap: "2vw" }}>
                <a
                  href="https://www.linkedin.com/in/sumit3101/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{
                      height: "2.5vw",
                      width: "6vw",
                      borderRadius: "0.5rem",
                      objectFit: "cover",
                    }}
                    src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2023/08/1637655738-linkedin-101-hero2x.jpg?resize=738%2C320&ssl=1"
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://github.com/SumitSingh3101" target="_blank" rel="noopener noreferrer">
                  <img
                    style={{
                      height: "2.5vw",
                      width: "6vw",
                      borderRadius: "0.5rem",
                      objectFit: "cover",
                    }}
                    src="https://allvectorlogo.com/img/2021/12/github-logo-vector.png"
                    alt="GitHub"
                  />
                </a>

                <a
                  href="https://www.instagram.com/sumit_singh_3101/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{
                      height: "2.5vw",
                      width: "2.5vw",
                      borderRadius: "0.5rem",
                      objectFit: "cover",
                    }}
                    src="https://us.123rf.com/450wm/aiart30/aiart302303/aiart30230303494/199524793-pixel-camera-icon-on-colorful-gradient-background-pixel-camera-icon-pixel-camera-vector-icon.jpg?ver=6"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
          </div>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://removal.ai/wp-content/uploads/2021/09/black-background-08-vecteezy.png"
            alt="Background"
          />
        </div>
      </>
    );
};

export default AboutMe;
