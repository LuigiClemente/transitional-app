import * as yup from 'yup'


export const REGISTER_SCHEMA = yup.object({
    fruits: yup.string(),
    healthGoal: yup.string(),
    healthGoals: yup.array().min(1),
    height: yup
      .string()
      .required(
        'Please provide your height in cm for the current step before proceeding to the next step'
      ),
    weight: yup
      .string()
      .required(
        'Please provide your weight in kg  for the current step before proceeding to the next step'
      ),
    haveWeightGoal: yup.string(),
    weightGoal: yup.string(),
    sex: yup.string(),
    genderIdentify: yup.string(),
    isPregnant: yup.string(),
    age: yup.string(),
    usedAntibiotic: yup.string(),
    energy: yup.string(),
    exercise: yup.string(),
    menopause: yup.string(),
    healthConditions: yup.array().min(1),
    diabetes: yup.string(),
    parentsDiabetes: yup.string(),
    haveDisease: yup.string(),
    parentsDisease: yup.string(),
    haveBloodPressure: yup.string(),
    medicationsTreatPressure: yup.string(),
    eumaximo: yup.string(),
  })
  