interface AnimalProps {
    className: string;
    title: string;
    imgSrc: string;
    classNameLocatedAt: string;
    animalLocatedAt: string;
    animalList: string[];
}

const Animal = ({ className, title, imgSrc, classNameLocatedAt, animalLocatedAt, animalList} :AnimalProps) => {
    return (
        <div>
        <h1 className={className}>{title}</h1>
        <img src={imgSrc}/>
        <div className={classNameLocatedAt}>{animalLocatedAt}</div>
        <div>{animalList}</div>
    </div>
    )
}

export default Animal;