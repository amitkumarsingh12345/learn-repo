import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import { useParams } from 'react-router-dom';

export function openSidebar() {
    document.querySelector('#open').style.display = 'inline-block';
}

const Containers = () => {
    const params = useParams();

    return (
        <div className='container-fluid p-0 m-0'>
            <div className='row'>
                <div id='open' className='col-1 col-sm-2' style={{ maxHeight: '700px', overflowY: 'auto' }}>
                    <Sidebar />
                </div>
                <div className='col-10' style={{ maxHeight: '700px', overflowY: 'auto' }}>
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default Containers