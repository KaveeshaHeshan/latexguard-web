import { SystemArchitectureData } from "@/types/content";

export const systemArchitectureData: SystemArchitectureData = {
  overview:
    "LatexGuard integrates four specialized research components into one unified cloud-connected architecture. Field data flows from handheld multi-sensor hardware probes through mobile supervisor apps over BLE/JSON, synchronizes with a Python ML microservice backend, and powers dynamic DRL collection logistics, real-time factory dashboards, and smallholder farmer portals.",
  components: [
    {
      id: "sensing-vfa",
      title: "Component 1: Sensing & VFA Estimation",
      shortSummary:
        "Handheld ESP32 multi-sensor probe and cloud-deployed Random Forest regression model providing instant on-site VFA quality predictions.",
      novelty:
        "First field-portable device predicting chemical Volatile Fatty Acid (VFA) levels on-site from multi-sensor physical telemetry without laboratory titration.",
      details: [
        "Hardware probe integrates pH, temperature, turbidity, and conductivity sensors managed by an ESP32 microcontroller.",
        "Applies moving-average digital filtering to smooth high-frequency sensor noise in field environments.",
        "Sends multi-sensor telemetry to cloud endpoints where a trained Random Forest model predicts VFA values.",
        "Writes predicted VFA grades (Grade A < 0.05, Grade B 0.05-0.08, Grade C >= 0.08) back to the central database in real time."
      ],
      inputs: ["Raw pH probe voltage", "Latex temperature (°C)", "Turbidity (NTU)", "Conductivity (mS/cm)"],
      outputs: ["Moving-average filtered sensor values", "Predicted VFA numerical score", "Quality Grade (A / B / C)"],
      technologies: ["ESP32 Firmware (C++)", "Moving-Average Filters", "Random Forest Regression", "scikit-learn"]
    },
    {
      id: "security-anomaly",
      title: "Component 2: Security & Anomaly Detection",
      shortSummary:
        "Multi-layer security protocols, offline data buffering, and Isolation Forest algorithms for detecting latex adulteration.",
      novelty:
        "Combines Role-Based Access Control and cryptographic authentication with ML-driven unsupervised anomaly detection to identify latex adulteration in real time.",
      details: [
        "Enforces Role-Based Access Control (RBAC) with OTP verification and JWT session tokens for mobile and web users.",
        "Implements local device SQLite caching to buffer collection data during remote mobile coverage blind spots.",
        "Logs immutable audit trails for every manual record edit or supervisory override.",
        "Runs Isolation Forest unsupervised anomaly detection to identify synthetic adulteration (water, soap, starch, or acid addition)."
      ],
      inputs: ["User authentication credentials", "Sensor telemetry payload", "Manual volume entries", "Audit timestamps"],
      outputs: ["JWT access tokens", "Adulteration anomaly score", "Tamper flags & security alert events"],
      technologies: ["Role-Based Access Control (RBAC)", "JWT / OTP Authentication", "Isolation Forest ML", "Audit Logging"]
    },
    {
      id: "communication-routing",
      title: "Component 3: Communication & Route Optimisation",
      shortSummary:
        "Battery-efficient BLE transmission, standardized JSON protocol, and Deep Q-Network quality-aware collection routing.",
      novelty:
        "Dynamic reinforcement learning route optimization that adapts in real time to latex VFA degradation risk rather than following static distance-only paths.",
      details: [
        "Establishes low-power Bluetooth Low Energy (BLE) connectivity between the ESP32 sensing probe and the supervisor mobile app.",
        "Structures data transfer using a lightweight, standardized JSON telemetry schema.",
        "Tracks supervisor collection vehicles via mobile GPS telemetry integrated with Google Maps APIs.",
        "Executes a Deep Q-Network (DRL) algorithm that balances transport distance, vehicle load limits, and latex VFA degradation risk to prioritize critical pickups."
      ],
      inputs: ["Supervisor GPS coordinates", "Farmer availability & location", "VFA degradation risk", "Vehicle capacity constraints"],
      outputs: ["Optimized stop-by-stop collection route", "Estimated Arrival Times (ETAs)", "Fuel reduction metrics"],
      technologies: ["Bluetooth Low Energy (BLE)", "Standardized JSON Schema", "Deep Q-Network (DQN)", "Google Maps API"]
    },
    {
      id: "predictive-traceability",
      title: "Component 4: Predictive Analytics & Traceability",
      shortSummary:
        "Relational digital ledger linking farmers to factory batches, supported by LSTM time-series quality trend forecasting.",
      novelty:
        "Converts historical field collection data into predictive farmer-specific quality trends using LSTM neural networks, establishing total batch traceability.",
      details: [
        "Maintains a relational cloud database connecting farmer IDs, daily collection samples, sensor telemetry, and factory processing batch IDs.",
        "Executes Long Short-Term Memory (LSTM) time-series neural networks on historical DRC and VFA records.",
        "Forecasts upcoming smallholder quality trends to alert factory managers of expected raw material grades.",
        "Provides smallholders with a digital portal displaying daily quality grades, historical payouts, and advisory alerts."
      ],
      inputs: ["Historical farmer DRC/VFA logs", "Daily batch aggregation records", "Weather & season indicators"],
      outputs: ["LSTM 7-day quality trend forecast", "Farmer digital portal reports", "End-to-end batch traceability log"],
      technologies: ["Relational Database Schema", "LSTM Neural Networks", "Time-Series Forecasting", "Farmer Web Portal"]
    }
  ],
  backendServices: {
    title: "Centralised Backend & ML Microservices",
    description:
      "A scalable Python backend microservice layer handles real-time database synchronization, API requests, authentication, and ML model inference.",
    features: [
      "Python inference service executing Random Forest, Isolation Forest, DRL, and LSTM models.",
      "Real-time database sync for incoming BLE JSON sensor telemetry.",
      "RESTful API endpoints with OTP/JWT token authentication and RBAC authorization.",
      "Automated log maintenance and security audit tracking."
    ]
  },
  frontendPlatforms: {
    title: "User Interface Platforms",
    description:
      "Responsive web and mobile interfaces customized for factory managers, QA officers, field supervisors, and smallholder farmers.",
    features: [
      "Factory Web Dashboard (Next.js / React / TypeScript): Real-time incoming latex quality monitor, batch tracking, and management reports.",
      "Field Supervisor App (Mobile): BLE sensor pairing, digital stop-list, sample record entry, and live GPS route navigation.",
      "Farmer Mobile Portal: Transparent view of daily VFA quality grades, yield history, and quality-based payout statements."
    ]
  }
};
