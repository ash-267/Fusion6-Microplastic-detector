import express from 'express';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import firebaseConfig from './firebase-config.js';

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// 🔹 Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCMoaLMoywlkYBRJpL8-PhKNatALzXWCAw",
  authDomain: "microplastic-detection-1075.firebaseapp.com",
  databaseURL: "https://microplastic-detection-1075.firebaseio.com",
  projectId: "microplastic-detection-1075",
  storageBucket: "microplastic-detection-1075.appspot.com",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ================= Graph 1: Concentration vs Capacitance =================
function loadGraphData() {
  const concRef = ref(db, "readings"); // path in Firebase
  onValue(concRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    const concentrations = [];
    const capacitances = [];

    Object.values(data).forEach(entry => {
      concentrations.push(entry.concentration);
      capacitances.push(entry.capacitance);
    });

    plotGraph(concentrations, capacitances);
  });
}

function plotGraph(concentrations, capacitances) {
  const ctx = document.getElementById("capacitanceGraph").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: concentrations,
      datasets: [{
        label: "Capacitance Change vs Microplastics",
        data: capacitances,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: "Microplastics Concentration (ppm)" }},
        y: { title: { display: true, text: "Change in Capacitance (pF)" }}
      }
    }
  });
}

// ================= Graph 2: Real-Time Detection =================
const ctx2 = document.getElementById("detectionChart").getContext("2d");
const detectionChart = new Chart(ctx2, {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Microplastic Detection",
      data: [],
      borderColor: "#007bff",
      backgroundColor: "rgba(0,123,255,0.2)",
      borderWidth: 2
    }]
  },
  options: { responsive: true, maintainAspectRatio: false }
});

const detectionRef = ref(db, "detectionData");
onValue(detectionRef, (snapshot) => {
  const data = snapshot.val();
  if (data) {
    const time = new Date().toLocaleTimeString();
    detectionChart.data.labels.push(time);
    detectionChart.data.datasets[0].data.push(data.value);

    if (detectionChart.data.labels.length > 20) {
      detectionChart.data.labels.shift();
      detectionChart.data.datasets[0].data.shift();
    }
    detectionChart.update();
  }
});

// Call loader
loadGraphData();

const app2 = express();

app2.listen(5000, ()=>console.log("Express is listening"))
