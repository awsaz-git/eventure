import MRating from '@mui/material/Rating';
import { useState, useEffect } from 'react';

function Rating(props) {
    const [size, setSize] = useState("medium"); // Default size
    const [value, setValue] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1440) {
                setSize("small"); // Small on mobile
            } else {
                setSize("medium"); // Medium on larger screens
            }
        };

        handleResize(); // Call on mount
        window.addEventListener("resize", handleResize); // Listen for resize

        return () => window.removeEventListener("resize", handleResize); // Cleanup
    }, []);

    return (
        <MRating readOnly={props.readOnly} size={size} value={props.value !== undefined ? props.value : value} onChange={(event, newValue) => {
            setValue(newValue);
        }}
            onChangeActive={(event, newHover) => {
                setHover(newHover);
            }} />
    );
}

export default Rating;