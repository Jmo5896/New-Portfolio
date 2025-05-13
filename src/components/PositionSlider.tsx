import Form from 'react-bootstrap/Form';
import type { PositionSliderProps } from '../customTypes/interfaces';

export default function PositionSlider({ label, axis, updateAxis, value }: PositionSliderProps) {
    console.log(axis);
    console.log(updateAxis);

    return (
        <>
            <Form.Label>{label}: {value}</Form.Label>
            <Form.Range />
        </>
    )
}
