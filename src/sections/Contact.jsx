import React , { useRef }from 'react'
import emailjs from '@emailjs/browser'
import { contact_img } from '../assets/images'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_gedlnff', 'template_o3r5o5j', form.current, 'eIANKKt5P3unzdtHa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'
    className=' w-full h-3/4 bg-contact flex flex-col justify-center'>
        <div className=' flex flex-col self-baseline xl:px-72 pt-20 max-xl:self-center'>
          <h1 className=' text-blue-600 text-4xl'>Contact Me</h1>
          <p className=' text-slate-gray text-lg'>I'm lookig toward to your reply.</p>
        </div>
        <div className=' w-full flex items-center justify-center gap-x-20 px-20 pb-40 flex-col md:flex-row'>
          <form className='flex flex-col gap-y-4 lg:w-[500px] w-full justify-center text-white items-center'
          ref={ form }
          onSubmit={ sendEmail }>
                  <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-600'
                    type='text'
                    placeholder='Your name'
                    name='user_name' />
                  <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-600'
                    type='email'
                    placeholder='Your email address'
                    name='user_email' />
                <textarea className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-600'
                  type='text'
                  placeholder='Your message'
                  name='user_message' />
                <input className='btn md:self-start rounded-full border-2 px-10 py-3 text-white leading-none bg-gradient-to-br from-violet-600 to-indigo-600 w-3/4 md:w-fit cursor-pointer '
                  type='submit'
                  value='Send' />
              </form>
          <img src = { contact_img }
            alt=""
            className=' w-[300px] lg:w-[400px] items-center' />
      </div>
    </section>
  )
}

export default Contact