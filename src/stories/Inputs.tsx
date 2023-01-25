interface InputProps {
    color?: string;
    levels: 1 | 2 | 3 | 4;
    onBlur?: () => void;
}

export const Input = ({ color = "#00ff00", levels, onBlur, ...props }: InputProps) => {
    return <input type="text" value={levels} onBlur={onBlur} style={{ color: `${color}` }} {...props} />;
};
