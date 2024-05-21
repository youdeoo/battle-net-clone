import { RefObject, SetStateAction, useEffect, useRef } from 'react';

interface OutsideClickParams {
  state: boolean;
  setState: React.Dispatch<SetStateAction<boolean>>;
}

const useOutsideClick = ({ state, setState }: OutsideClickParams): RefObject<HTMLDivElement> => {
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
  }, [state, setState]);

  return elementRef;
}

export default useOutsideClick;