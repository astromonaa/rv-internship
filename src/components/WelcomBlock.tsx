import  { useState } from 'react';
import { ArrowRight, CheckCircle, Stars, Hourglass, Dash, Plus, Lightbulb } from 'react-bootstrap-icons'
import Sidelenny from '../assets/sidelenny.webp'
const WelcomBlock = () => {
  const [closed, setClosed] = useState(false)

  return (
    <div className={`welcome-block ${closed ? 'welcome-closed' : ''}`}>
      {!closed && <img src={Sidelenny} alt="icon" />}
      <div className="welcome-toggle" onClick={() => setClosed(!closed)}>
        {closed ? <Plus /> : <Dash />}
      </div>
      {closed && 
        <div className='welcome-closed-text'>
          <Lightbulb fill='lightblue' />
          <span>Quick Tips and Tutorials</span>
        </div>
      }
      {!closed && <div>
        <div className='welcome-top flex justify-start items-end'>
          <h2>Welcome aboard!</h2>
          <small>Here are some tips and guides to help you get started. 🚀</small>
          <button className='ml-auto flex text-[0.75rem] lh-[1rem] items-center text-[blue] py-[6px] px-[8px] rounded-lg hover:bg-[rgba(242,230,254,1)] transition-all'>
            More Tips
            <ArrowRight className='ml-[5px]' />
          </button>
        </div>
        <div className='welcome-middle'>
          <CheckCircle className='w-[16p] h-[16px]' />
          <span className='ml-[5px]'>Roboflow orientation</span>
          <ArrowRight className='ml-auto' />
        </div>
        <div className='welcome-bottom'>
          <div>
            <Stars fill='white' />
          </div>
          <div>
            <p className='flex items-center'>
              <span>Creating project</span>
              <Hourglass className='ml-[3px] mr-[3px]' /> 2m
            </p>
            <span>Learn about the different types of projects you can make in Roboflow and then dive on in!</span>
          </div>
          <div>
            <ArrowRight fill='white' />
          </div>
        </div>
      </div>}
    </div>
  );
};

export default WelcomBlock;