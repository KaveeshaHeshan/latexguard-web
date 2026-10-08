import { MethodologyPhase } from "@/types/content";

export const methodologyPhases: MethodologyPhase[] = [
  {
    phaseNumber: 1,
    title: "Requirements Gathering & System Analysis",
    goals: [
      "Understand field operations and factory processing constraints.",
      "Align quality grading thresholds with international ISO latex standards and Rubber Research Institute of Sri Lanka (RRISL) guidelines."
    ],
    activities: [
      "Consulted RRISL advisory circulars and factory laboratory testing officers to analyze chemical degradation mechanics.",
      "Conducted on-site observations of morning latex tapping, collection center aggregation, transport, and factory arrival.",
      "Mapped key stakeholder pain points across smallholder farmers, collection supervisors, transport drivers, and QA managers.",
      "Established data governance procedures, informed consent protocols, and SLIIT ethical clearance standards."
    ],
    outputs: [
      "Comprehensive system specification document.",
      "ISO-aligned latex quality classification criteria (VFA Grade A < 0.05, Grade B 0.05-0.08, Grade C >= 0.08).",
      "Ethical clearance documentation and stakeholder data privacy guidelines."
    ]
  },
  {
    phaseNumber: 2,
    title: "System Design & Technology Selection",
    goals: [
      "Architect a scalable, end-to-end IoT, cloud, ML, and mobile platform.",
      "Select robust physical sensors and low-power microcontrollers suited for rugged field conditions."
    ],
    activities: [
      "Designed the multi-sensor hardware enclosure housing ESP32, pH, turbidity, temperature, and conductivity probes.",
      "Formulated the cloud database schema connecting farmer profiles, daily collection records, sensor telemetry, and factory batch IDs.",
      "Designed the RESTful API contract and standardized JSON telemetry schema for BLE communication.",
      "Selected machine learning architectures: Random Forest for VFA regression, Isolation Forest for adulteration detection, Deep Q-Network for routing, and LSTM for time-series forecasting.",
      "Created wireframes and design systems for mobile applications and the factory web dashboard."
    ],
    outputs: [
      "Complete system architectural blueprint.",
      "Hardware circuit schematics and 3D enclosure CAD designs.",
      "API specification and machine learning pipeline design."
    ]
  },
  {
    phaseNumber: 3,
    title: "Implementation & Integration",
    goals: [
      "Develop hardware firmware, machine learning models, cloud backend, and user interfaces.",
      "Integrate all four system components into a unified execution ecosystem."
    ],
    activities: [
      "Programmed ESP32 firmware with moving-average noise filtering for pH and conductivity sensor signals.",
      "Collected paired sensor readings and official factory laboratory VFA titration reports to construct the training dataset.",
      "Trained and evaluated the Random Forest VFA model, Isolation Forest anomaly model, DRL routing agent, and LSTM forecasting model.",
      "Built the cloud backend inference pipeline, REST APIs, and database sync services.",
      "Developed mobile applications for farmers and supervisors alongside the responsive factory web dashboard."
    ],
    outputs: [
      "Functional handheld multi-sensor VFA testing device.",
      "Trained ML models integrated into Python cloud microservices.",
      "Cross-platform mobile applications and web QA dashboard."
    ]
  },
  {
    phaseNumber: 4,
    title: "Testing, Deployment & Refinement",
    goals: [
      "Validate VFA prediction accuracy against laboratory ground truth.",
      "Assess system usability, security resilience, and real-world field performance."
    ],
    activities: [
      "Performed laboratory validation testing comparing model VFA estimations against chemical titration reports.",
      "Tested Isolation Forest adulteration detection using synthetic water, soap, and acid contamination samples.",
      "Executed System Usability Scale (SUS) evaluation with target collection supervisors and factory managers.",
      "Conducted field trials across collection routes to measure GPS tracking accuracy and dynamic DRL route efficiency.",
      "Iterated on firmware filtering algorithms and UI design based on user feedback."
    ],
    outputs: [
      "Laboratory validation report and accuracy benchmarks.",
      "Usability evaluation feedback report.",
      "Production-ready deployment package for cloud and edge components."
    ]
  }
];

export const methodologyAchievements = {
  developmentStrategy:
    "The LatexGuard system was engineered following an incremental, component-wise integration strategy. Each module—hardware sensing, security & anomaly detection, BLE logistics routing, and predictive analytics—was independently prototyped and validated before being connected into the unified cloud ecosystem.",
  mainInnovations: [
    "Portable On-Site VFA Estimation: Replaces multi-hour laboratory titration delays with instant multi-sensor machine-learning soft-sensing at field collection points.",
    "Automated Adulteration Detection: Uses Isolation Forest unsupervised ML to detect water, soap, starch, or acid tampering prior to batch mixing.",
    "Quality-Aware Dynamic Routing: Employs Deep Q-Network reinforcement learning to dynamically prioritize collection of high-VFA latex, preventing transit spoilage.",
    "Farmer-Level Quality Forecasting: Implements LSTM time-series neural networks to provide smallholders with forward-looking quality insights and transparent digital records."
  ],
  overallSystemImpact:
    "By bridging field sensing with cloud logistics, LatexGuard delivers faster quality grading, transparent farmer payouts, reduced fleet fuel consumption, and direct alignment with UN Sustainable Development Goals 9, 12, and 13."
};
