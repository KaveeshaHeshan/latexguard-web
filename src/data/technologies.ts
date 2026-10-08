import { TechnologyCategory, TechnologyItem } from "@/types/content";

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "ai-ml",
    label: "AI and Machine Learning",
    description: "Regression models, anomaly detection algorithms, dynamic routing reinforcement learning, and time-series neural networks."
  },
  {
    id: "frontend",
    label: "Frontend Development",
    description: "Web dashboards, responsive design, static site exports, and cross-platform mobile applications."
  },
  {
    id: "backend",
    label: "Backend and Architecture",
    description: "Microservice inference engines, secure REST APIs, role-based access control, and audit logging."
  },
  {
    id: "iot",
    label: "IoT and Data Processing",
    description: "Handheld microcontrollers, multi-sensor hardware probes, moving-average digital filtering, and BLE communication."
  },
  {
    id: "cloud",
    label: "Cloud and Deployment",
    description: "Real-time databases, static hosting infrastructure, mapping APIs, and automated CI/CD deployment pipelines."
  },
  {
    id: "testing",
    label: "Testing and Monitoring",
    description: "Unit and component testing frameworks, usability evaluation methodologies, and audit monitoring."
  }
];

export const technologyItems: TechnologyItem[] = [
  // AI and Machine Learning
  {
    name: "Random Forest Regression",
    category: "ai-ml",
    purpose: "Predicts Volatile Fatty Acid (VFA) values in real time from filtered multi-sensor pH, temperature, and turbidity telemetry."
  },
  {
    name: "ANN (Artificial Neural Network)",
    category: "ai-ml",
    purpose: "Candidate regression model evaluated for non-linear multi-sensor chemical estimation under fluctuating ambient conditions."
  },
  {
    name: "Isolation Forest",
    category: "ai-ml",
    purpose: "Unsupervised machine learning model identifying synthetic latex adulteration (water, soap, starch, acid addition)."
  },
  {
    name: "LSTM (Long Short-Term Memory)",
    category: "ai-ml",
    purpose: "Time-series neural network forecasting smallholder quality trends based on historical DRC and VFA data records."
  },
  {
    name: "Deep Q-Network (DQN)",
    category: "ai-ml",
    purpose: "Reinforcement learning agent optimizing collection vehicle routes by balancing transport distance with VFA degradation risk."
  },
  {
    name: "scikit-learn",
    category: "ai-ml",
    purpose: "Primary Python machine learning library used for training, evaluating, and exporting Random Forest and Isolation Forest models.",
    isConfirmed: true
  },

  // Frontend Development
  {
    name: "Next.js (App Router)",
    category: "frontend",
    purpose: "Powers the static public research portfolio site and factory management web dashboard using React Server Components.",
    isConfirmed: true
  },
  {
    name: "React & TypeScript",
    category: "frontend",
    purpose: "Provides strict type-safe UI components, reactive state management, and interactive visualizations across web platforms.",
    isConfirmed: true
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    purpose: "Utility-first design system with CSS custom variable tokens enabling responsive layouts and WCAG-compliant dark/light themes.",
    isConfirmed: true
  },
  {
    name: "Framer Motion",
    category: "frontend",
    purpose: "Delivers smooth reveal-on-scroll animations and responsive UI transitions with full reduced-motion support.",
    isConfirmed: true
  },
  {
    name: "Flutter / React Native",
    category: "frontend",
    purpose: "Cross-platform mobile framework powering supervisor collection apps and smallholder farmer portals."
  },

  // Backend and Architecture
  {
    name: "Python Microservices",
    category: "backend",
    purpose: "Lightweight backend microservice host executing ML inference scripts and communicating with cloud database instances."
  },
  {
    name: "REST & JSON Protocol",
    category: "backend",
    purpose: "Standardized lightweight communication schema transferring telemetry between IoT hardware, mobile devices, and backend services."
  },
  {
    name: "RBAC with OTP & JWT",
    category: "backend",
    purpose: "Role-Based Access Control enforcing secure user authentication via One-Time Passwords and JSON Web Tokens."
  },
  {
    name: "Immutable Audit Logging",
    category: "backend",
    purpose: "Tracks data edits and supervisory overrides to ensure transparent data integrity across the supply chain."
  },

  // IoT and Data Processing
  {
    name: "ESP32 Microcontroller",
    category: "iot",
    purpose: "Low-power Wi-Fi/BLE microcontroller reading multi-sensor signals and transmitting filtered JSON telemetry."
  },
  {
    name: "Multi-Sensor Array",
    category: "iot",
    purpose: "Submersible hardware probes measuring pH, temperature, turbidity, and electrical conductivity in raw latex."
  },
  {
    name: "Moving-Average Signal Filtering",
    category: "iot",
    purpose: "Digital signal processing algorithm running on firmware to eliminate sensor noise caused by fluid movement."
  },
  {
    name: "Bluetooth Low Energy (BLE)",
    category: "iot",
    purpose: "Energy-efficient short-range wireless communication connecting the handheld sensor probe to the supervisor's mobile device."
  },

  // Cloud and Deployment
  {
    name: "Cloud Database Service",
    category: "cloud",
    purpose: "Centralized real-time relational database storing farmer profiles, collection telemetry, VFA scores, and route logs."
  },
  {
    name: "Google Maps API",
    category: "cloud",
    purpose: "Provides geolocation services, distance matrix calculations, and real-time supervisor vehicle tracking."
  },
  {
    name: "GitHub Actions & Pages",
    category: "cloud",
    purpose: "Automates continuous integration, strict type-checking, Vitest execution, static HTML export, and GitHub Pages deployment."
  },

  // Testing and Monitoring
  {
    name: "Vitest & Testing Library",
    category: "testing",
    purpose: "Unit testing framework validating data integrity, component rendering, VFA grade calculation logic, and security rules."
  },
  {
    name: "SUS Usability Scoring",
    category: "testing",
    purpose: "System Usability Scale metric framework evaluating field supervisor and factory manager user experience."
  },
  {
    name: "Lab Ground-Truth Validation",
    category: "testing",
    purpose: "Controlled experimental protocol comparing ESP32 machine-learning VFA predictions against factory laboratory titration reports."
  }
];
