export const projectInfo = {
  id: "R26-IT-120",
  title: "IoT-Enabled Rubber Quality Assessment and Streamlined Latex Collection System",
  brandName: "LatexGuard",
  slogan: "Quality begins at the first drop.",
  university: "Sri Lanka Institute of Information Technology (SLIIT)",
  department: "Department of Information Technology",
  group: "CI (Computing Infrastructure)",
  specialization: "Information Technology",
  module: "IT4010 Research Project 2026",
  year: 2026,
  isContinuation: false,
  topicAssessmentApproved: true,

  shortIntro:
    "LatexGuard is an IoT and machine learning system that estimates latex freshness (VFA) at the collection point and connects farmers, supervisors and factories through secure, route-optimised, data-driven collection.",

  fullExplanation:
    "The LatexGuard system bridges the field-to-factory gap in natural rubber processing. By replacing subjective manual checks with a portable ESP32 multi-sensor device, the system estimates Volatile Fatty Acid (VFA) chemical degradation directly at field collection points. Collected readings synchronize securely to a central database where Random Forest soft-sensing models evaluate quality, Isolation Forest algorithms flag latex adulteration, Deep Q-Network (DRL) algorithms optimize collection routes prioritizing high-risk batches, and LSTM time-series models forecast farmer-level quality trends.",

  heroExpandedExplanation: [
    "LatexGuard is an end-to-end smart agricultural research system combining IoT multi-sensor hardware, machine-learning soft-sensing, quality-driven collection logistics, and time-series forecasting for the natural rubber latex industry.",
    "The LatexGuard system bridges the field-to-factory gap in natural rubber processing. By replacing subjective manual checks with a portable ESP32 multi-sensor device, the system estimates Volatile Fatty Acid (VFA) chemical degradation directly at field collection points. Collected readings synchronize securely to a central database where Random Forest soft-sensing models evaluate quality, Isolation Forest algorithms flag latex adulteration, Deep Q-Network (DRL) algorithms optimize collection routes prioritizing high-risk batches, and LSTM time-series models forecast farmer-level quality trends."
  ],

  problemStatements: [
    {
      title: "Delayed Laboratory Quality Testing",
      description:
        "Traditional Volatile Fatty Acid (VFA) and chemical testing occur hours later at central factory labs after latex batches are mixed, making field-level quality control impossible."
    },
    {
      title: "Lack of Farmer Transparency & Manual Records",
      description:
        "Paper records and delayed testing create pricing disputes between smallholder farmers and buyers, offering no real-time visibility into historical quality or daily yield."
    },
    {
      title: "Inefficient Static Collection Logistics",
      description:
        "Collection vehicles follow fixed routes without awareness of latex chemical degradation, risking spoilage of sensitive batches and incurring unnecessary fuel consumption."
    }
  ],

  systemComponentsSummary: [
    {
      id: "sensing-vfa",
      title: "Sensing & VFA Estimation",
      summary:
        "Hardware IoT multi-sensor probe and Random Forest regression model providing real-time, on-site Volatile Fatty Acid (VFA) quality predictions before batch mixing."
    },
    {
      id: "security-anomaly",
      title: "Security & Anomaly Detection",
      summary:
        "Role-Based Access Control, JWT/OTP verification, offline data resilience, and Isolation Forest algorithms to detect latex adulteration and protect supply chain integrity."
    },
    {
      id: "communication-routing",
      title: "Field-to-Cloud Communication & Route Optimisation",
      summary:
        "Battery-efficient BLE transmission, standardized JSON protocol, and Deep Q-Network dynamic routing that prioritizes high-VFA latex to minimize transport spoilage."
    },
    {
      id: "predictive-traceability",
      title: "Predictive Analytics & Traceability",
      summary:
        "Relational digital ledger linking farmers to factory batches, supported by LSTM time-series forecasting of farmer quality trends and abnormal deviation alerts."
    }
  ],

  sdgAlignments: [
    {
      number: 9,
      name: "Industry, Innovation and Infrastructure",
      description:
        "Fosters sustainable agro-processing through IoT innovation, automated quality grading, and digital infrastructure for natural rubber value chains."
    },
    {
      number: 12,
      name: "Responsible Consumption and Production",
      description:
        "Reduces latex degradation waste, prevents contamination of high-grade batches, and enables transparent quality-based incentives for producers."
    },
    {
      number: 13,
      name: "Climate Action",
      description:
        "Optimizes collection logistics routes with Deep Q-Learning to reduce vehicle transport distances, fuel consumption, and greenhouse gas emissions."
    }
  ]
};
