import emailjs from "emailjs-com";

export async function sendRegistrationEmail(e: any, formData: any) { 
    e.preventDefault();   

    emailjs.send('service_4f8z9dq', 'template_ioei8ib', formData, "KwTzFCyd2YuMwJvT-")
      .then(() => {
        console.log('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);      
      });
    e.target.reset()
};

export async function sendKontaktEmail(e: any, formData: any) { 
    e.preventDefault();   

    emailjs.send('service_4f8z9dq', 'template_l0x7752', formData, "KwTzFCyd2YuMwJvT-")
      .then(() => {
        console.log('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);      
      });
    e.target.reset()
};