export type ExperienceItem = {
  title: string
  location?: string
  timeframe?: string
  bullets: string[]
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Data Science Course',
    location: 'Remote / Onsite',
    bullets: [
      'Built and deployed a machine learning model to predict customer churn with 85% accuracy.',
      'Cleaned and preprocessed raw datasets (500k+ records) using Python (Pandas, NumPy).',
      'Created interactive dashboards using Power BI and Tableau for business stakeholders.',
    ],
  },
  {
    title: 'Academic Project · House Price Prediction',
    bullets: [
      'Implemented Linear Regression and Random Forest models to predict housing prices.',
      'Applied feature selection, handled missing values, and created data visualizations (Seaborn, Matplotlib).',
      'Achieved R² score of 0.89 on the test dataset.',
    ],
  },
]

