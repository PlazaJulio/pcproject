import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export default function Loading() {
    return (
        <div 
            className='
                flex 
                items-center 
                justify-center 
                w-screen 
                h-screen 
                top-0 
                left-0 
                fixed 
                bg-stone-800 
                bg-opacity-60'
            >
            <FontAwesomeIcon icon={faCircleNotch} className='text-stone-300' spin size='3x' />
        </div>
    )
}   