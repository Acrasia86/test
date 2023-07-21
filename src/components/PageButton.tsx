interface PageButtonProps {
    buttonTitle: string;
    onClick: any;
    className: string;
}

const PageButton = ({ buttonTitle, onClick, className } :PageButtonProps) => {
    return (
        <>
        <button onClick={onClick} className={className}>{buttonTitle}</button>
        </>
    )
}

export default PageButton;