import { useMemo } from 'react';
import { X } from '@phosphor-icons/react';
import Modal from 'react-modal';

import imgLogoMicrodigo from '@/assets/images/logo-microdigo.svg';

import VideoTutorialModal from './VideoTutorialModal';

import * as M from './styles';

const customStyles = {
  overlay: {
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(40, 40, 50, 0.3)',
    backdropFilter: 'blur(8px)',
  },
  content: {
    padding: '0',
    maxWidth: '90rem',
    minHeight: '52rem',
    margin: '0 auto',
    border: 'none',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

const ModalContainer = ({ modalIsOpen, closeModal, contentData }) => {
  const contents = {
    'video-tutorial': VideoTutorialModal
  }

  const CurrentContent = useMemo(() => {
    return contents[contentData.typeContent];
  }, [contentData.typeContent]);

  if (!CurrentContent) {
    return;
  }

  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel='Example Modal'
      shouldCloseOnOverlayClick={false}
    >
      <M.Container>
        <M.Header>
          <img
            src={imgLogoMicrodigo}
            alt="logo microdigo"
            loading='lazy'
          />

          <M.BtnClose
            onClick={closeModal}
          >
            <X />
          </M.BtnClose>
        </M.Header>
        {
          <CurrentContent
            closeModal={closeModal}
            contentData={contentData}
          />
        }

      </M.Container>
    </Modal>
  );

};

export default ModalContainer;
