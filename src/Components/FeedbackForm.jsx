import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling


const FeedbackForm = () => {
  const[formData,setFormData]= useState({
    name: "",
    email:"",
    feedback:"",
    rating:""

  });

  const handelChange= (event)=>{
    const {name,value}= event.target;
    setFormData({
      ...formData, [name]:value
    });
  }

  const handelSubmit= (event)=>{
    event.preventDefault();
    const confirmationMessage= `
    Name: ${formData.name}
    Email: ${formData.email}
    Feedback: ${formData.feedback}
    Rating: ${formData.rating}
    `;
    const isConfirmed = window.confirm(`Please confirm your details \n\n${confirmationMessage}`);

    if(isConfirmed){
      console.log("submitting feedback:",formData);
      setFormData({
        name:'',
        email:'',
        feedback:'',
        rating:''
      });
      alert('Thank you for your valuable feedback!');
    };


  };

  

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handelSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type='text'
          placeholder='Your Name'
          name="name"
          value= {formData.name}
          onChange={handelChange}
        />
        <input
          type='email'
          placeholder='Your Email'
          name="email"
          value={formData.email}
          onChange={handelChange}
        />
        <textarea name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handelChange}
          ></textarea>
          <div style={{display:'flex',gap:'10px',flexDirection:'column'}} >
            <span>Rate Us:</span>
            <p>
            <input
          type='radio'
          name="rating"
          value="1"
          onChange={handelChange}
        />
            1 </p>
            <p>
            <input
          type='radio'
          name="rating"
          value="2"
          onChange={handelChange}
        />
            2 </p>
            <p>
            <input
          type='radio'
          name="rating"
          value="3"
          onChange={handelChange}
        />
            3 </p>
            <p>
            <input
          type='radio'
          name="rating"
          value="4"
          onChange={handelChange}
        />
            4 </p>
            <p>
            <input
          type='radio'
          name="rating"
          value="5"
          onChange={handelChange}
        />
            5 </p>

          </div  >

          <button type="submit" >Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
