import { LiteratureComponentSurvey } from "@/types/content";

export const literatureSurveyData: LiteratureComponentSurvey[] = [
  {
    componentId: "sensing-vfa",
    componentTitle: "IoT Multi-Sensor Field VFA Estimation",
    existingWork:
      "Most existing chemical quality estimation methods for natural rubber latex (including Volatile Fatty Acid analysis and Dry Rubber Content titration) rely strictly on centralized laboratory equipment and benchtop chemical testing [1, 3]. Traditional agricultural IoT applications focus on soil moisture, weather, and basic crop condition monitoring [5].",
    limitations:
      "Benchtop laboratory testing requires transporting samples to central factory labs, introducing multi-hour delays between latex collection and quality determination. Standard Metrolac hydrometers used in field collection centers measure only approximate latex density (DRC) and fail to detect chemical degradation or Volatile Fatty Acid (VFA) accumulation.",
    latexGuardApproach:
      "LatexGuard introduces a portable, handheld ESP32 multi-sensor probe combining pH, temperature, turbidity, and conductivity readings with a cloud-deployed Random Forest regression model to estimate VFA levels instantly on-site at the point of collection.",
    citationIds: [1, 3, 5]
  },
  {
    componentId: "security-anomaly",
    componentTitle: "Security & Unsupervised Anomaly Detection",
    existingWork:
      "Current rubber collection records are largely paper-based or rely on unverified manual spreadsheet entries without central authentication, audit logging, or automated data validation mechanisms [4].",
    limitations:
      "Manual record-keeping creates vulnerability to data tampering, accidental misreporting, and undetectable latex adulteration (such as adding water, soap, starch, or acids) prior to factory delivery.",
    latexGuardApproach:
      "LatexGuard implements Role-Based Access Control (RBAC), multi-factor OTP/JWT authentication, resilient offline logging, and an Isolation Forest machine-learning algorithm to identify latex adulteration and abnormal sensor patterns automatically.",
    citationIds: [4]
  },
  {
    componentId: "communication-routing",
    componentTitle: "BLE Field-to-Cloud Communication & DRL Logistics",
    existingWork:
      "Logistics systems in regional latex collection operate on static, pre-determined driving routes with manual telephone scheduling between farmers, collection supervisors, and factory managers [2].",
    limitations:
      "Static routing fails to react to real-time latex degradation risks, weather disruptions, or sudden yield fluctuations, resulting in excessive transport distance, high fuel costs, and spoilage of sensitive high-VFA latex batches.",
    latexGuardApproach:
      "LatexGuard pairs energy-efficient BLE transmission and standardized JSON messaging with a Deep Q-Network (DRL) routing algorithm that dynamically prioritizes collection routes based on latex freshness, VFA risk levels, and vehicle capacity.",
    citationIds: [2, 5]
  },
  {
    componentId: "predictive-traceability",
    componentTitle: "Time-Series Quality Prediction & Digital Traceability",
    existingWork:
      "Existing agricultural supply chain solutions track inventory counts or basic dispatch timestamps without integrating historical quality metrics into forward-looking predictive models [1, 2].",
    limitations:
      "Without predictive analytics, factory managers cannot forecast incoming latex quality trends from individual smallholders, leading to reactive factory batch mixing and unpredictable processing yields.",
    latexGuardApproach:
      "LatexGuard builds a relational digital ledger linking smallholder farmers to specific factory processing batches, supported by Long Short-Term Memory (LSTM) neural networks that forecast farmer-specific quality trends and trigger deviation alerts.",
    citationIds: [1, 2]
  }
];
