// Importing modules
import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const submit = async () => {
    const response = await fetch(
      "http://avivashishta2907.pythonanywhere.com/data/",
      {
        method: "POST",
        body: JSON.stringify({
          image: imageSrc,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const res = await response.json();
    if (res) {
      setResult(res.body);
    }
  };

  const [image, setImage] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const handleFileChange = async (changeEvent) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImage(onLoadEvent.target.result);
      setImageSrc(onLoadEvent.target.result.split(",")[1]);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  return (
    <div className="App">
      <h1>Project</h1>
      <form method="post" onChange={(event) => handleFileChange(event, true)}>
        {image && (
          <>
            <p>Selected Image:</p>
            <img
              alt="selected picture"
              src={image}
              style={{ maxWidth: "300px" }}
            />
          </>
        )}

        <label htmlFor="image">
          <p
            style={{
              width: "fit-content",
              padding: "0.5rem 1rem",
              border: "1px solid #fff",
            }}
          >
            Select Image
          </p>
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept=".png,.jpg,.jpeg,.webp"
          style={{ display: "none" }}
        />
      </form>
      <p
        style={{
          width: "fit-content",
          padding: "0.5rem 1rem",
          border: "1px solid #fff",
        }}
        onClick={() => submit()}
      >
        Run
      </p>
      {result ? result : ""}
    </div>
  );
}

export default App;
