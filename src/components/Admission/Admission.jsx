import { useState } from "react";
import "./Admission.css";

function Admission() {
const [formData, setFormData] = useState({
studentName: "",
dateOfBirth: "",
gender: "",
admissionClass: "",
session: "2027",
previousSchool: "",
fatherName: "",
motherName: "",
guardianPhone: "",
guardianEmail: "",
address: "",
});

const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
const { name, value } = e.target;


setFormData((prev) => ({
  ...prev,
  [name]: value,
}));


};

const handleSubmit = (e) => {
e.preventDefault();
setSubmitted(true);
};

return ( <section className="admission-section"> <div className="admission-container"> <div className="admission-header"> <span className="admission-subtitle">ABC SCHOOL</span> <h1>Online Admission Form</h1> <p>
Begin your educational journey with ABC School.
Please complete the form with accurate information. </p> </div>


    {submitted ? (
      <div className="admission-success">
        <div className="success-icon">✓</div>
        <h2>Form Submitted Successfully!</h2>
        <p>
          Your information has been collected in this page.
          Please note that this demo form does not send or save
          your application to the school.
        </p>
        <button
          type="button"
          className="admission-submit"
          onClick={() => {
            setFormData({
              studentName: "",
              dateOfBirth: "",
              gender: "",
              admissionClass: "",
              session: "2027",
              previousSchool: "",
              fatherName: "",
              motherName: "",
              guardianPhone: "",
              guardianEmail: "",
              address: "",
            });
            setSubmitted(false);
          }}
        >
          Submit Another Application
        </button>
      </div>
    ) : (
      <form className="admission-form" onSubmit={handleSubmit}>
        <div className="form-section-title">
          <span>01</span>
          <div>
            <h2>Student Information</h2>
            <p>Enter the student's personal details.</p>
          </div>
        </div>

        <div className="admission-grid">
          <div className="form-group">
            <label htmlFor="studentName">
              Student's Full Name <span>*</span>
            </label>
            <input
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter student's full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">
              Date of Birth <span>*</span>
            </label>
            <input
              id="dateOfBirth"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">
              Gender <span>*</span>
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="admissionClass">
              Applying for Class <span>*</span>
            </label>
            <select
              id="admissionClass"
              name="admissionClass"
              value={formData.admissionClass}
              onChange={handleChange}
              required
            >
              <option value="">Select class</option>
              <option value="Play">Play</option>
              <option value="Nursery">Nursery</option>
              <option value="KG">KG</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((classNo) => (
                <option key={classNo} value={classNo}>
                  Class {classNo}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="session">
              Academic Session <span>*</span>
            </label>
            <select
              id="session"
              name="session"
              value={formData.session}
              onChange={handleChange}
              required
            >
              <option value="2027">2027</option>
              <option value="2028">2028</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="previousSchool">
              Previous School
            </label>
            <input
              id="previousSchool"
              name="previousSchool"
              value={formData.previousSchool}
              onChange={handleChange}
              placeholder="Enter previous school name"
            />
          </div>
        </div>

        <div className="form-section-title">
          <span>02</span>
          <div>
            <h2>Parent / Guardian Information</h2>
            <p>Provide contact details for communication.</p>
          </div>
        </div>

        <div className="admission-grid">
          <div className="form-group">
            <label htmlFor="fatherName">
              Father's Name <span>*</span>
            </label>
            <input
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Enter father's name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="motherName">
              Mother's Name <span>*</span>
            </label>
            <input
              id="motherName"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Enter mother's name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="guardianPhone">
              Guardian's Mobile Number <span>*</span>
            </label>
            <input
              id="guardianPhone"
              type="tel"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
              placeholder="01XXXXXXXXX"
              pattern="01[3-9][0-9]{8}"
              title="Enter a valid 11-digit Bangladesh mobile number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="guardianEmail">
              Email Address
            </label>
            <input
              id="guardianEmail"
              type="email"
              name="guardianEmail"
              value={formData.guardianEmail}
              onChange={handleChange}
              placeholder="example@email.com"
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="address">
              Present Address <span>*</span>
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              rows="4"
              required
            />
          </div>
        </div>

        <div className="admission-note">
          <strong>Note:</strong> Please check all information before
          submitting. This is currently a frontend demo; your
          application will not be sent to the school or saved in a
          database.
        </div>

        <button type="submit" className="admission-submit">
          Submit Application <span>→</span>
        </button>
      </form>
    )}
  </div>
</section>


);
}

export default Admission;
