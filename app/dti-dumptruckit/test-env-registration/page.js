// import RegisterFormsTest from '../../../components/test-env-registration-content/page';

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
//     return <RegisterFormsTest />;
// }

import dynamic from "next/dynamic";

const RegisterFormsTest = dynamic(
  () => import("../../../components/test-env-registration-content/page"),
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

export default function TestEnvRegistration() {
  return <RegisterFormsTest />;
}
