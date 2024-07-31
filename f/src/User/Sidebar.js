import React, { useEffect, useState } from 'react'
import { GetApi } from './GetApi';
import { useParams } from 'react-router-dom';

const Sidebar = () => {
    const [chapterName, setChapterName] = useState();
    const params = useParams();

    const chapterNameHandler = async () => {
        const data = await GetApi('api/v5/chapter/find');
        setChapterName(data);
    }

    useEffect(() => {
        chapterNameHandler();
    }, []);

    return (
        <div className='d-none d-sm-flex bg-secondary text-white flex-column p-0'>
            <div className='d-flex d-sm-none m-auto py-2'
                style={{ borderBottom: '1px solid white' }}>
                <i className="fa-regular fa-circle-xmark"></i>
            </div>
            {
                chapterName?.map((data) => <div className='ms-3 py-1'
                    style={{
                        borderBottom: '1px solid white',
                        maxWidth: '300px'
                    }}>
                    {data.chapterName}
                </div>)
            }
        </div>
    )
}
export default Sidebar