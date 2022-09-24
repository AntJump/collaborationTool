import ChipInput from 'material-ui-chip-input';
import { useState } from 'react';

let chips=[
    'hello',
    '?'
];

function InviteInputForm(){

    const {chips, setChips} = useState(
        [
            'hello'
        ]
    )

    const handleAddChip= (c) => {
        setChips(
            [ 
                ...chips,
                c
            ]
        );
    }

    const handleDeleteChip= ({c, i})=>{
        setChips(
            chips.filter(chip=>chip != c)
        )
    }

    return (

        <>
            <ChipInput
                value={chips}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
            /><br/>
        </>
    );
}

export default InviteInputForm;