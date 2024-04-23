import * as Yup from 'yup';

export const sendReviewSchema = Yup.object({
  rating: Yup.number()
    .min(1)
    .max(5)
    .required(
      'Bitte wählen Sie eine Gesamtbewertung zwischen 1 und 5 Sternen.',
    ),
  title: Yup.string()
    .min(3, 'Mindestens 3 Zeichen')
    .max(50, 'Maximal 50 Zeichen')
    .required('Dieses Feld ist erforderlich'),
  text: Yup.string()
    .min(70, 'Mindestens 70 Zeichen')
    .max(5000, 'Maximal 5000 Zeichen')
    .required('Dieses Feld ist erforderlich'),
  user_email: Yup.string()
    .email('Bitte geben Sie eine gültige E-Mail-Adresse ein')
    .required('Dieses Feld ist erforderlich'),
  user_name: Yup.string()
    .min(3, 'Mindestens 3 Zeichen')
    .max(20, 'Maximal 20 Zeichen')
    .required('Dieses Feld ist erforderlich'),
});
