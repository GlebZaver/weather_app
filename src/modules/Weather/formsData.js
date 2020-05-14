import * as Yup from 'yup';

//Shemas
const city = Yup.string()
  .required("City should not be empty")
  .trim();


export const weatherSchema = Yup.object({
    city,
  });

//Initial values:
export const inputValues = {
    city: "",
};