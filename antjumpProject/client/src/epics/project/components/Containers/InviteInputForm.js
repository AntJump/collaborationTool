import ChipInput from 'material-ui-chip-input';
import { useState } from 'react';


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
                fullWidth
                value={chips}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
                // variant = 'filled'
                fullWidthInput
            /><br/>
        </>
    );
}

export default InviteInputForm;