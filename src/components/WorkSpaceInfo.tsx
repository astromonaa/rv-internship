import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import { useState, useEffect } from 'react';
import { IWorkSpace } from '../types/types';
import WorkspaceInfoTop from './WorkspaceInfoTop';
import WelcomBlock from './WelcomBlock';
import { Plus } from 'react-bootstrap-icons'
import Modal from './UI/Modal';
import CreateProjectModal from './CreateProjectModal/CreateProjectModal';
import { useActions } from '../hooks/actions';
import ProjectItem from './ProjectItem';

const WorkSpaceInfo = () => {
  const { workSpaces } = useAppSelector(state => state.area)
  const {toolsModal} = useAppSelector(state => state.modal)
  const {toggleModal, toggleToolsModal} = useActions()
  const { id } = useParams()
  const [current, setCurrent] = useState<IWorkSpace>()

  useEffect(() => {
    const currentSpace = workSpaces.find(el => el.id === Number(id?.split('-')[1]))
    setCurrent(currentSpace)
  })

  const openModal = (event:React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault()
    toggleModal(true)
    !current?.workspaceTool && toggleToolsModal(true)
  }

  return (
    <>
      {!toolsModal &&
      <Modal title='Create Project'>
        <CreateProjectModal />
      </Modal>
      }
      <WorkspaceInfoTop {...current} />
      <WelcomBlock />
      <div className='project-data-block gap-[26px]'>
        <a
          href="#"
          className='create-project-btn'
          onClick={e => openModal(e)}
        >
          <Plus />
          <span>Create New Project</span>
        </a>
        {
          current?.Projects.map(project => <ProjectItem key={project.id} project = {project}/>)
        }
      </div>
    </>
  );
};

export default WorkSpaceInfo;