import "./EmptyState.css";


function EmptyState({imgSrc, title}) {
    return (
        <div className="empty-state">
            <img src={imgSrc}  />
            <h2>{title}</h2>
        </div>
    )
}

export default EmptyState;