export interface AnimalProps {
    className: string;
    title: string;
    imgSrc: string;
    classNameLocatedAt: string;
    animalLocatedAt: string;
    animalList: {
        country: string;
    }[]
}

const Animal = ({ className, title, imgSrc, classNameLocatedAt, animalLocatedAt, animalList} :AnimalProps) => {
    return (
        <div>
        <h1 className={className}>{title}</h1>
        <img src={imgSrc}/>
        <div className={classNameLocatedAt}>{animalLocatedAt}</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        {
            animalList.map((x) => (
                <div>{x.country}</div>
            ))
        }
       
        </div>
    </div>
    )
}

export default Animal;