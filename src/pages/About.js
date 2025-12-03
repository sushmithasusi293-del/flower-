import React from 'react'
import bg2 from '../image/bg2.jpg'
import bg3 from '../image/bg3.jpg'
import bg4 from '../image/bg4.jpg'
import './About.css'
const About = () => {
    return (
        <div>
            <div className="o1">
                <img src={bg2} />
                <p className="ho">Shop Sidebar</p>

                <p className="roboto-o1">Home > Shop</p>
            </div>


            <div className='s'>

                <div class="so1 ">
                    <h1>Flowers for the</h1>
                    <h6>
                        Birthday & Gifts</h6>

                    <p>Lerom ipsum dolor sit amet ,pri autem nemore bonorum te.</p>
                    <p>fierent ullamcopper ius no,nec ea quodsi invire</p>
                    <button className='two'>Shop Collection</button>


                </div>
                <div className='"so2'>
                    <img src={bg3} />
                </div>
            </div>

            <div className='s'>


                <div className='"so2'>
                    <img src={bg4} />
                </div>


                <div class="so1 ">
                    <h1>Flowers for the</h1>
                    <h6>
                        Birthday & Gifts</h6>

                    <p>Lerom ipsum dolor sit amet ,pri autem nemore bonorum te.</p>
                    <p>fierent ullamcopper ius no,nec ea quodsi invire</p>
                    <button className='two'>Shop Collection</button>


                </div>
            </div>


            <div class="f98">
                <p className='n1'>A little Story About Us</p>
                <p className='n2'>Our History</p>
                <p className='n3'>Captain America: Civil War Christopher Markus and Stephen McFeely see the
                </p>
                <p className='n4'>Hulk as the game over moment.</p>
                <p className='n5'>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod</p>
                <p className='n6'>mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis</p>
                <p className='n7'>qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii</p>
                <p className='n8'>legunt saepius. Claritas est etiam processus dynamicus. Phasellus eu rhoncus dolor, vitae</p>
                <p className='n9'>scelerisque sapien</p>
            </div>

        </div>
    )
}

export default About