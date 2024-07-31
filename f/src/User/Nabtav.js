import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { GetApi } from './GetApi';
import { openSidebar } from './Containers';
import { useParams } from 'react-router-dom';

const Nabtav = ({ props }) => {
    console.log(props)
    const [subjectName, setSubjectName] = useState();
    const params = useParams();
    console.log(params.id)
    const subjectNameHandler = async () => {
        const data = await GetApi('api/v4/subject/find');
        setSubjectName(data);
    }

    useEffect(() => {
        subjectNameHandler();
    }, []);

    return (
        <Nav variant="tabs" className='m-0 bg-secondary d-flex overflow-auto flex-nowrap' style={{ maxHeight: '38px', overflowY: 'hidden' }}>
            <Nav.Item className='d-sm-none' >
                <Nav.Link className='text-white'>
                    <i className="fa-solid fa-folder-open" onClick={openSidebar}></i>
                </Nav.Link>
            </Nav.Item>
            {
                subjectName?.filter((data) => data.trainingName === params.id).map((data, index) => (
                    <Nav.Item style={{ maxHeight: '38px', overflowY: 'hidden' }}>
                        <Nav.Link href={`/${data.subjectName}`}
                            eventKey={`link-${index + 1}`}
                            className='text-white'>
                            {data.subjectName}
                        </Nav.Link>
                    </Nav.Item>
                ))
            }
        </Nav>
    );
}

export default Nabtav;