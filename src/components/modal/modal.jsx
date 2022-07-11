import './modal.css';

export default function Modal({children, modal, setmodal}) {
    return (
        <div className={'modal ' + 'modal_' + modal} onClick={() => setmodal('')}>
            <div className='modal_container' onClick={(e) => e.stopPropagation()}>
            {children}
            </div>
        </div>
    )
}