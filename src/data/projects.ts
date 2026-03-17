export type Project = {
  title: string
  techStack: string[]
  bullets: string[]
  metric?: string
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Data Analytics Dashboard Project',
    techStack: ['Python', 'MySQL', 'Pandas', 'Data Visualization'],
    bullets: [
      'Designed and implemented an end-to-end data analytics project using Python and MySQL.',
      'Extracted, transformed, and analyzed real-world datasets to surface actionable insights.',
      'Built visual reports and dashboards to highlight trends and support decision-making.',
    ],
  },
  {
    title: 'Customer Churn Prediction',
    techStack: ['Python', 'Logistic Regression', 'XGBoost', 'Tableau'],
    bullets: [
      'Analyzed a telecom customer dataset to identify patterns and key churn drivers.',
      'Implemented Logistic Regression and XGBoost to model churn probability.',
      'Created interactive Tableau dashboards to visualize customer segments and churn risk.',
    ],
    metric: '85% model accuracy on held-out validation data.',
  },
  {
    title: 'House Price Prediction',
    techStack: ['Python', 'Scikit-learn', 'Random Forest', 'Seaborn'],
    bullets: [
      'Developed regression models to estimate house prices based on multiple features.',
      'Performed feature selection, missing value imputation, and exploratory data analysis.',
      'Communicated results with clear visualizations for non-technical audiences.',
    ],
    metric: 'R² score of 0.89 on the test dataset.',
    link: 'https://github.com/Sudhanshu-Pandey001', // replace with exact repo when available
  },
]

