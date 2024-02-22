import { useState, useEffect } from 'react';
import { StyledToast, StyledToastsContainer } from './Toast.styled';
import toastStack from './ToastStack';

const ToastsContainer = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    toastStack.onChange(newToasts => setToasts([...newToasts]));
    return () => toastStack.removeCallback();
  }, []);

  return (
    <StyledToastsContainer>
      {toasts.map((toast, index) => (
        <StyledToast key={index} $type={toast.type}>
          {toast.message}
        </StyledToast>
      ))}
    </StyledToastsContainer>
  );
};

export default ToastsContainer;
