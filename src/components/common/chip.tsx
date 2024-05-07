
type ChipProps = {
    label: string;
    color: string;
    handleClick: () => void;

}

const Chip:React.FC<ChipProps> = ({label, color, handleClick}) => {
  
    return (
        <div className={`py-2 px-5 flex rounded-full border border-white justify-center bg-slate-200 shadow-md items-center cursor-pointer hover:opacity-80`} onClick={handleClick}>
            <p className={`text-${color}-500  font-semibold text-lg`}>
                {label}
            </p>
        </div>
    )
}

export default Chip;