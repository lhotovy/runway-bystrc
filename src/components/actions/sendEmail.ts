
import emailjs from "@emailjs/browser";
 
export async function sendEmail(data: any) {
   //e.preventDefault();
   console.log("d",data);
   
 try {
        await emailjs.sendForm('service_4f8z9dq', 'template_ioei8ib', data, {
            publicKey: process.env.EMAIL_JS_PUBLIC_KEY,
        });
        console.log("hfdkshg");
        
    } catch (error: any) {
        console.log('FAILED...', error.text);
    }  
};