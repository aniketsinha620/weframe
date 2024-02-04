import React from 'react';
// Import useRouter from next/router
import Navbar from '../components/Navbar';
import Image from 'next/image';
import "./view.css";

const Page = (props) => {


    return (
        <div className='navbar'>
            <div className='w-[20%]'>

            </div>
            <div className='w-[80%] '>
                <Navbar />

                <div>
                    <div>

                    </div>
                    <div className='card-page-unique'>
                        <div><Image src='/topstory1.png' width={300} height={300}></Image></div>

                    </div>
                </div>

            </div>
        </div>

    );
}

export default Page;
