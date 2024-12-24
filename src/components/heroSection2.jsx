import React from 'react'

const heroSection2 = () => {
  return (
    <div className='w-full md:h-[90vh] h-auto  bg-orange-400 flex flex-col md:flex-row justify-between gap-20 px-5 md:px-20 py-20'>
        <div>
            <h1 className='text-white'>OUR VISION</h1>
        </div>
        <div className='max-w-[30rem] md:max-w-[20rem]'>
            <div className=' text-white text-[1rem]'>
                <p >ਇੱਕ ਅਜਿਹੀ ਸਮਾਜ ਦੀ ਸਿਰਜਣਾ ਕਰਨੀ ਜਿੱਥੇ ਕੋਈ ਵੀ ਪਿੱਛੇ ਨਾ ਰਹੇ ਅਤੇ ਹਰ ਵਿਅਕਤੀ ਨੂੰ ਖਾਣ-ਪੀਣ, ਕੱਪੜੇ, ਸਿੱਖਿਆ ਅਤੇ ਸਿਹਤ ਦੀ ਪਹੁੰਚ ਹੋਵੇ। ਨਿਸਵਾਰਥ ਸੇਵਾ ਰਾਹੀਂ, ਅਸੀਂ ਪਿਆਰ, ਏਕਤਾ, ਅਤੇ ਸਾਂਝ ਦੇ ਸੁਨੇਹੇ ਫੈਲਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਾਂ।</p>
                <p className='mt-5'>To create a society where no one is left behind, and every individual has access to basic needs such as food, clothing, education, and healthcare. Through selfless service, we aim to spread the message of love, unity, and harmony.</p>
            </div>
        </div>
        <div className='border  max-w-[50rem] relative h-[80%] flex justify-center bg-zinc-100 rounded-lg overflow-hidden'>
            <button className='bottom-5 left-5 text-white text-[12px] lg:text-[1.1rem] font-semibold transition-colors bg-orange-600 hover:bg-orange-500 absolute border border-white px-4 py-1 rounded-full'>OUR WORK</button>
            <img className='w-full h-auto object-cover' src='./src/assets/images/sewasadan2.jpg'/>
        </div>
    </div>
  )
}

export default heroSection2