import React, { useState } from 'react'

const MenuCard = ({ menuData }) => {
    const [search, setSearch] = useState("");
    // console.log(menuData);
    return (
        <>
           <div className="search-main">
           <input className='search' type='text' placeholder='Search Your Item Here' onChange={(e) => setSearch(e.target.value)} />
           </div>

            <section className="main-card-container">
                {menuData?.filter((val) => {
                    if (search == "") {
                        return val;
                    } else if (val.name.toLowerCase().includes(search)) {
                        return val;
                    }}).map((curElem) => {

                            const{ id,name,category,image,description } = curElem;

                        return (
                            <>
                                <div className="car-container" key={id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='card-circle'><span className='card-number'>{id}</span></div>
                                            <span className='card-author'>{name}</span>
                                            <h2 className='card-title'>{name}</h2>
                                            <span className='card-description'>
                                                {description}
                                            </span>
                                            <div className='read-line-main'>
                                                <div className='read-line'></div>
                                                <div className="card-read">Read</div>
                                            </div>
                                        </div>
                                        <div className="card-image">
                                            <img src={image} alt='' className='card-media' />
                                          
                                        </div>
                                        <div className="btn-main">
                                            <div className="card-tag">Order Now</div>
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    }

                    )}
            </section>
        </>
    )
}

export default MenuCard
