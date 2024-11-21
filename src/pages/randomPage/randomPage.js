import React, { useState } from "react";

const recommendations = [
  { title: "Breaking Bad", type: "TV Show", description: "A high school chemistry teacher turned methamphetamine producer.", image: "https://flxt.tmsimg.com/assets/p185846_b_v8_ac.jpg" },
  { title: "Inception", type: "Movie", description: "A thief who steals corporate secrets through dream-sharing technology.", image: "https://m.media-amazon.com/images/I/51sDXi5BQmL._AC_SY445_.jpg" },
  { title: "Friends", type: "TV Show", description: "Follow the personal and professional lives of six friends in New York.", image: "https://flxt.tmsimg.com/assets/p120695_b_v8_ab.jpg" },
  { title: "The Matrix", type: "Movie", description: "A computer hacker learns about the true nature of his reality.", image: "https://m.media-amazon.com/images/I/41EveBSODSL._AC_.jpg" },
  { title: "The Office", type: "TV Show", description: "A hilarious mockumentary about office life at Dunder Mifflin.", image: "https://m.media-amazon.com/images/I/71mHX3u9RHL._AC_SY679_.jpg" },
  { title: "The Shawshank Redemption", type: "Movie", description: "Two imprisoned men bond over several years.", image: "https://m.media-amazon.com/images/I/81tNYMWtG5L._AC_SY679_.jpg" },
  { title: "Stranger Things", type: "TV Show", description: "A group of kids uncover supernatural secrets in their small town.", image: "https://flxt.tmsimg.com/assets/p12940565_b_v8_ab.jpg" },
  { title: "To Kill a Mockingbird", type: "Book", description: "A classic novel about racial injustice in the Deep South.", image: "https://m.media-amazon.com/images/I/81O-MGjgv1L.jpg" },
  { title: "The Godfather", type: "Movie", description: "The aging patriarch of an organized crime dynasty transfers control.", image: "https://m.media-amazon.com/images/I/51aT4WoFJdL._AC_SY445_.jpg" },
  { title: "Breaking Bad", type: "TV Show", description: "A high school teacher turns to making meth to secure his family's future.", image: "https://flxt.tmsimg.com/assets/p185846_b_v8_ac.jpg" },
  { title: "Game of Thrones", type: "TV Show", description: "Noble families vie for control of the Iron Throne.", image: "https://flxt.tmsimg.com/assets/p8553063_b_v8_ab.jpg" },
  { title: "Pride and Prejudice", type: "Book", description: "A romantic novel about manners and marriage in 19th-century England.", image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" },
  { title: "The Dark Knight", type: "Movie", description: "Batman faces his nemesis, the Joker, in a battle of morality.", image: "https://m.media-amazon.com/images/I/71pnn12ELSL._AC_SY679_.jpg" },
  { title: "The Office", type: "TV Show", description: "A mockumentary sitcom about the Dunder Mifflin office.", image: "https://m.media-amazon.com/images/I/71mHX3u9RHL._AC_SY679_.jpg" },
  { title: "1984", type: "Book", description: "A dystopian novel about totalitarianism and surveillance.", image: "https://m.media-amazon.com/images/I/71kxa1-0wfL.jpg" },
  { title: "Inception", type: "Movie", description: "A mind-bending thriller about dream infiltration.", image: "https://m.media-amazon.com/images/I/51sDXi5BQmL._AC_SY445_.jpg" },
  { title: "The Simpsons", type: "TV Show", description: "An animated sitcom about the Simpson family.", image: "https://m.media-amazon.com/images/I/81ivklTLv5L._AC_SY679_.jpg" },
  { title: "The Catcher in the Rye", type: "Book", description: "A classic coming-of-age novel about teenage rebellion.", image: "https://m.media-amazon.com/images/I/71SGhYrQVQL.jpg" },
  { title: "The Matrix", type: "Movie", description: "A hacker discovers the truth about his simulated reality.", image: "https://m.media-amazon.com/images/I/41EveBSODSL._AC_.jpg" },
  { title: "Sherlock", type: "TV Show", description: "A modern adaptation of Arthur Conan Doyle's detective stories.", image: "https://flxt.tmsimg.com/assets/p8707816_b_v8_ab.jpg" },
  { title: "Moby-Dick", type: "Book", description: "A sailor's narrative of the obsessive quest for a giant whale.", image: "https://m.media-amazon.com/images/I/71KtECbI1kL.jpg" },
  { title: "The Lion King", type: "Movie", description: "A lion prince fights for his place in the circle of life.", image: "https://m.media-amazon.com/images/I/51R3MSPPKoL._AC_SY679_.jpg" },
  { title: "Friends", type: "TV Show", description: "The lives of six friends living in New York City.", image: "https://flxt.tmsimg.com/assets/p120695_b_v8_ab.jpg" },
  { title: "War and Peace", type: "Book", description: "A sweeping narrative of Russian society during the Napoleonic Wars.", image: "https://m.media-amazon.com/images/I/71A-Bdr6PvL.jpg" },
  { title: "Avatar", type: "Movie", description: "A marine on an alien planet falls in love with its inhabitants.", image: "https://m.media-amazon.com/images/I/81qnncF2pWL._AC_SY679_.jpg" },
  { title: "Brooklyn Nine-Nine", type: "TV Show", description: "A lighthearted sitcom about detectives in a New York precinct.", image: "https://flxt.tmsimg.com/assets/p9155926_b_v8_ab.jpg" },
  { title: "The Great Gatsby", type: "Book", description: "A novel about the American dream and 1920s excess.", image: "https://m.media-amazon.com/images/I/81n5yQIC1ZL.jpg" },
  { title: "Titanic", type: "Movie", description: "A romance set aboard the doomed Titanic ocean liner.", image: "https://m.media-amazon.com/images/I/71Zc5tgf-JL._AC_SY679_.jpg" },
  { title: "House of Cards", type: "TV Show", description: "A ruthless politician schemes his way to power.", image: "https://flxt.tmsimg.com/assets/p9148219_b_v8_ab.jpg" },
  { title: "Jane Eyre", type: "Book", description: "An orphaned governess finds love and uncovers secrets.", image: "https://m.media-amazon.com/images/I/81TGdB9ZcWL.jpg" },
  { title: "The Avengers", type: "Movie", description: "Earth's mightiest heroes join forces to save the world.", image: "https://m.media-amazon.com/images/I/81AbJXWC-rL._AC_SY679_.jpg" },
  { title: "How I Met Your Mother", type: "TV Show", description: "A father's story about meeting the mother of his children.", image: "https://flxt.tmsimg.com/assets/p9128573_b_v8_aa.jpg" },
  { title: "Les Misérables", type: "Book", description: "A novel about justice, love, and redemption in 19th-century France.", image: "https://m.media-amazon.com/images/I/91Tw9KeL7tL.jpg" },
  { title: "The Hobbit", type: "Movie", description: "A hobbit joins dwarves on a quest to reclaim their homeland.", image: "https://m.media-amazon.com/images/I/91kYWyHHPkL._AC_SY679_.jpg" },
  { title: "Big Bang Theory", type: "TV Show", description: "A sitcom about nerdy physicists and their adventures.", image: "https://flxt.tmsimg.com/assets/p3533085_b_v8_ab.jpg" },
  { title: "Crime and Punishment", type: "Book", description: "A psychological exploration of guilt and redemption.", image: "https://m.media-amazon.com/images/I/81DiCZT8BVL.jpg" },
  { title: "The Mandalorian", type: "TV Show", description: "A bounty hunter's journey through the Star Wars universe.", image: "https://flxt.tmsimg.com/assets/p17580265_b_v8_ac.jpg" },
  { title: "Forrest Gump", type: "Movie", description: "A man's extraordinary life story unfolds through history.", image: "https://m.media-amazon.com/images/I/51UziNEEBWL._AC_SY445_.jpg" },
];

const RandomPage = () => {
  const [recommendation, setRecommendation] = useState(getRandomRecommendation());

  function getRandomRecommendation() {
    const randomIndex = Math.floor(Math.random() * recommendations.length);
    return recommendations[randomIndex];
  }

  const handleNextClick = () => {
    setRecommendation(getRandomRecommendation());
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", color: "#333" }}>Random Recommendation</h1>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "400px",
          margin: "20px auto",
          textAlign: "center",
        }}
      >
        <img
          src={recommendation.image}
          alt={recommendation.title}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h2 style={{ fontSize: "1.5rem", margin: "10px 0" }}>{recommendation.title}</h2>
        <p style={{ color: "#666", fontStyle: "italic" }}>{recommendation.type}</p>
        <p style={{ color: "#333" }}>{recommendation.description}</p>
      </div>
      <button
        onClick={handleNextClick}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#007BFF",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Next Recommendation
      </button>
    </div>
  );
};

export default RandomPage;
