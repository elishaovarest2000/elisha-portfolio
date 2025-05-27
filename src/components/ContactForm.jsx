// ContactForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const sendEmail = (data) => {
    emailjs
      .send(
        "service_wcjw043",     // replace with your actual EmailJS service ID
        "template_tqjs1pl",    // replace with your actual template ID
        data,
        "uAE0L7eNyoialNHCp"      // replace with your actual EmailJS public key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="container col-md-6 my-5">
    <form onSubmit={handleSubmit(sendEmail)} className="space-y-4 p-4 bg-white rounded-lg shadow-md">
      <input
        {...register("name")}
        placeholder="Your Name"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        {...register("email")}
        placeholder="Your Email"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        {...register("message")}
        placeholder="Your Message"
        required
        className="w-full p-2 border rounded h-32"
      />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Send Message
      </button>
    </form>
    </div>
  );
};

export default ContactForm;
