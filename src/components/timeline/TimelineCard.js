import './Timeline.css';

const TimelineCard=({milestone})=>{
    return (
        <div className="timeline-row">
            <div className="timeline-card">
                <h2 className="timeline-card-title">{milestone.year}</h2>
                <p className="timeline-card-subtitle">{milestone.data}</p>
            </div>
        </div>
    );
}

export default TimelineCard;