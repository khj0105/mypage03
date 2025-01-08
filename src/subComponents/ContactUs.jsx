import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
//yarn add @emailjs/browser --save
//npm install @emailjs/browser --save

export const ContactUs = () => {
  const form = useRef();
  const [inputs, setInputs] = useState({
    fromname:"",
    toname:"",
    message:"",
    phone:"",
    email:""
  });

  const { fromname,toname,message,phone,email}= inputs

  const onChange = (e) =>{
    setInputs(e.target.value)
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    //   .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
    //     publicKey: 'YOUR_PUBLIC_KEY',
    //   })
    .sendForm('service_cr20vj7', 'template_csxzfm7', form.current, {
             publicKey: 'YM65ZeASKVklGz1dC',
           })
      .then(
        (result) => {
          alert("전송되었습니다")
          console.log('SUCCESS!');
        },
        (error) => {
          alert("전송을 실패했습니다")
          console.log('FAILED...', error.text);
        },
      );
      setInputs({
        fromname:"",
        toname:"",
        message:"",
        phone:"",
        email:""
      });
  };

  return (
    <div>
        <h3>메일보내기</h3>
   
    <form ref={form} onSubmit={sendEmail}>
      <p>
        <label>보내는 사람</label>
        <input type="text" name="from_name" onChange={onChange} value={} />
      </p>
      <p>
        <label>받는 사람</label>
        <input type="text" name="to_name" onChange={onChange} value={}/>
      </p>
      <p>
      <label>Message</label>
      <input type="text" name="message" onChange={onChange} value={}/>
      </p>
      <p>
      <label>Phone</label>
      <input type="text" name="phone" onChange={onChange} value={}/>
      </p>
      <p>
      <label>Email</label>
      <textarea name="email" />
      </p>
      <input type="submit" value="Send" onChange={onChange} value={}/>
    </form> 
    </div>
  );
};

export default ContactUs;