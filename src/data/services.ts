import pennib from "../assets/icons8-vector-64.png";
import compbrush from "../assets/comp-brush-icon.png";
import ineract from "../assets/interactive.png";

export const services = [
    { 
        title: "DATA ANALYSIS & BUSINESS INSIGHTS", 
        category: "Extracting actionable insights from complex datasets using SQL and Python.", 
        img: pennib,
        style: { width: "50px", height: "55px", transform: "rotate(-45deg)" },
        description: "Ability to build scalable data pipelines and analytical solutions using SQL, PySpark, and Delta Lake.Expertise in developing automated systems to extract structured insights from research data, including full-text parsing, supplementary processing, and LLM-based extraction  .",
    },
    { 
        title: "STATISTICAL MODELING & VISUALIZATION", 
        category: "Creating interactive dashboards that tell compelling data stories.", 
        img: compbrush,
        style: { width: "50px", height: "55px" },
        description: " Ability to design and develop interactive dashboards and reporting solutions using Power BI, Power Apps, and SQL for real-time data monitoring. Expertise in creating intuitive visualizations and enabling data-driven insights for better decision-making  .",
    },
    { 
        title: "COMPUTATIONAL RESEARCH & DATA SCIENCE", 
        category: "Building predictive models and business intelligence solutions for data-driven decisions.",
        img: ineract,
        description: "Ability to analyze large-scale datasets and build predictive machine learning models for complex problems. Strong skills in data preprocessing, feature engineering, and handling imbalanced data for improved model performance.",
        style: { width: "50px", height: "55px" }
    },
];