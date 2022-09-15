import TimelineCard from './TimelineCard';

import MILESTONES_DATA from 'data/MilestonesData';

import './Timeline.css';

const Timeline=()=>{
    return (
        <div className="timeline">
            {MILESTONES_DATA.map(milestone=>(
                <TimelineCard key={milestone.id} milestone={milestone} />
            ))}
        </div>
    );
}

export default Timeline;