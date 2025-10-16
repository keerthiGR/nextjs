'use client'
import React, { useState, useRef, useEffect } from "react";
import styles from "./registration-form-qa-content.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import mainlogo from "../../public/registration-form/images/DTI Logo.png";
import openQuote from "../../public/registration-form/images/open quote@2x.png";
import closeQuote from "../../public/registration-form/images/close quote@2x.png";
import banner from "../../public/registration-form/images/Image@2x.png";
import logoicon from "../../public/registration-form/images/dumptruckit logo icon@2x.png";
import file from "../../public/registration-form/images/file avatar@2x.png";
import downArrow from "../../public/registration-form/images/down@2x.png";
import Modal from "react-bootstrap/Modal";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import OtpInput from "react18-input-otp";
import axios from "axios";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
import TextField from "@mui/material/TextField";
import Lottie from "lottie-react";
import circleLoader from "../../public/registration-form/animation/Animation - 1712893560281.json";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import validLength from "../countryPhonecode.json"
// const BASE_URL = "https://qa.vinbytes.com/i11-cmp/api/organization/registration/form/";
const BASE_URL = "https://dti.i11labs.com/i11-cmp-be/api/organization/registration/form/";
export const Details = async (type, data) => {
  return axios.post(BASE_URL + type, data).then((res) => {
    return res;
  });
};
export const OTPVerify = async (data) => {
  return axios.post(BASE_URL + "verify/otp/submit", data).then((res) => {
    return res;
  });
};
export const OTPRetry = async (data) => {
  return axios.post(BASE_URL + "verify/otp/retry", data).then((res) => {
    return res;
  });
};

