// import RegistrationForms from '../../../components/registration-form-qa-content/page';

// export const metadata = {
//     title: "Register as an Organization",
//     description: "",
//     ogTitle: "Register as an Organization",
//     url: "",
//     ogDescription: "",
//     ogUrl: "",
//     ogType: "website",
//     ogLocale: "en_US",
// };

// export default function contact() {
//     return <RegistrationForms />;
// }

import dynamic from "next/dynamic";

const RegistrationForms = dynamic(
  () => import("../../../components/registration-form-qa-content/page"),
  { ssr: false } // disable server-side rendering
);

export const metadata = {
  title: "Register as an Organization",
  description: "",
  ogTitle: "Register as an Organization",
  url: "",
  ogDescription: "",
  ogUrl: "",
  ogType: "website",
  ogLocale: "en_US",
};

export default function RegistrationFormPage() {
  return <RegistrationForms />;
}
