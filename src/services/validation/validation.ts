import * as yup from 'yup';

export const validationSingIn = yup.object({
  number: yup.string().required(),
  name: yup.string().required(),
  secondName: yup.string().required(),
});
