"use client";
import { useState, useRef, useEffect } from "react";
import {
  X,
  Clock,
  CheckCircle2,
  Pencil,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MonitorPlay, 
  Handshake,     
  Headset,          
  Lightbulb,
  UserRound,
  Mail,
  BriefcaseBusiness,
  Phone,
  Calendar,
} from "lucide-react";
import styles from "./sidebar.module.css";

const BookingSidebar = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [editingField, setEditingField] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const sidebarRef = useRef(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        if (editingField) {
          setEditingField(null);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, editingField]);

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Calendar functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const calendar = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendar.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      );
    }

    return calendar;
  };

  const handleDateSelect = (date) => {
    if (date) {
      const dateString = date.toISOString().split("T")[0];
      setFormData((prev) => ({ ...prev, date: dateString }));
    }
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      if (direction === "prev") {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date) => {
    if (!date) return false;
    return formData.date === date.toISOString().split("T")[0];
  };

  const isPastDate = (date) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    try {
      console.log("Booking data:", formData);
      nextStep();
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });
    setEditingField(null);
    setCurrentMonth(new Date());
    onClose();
  };

  // Edit functionality for review step
  const startEdit = (field) => {
    setEditingField(field);
  };

  const handleFieldEdit = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setEditingField(null);
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (!isOpen) return null;

  return (
    <div className={styles.sidebarOverlay}>
      <div className={styles.bookingSidebar} ref={sidebarRef}>
        {/* Header */}
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarHeader1}>
            <h2>Book Appointment</h2>
            <p>It just takes 60 seconds</p>
          </div>
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close booking sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress Steps */}
        <div className={styles.progressSteps}>
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className={styles.stepContainer}>
              <div
                className={`${styles.stepCircle} ${
                  currentStep >= step ? styles.active : ""
                }`}
              >
                {currentStep > step ? <CheckCircle2 size={16} /> : step}
              </div>
              {step < 5 && <div className={styles.stepLine} />}
            </div>
          ))}
        </div>

        <div className={styles.sidebarContent}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className={styles.stepContent}>
              <div className={styles.stepHeader}>
                <h4>Let's start with your details</h4>
                <p>We'll use this information to confirm your appointment</p>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    placeholder="Enter your first name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    placeholder="Enter your last name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className={styles.stepActions}>
                <button
                  onClick={nextStep}
                  disabled={
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.email ||
                    !formData.phone
                  }
                  className={styles.primaryButton}
                >
                  Continue
                  <ArrowRight />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {currentStep === 2 && (
            <div className={styles.stepContent}>
              <div className={styles.stepHeader}>
                <h4>What brings you here?</h4>
                <p>Select the service you're interested in</p>
              </div>

              <div className={styles.serviceOptions}>
                {/* i11fleet Demo */}
                <div
                  className={`${styles.serviceOption} ${
                    formData.service === "i11fleet Demo" ? styles.selected : ""
                  }`}
                  onClick={() => handleInputChange("service", "i11fleet Demo")}
                >
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceIcon}>
                      <MonitorPlay size={24} />
                    </div>
                    <div className={styles.serviceText}>
                      <div className={styles.serviceName}>i11fleet Demo</div>
                      <div className={styles.serviceDescription}>
                        See our products in action
                      </div>
                    </div>
                  </div>
                  {formData.service === "i11fleet Demo" && (
                    <CheckCircle2 size={20} />
                  )}
                </div>

                {/* AI Powered Load Board */}
                <div
                  className={`${styles.serviceOption} ${
                    formData.service === "AI Powered Load Board"
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() =>
                    handleInputChange("service", "AI Powered Load Board")
                  }
                >
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceIcon}>
                      <Handshake size={24} />
                    </div>
                    <div className={styles.serviceText}>
                      <div className={styles.serviceName}>
                        AI Powered Load Board
                      </div>
                      <div className={styles.serviceDescription}>
                        Explore collaboration opportunities
                      </div>
                    </div>
                  </div>
                  {formData.service === "AI Powered Load Board" && (
                    <CheckCircle2 size={20} />
                  )}
                </div>

                {/* Technical Support */}
                <div
                  className={`${styles.serviceOption} ${
                    formData.service === "Technical Support"
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() =>
                    handleInputChange("service", "Technical Support")
                  }
                >
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceIcon}>
                      <Headset size={24} />
                    </div>
                    <div className={styles.serviceText}>
                      <div className={styles.serviceName}>
                        Technical Support
                      </div>
                      <div className={styles.serviceDescription}>
                        Get help with technical issues
                      </div>
                    </div>
                  </div>
                  {formData.service === "Technical Support" && (
                    <CheckCircle2 size={20} />
                  )}
                </div>

                {/* Custom Project */}
                <div
                  className={`${styles.serviceOption} ${
                    formData.service === "Custom Project" ? styles.selected : ""
                  }`}
                  onClick={() => handleInputChange("service", "Custom Project")}
                >
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceIcon}>
                      <Lightbulb size={24} />
                    </div>
                    <div className={styles.serviceText}>
                      <div className={styles.serviceName}>Custom Project</div>
                      <div className={styles.serviceDescription}>
                        Discuss your unique requirements
                      </div>
                    </div>
                  </div>
                  {formData.service === "Custom Project" && (
                    <CheckCircle2 size={20} />
                  )}
                </div>
              </div>

              <div className={styles.stepActions}>
                <button onClick={prevStep} className={styles.secondaryButton}>
                  Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!formData.service}
                  className={styles.primaryButton}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Date & Time Selection */}
          {currentStep === 3 && (
            <div className={styles.stepContent}>
              <div className={styles.stepHeader}>
                <h4>Pick your perfect time</h4>
                <p>Choose a date and time that works for you</p>
              </div>

              <div className={styles.dateTimeSelection}>
                {/* Calendar Section */}
                <label>Select Date *</label>
                <div className={styles.calendarSection}>
                  <div className={styles.calendarHeader}>
                    <button
                      onClick={() => navigateMonth("prev")}
                      className={styles.calendarNavButton}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <h5>
                      {monthNames[currentMonth.getMonth()]}{" "}
                      {currentMonth.getFullYear()}
                    </h5>
                    <button
                      onClick={() => navigateMonth("next")}
                      className={styles.calendarNavButton}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  <div className={styles.calendarGrid}>
                    {/* Day headers */}
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <div key={day} className={styles.calendarDayHeader}>
                          {day}
                        </div>
                      )
                    )}

                    {/* Calendar days */}
                    {generateCalendar().map((date, index) => (
                      <button
                        key={index}
                        className={`${styles.calendarDay} ${
                          isSelected(date) ? styles.selectedDate : ""
                        } ${isToday(date) ? styles.today : ""} ${
                          isPastDate(date) ? styles.pastDate : ""
                        }`}
                        onClick={() =>
                          !isPastDate(date) && handleDateSelect(date)
                        }
                        disabled={isPastDate(date)}
                      >
                        {date ? date.getDate() : ""}
                      </button>
                    ))}
                  </div>

                  {formData.date && (
                    <div className={styles.selectedDateDisplay}>
                      <CheckCircle2 size={16} />
                      <span>Selected: {formatDate(formData.date)}</span>
                    </div>
                  )}
                </div>

                {/* Time Selection */}
                <div className={styles.formGroup}>
                  <label>Select Time *</label>
                  <div className={styles.timeSlots}>
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={`${styles.timeSlot} ${
                          formData.time === time ? styles.selectedTime : ""
                        }`}
                        onClick={() => handleInputChange("time", time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.stepActions}>
                <button onClick={prevStep} className={styles.secondaryButton}>
                  Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!formData.date || !formData.time}
                  className={styles.primaryButton}
                >
                  Continue
                </button>
              </div>
            </div>
          )}


          {/* Step 4: Review & Confirm */}
          {currentStep === 4 && (
            <div className={styles.stepContent}>
              <div className={styles.stepHeader}>
                <CheckCircle2 size={24} />
                <h4>Review Appointment</h4>
                <p>Double-check everything looks good before confirming</p>
              </div>

              <div className={styles.reviewDetails}>
                {/* First Name */}
                <div className={styles.detailRow}>
                  <UserRound size={20} style={{margin:"8px"}}/>
                  <span className={styles.detailLabel}>First Name:</span>
                  <div className={styles.detailValueContainer}>
                    {editingField === "firstName" ? (
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleFieldEdit("firstName", e.target.value)
                        }
                        className={styles.editInput}
                        onBlur={() => setEditingField(null)}
                        autoFocus
                      />
                    ) : (
                      <div className={styles.displayValueContainer}>
                        <span className={styles.detailValue}>
                          {formData.firstName}
                        </span>
                        <button
                          onClick={() => startEdit("firstName")}
                          className={styles.editButton}
                        >
                          <Pencil size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Last Name */}
                <div className={styles.detailRow}>
                  <UserRound size={20} style={{margin:"8px"}}/>
                  <span className={styles.detailLabel}>Last Name:</span>
                  <div className={styles.detailValueContainer}>
                    {editingField === "lastName" ? (
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleFieldEdit("lastName", e.target.value)
                        }
                        className={styles.editInput}
                        onBlur={() => setEditingField(null)}
                        autoFocus
                      />
                    ) : (
                      <div className={styles.displayValueContainer}>
                        <span className={styles.detailValue}>
                          {formData.lastName}
                        </span>
                        <button
                          onClick={() => startEdit("lastName")}
                          className={styles.editButton}
                        >
                          <Pencil size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className={styles.detailRow}>
                  <Mail size={20} style={{margin:"8px"}}/>
                  <span className={styles.detailLabel}>Email:</span>
                  <div className={styles.detailValueContainer}>
                    {editingField === "email" ? (
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleFieldEdit("email", e.target.value)
                        }
                        className={styles.editInput}
                        onBlur={() => setEditingField(null)}
                        autoFocus
                      />
                    ) : (
                      <div className={styles.displayValueContainer}>
                        <span className={styles.detailValue}>
                          {formData.email}
                        </span>
                        <button
                          onClick={() => startEdit("email")}
                          className={styles.editButton}
                        >
                          <Pencil size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone number */}
                <div className={styles.detailRow}>
                  <Phone size={20} style={{margin:"8px"}}/>
                  <span className={styles.detailLabel}>Phone No:</span>
                  <div className={styles.detailValueContainer}>
                    {editingField === "phone" ? (
                      <input
                        type="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleFieldEdit("phone", e.target.value)
                        }
                        className={styles.editInput}
                        onBlur={() => setEditingField(null)}
                        autoFocus
                      />
                    ) : (
                      <div className={styles.displayValueContainer}>
                        <span className={styles.detailValue}>
                          {formData.phone}
                        </span>
                        <button
                          onClick={() => startEdit("phone")}
                          className={styles.editButton}
                        >
                          <Pencil size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Service */}
                <div className={styles.detailRow}>
                  <BriefcaseBusiness size={20} style={{margin:"8px"}} />
                  <span className={styles.detailLabel}>Service:</span>
                  <div className={styles.detailValueContainer}>
                    {editingField === "service" ? (
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          handleFieldEdit("service", e.target.value)
                        }
                        className={styles.serviceSelect}
                        onBlur={() => setEditingField(null)}
                        autoFocus
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <div className={styles.displayValueContainer}>
                        <span className={styles.detailValue}>
                          {formData.service}
                        </span>
                        <button
                          onClick={() => startEdit("service")}
                          className={styles.editButton}
                        >
                          <Pencil size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Date */}
                <div className={styles.detailRow}>
                  <Calendar size={20} style={{margin:"8px"}}/>
                  <span className={styles.detailLabel}>Date:</span>
                  <div className={styles.detailValueContainer}>
                    {editingField === "date" ? (
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          handleFieldEdit("date", e.target.value)
                        }
                        className={styles.editInput}
                        onBlur={() => setEditingField(null)}
                        autoFocus
                        min={new Date().toISOString().split("T")[0]}
                      />
                    ) : (
                      <div className={styles.displayValueContainer}>
                        <span className={styles.detailValue}>
                          {formatDate(formData.date)}
                        </span>
                        <button
                          onClick={() => startEdit("date")}
                          className={styles.editButton}
                        >
                          <Pencil size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Time */}
                <div className={styles.detailRow}>
                  <Clock size={20} style={{margin:"8px"}}/>
                  <span className={styles.detailLabel}>Time:</span>
                  <div className={styles.detailValueContainer}>
                    {editingField === "time" ? (
                      <select
                        value={formData.time}
                        onChange={(e) =>
                          handleFieldEdit("time", e.target.value)
                        }
                        className={styles.serviceSelect}
                        onBlur={() => setEditingField(null)}
                        autoFocus
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <div className={styles.displayValueContainer}>
                        <span className={styles.detailValue}>
                          {formData.time}
                        </span>
                        <button
                          onClick={() => startEdit("time")}
                          className={styles.editButton}
                        >
                          <Pencil size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.stepActions}>
                <button onClick={prevStep} className={styles.secondaryButton}>
                  Back
                </button>
                <button onClick={handleSubmit} className={styles.primaryButton}>
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
          {/* Step 5: Success */}
          {currentStep === 5 && (
            <div className={styles.successContent}>
              <div className={styles.successIcon}>
                <CheckCircle2 size={64} />
              </div>

              <h3>Appointment Confirmed!</h3>

              <p>
                Your appointment has been successfully scheduled. You will
                receive a confirmation email shortly.
              </p>

              <div className={styles.successActions}>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "Appointment Confirmation",
                        text: `Your appointment with i11Labs is scheduled for ${formData.date} at ${formData.time}`,
                      });
                    } else {
                      navigator.clipboard.writeText(
                        `Appointment with i11Labs - ${formData.date} at ${formData.time}`
                      );
                      alert("Appointment details copied to clipboard!");
                    }
                  }}
                  className={styles.secondaryButton}
                >
                  Share Appointment
                </button>

                <button onClick={resetForm} className={styles.primaryButton}>
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingSidebar;
