import React from 'react'

const Navbar = ({filterItem , menuList}) => {
  return (
    <>
    <nav className='navBar'>
        <div className="btn-group">

            {
                menuList.map((curElem) =>{
                    return(
                        <button className='btn-group__items' 
          onClick={ () =>filterItem(curElem)}>
           {curElem}</button>
                    )
                })
            }
        </div>
     </nav>
    </>
  )
}

export default Navbar
