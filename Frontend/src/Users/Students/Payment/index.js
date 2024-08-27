import React from 'react'
import { useEffect } from 'react'
import Course


function pay () {

    const loadScript = (src) => {
         return new Promise((resolve) => {
            const script = document.createElement('script')

            script.src = src

            script.onload = () => {
                resolve(true)
            }

            script.onload = () => {
                resolve(false)
            }

            document.body.appendChild(script)
         })
    }
    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js ")
    })
  return (
    <section className='card-list'> 
 <Course/>
    </section>
  );
}

export default pay
