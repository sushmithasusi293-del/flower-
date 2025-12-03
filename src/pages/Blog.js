import React from 'react'
import bg2 from '../image/bg2.jpg'
import bg5 from '../image/bg5.jpg'
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div className="o1">
                <img src={bg2} />
                <p className="ho">Shop Sidebar</p>

                <p className="roboto-o1">Home > Shop</p>
            </div>

            <div className='background'>
                <img src={bg5} />
            </div>


            <div className='Blog'>
                <h3 className="st">STANDERED BLOG POST ONE</h3>
                <p className="pt">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
                <h5 className='pt1'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</h5>
                <p className='pt'>and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <div className='boxxx'>

                </div>


                <div className='leave'>
                    <p className='head1'>Leave A Comment</p>
                    <div className='form1'>
                        <input type='text' placeholder='Massage'></input>
                    </div>
                </div>
            </div>
            <div className='oc9'>

                <div className='oc8'>
                    
                    <div className='text3'>
                        <form>
                            <input type='text' placeholder='Name'></input>
                           
                        </form>
                    </div>

                </div>
                <div className='oc7'>
                    <div className='text4'>
                        <form>

                            <input type='text' placeholder='Email'></input>
                        </form>
                    </div>
                </div>

            </div>

            <button className='btn1'>Send A Massage</button>
        </div>
    )
}

export default Blog