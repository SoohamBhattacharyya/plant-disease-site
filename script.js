document.getElementById("imageUpload").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    const preview = document.getElementById("preview");
    preview.innerHTML = "";
    preview.appendChild(img);
  }
});

document.getElementById("predictBtn").addEventListener("click", function () {
  // Simulate prediction for now
  const dummyPredictions = ["Apple Scab", "Black Rot", "Cedar Apple Rust", "Healthy"];
  const prediction = dummyPredictions[Math.floor(Math.random() * dummyPredictions.length)];

  const fertilizerDict = {
    "Apple Scab": "Use Mancozeb or Captan fungicide.",
    "Black Rot": "Apply Ziram or copper-based sprays.",
    "Cedar Apple Rust": "Use Myclobutanil spray.",
    "Healthy": "No disease detected. No treatment needed!"
  };

  document.getElementById("result").innerHTML = `✅ Prediction: <strong>${prediction}</strong>`;
  document.getElementById("suggestion").innerHTML = `🧪 Suggestion: ${fertilizerDict[prediction]}`;
});
