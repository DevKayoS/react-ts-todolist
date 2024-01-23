import * as React from 'react';
import styles from './Modal.module.css'
import { ITask } from '../interfaces/task';

interface IAppProps {
    children: React.ReactNode
}

const Modal = ({children}: IAppProps) => {
  
    const closeModal = (e: React.MouseEvent): void => {
        const modal =document.querySelector("#modal")
        modal!.classList.add("hide")
    }
    

    return(
    <div id='modal' className='hide'>
        <div className={styles.fade} onClick={closeModal}></div>
        <div className={styles.modal}>
            <div className={styles.close}> <i className="bi bi-x" onClick={closeModal}></i></div>
            <h2>Texto do modal</h2>
            {children}
        </div>
    </div>
  ) ;
};

export default Modal;
