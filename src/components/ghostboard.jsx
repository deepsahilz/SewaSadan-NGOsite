import React from 'react'
import Ghostcard from './ghostcard'


const ghostboard = () => {
    const memberData = [
        {
          id: 1,
          name: 'Gurmit Singh',
          role: 'President',
          image: 'src/assets/images/WhatsApp Image 2024-12-19 at 21.01.47_2c1ef4aa.jpg',
        },
        {
          id: 2,
          name: 'Amandeep Singh',
          role: 'Vice President',
          image: 'src/assets/images/WhatsApp Image 2024-12-19 at 21.04.44_f6279cae.jpg',
        },
        {
          id: 3,
          name: 'Harman Preet Singh',
          role: 'Cachier',
          image: 'src/assets/images/WhatsApp Image 2024-12-19 at 21.04.45_e331dd5b.jpg',
        },
        {
          id: 4,
          name: 'Rajan Nagpal',
          role: 'Secretary',
          image: 'src/assets/images/WhatsApp Image 2024-12-19 at 19.41.34_eba1b8ab.jpg',
        },
      
      ];
      
  return (

    <div className='px-5 sm:px-10 lg:px-20  py-10 bg-zinc-100'>
        <h1 className='text-center text-zinc-900 font-semibold mt-10 md:text-5xl text-3xl mb-10 font-nb'>OUR TRUSTEES</h1>

        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6'>

            {memberData.map((member)=>(
                <Ghostcard 
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}/>
                ))}
        </div>
    </div>

  )


}
export default ghostboard