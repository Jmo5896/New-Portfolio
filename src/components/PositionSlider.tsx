import Form from 'react-bootstrap/Form';
import type { PositionSliderProps } from '../customTypes/interfaces';

export default function PositionSlider({ label, axis, updateAxis, value }: PositionSliderProps) {

    const handleSlider = (e: { target: { value: any; }; }) => {
        const newValue = e.target.value
        updateAxis(axis, newValue)
    }

    return (
        <>
            <Form.Label>{label}: {value}</Form.Label>
            <Form.Range
                value={value}
                onChange={handleSlider}
            />
        </>
    )
}
