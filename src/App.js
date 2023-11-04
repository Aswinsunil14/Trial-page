import React, {useEffect, useState} from 'react';

import Home from './Pages/Home';
import { InfinitySpin } from 'react-loader-spinner';


function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div >
    {isLoading ? 
    <div className='flex justify-center items-center h-full w-full my-96'>
      <InfinitySpin 
      width='300'
      color="#4fa94d"
    />
    </div>
      :
      <div className=" lg:pr-20 lg:pl-20 h-5/6 " >
    <Home />
    </div>
    }
    </div>
  );
}

export default App;
