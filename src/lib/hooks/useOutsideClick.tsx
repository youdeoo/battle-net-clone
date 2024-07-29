import { useEffect, useRef } from 'react';

const useOutsideClick = (
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>
): React.RefObject<HTMLDivElement> => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent): void => {
    if (elementRef.current && state && !elementRef.current.contains(event.target as HTMLDivElement)) {
      setState(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [state]);

  return elementRef;
}

export default useOutsideClick;