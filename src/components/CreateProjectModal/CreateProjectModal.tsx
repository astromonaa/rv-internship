 import {Lock, QuestionCircle} from 'react-bootstrap-icons'
import { useRef } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { useActions } from '../../hooks/actions';
import { useProjects } from '../../hooks/useProjects';

const CreateProjectModal = () => {

  const {toggleModal} = useActions()
  const {current, invalidDetect, invalidName, onCreate, setInvalidName, setInvalidDetect} = useProjects()

  const type = useRef<HTMLSelectElement>(null)
  const detect = useRef<HTMLInputElement>(null)
  const name = useRef<HTMLInputElement>(null)

  return (
    <div className='create-project-modal'>
      <div className='flex items-center ml-[16px] mt-[15px] text-[0.9em]'>
        {current?.name} / <Lock fill='blue' /> <span className="text-[blue]">New Private Project</span>
      </div>
      <label htmlFor="type-dropdown" className='dropdown-label row-[2]'>Project Type</label>
      <small>What is This?</small>
      <select
        id="type-dropdown"
        className='create-project-input border-[1px] rounded'
        ref={type}
      >
        <option value="object-detection">Object Detection (Bounding Box)</option>
        <option value="classification-single">Single-Label Classification</option>
        <option value="classification-multiple">Multi-Label Classification</option>
        <option value="instance-segmentation">Instance Segmentation</option>
        <option value="semantic-segmentation">Semantic Segmentation</option>
        <option value="keypoint-detection">Keypoint Detection</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="what-detecting" className='dropdown-label row-[4] col-[1]'>What Are You Detecting?</label>
      <small>
        <QuestionCircle fill='blue' />
      </small>
      {invalidDetect && <small className="row-[4] col-[2/3] mr-[16px] text-[red!important]">can`t be empty</small>}
      <input
        id='what-detecting'
        type="text"
        className={`create-project-input border-[1px] rounded ${invalidDetect ? 'error' : ''}`}
        placeholder='E.g., `dogs` or `cars` or `words`'
        ref={detect}
        onKeyDown={() => setInvalidDetect(false)}
      />
      <label htmlFor="project-name" className='dropdown-label row-[6]'>Project name</label>
      {invalidName && <small className="row-[6] col-[2/3] mr-[16px] text-[red!important]">can`t be empty</small>}
      <input
        id='project-name'
        type="text"
        className={`create-project-input border-[1px] rounded ${invalidName ? 'error' : ''}`}
        placeholder='E.g., `Dog Breeds` or `Car Models` or `Text Finder`.'
        ref={name}
        onKeyDown={() => setInvalidName(false)}
      />
      <div className='create-project-bottom'>
        <button onClick={() => toggleModal(false)} >Cancel</button>
        <button onClick={() => onCreate(detect, name, type)}>Create Private Project</button>
      </div>
    </div>
  );
};

export default CreateProjectModal;