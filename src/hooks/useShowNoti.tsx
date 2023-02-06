import { showNotification } from '@mantine/notifications';
import { FiCheck, FiX } from 'react-icons/fi';

export function showSuccess(statusText: string) {
  return showNotification({
    id: 'successNoti',
    color: 'teal',
    title: 'Success',
    message: statusText,
    icon: <FiCheck size={16} />,
    autoClose: 2000,
  });
}
export function showError(statusText: string) {
  return showNotification({
    id: 'errorNoti',
    color: 'red',
    title: 'Error',
    message: statusText,
    icon: <FiX size={16} />,
    autoClose: 2000,
  });
}
