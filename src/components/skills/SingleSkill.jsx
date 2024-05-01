import React from 'react'

const SingleSkill = ({Image, Title}) => {
  return (
    <>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Image} alt="HTML icon" />
                  <p className='my-4'>{Title}</p>
              </div>

    </>
  )
}

export default SingleSkill