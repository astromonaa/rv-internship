import '../../styles/Modal.scss'
import { useActions } from '../../hooks/actions';
import { X } from 'react-bootstrap-icons'
import { useAppSelector } from '../../hooks/hooks';

const Modal = ({ children, title }: any) => {
  const { toggleModal, toggleToolsModal } = useActions()
  const { modalShow } = useAppSelector(state => state.modal)
  const closeModal = () => {
    toggleModal(false)
    toggleToolsModal(false)
  }
  return (
    <>
      {modalShow && <div className="modal-wrapper">
        <div className="content">
          <div className="dialog-header flex justify-between py-[16px] px-[24px] border-b-[1px] border-b-[blue] items-center">
            <h2 className='font-bold text-[1.125rem] lh-[1.75rem]'>{title}</h2>
            <button className='w-[24px] h-[24px] scale-[1.2] hover:bg-[#e4bebe] rounded-[50%] flex items-center justify-center transition-all'
              onClick={closeModal}
            >
              <X />
            </button>
          </div>
          {children}
        </div>
      </div>}
    </>
  );
};

export default Modal;