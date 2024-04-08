import React from 'react';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

const Counter = ({ end, decimals, extraClass }) => {
  return (
    <div className='sm:mr-10 mb-12 ml-16 md:md:w-[50vw] lg:w-1/2 lg:ml-38'>

      {/* First Counter div */}
   <div className='flex  w-5/6 justify-between lg:justify-center lg:w-1/2'>

    {/* 1st Counter */}
   <div className='text-4xl text-green-600 flex flex-col items-start mb-6 md:justify-between lg:mr-5 '>
    <div>
    <CountUp
      end={end ? end : 400}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span
            className={`count-text ${extraClass} sm:text-4xl text-3xl`}
            data-from="0"
            data-to={end}
            ref={countUpRef}
          >
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
    <span>+</span>
    </div>
    <p className='text-sm text-black'>Million active customers<sup>1</sup></p>
    </div>

{/* 2nd Counter */}
    <div className='text-4xl text-green-600 flex flex-col items-start mb-6 lg:ml-5'>
    <div>
    <CountUp
      end={end ? end : 200}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span
            className={`count-text ${extraClass} sm:text-4xl text-3xl`}
            data-from="0"
            data-to={end}
            ref={countUpRef}
          >
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
    <span>+</span>
    </div>
    <p className='text-sm text-black'>Market around the globe</p>
    </div>
   </div>
   <hr className='h-2 w-4/5'/>

   {/*Second counter Container */}
   <div className='flex w-5/6 lg:w-1/2 justify-between '>
    {/* 3th Counter */}
   <div className='text-4xl text-green-600 flex flex-col items-start mb-6 md:justify-between lg:mr-5'>
    <div>
    <CountUp
      end={end ? end : 20}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span
            className={`count-text ${extraClass} sm:text-4xl text-3xl`}
            data-from="0"
            data-to={end}
            ref={countUpRef}
          >
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
    <span>+</span>
    </div>
    <p className='text-sm text-black'>years of experience</p>
    </div>

{/* 4th Counter */}
    <div className='text-4xl text-green-600 flex flex-col items-start mb-6'>
    <div>
    <CountUp
      end={end ? end : 30}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span
            className={`count-text ${extraClass} sm:text-4xl text-3xl`}
            data-from="0"
            data-to={end}
            ref={countUpRef}
          >
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
    <span>+</span>
    </div>
    <p className='text-sm text-black'>Million merchants<sup>1</sup></p>
    </div>
   </div>
    
    </div>
    
  );
};

export default Counter;