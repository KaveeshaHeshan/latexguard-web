import { ComponentObjective, ObjectiveItem } from "@/types/content";

export const mainObjective =
  "Streamline rubber collection by integrating IoT tools, mobile applications and centralized data management for real-time quality assessment, route optimization and transparent operations; creating a data-driven, efficient, trustworthy latex collection ecosystem supporting operational decisions and quality-based incentives.";

export const generalObjectives: ObjectiveItem[] = [
  {
    id: 1,
    title: "Real-Time Latex Quality Monitoring",
    description:
      "Develop hardware sensors and machine learning soft-sensing to estimate VFA and quality parameters on site, reducing reliance on slow central laboratory testing."
  },
  {
    id: 2,
    title: "Digital Verification & Transparency",
    description:
      "Provide mobile applications for farmers and supervisors to digitally record and verify latex volume and quality grades, preventing inadvertent mixing of degraded and high-grade batches."
  },
  {
    id: 3,
    title: "Optimised Collection Logistics",
    description:
      "Implement dynamic route planning and real-time GPS tracking to minimize transit distances, reduce fuel consumption, and ensure timely arrival of perishable latex at processing factories."
  },
  {
    id: 4,
    title: "Centralised & Secure Data Management",
    description:
      "Establish a single synchronized cloud platform equipped with robust security, role-based access control, and audit trails for supply chain data analysis."
  },
  {
    id: 5,
    title: "Enhanced Operational Decision-Making",
    description:
      "Generate automated analytics, factory management reports, and predictive insights to support quality-based farmer pricing, performance evaluation, and strategic planning."
  }
];

export const componentObjectives: ComponentObjective[] = [
  {
    componentId: "sensing-vfa",
    componentTitle: "Sensing and VFA Estimation",
    summary:
      "Achieve instant, non-destructive on-site estimation of Volatile Fatty Acid (VFA) levels using an ESP32 multi-sensor probe and Random Forest regression model to facilitate field-level quality grading before batch mixing."
  },
  {
    componentId: "security-anomaly",
    componentTitle: "Security and Anomaly Detection",
    summary:
      "Protect digital collection data through multi-layer security (RBAC, OTP/JWT, offline resilience) and deploy Isolation Forest algorithms to automatically flag latex adulteration and tampered sensor readings."
  },
  {
    componentId: "communication-routing",
    componentTitle: "Communication & Route Optimisation",
    summary:
      "Establish seamless BLE-to-cloud telemetry and implement Deep Q-Network dynamic routing that prioritizes collection of high-VFA latex batches, reducing transport spoilage and fleet fuel expenditure."
  },
  {
    componentId: "predictive-traceability",
    componentTitle: "Predictive Analytics & Traceability",
    summary:
      "Enable end-to-end digital batch traceability from farmer to factory, using Long Short-Term Memory (LSTM) time-series forecasting to predict future smallholder quality trends and detect yield anomalies."
  }
];
