import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalProvider } from '@saimin/react-modal-manager';
// import StarRating from './Star';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
    <App />
    </ModalProvider>
    {/* // <StarRating></StarRating> */}
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ModalProvider, useModal } from '@saimin/react-modal-manager';

// const MyApp = () => {
//   const { open } = useModal();

//   const showModal = () => {
//     open('example-modal', {
//       content: <div>Example Modal Content</div>,
//       fullscreen: false,
//       animationType: 'zoom',
//       position: 'bottom-center',
//       backdropOpacity: '0.9',
//       hideOnClickBackDrop: true,
//     });
//   };

//   return <button onClick={showModal}>Show Modal</button>;
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ModalProvider>
//     <MyApp />
//   </ModalProvider>,
//   document.getElementById('root')
// );


