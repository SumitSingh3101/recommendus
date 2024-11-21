import React, { useState } from "react";

const ListPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [input, setInput] = useState("");

  // Add a favorite item
  const addFavorite = () => {
    if (input.trim()) {
      setFavorites([...favorites, input.trim()]);
      setInput("");
    }
  };

  // Share the list
  const shareList = () => {
    const shareableText = `Check out my favorite list:\n\n${favorites.join("\n")}`;
    navigator.clipboard.writeText(shareableText);
    alert("List copied to clipboard! Share it with your friends.");
  };

  return (
    <div style={darkStyles.container}>
      <h1 style={darkStyles.heading}>My Favorites List</h1>
      <div style={darkStyles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a favorite item"
          style={darkStyles.input}
        />
        <button onClick={addFavorite} style={darkStyles.addButton}>
          Add
        </button>
      </div>
      <div style={darkStyles.listContainer}>
        {favorites.length > 0 ? (
          <ul style={darkStyles.list}>
            {favorites.map((item, index) => (
              <li key={index} style={darkStyles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p style={darkStyles.emptyMessage}>Your list is empty. Add some items!</p>
        )}
      </div>
      {favorites.length > 0 && (
        <button onClick={shareList} style={darkStyles.shareButton}>
          Share List
        </button>
      )}
    </div>
  );
};

// Dark mode styles
const darkStyles = {
  container: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#121212", // Dark background color
    color: "#E0E0E0", // Light text color
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#fff",
    marginBottom: "20px",
  },
  inputContainer: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    width: "300px",
    border: "1px solid #444", // Darker border
    borderRadius: "5px",
    backgroundColor: "#333", // Dark input field
    color: "#fff", // Light text inside input
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF", // Blue button
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  addButtonHover: {
    backgroundColor: "#0056b3",
  },
  listContainer: {
    margin: "20px auto",
    maxWidth: "600px",
    backgroundColor: "#1E1E1E", // Darker background for the list
    border: "1px solid #444", // Dark border
    borderRadius: "5px",
    padding: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  },
  list: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  listItem: {
    background: "#333", // Dark background for list items
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    fontSize: "1.1rem",
    color: "#fff", // White text for better contrast
    textAlign: "left",
  },
  emptyMessage: {
    color: "#888", // Grey text when list is empty
    fontSize: "1rem",
  },
  shareButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#28a745", // Green button for share
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
  },
};

export default ListPage;
