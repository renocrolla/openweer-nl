import React, {useState} from "react";
import './ContactForm.css';
import {useForm} from "react-hook-form";

function ContactForm() {
  const [sendForm, setSendForm] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  function handleSubmitForm(data) {
    document.getElementById("contactform").style.visibility = "hidden";
    setSendForm(true);
    console.log(data);
  }

  return (
    <section>
      {sendForm && <p className="succes">Bericht succesvol verstuurd!✔️</p>}
      <form id="contactform" onSubmit={handleSubmit(handleSubmitForm)}>
        {errors.name && <p>{errors.name.message}</p>}
        {errors.email && <p>{errors.email.message}</p>}
        {errors.message && <p>{errors.message.message}</p>}
        <label htmlFor="name"> Naam:
          <input
            type="text"
            id="name"
            {...register("name", {
              required: {
                value: true,
                message: 'Vul a.u.b. uw naam in',
              },
            })}
          />
        </label>
        <label htmlFor="email"> Email:
          <input
            type="text"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: 'Vul a.u.b. uw email adres in',
              },
              validate: (value) => value.includes('@') || 'Email moet een @ bevatten',
            })}
          />
        </label>
        <textarea
          id="message"
          rows="7"
          cols="70"
          placeholder="Plaats hier je bericht..."
          {...register("message", {
            required: {
              value: true,
              message: 'Vul a.u.b. uw bericht in',
            },
          })}
          />
        <button type="submit">Versturen</button>
      </form>
    </section>
  );
}

export default ContactForm;
