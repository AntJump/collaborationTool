
export function modalBoxStyle({w, h}) {
    return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: w,
        height: h,
        bgcolor: 'background.paper',
        border: '1px solid #F2F2F2',
        borderRadius: 10,
        boxShadow: 24,
        p: 4,
        
    };
}
