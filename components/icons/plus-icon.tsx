interface PlusIconProps {
    color?: string;
}

const PlusIcon = ({ color = "#525252" }: PlusIconProps) => {
    return (
        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.30546 4.9721V0.805435H5.69435V4.9721H9.86102V6.36099H5.69435V10.5277H4.30546V6.36099H0.138794V4.9721H4.30546Z"
                fill={color}
            />
        </svg>
    )
}


export default PlusIcon