import React, { useRef, useState } from 'react';
import './Contact.css';


export const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_no: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const form = formRef.current;
    if (!form.checkValidity()) {
      setValidated(true); // Set validated state to true if form is invalid
      return; // Exit early if the form is invalid
    }
    // Log the form data to the console for inspection
    console.log('Form submitted:', formData);

    // Optionally reset form data or perform other actions
    setFormData({
      full_name: "",
      email: "",
      phone_no: "",
      message: "",
    });
    setValidated(false); // Reset validated state after successful submission


  };


  return (
    <>

      <div className="container  contact_page">
      
        <div className="row">
          <div className="col-md-6 col-10 mx-auto "> {/* col-md-6 use for computer screen only and col-10 use for mobile screen and mx-auto means in center */}

            <div className="card shadow-lg " style={{ backgroundColor: '#f5f5dc' }}>
            
              <div className="card-body">
              <div className="text-center my-3 mx-3 text-primary display-4  " style={{ fontSize: "40px", fontFamily: "initial", fontWeight: "bold" }}>Contact US</div>

                <form action="" method='' ref={formRef} noValidate onSubmit={handleSubmit} className={validated ? 'was-validated' : ''}>

                  <div className="mb-3">
                    <label htmlFor="full_name" className="form-label">
                      Enter Full Name
                    </label>
                    <input
                      maxLength={40}
                      name='full_name'
                      type="text"
                      className="form-control"
                      id="full_name"
                      placeholder="Enter your Full name"
                      onChange={handleChange}
                      value={formData.full_name}
                      required
                    />
                    <div className="invalid-feedback">
                      Please Enter your Full Name.
                    </div>
                  </div>


                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      name='email'
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your Email"
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />

                    <div className="invalid-feedback">
                      Please Enter your  Email .
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone_no" className="form-label">
                      Phone No
                    </label>
                    <input
                      name='phone_no'
                      type="tel"
                      className="form-control"
                      id="phone_no"
                      placeholder="Enter your Mobile no"
                      onChange={handleChange}
                      value={formData.phone_no}
                      required
                    />

                    <div className="invalid-feedback">
                      Please enter a valid phone number.
                    </div>
                  </div>



                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Messages
                    </label>
                    <textarea
                      name='message'
                      className="form-control"
                      id="message"
                      rows={3}
                      onChange={handleChange}
                      value={formData.message}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a message.
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="comic-button mb-2 mt-4">Submit</button>
                  </div>

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
