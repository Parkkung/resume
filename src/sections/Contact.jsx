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
    className=' w-full h-3/4 flex items-center justify-center gap-x-20 px-20 pb-40 bg-contact flex-col md:flex-row'>
        {/* <div className=' flex flex-col items-center justify-center py-[100px] text-white'> */}
        <form className='flex flex-col gap-y-4 lg:w-[500px] w-full justify-center text-white items-center'
        ref={ form }
        onSubmit={ sendEmail }>
              {/* <div className='flex gap-x-10'> */}
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-600'
                  type='text'
                  placeholder='Your name'
                  name='user_name' />
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-600'
                  type='email'
                  placeholder='Your email address'
                  name='user_email' />
              {/* </div> */}
              <textarea className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-600'
                type='text'
                placeholder='Your message'
                name='user_message' />
              <input className='btn md:self-start rounded-full border-2 px-10 py-3 text-white leading-none bg-gradient-to-br from-violet-600 to-indigo-600 w-3/4 md:w-fit cursor-pointer '
                type='submit'
                value='Send' />
            </form>
        {/* </div> */}
        <img src = { contact_img }
      alt=""
      className=' w-[300px] lg:w-[400px] items-center' />
    </section>
  )
}

export default Contact