import emailjs from "emailjs-com";

export async function sendEmail(e: any, formData: any) { 
    e.preventDefault();   

    emailjs.send('service_4f8z9dq', 'template_ioei8ib', formData, "KwTzFCyd2YuMwJvT-")
      .then(() => {
        console.log('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);      
      });
    e.target.reset()
};