const RegisterForms = () => {
  const inputRef = useRef({
    orgName: null,
    emailAddress: null,
    countryCode: null,
    phoneNo: null,
    website: null,
    registrationNo: null,
    registrationDate: null,
    orgType: null,
    addressLine1: null,
    addressLine2: null,
  });
  const router = useRouter();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const [imgErr, setimgErr] = useState("");
  const [RegErr, setRegErr] = useState("");
  const [taxErr, setTaxErr] = useState("");
  const [phnErr, setPhnErr] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const [emailDisable, setEmailDisable] = useState(false);
  const [countrycode, setCountryCode] = useState(0);
  const [statecode, setStatecode] = useState(0);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const maxDate = `${year}-${month}-${day}`;
  const [retryCode, setRetryCode] = useState(false);
  const recaptchaRef = useRef(null);
  const [otpModel, setotpModel] = useState(false);
  const [email, setEmail] = useState(false);
  const [countryShow, setCountryShow] = useState(false);
  const [cityShow, setCityShow] = useState(false);
  const [stateShow, setStateShow] = useState(false);
  const [verified, setVerified] = useState(false);
  const [OTP, setOTP] = useState("");
  const [fileType, setFileType] = useState("text");
  const [fileData, setFileData] = useState({
    registration: "Certificate of Registration",
    tax: "Tax Certificate",
    logo: file,
    logopath: "Upload your organization logo for personalized login.",
  });
  const validatePhn = validLength.countryNo;
  const [phoneData, setPhoneData] = useState({
    countryISO: null,
    nationalNumber: "",
    code: null,
  });
  const isPhoneNumberValid = (phone, country) => {
    if (phone.length > 0) {
      const ISO = country.toUpperCase();
      const valid = validatePhn.find(user => user.code === ISO);
      if (valid.phoneLength <= phone.length) {
        setPhnErr(false)
        return true;
      }
      else {
        setPhnErr(true)
        return false;
      }
    }
  }


  // const handleEmail = (e) => {
  //   e.preventDefault();
  //   setOTP("");
  //   const payload = {
  //     emailAddress: formik1.values.emailAddress,
  //   };
  //   formik1
  //     .validateForm()
  //     .then(() => {
  //       if (formik1.values.emailAddress !== "" && formik1.isValid) {
  //         setLoading(true);
  //         Details("verify", payload)
  //           .then((res) => {
  //             if (res.data && res.data?.error) {
  //               setEmailDisable(true);
  //               toast.error(res.data?.error, { position: "top-right" });
  //               formik1.setFieldValue("emailAddress", "");
  //               document.querySelector("[name=emailAddress]").focus();
  //             } else {
  //               if (
  //                 res.data &&
  //                 res.data?.isVerified &&
  //                 res.data?.isVerified === true
  //               ) {
  //                 setVerified(true);
  //               } else {
  //                 setotpModel(!otpModel);
  //               }
  //             }
  //             setLoading(false);
  //           })
  //           .catch((err) => {
  //             setLoading(false);
  //             setEmailDisable(true);
  //             toast.error(err?.response?.data?.error, {
  //               position: "top-right",
  //             });
  //           });
  //       }
  //     })
  //     .catch(() => {
  //       setLoading(!loading);
  //     });
  // };

  // const handleVerify = () => {
  //   const payload = {
  //     emailAddress: formik1.values.emailAddress,
  //     code: OTP,
  //   };
  //   setIsToastVisible(true);
  //   OTPVerify(payload)
  //     .then((res) => {
  //       setVerified(true);
  //       setotpModel(!otpModel);
  //       setIsToastVisible(false);
  //     })
  //     .catch((err) => {
  //       setOTP("");
  //       if (
  //         resendRef.current &&
  //         typeof resendRef.current.focusInput === "function"
  //       ) {
  //         resendRef.current.focusInput(0);
  //       }
  //       toast.error(err?.response?.data?.error, { position: "top-right" });
  //       setIsToastVisible(false);
  //     });
  // };

  const handleOtpChange = (enteredOtp) => {
    setOTP(enteredOtp);
  };

  const resendRef = useRef(null);
  const handleRetry = (e) => {
    e.preventDefault();
    if (
      resendRef.current &&
      typeof resendRef.current.focusInput === "function"
    ) {
      resendRef.current.focusInput(0);
    }
    setOTP("");
    setRetryCode(true);
    const payload = {
      emailAddress: formik1.values.emailAddress,
    };
    OTPRetry(payload)
      .then(() => { })
      .catch((err) => {
        toast.error(err?.response?.data?.error, { position: "top-right" });
      });
    setTimeout(() => {
      setRetryCode(false);
    }, 800);
  };
  useEffect(() => {
    GetCountries()?.then((items) => {
      setCountry(items);
    });
  }, []);

  const handleBrowse = (type) => {
    if (type === "registration") {
      setFileType("reg");
      const fileInput = document.getElementById("register");
      fileInput.click();
    } else if (type === "tax") {
      setFileType("tax");
      const fileInput = document.getElementById("taxes");
      fileInput.click();
    } else {
      const fileInput = document.getElementById("logo");
      fileInput.click();
    }
  };
  const handleInputDoc = (e, type, mode) => {
    const file = e.target.files[0];
    const index = file?.name.lastIndexOf(".") + 1;
    const extFile = file?.name
      .substring(index, file?.name.length)
      .toLowerCase();
    if (file?.size > 100 * 1024) {
      toast.error("File size exceeds 100kb", { position: "top-right" });
      if (type === "logo") {
        setimgErr("File size exceeds 100kb");
      }
      if (mode === "register") {
        setRegErr("File size exceeds 100kb");
      }
      if (mode === "tax") {
        setTaxErr("File size exceeds 100kb");
      }
      return;
    }
    const reader = new FileReader();
    reader.onload = (res) => {
      const fileItems = res?.currentTarget?.result;
      if (type === "registerDoc") {
        if (extFile === "pdf") {
          if (mode === "register") {
            setRegErr("");
            setFileData((predata) => ({
              ...predata,
              registration: e.target.files[0].name,
            }));
            formik.setFieldValue("registerDocuments[0].url", fileItems);
          } else if (mode === "tax") {
            setTaxErr("");
            setFileData((predata) => ({
              ...predata,
              tax: e.target.files[0].name,
            }));
            formik.setFieldValue("registerDocuments[1].url", fileItems);
          }
        } else {
          if (mode === "register") {
            setRegErr("File format is not supported. Please try uploading .pdf files");
          } else {
            setTaxErr("File format is not supported. Please try uploading .pdf files");
          }
        }
      } else {
        if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
          setimgErr("");
          formik.setFieldValue("logo", fileItems);
          setFileData((predata) => ({
            ...predata,
            logopath: e.target.files[0]?.name,
            logo: reader.result,
          }));
        } else {
          setimgErr("File format is not supported. Please try uploading Image files");
        }
      }
    };
    reader.onerror = () => {
      toast.error("Error loading file", { position: "top-right" });
    };
    reader?.readAsDataURL(file);
  };
  const handleChange = (e, type) => {
    const { name, value } = e.target;
    const values = ToCamelCase(value);
    if (type === "file") {
      if (fileType === "tax") {
        handleInputDoc(e, "registerDoc", "tax");
      } else {
        handleInputDoc(e, "registerDoc", "register");
      }
    } else if (type === "logofile") {
      handleInputDoc(e, "logo", "logo");
    } else if (type === "address" && name === "postalCode" && !isNaN(value)) {
      formik.setFieldValue(`address.${name}`, values);
    } else if (type === "address" && name !== "postalCode") {
      formik.setFieldValue(`address.${name}`, values);
    } else if (type === "date") {
      formik.setFieldValue(name, value);
    } else {
      formik.setFieldValue(name, values);
    }
  };
  const handlePhone = (phn, { country, inputValue }) => {
    const result = isPhoneNumberValid(inputValue, country.iso2)
    if (result) {
      setPhoneData({
        countryISO: country.iso2,
        nationalNumber: inputValue,
        code: country.dialCode,
      });
      formik.setFieldValue("phoneNo", inputValue);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setCaptcha(true);
    const country_name = country.findIndex((value) => {
      const numberConvert = parseInt(formik.values.address.country);
      return value.id === numberConvert;
    });
    const state_name = state.findIndex((value) => {
      const numberConvert = parseInt(formik.values.address.state);
      return value.id === numberConvert;
    });
    const city_name = city.findIndex((value) => {
      const numberConvert = parseInt(formik.values.address.city);
      return value.id === numberConvert;
    });
    const payload = {
      orgName: formik.values.orgName,
      emailAddress: formik.values.emailAddress,
      countryCode: formik.values.phoneNo === "" ? null : phoneData.code,
      countryName: formik.values.phoneNo === "" ? null : phoneData.countryISO,
      phoneNo: formik.values.phoneNo === "" ? null : phoneData.nationalNumber,
      website:
        formik.values.website === ""
          ? null
          : formik.values.website.toLowerCase(),
      logo: formik.values.logo === "" ? null : formik.values.logo,
      registrationNo:
        formik.values.registrationNo === ""
          ? null
          : formik.values.registrationNo,
      registrationDate:
        formik.values.registrationDate === ""
          ? null
          : formik.values.registrationDate,
      orgType: formik.values.orgType === "" ? null : formik.values.orgType,
      address:
        formik.values.address.addressLine1 === "" &&
          formik.values.address.addressLine2 === "" &&
          formik.values.address.city === "" &&
          formik.values.address.state === "" &&
          formik.values.address.country === "" &&
          formik.values.address.postalCode === ""
          ? null
          : {
            addressLine1:
              formik.values.address.addressLine1 === ""
                ? null
                : formik.values.address.addressLine1,
            addressLine2:
              formik.values.address.addressLine2 === ""
                ? null
                : formik.values.address.addressLine2,
            city:
              formik.values.address.city === ""
                ? null
                : city[city_name]?.name,
            state:
              formik.values.address.state === ""
                ? null
                : state[state_name]?.name,
            country:
              formik.values.address.country === ""
                ? null
                : country[country_name]?.name,
            postalCode:
              formik.values.address.postalCode === ""
                ? null
                : formik.values.address.postalCode,
          },
      registerDocuments:
        formik.values.registerDocuments[0].url === "" &&
          formik.values.registerDocuments[1].url === ""
          ? null
          : formik.values.registerDocuments[0].url !== "" &&
            formik.values.registerDocuments[1].url !== ""
            ? [
              {
                type: (formik.values.registerDocuments[0].type =
                  "Registration"),
                url: (formik.values.registerDocuments[0].url =
                  formik.values.registerDocuments[0].url),
              },
              {
                type: (formik.values.registerDocuments[1].type = "Tax"),
                url: (formik.values.registerDocuments[1].url =
                  formik.values.registerDocuments[1].url),
              },
            ]
            : formik.values.registerDocuments[0].url === "" &&
              formik.values.registerDocuments[1].url !== ""
              ? [
                {
                  type: (formik.values.registerDocuments[1].type = "Tax"),
                  url: (formik.values.registerDocuments[1].url =
                    formik.values.registerDocuments[1].url),
                },
              ]
              : formik.values.registerDocuments[0].url !== "" &&
                formik.values.registerDocuments[1].url === ""
                ? [
                  {
                    type: (formik.values.registerDocuments[0].type =
                      "Registration"),
                    url: (formik.values.registerDocuments[0].url =
                      formik.values.registerDocuments[0].url),
                  },
                ]
                : null,
    };
    if (formik.errors.orgName) {
      setActive("orgName");
      inputRef.current.orgName.focus();
    }
    if (formik.errors.phoneNo) {
      setActive("phoneNo");
      inputRef.current.phoneNo.focus();
    }

    if (formik.values.orgName !== "" && formik.isValid) {
      setLoading(true);
      Details("create", payload)
        .then((res) => {
          if (res.data && res.data?.error) {
            setLoading(false);
            if (res.data?.error === "Website address already exists") {
              inputRef.current.website.focus();
            }
            if (res.data?.error === "Mobile number already exists") {
              setActive("phoneNo");
              inputRef.current.phoneNo.focus();
            }
            if (res.data?.error == "Registration number already exists") {
              setActive("registrationNo");
              if (inputRef.current.registrationNo) {
                inputRef.current.registrationNo.focus();
              }
            }
            toast.error(res.data?.error, { position: "top-right" });
          } else {
            setCaptcha(false);
            formik.resetForm();
            // formik1.resetForm();
            setBtnDisable(true);
            setFileData({
              registration: "Certificate of Registration",
              tax: "Tax Certificate",
              logo: file,
              logopath: "Upload your organization logo for personalized login.",
            });
            // setVerified(false);
            setSuccess(true);
            router.push("/dti-dumptruckit/registration-form/thankyou/");
            setTimeout(() => {
              setLoading(false);
            }, 1500);
          }
        })
        .catch((err) => {
          if (err.response?.data?.error === "Kindly verify the email address") {
            setActive("emailAddress");
            if (inputRef.current.emailAddress) {
              inputRef.current.emailAddress.focus();
            }
          }
          setLoading(false);
          // setEmail(true);
        });
    }
  };

  const formik = useFormik({
    initialValues: {
      orgName: "",
      emailAddress: "",
      countryCode: "",
      phoneNo: "",
      website: "",
      logo: "",
      registrationNo: "",
      registrationDate: "",
      orgType: "",
      address: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
      },
      registerDocuments: [
        {
          type: "Registration",
          url: "",
        },
        {
          type: "Tax",
          url: "",
        },
      ],
    },
    validate: (items) => {
      var errors = {};
      if (!items.orgName) {
        errors.orgName = "Required";
      } else if (items.orgName.length < 5) {
        errors.orgName = "Please enter full name";
      }
      else if (/^\s|\s$/.test(items.orgName)) {
        errors.orgName = "Please enter a valid name";
      }
      if (
        items.website &&
        !/^[A-Za-z0-9]+\.(?:[a-zA-Z]{2,}\.[a-zA-Z]{2,}|[a-zA-Z]{2,})$/.test(
          items.website
        )
      ) {
        errors.website = "Please enter valid Website address";
      }
      if (items.orgType) {
        if (!/^[A-Za-z\s-]+$/.test(items.orgType)) {
          errors.orgType = "Invalid Organization Type format";
        } else if (items.orgType.length < 3) {
          errors.orgType = "Please elaborate on the organization type";
        } else if (/^[@!#$%^&*()?.,~`"{}_+=<>\/0-9]+$/.test(items.orgType)) {
          errors.orgType = "Invalid Organization Type format";
        }
        else if (/^\s|\s$/.test(items.orgType)) {
          errors.orgType = "Invalid Organization Type format";
        }
      }
      if (items.phoneNo.match("0000000000") || phnErr) {
        errors.phoneNo = "Invalid Phone Number";
      }
      if (items.registrationNo) {
        if (!/^(?=.*\d)[A-Za-z0-9][A-Za-z0-9]*$/.test(items.registrationNo)) {
          errors.registrationNo = "Invalid format";
        } else if (items.registrationNo.length < 5) {
          errors.registrationNo = "Please enter valid Registration no. / ID";
        }
      }
      if (items.address.addressLine1 && items.address.addressLine1.length < 5) {
        errors.addressLine1 = "Please enter full address line 1";
      }
      else if (/^\s|\s$/.test(items.address.addressLine1)) {
        errors.addressLine1 = "Please enter full address line 1";
      }
      if (items.address.addressLine2 && items.address.addressLine2.length < 5) {
        errors.addressLine2 = "Please enter full address line 2";
      }
      else if (/^\s|\s$/.test(items.address.addressLine2)) {
        errors.addressLine2 = "Please enter full address line 2";
      }
      if (items.address.postalCode && isNaN(items.address.postalCode)) {
        errors.postalCode = "Invalid ZIP Code";
      }
      if (!items.recaptcha) {
        errors.recaptcha = "Required";
      }
      if (!items.emailAddress) {
        errors.emailAddress = "Required";
      } else if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/.test(
          items.emailAddress
        )
      ) {
        errors.emailAddress = "Please enter valid Email Address";
      }


      return errors;
    },
  });
  // const formik1 = useFormik({
  //   initialValues: {
  //     emailAddress: "",
  //   },
  //   validate: (items) => {
  //     var errors = {};
  //     if (!items.emailAddress) {
  //       errors.emailAddress = "Required";
  //     } else if (
  //       !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/.test(
  //         items.emailAddress
  //       )
  //     ) {
  //       errors.emailAddress = "Please enter valid Email Address";
  //     }

  //     return errors;
  //   },
  // });
  const [active, setActive] = useState("");

  const handleFocus = (name) => {
    setActive(name);
    if (inputRef.current[name]) {
      inputRef.current[name].focus();
    }
  };

  const handleCountry = async (countryid, state) => {
    if (state === "country") {
      await GetState(countryid).then((item) => {
        setState(item);
        setCity([]);
      });
    } else {
      await GetCity(countrycode, countryid).then((item) => {
        setCity(item);
      });
    }
  };

  const ToCamelCase = (str) => {
    return str
      ?.trimStart()
      .replace(/(^\w|\s\w)/g, (match, index) => {
        if (Number(match) === 0) return "";
        return index === 0 ? match : match.toUpperCase();
      })
      .replace(/\s+/g, " ");
  };

  const countrys = countryShow ? country : [];
  const states = stateShow ? state : [];
  const citys = cityShow ? city : [];

  const textFieldStyles = {
    "& .MuiInputBase-root": {
      height: "36px",
      fontSize: "14px",
      fontFamily: "Inter-Medium",
    },
    "& .MuiInputLabel-root": {
      fontSize: "14px",
      fontFamily: "Inter-Medium",
      marginTop: "-7px",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#000",
        borderWidth: "2px",
      },
      "&:hover fieldset": {
        borderColor: "#d3d3d3",
      },
      "&.Mui-focused:hover fieldset": {
        borderColor: "#000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000",
      },
      "& fieldset": {
        transition: "border-color 0.2s ease-in-out",
      },
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      marginTop: "0px",
      color: "#000",
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      marginTop: "0px",
    },
  };

  const handleInput = (event, state) => {
    if (state === "OrgNo") {
      const value = event.target.value;
      const regex = /^[a-zA-Z0-9-\s]*$/;
      if (!regex.test(value)) {
        event.target.value = value.replace(/[^a-zA-Z0-9-\s]/g, "");
      }
    } else {
      const value = event.target.value;
      const regex = /^[a-zA-Z-\s]*$/;
      if (!regex.test(value)) {
        event.target.value = value.replace(/[^a-zA-Z-\s]/g, "");
      }
    }
  };

  const handlePaste = (event, state) => {
    if (state === "OrgNo") {
      const paste = (event.clipboardData || window.clipboardData).getData(
        "text"
      );
      const regex = /^[a-zA-Z0-9-\s]*$/;
      if (!regex.test(paste)) {
        event.preventDefault();
      }
    } else {
      const paste = (event.clipboardData || window.clipboardData).getData(
        "text"
      );
      const regex = /^[a-zA-Z-\s]*$/;
      if (!regex.test(paste)) {
        event.preventDefault();
      }
    }
  };

  return (
    <>
      <div className={loading ? `${styles.bgFilter}` : `${styles.bgloader}`}>
        {loading ? (
          <div className={`${styles.loading}`}>
            <Lottie
              className={`${styles.loadSpinner}`}
              animationData={circleLoader}
            />
          </div>
        ) : null}
      </div>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} `}>
          <div className="row gap-5 p-2 p-md-0">
            <div
              className={`col-12 col-lg-5 text-center ${styles.unscrollableContainer} `}
            >
              <div className="p-md-4 pb-md-0">
                <Image
                  src={logoicon}
                  alt="logo icon"
                  width={144}
                  height={144}
                />
                <div className="pt-4">
                  <Image
                    src={openQuote}
                    alt="logo icon"
                    width={36}
                    height={32}
                  />
                </div>
                <div className="p-2">
                  <span className={`${styles.secondaryFont}`}>
                    DumpTruckIt has <br /> simplified our logistics <br />{" "}
                    management, and we <br />
                    couldn&apos;t be happier.
                  </span>
                </div>
                <Image
                  src={closeQuote}
                  alt="logo icon"
                  width={36}
                  height={32}
                />
                <div className="pt-3">
                  <span className={`${styles.primaryHeading}`}>
                    Bill Cartwright
                  </span>
                  <br />
                  <span className={`${styles.subFont}`}>
                    CEO | ABC Logistics
                  </span>
                </div>
              </div>
              <Image
                className={`${styles.images}`}
                src={banner}
                alt="logo icon"
                width={626}
                height={246}
              />
            </div>
            <div className={`col p-md-4 ${styles.scrollableContainer}`}>
              <div className="col-lg-10">
                <div className="text-center mb-4">
                  <Image src={mainlogo} alt="logo" width={154} height={132} />
                </div>
                <div className={`text-center py-3 ${styles.heading}`}>
                  Register as an Organization
                </div>
                <div className={`${styles.box} p-md-5 p-4`}>
                  <form
                    onSubmit={handleRegister}
                    className={`${styles.primaryFont} mb-4`}
                  >
                    <div className={`${styles.primaryHeading} mb-2`}>
                      Basic Info
                    </div>
                    <TextField
                      required
                      InputLabelProps={{
                        sx: { ".MuiInputLabel-asterisk": { color: "red" } },
                      }}
                      label="Organization Name"
                      autoComplete="none"
                      inputRef={(element) =>
                        (inputRef.current["orgName"] = element)
                      }
                      className={`${styles.muiFormcontrol}`}
                      sx={textFieldStyles}
                      type="text"
                      name="orgName"
                      value={formik.values.orgName}
                      onBlur={(e) => {
                        formik.handleBlur(e);
                        setActive("");
                      }}
                      onFocus={() => handleFocus("orgName")}
                      onChange={(e) => {
                        handleChange(e, "text");
                      }}
                    />
                    {formik.touched.orgName && formik.errors.orgName ? (
                      <div className="text-danger">{formik.errors.orgName}</div>
                    ) : null}

                    {/* {!verified ? ( */}
                    <div>
                      <div className="d-flex gap-2 align-items-end mt-3">
                        <div className="col">
                          <TextField
                            required
                            InputLabelProps={{
                              sx: {
                                ".MuiInputLabel-asterisk": { color: "red" },
                              },
                            }}
                            sx={textFieldStyles}
                            label="Email Address"
                            autoComplete="none"
                            inputRef={(element) =>
                              (inputRef.current["emailAddress"] = element)
                            }
                            className={`${styles.muiFormcontrol}`}
                            type="text"
                            name="emailAddress"
                            value={formik.values.emailAddress}
                            onBlur={(e) => {
                              formik.handleBlur(e);
                              setActive("");
                            }}
                            onFocus={() => handleFocus("emailAddress")}
                            onChange={(e) => {
                              formik.handleChange(e);
                              // setEmailDisable(false);
                              // setEmail(false);
                            }}
                          />
                        </div>
                        {/* <button
                            className={
                              formik1.values.emailAddress.includes("@") && emailDisable || !formik1.values.emailAddress
                                ? `px-3 ${styles.activebutton} opacity-50` :
                                `${styles.activebutton} px-3`}
                            type="button"
                            onClick={handleEmail}
                            disabled={
                              !formik1.values.emailAddress.includes("@") || emailDisable
                                ? true
                                : false
                            }
                          >
                            Verify
                          </button> */}
                      </div>
                      {formik.errors.emailAddress &&
                        formik.touched.emailAddress ? (
                        <div className="text-danger">
                          {formik.errors.emailAddress}
                        </div>
                      ) : // :
                        // email ? <div className="text-danger">
                        //   Please verify email address
                        // </div>

                        null}
                    </div>

                    {/* ) : (
                      <div className={`gap-2 py-4`}>
                        <label
                          className={
                            active !== "emailAddress" ||
                              formik.values.emailAddress
                              ? `${styles.floatingLabel}`
                              : `${styles.placeholder}`
                          }
                          onClick={() => handleFocus("emailAddress")}
                        >
                          Email Address
                        </label>
                        <div
                          className={`${styles.docbox} d-flex px-3 justify-content-between align-items-center`}
                        >
                          <span className="">{formik1.values.emailAddress}</span>
                          <Image src={check} alt="check" width={24} height={24} />
                        </div>
                      </div>
                    )} */}

                    <div className="">
                      <label
                        className={
                          active === "phoneNo" || formik.values.phoneNo !== "" || phnErr
                            ? `${styles.phnfloatingLabel}`
                            : `${styles.phnplaceholder}`
                        }
                        onClick={() => handleFocus("phoneNo")}
                      >
                        Phone No
                      </label>
                      <PhoneInput
                        ref={(element) =>
                          (inputRef.current["phoneNo"] = element)
                        }
                        disableFormatting={true}
                        disableDialCodeAndPrefix={true}
                        disableCountryGuess={true}
                        initialCountry="us"
                        name="phoneNo"
                        value={formik.values.phoneNo}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          setActive("");
                        }}
                        onFocus={() => handleFocus("phoneNo")}
                        onChange={handlePhone}
                      />
                      {formik.touched.phoneNo && (formik.errors.phoneNo) ? (
                        <div className="text-danger">
                          {formik.errors.phoneNo}
                        </div>
                      ) : null}
                    </div>
                    <div className="py-4">
                      <div className="d-flex">
                        <div className={`${styles.smallBox} px-2`}>www.</div>
                        <input
                          autoComplete="none"
                          ref={(element) =>
                            (inputRef.current["website"] = element)
                          }
                          className={`${styles.formcontrol}`}
                          type="text"
                          name="website"
                          value={formik.values.website}
                          onBlur={(e) => {
                            formik.handleBlur(e);
                            setActive("");
                          }}
                          onFocus={() => handleFocus("website")}
                          placeholder="yourwebsite.com"
                          onChange={(e) => handleChange(e, "text")}
                        />
                      </div>
                      {formik.touched.website && formik.errors.website ? (
                        <div className="text-danger">
                          {formik.errors.website}
                        </div>
                      ) : null}
                    </div>
                    <div className="">
                      <div className="d-flex gap-2 align-items-center">
                        <Image
                          src={fileData.logo}
                          alt="logo"
                          width={110}
                          height={110}
                          className={`${styles.img}`}
                        />
                        <div className={`${styles.logoBox}`}>
                          <span>Organization Logo</span>
                          <br />
                          <span className={`${styles.subheading}`}>
                            {fileData.logopath}
                          </span>
                          <input
                            autoComplete="none"
                            id="logo"
                            type="file"
                            accept="image/png, image/jpg, image/jpeg"
                            style={{ display: "none" }}
                            onChange={(e) => handleChange(e, "logofile")}
                          />
                          <div className="mt-2 d-flex">
                            <button
                              type="button"
                              className={`${styles.activebutton} px-2 px-sm-3`}
                              onClick={() => handleBrowse("logoimg")}
                            >
                              Upload
                            </button>
                            <div className="ms-2">
                              <button
                                type="button"
                                className={`${styles.inactivebutton} px-2 px-sm-3`}
                                onClick={() => {
                                  setimgErr("");
                                  formik.setFieldValue("logo", "");
                                  setFileData((predata) => ({
                                    ...predata,
                                    logopath:
                                      "Upload your organization logo for personalized login.",
                                    logo: file,
                                  }));
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-danger">
                        {imgErr}
                      </div>

                    </div>
                    <TextField
                      sx={textFieldStyles}
                      label="Organization Type"
                      autoComplete="none"
                      inputRef={(element) =>
                        (inputRef.current["orgType"] = element)
                      }
                      className={`${styles.muiFormcontrol} mt-3`}
                      type="text"
                      name="orgType"
                      value={formik.values.orgType}
                      onBlur={(e) => {
                        formik.handleBlur(e);
                        setActive("");
                      }}
                      onFocus={() => handleFocus("orgType")}
                      onChange={(e) => handleChange(e, "text")}
                      onInput={(e) => handleInput(e, "")}
                      onPaste={(e) => handlePaste(e, "")}
                    />
                    <div className="">
                      <div className={`${styles.subheading}`}>
                        Eg: LLC, Partnership
                      </div>
                      {formik.touched.orgType && formik.errors.orgType ? (
                        <div className="text-danger">
                          {formik.errors.orgType}
                        </div>
                      ) : null}
                    </div>

                    <div className="">
                      <label
                        className={
                          active === "registrationDate" ||
                            formik.values.registrationDate
                            ? `${styles.floatingLabel}`
                            : `${styles.placeholder}`
                        }
                        onClick={() => handleFocus("registrationDate")}
                      >
                        Organization Registration Date
                      </label>

                      <input
                        autoComplete="off"
                        ref={(element) =>
                          (inputRef.current["registrationDate"] = element)
                        }
                        type="date"
                        className={`${styles.formcontrol} 
                        ${formik.values.registrationDate ? "" : styles.dateField}
                          `}
                        max={maxDate}
                        name="registrationDate"
                        value={formik.values.registrationDate}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          setActive("");
                        }}
                        onFocus={() => handleFocus("registrationDate")}
                        onChange={(e) => handleChange(e, "date")}
                      />
                      {formik.touched.registrationDate &&
                        formik.errors.registrationDate ? (
                        <div className="text-danger">
                          {formik.errors.registrationDate}
                        </div>
                      ) : null}
                    </div>

                    <TextField
                      sx={textFieldStyles}
                      label="Organization Registration No/ID"
                      autoComplete="none"
                      inputRef={(element) =>
                        (inputRef.current["registrationNo"] = element)
                      }
                      inputProps={{ maxLength: 20 }}
                      className={`${styles.muiFormcontrol} mt-3`}
                      type="text"
                      name="registrationNo"
                      value={formik.values.registrationNo}
                      onBlur={(e) => {
                        formik.handleBlur(e);
                        setActive("");
                      }}
                      onFocus={() => handleFocus("registrationNo")}
                      onChange={(e) => {
                        handleChange(e, "text");
                      }}
                      onInput={(e) => handleInput(e, "OrgNo")}
                      onPaste={(e) => handlePaste(e, "OrgNo")}
                    />
                    {formik.touched.registrationNo &&
                      formik.errors.registrationNo ? (
                      <div className="text-danger">
                        {formik.errors.registrationNo}
                      </div>
                    ) : null}
                    <div className={`${styles.primaryHeading} pt-3`}>
                      Contact Details
                    </div>
                    <TextField
                      label="Address Line 1"
                      sx={textFieldStyles}
                      autoComplete="none"
                      inputRef={(element) =>
                        (inputRef.current["addressLine1"] = element)
                      }
                      className={`${styles.muiFormcontrol} mt-3`}
                      type="text"
                      name="addressLine1"
                      value={formik.values.address.addressLine1}
                      onBlur={(e) => {
                        formik.handleBlur(e);
                        setActive("");
                      }}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^\w\s,]/g, "")
                      }}
                      onFocus={() => handleFocus("addressLine1")}
                      onChange={(e) => handleChange(e, "address")}
                    />
                    {formik.touched.addressLine1 &&
                      formik.errors.addressLine1 ? (
                      <div className="text-danger">
                        {formik.errors.addressLine1}
                      </div>
                    ) : null}
                    <div className="">
                      <TextField
                        sx={textFieldStyles}
                        label="Address Line 2"
                        autoComplete="none"
                        inputRef={(element) =>
                          (inputRef.current["addressLine2"] = element)
                        }
                        className={`${styles.muiFormcontrol} mt-3`}
                        type="text"
                        name="addressLine2"
                        value={formik.values.address.addressLine2}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          setActive("");
                        }}
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(/[^\w\s,]/g, "")
                        }}
                        onFocus={() => handleFocus("addressLine2")}
                        onChange={(e) => handleChange(e, "address")}
                      />
                      {formik.touched.addressLine2 &&
                        formik.errors.addressLine2 ? (
                        <div className="text-danger">
                          {formik.errors.addressLine2}
                        </div>
                      ) : null}
                    </div>
                    <div className="d-flex gap-3">
                      <div className="col">
                        <TextField
                          label="ZIP Code"
                          sx={textFieldStyles}
                          style={{ marginTop: 23 }}
                          autoComplete="none"
                          className={`${styles.muiFormcontrol}`}
                          type="text"
                          maxLength={5}
                          onInput={(e) => {
                            e.target.value = e.target.value
                              .replace(/\D/g, "")
                              .substring(0, 5);
                          }}
                          name="postalCode"
                          value={formik.values.address.postalCode}
                          onBlur={(e) => {
                            formik.handleBlur(e);
                            setActive("");
                          }}
                          onFocus={() => handleFocus("postalCode")}
                          onChange={(e) => handleChange(e, "address")}
                        />
                        {formik.touched.address &&
                          formik.touched.address.postalCode &&
                          formik.errors.postalCode ? (
                          <div className="text-danger">
                            {formik.errors.postalCode}
                          </div>
                        ) : null}
                      </div>

                      <div className="col">
                        <div className="d-flex justify-content-between">
                          <label
                            className={
                              active === "country" ||
                                formik.values.address.country
                                ? `${styles.floatingLabel}`
                                : `${styles.placeholder}`
                            }
                          // onClick={() => {
                          //   handleFocus("country");
                          // }}
                          // onFocus={() => setCountryShow(true)}
                          >
                            Country
                          </label>
                        
                            {/* <Image
                              className={`${styles.downImg}`}
                              onClick={console.log('hhhhhhh')}
                              alt="downImg"
                              src={downArrow}
                              height={25}
                              width={25}
                            /> */}
                        </div>
                        <select
                          className={`${styles.formcontrol} customSelect` }
                          type="text"
                          name="country"
                          value={formik.values.address.country}
                          onBlur={(e) => {
                            formik.handleBlur(e);
                            setActive("");
                          }}
                          onFocus={() => {
                            setCountryShow(true);
                            handleFocus("country");
                          }}
                          onChange={(e) => {
                            handleChange(e, "address");
                            const convertNumber = parseInt(e.target.value);
                            setCountryCode(convertNumber);
                            handleCountry(convertNumber, "country");
                          }}
                        >
                          <option
                            value="disabled"
                            style={{ color: "#0000" }}
                            hidden
                          ></option>
                          {countrys.map((item) => (
                            <option key={item?.id} value={item?.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                        {formik.touched.address &&
                          formik.touched.address.country &&
                          formik.errors.country ? (
                          <div className="text-danger">
                            {formik.errors.country}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      {country !== 0 && countryShow ? (
                        <div className="col">
                          <div className="d-flex justify-content-between">
                            <label
                              className={
                                active === "state" ||
                                  formik.values.address.state
                                  ? `${styles.floatingLabel}`
                                  : `${styles.placeholder}`
                              }
                              onClick={() => handleFocus("state")}
                            >
                              State
                            </label>
                            {/* <Image
                              className={`${styles.downImg}`}
                              alt="downImg"
                              src={downArrow}
                              height={25}
                              width={25}
                            /> */}
                          </div>
                          <select
                            className={`${styles.formcontrol} customSelect`}
                            type="text"
                            name="state"
                            value={formik.values.address.state}
                            onBlur={(e) => {
                              formik.handleBlur(e);
                              setActive("");
                            }}
                            onFocus={() => {
                              handleFocus("state");
                              setStateShow(true);
                            }}
                            onChange={(e) => {
                              handleChange(e, "address");
                              const convertNumber = parseInt(e.target.value);
                              setStatecode(convertNumber);
                              handleCountry(convertNumber, "");
                            }}
                          >
                            <option value="disabled" hidden></option>
                            {states.map((item) => (
                              <>
                                <option value={item.id} key={item.id}>
                                  {item.name}
                                </option>
                              </>
                            ))}
                          </select>
                          {formik.touched.address &&
                            formik.touched.address.state &&
                            formik.errors.state ? (
                            <div className="text-danger">
                              {formik.errors.state}
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <div className="col d-flex">
                          <input
                            autoComplete="none"
                            disabled
                            placeholder="State"
                            style={{ marginTop: 20 }}
                            className={`${styles.formcontrol} col-6`}
                            type="text"
                            name="state"
                            value={formik.values.address.state}
                            onBlur={(e) => {
                              formik.handleBlur(e);
                              setActive("");
                            }}
                            onFocus={() => handleFocus("state")}
                            onChange={(e) => {
                              handleChange(e, "address");
                            }}
                          />
                          <Image
                            className={`${styles.disableDownImg}`}
                            alt="downImg"
                            src={downArrow}
                            height={25}
                            width={25}
                          />
                          {formik.touched.address &&
                            formik.touched.address.state &&
                            formik.errors.state ? (
                            <div className="text-danger">
                              {formik.errors.state}
                            </div>
                          ) : null}
                        </div>
                      )}

                      {statecode !== 0 ? (
                        <div className="col">
                          <div className="d-flex justify-content-between">
                            <label
                              className={
                                active === "city" || formik.values.address.city
                                  ? `${styles.floatingLabel}`
                                  : `${styles.placeholder}`
                              }
                              onClick={() => handleFocus("city")}
                            >
                              City
                            </label>
                            {/* <Image
                              className={`${styles.downImg}`}
                              alt="downImg"
                              src={downArrow}
                              height={25}
                              width={25}
                            /> */}
                          </div>
                          <select
                            className={`${styles.formcontrol} col-6 customSelect`}
                            type="text"
                            name="city"
                            value={formik.values.address.city}
                            onBlur={(e) => {
                              formik.handleBlur(e);
                              setActive("");
                            }}
                            onFocus={() => {
                              handleFocus("city");
                              setCityShow(true);
                            }}
                            onChange={(e) => {
                              handleChange(e, "address");
                            }}
                          >
                            <option value="disabled" hidden></option>
                            {citys.map((item) => (
                              <>
                                <option value={item.id} key={item.id}>
                                  {item.name}
                                </option>
                              </>
                            ))}
                          </select>
                          {formik.touched.address &&
                            formik.touched.address.city &&
                            formik.errors.city ? (
                            <div className="text-danger">
                              {formik.errors.city}
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <div className="col d-flex">
                          <input
                            disabled
                            style={{ marginTop: 20 }}
                            placeholder="City"
                            className={`${styles.formcontrol} col-6`}
                            type="text"
                            name="city"
                            value={formik.values.address.city}
                            onBlur={(e) => {
                              formik.handleBlur(e);
                              setActive("");
                            }}
                            onChange={(e) => handleChange(e, "address")}
                          />
                          <Image
                            className={`${styles.disableDownImg}`}
                            alt="downImg"
                            src={downArrow}
                            height={25}
                            width={25}
                          />
                          {formik.touched.address &&
                            formik.touched.address.city &&
                            formik.errors.city ? (
                            <div className="text-danger">
                              {formik.errors.city}
                            </div>
                          ) : null}
                        </div>
                      )}
                    </div>
                    <div className={`${styles.primaryHeading} py-3`}>
                      Documents
                    </div>
                    <div
                      className={
                        formik.values.registerDocuments[1].url ? "" : "pb-3"
                      }
                    >
                      <label
                        className={
                          active === "registerDocuments[0].url" ||
                            formik.values.registerDocuments[0].url
                            ? `${styles.floatingLabel}`
                            : `d-none`
                        }
                        onClick={() => handleFocus("registerDocuments[0].url")}
                      >
                        Certificate of Registration
                      </label>
                      <div className={`${styles.docbox} d-flex`}>
                        <input
                          autoComplete="none"
                          id="register"
                          type="file"
                          accept="application/pdf"
                          style={{ display: "none" }}
                          name="registerDocuments[0].url"
                          onChange={(e) => handleChange(e, "file")}
                        />
                        <span className="align-items-center d-flex px-3 col-7 text-nowrap">
                          {fileData?.registration}
                        </span>
                        <div className="text-end w-100">
                          <button
                            type="button"
                            className={`${styles.activebutton} px-3`}
                            onClick={() => handleBrowse("registration")}
                          >
                            Browse
                          </button>
                        </div>
                      </div>
                      <div className="text-danger">
                        {RegErr}
                      </div>
                    </div>

                    <div
                      className={
                        formik.values.registerDocuments[1].url ? "pb-4" : "pb-4"
                      }
                    >
                      <label
                        className={
                          active === "registerDocuments[1].url" ||
                            formik.values.registerDocuments[1].url
                            ? `${styles.floatingLabel}`
                            : `d-none`
                        }
                        onClick={() => handleFocus("registerDocuments[1].url")}
                      >
                        Tax Certificate
                      </label>
                      <div className={`${styles.docbox} d-flex`}>
                        <input
                          autoComplete="none"
                          id="taxes"
                          type="file"
                          accept="application/pdf"
                          style={{ display: "none" }}
                          onBlur={formik.handleBlur}
                          name="registerDocuments[1].url"
                          onChange={(e) => handleChange(e, "file")}
                        />
                        <span className="align-items-center d-flex col-7 px-3">
                          {fileData?.tax}
                        </span>
                        <div className="text-end w-100">
                          <button
                            type="button"
                            className={`${styles.activebutton} px-3`}
                            onClick={() => handleBrowse("tax")}
                          >
                            Browse
                          </button>
                        </div>
                      </div>
                      <div className="text-danger">
                        {taxErr}
                      </div>
                    </div>
                    <div className="">
                      <ReCAPTCHA
                        name="recaptcha"
                        ref={recaptchaRef}
                        className={`${styles.captcha}`}
                        sitekey="6LeNbFArAAAAAOtVkChGhNBRP-0UCFOfmPn5Wcca"
                        onChange={(value) =>
                          formik.setFieldValue("recaptcha", value)
                        }
                        onExpired={() => formik.setFieldValue("recaptcha", "")}
                        onErrored={() => formik.setFieldValue("recaptcha", "")}
                      />
                      {formik.errors.recaptcha && captcha ? (
                        <div className="text-danger text-center w-100">
                          {formik.errors.recaptcha}
                        </div>
                      ) : null}
                    </div>
                    <div
                      className={`${styles.subheading} text-black text-center py-3`}
                    >
                      By registering, you agree and accept our{" "}
                      <span className="text-decoration-underline me-1">
                        Terms & Conditions
                      </span>
                      and
                      <span className="text-decoration-underline ms-1">
                        Privacy Policy
                      </span>
                    </div>
                    <button
                      type="submit"
                      className={`${styles.activebutton} w-100`}
                      disabled={btnDisable}
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          size="md"
          show={otpModel}
          aria-labelledby="modal"
          onHide={() => setotpModel(false)}
          centered
        >
          <Modal.Body className="text-center py-5" id="modal">
            <span className={`${styles.modalHeading}`}>
              Email Address Verification
            </span>
            <br />
            <span className={`${styles.primaryFont}`}>
              Enter the verification code sent to <br /> &quot;
              {formik.values.emailAddress}&quot;
            </span>
            <div className={`${styles.otpfield} mb-2 p-2`}>
              <OtpInput
                className={`${styles.otp} px-2 otp`}
                ref={resendRef}
                value={OTP}
                onChange={handleOtpChange}
                numInputs={6}
                separator={false}
                isInputNum={true}
                shouldAutoFocus={true}
              />
            </div>
            {/* <button
              className={
                OTP.length !== 6
                  ? `${styles.inactivebutton} w-75`
                  : `${styles.activebutton} w-75`
              }
              onClick={handleVerify}
              disabled={OTP.length < 6 || isToastVisible}
            >
              Verify
            </button> */}
            <br />
            <div className={`${styles.primaryFont} pt-3 mb-2`}>
              Didn&apos;t receive verification code?
            </div>
            <div className={`${styles.link}`} onClick={handleRetry}>
              <span
                className={`${(styles.primaryFont, styles.resendCode)
                  } text-black`}
              >
                {retryCode ? "Resending..." : "Resend Code"}
              </span>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default RegisterForms;
