# Fusion6 – Microplastic Detector  

## 📌 Problem Statement  
**Problem Statement ID:** 25036  
**Title:** Development of Sensor for Detection of Microplastics  
**Theme:** Miscellaneous  
**Category:** Hardware  
**Team:** Fusion6  

## 🌊 Overview  
This project presents a **low-cost and innovative solution** for detecting microplastics in water using the **principle of capacitance change**. Unlike expensive methods such as FTIR and Raman spectroscopy, our solution is simple, scalable, and affordable, making it suitable for real-world water monitoring applications.  

### Principle  
Microplastics (dielectric constant ≈ 2.2) and water (dielectric constant ≈ 80) exhibit different dielectric properties. By measuring the **change in capacitance**, we can detect the presence and concentration of microplastics.  

- Two containers are used:  
  - **Purified water**  
  - **Water + microplastics**  
- Capacitance values are measured and compared.  
- An **AI model** analyzes the difference to confirm microplastic presence.  

---

## ⚙️ Technical Approach  
1. **Capacitive sensing circuit** built with Arduino.  
2. **Water samples** tested in controlled containers.  
3. **Capacitance measured** using IC 555 timer–based circuit.  
4. **Data collected** and fed into AI model for analysis.  
5. **Comparison** between clean and contaminated water.  

---

## 🖼️ System Design & Architecture  
### Internal Design  
![Internal Design](images/[internal_design.png](https://github.com/ash-267/Fusion6-Microplastic-detector/blob/main/internal_design.png))  

### External Design  
![External Design](images/external_design.png)  

### Circuit Diagram  
![Circuit Diagram](images/circuit_diagram.png)  

---

## 🛠️ Components & Estimated Cost  
| Component             | Estimated Cost (₹) |  
|------------------------|---------------------|  
| Arduino Uno R3        | 500 – 700           |  
| Capacitors            | 40 – 100            |  
| Containers            | 500 – 800           |  
| Glass Fiber Filter    | 800 – 1200          |  
| PVC Pipes             | 400 – 600           |  
| Circuit & Wires       | 200 – 300           |  
| Software & AI Model   | N/A                 |  

**💰 Total Estimated Cost:** ₹2,500 – ₹5,000  

---

## ✅ Impact & Benefits  
- **Environmental:** Enables early detection of microplastic pollutants, protecting aquatic ecosystems.  
- **Economic:** Reduces testing cost compared to FTIR (₹15–20 lakh) and Raman spectroscopy (₹20–40+ lakh).  
- **Social:** Improves accessibility of water testing in remote areas, empowering communities.  
- **Scalability:** Supports large-scale water monitoring initiatives (CPCB, Jal Jeevan Mission).  

---

## 📊 Dataset References  
- [Marine_Microplastics_WGS84_8553846406879449657.csv](datasets/Marine_Microplastics_WGS84_8553846406879449657.csv)  
- [Microplastics Detection in Soil and Water Leveraging IoT Technologies for Environmental Sustainability.pdf](datasets/Microplastics_Detection_in_Soil_and_Water_Leveraging_IoT_Technologies_for_Environmental_Sustainability_copy.pdf)  

---

## 📚 Research & References  
1. Nguyen, A. D., et al. (2025). *Design optimization study of a capacitive sensor for detecting microplastics in water*. Journal of Science and Technology, 51(39), 32–41.  
2. Ramasamy, N. B. G. (2025). *Deep Learning Approaches for Detection and Classification of Microplastics in Water for Clean Water Management*.  
3. Desbas, J. *Low-Cost Microwave Sensor for Detecting the First Generation of Microplastic in Aqueous Media*. [Master’s Thesis].  
4. Shafiei, M., Abbasi, Z., & Ren, C. L. (2022). *Passive Disposable Microwave Sensor for Online Microplastic Contamination Monitoring*.  

---

## 🚀 How to Run the Project  
1. Clone this repository:  
   ```bash
   git clone https://github.com/ash-267/Fusion6-Microplastic-detector.git
   ```  
2. Open the Arduino code in **Arduino IDE**.  
3. Connect your Arduino Uno to the PC.  
4. Upload the code and set up the circuit as per the documentation.  
5. Run the experiment with two water samples (pure and contaminated).  
6. Collect data and feed it into the AI model for analysis.  

---

## 📌 Future Scope  
- Enhance sensitivity by optimizing capacitor geometry.  
- Extend detection to different microplastic types and concentrations.  
- Deploy IoT-based real-time water monitoring systems.  

---
