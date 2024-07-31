import React, { useEffect, useState } from 'react'
import { GetApi } from './GetApi';
import Tutorial from './Tutorial';

const Content = () => {
  const [pointName, setPointName] = useState();

  const pointNameHandler = async () => {
    const data = await GetApi('api/v6/point/find');
    setPointName(data);
  }

  useEffect(() => {
    pointNameHandler();
  }, []);

  return (
    <div className='d-flex flex-column mt-3'>
      {
        pointName?.map((data) => <>
        <h2>What is HTML</h2>
          <div>
            <div>{data.pointName}</div>
          </div>

          <div className='m-auto my-5'>
            <div>
              <Tutorial />
            </div>
          </div>
        </>)
      }
    </div>
  )
}
export default Content