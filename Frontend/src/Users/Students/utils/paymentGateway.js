export default async function displayRazorpay() {

    const data = await fetch("http://localhost:8000/razorpay",{
        method:'Post'
    }).then((t) => t.json())

    console.log(data)
    const options = {
        key :"",
        currency:data.currency,
        amount: data.amount,
        description: 'wallet Transaction',
        order_id: data.id,
        handler:function(response){
            alert("payment id:" + response.razorpay_payment_id)
            alert("order id:" + response.razorpay_order_id)
        },
        prefill:{
            name: 'EduSparks',
            email:'edusparks@gmail.com',
            contact: ' 6290860634'
        }
    };

    const paymentObject = new window.Razorpay(options)

    paymentObject.open()
}