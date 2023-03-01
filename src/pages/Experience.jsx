import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from '@material-ui/icons/School';

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date='2003-2007'
        iconStyle={ {background: "#3e497a", color: "#fff"} }
        icon={<SchoolIcon />}>
          <h3>Amherst College (Amherst, MA)</h3>
          <p>B.A. Music (Composition)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date='2011-2013'
        iconStyle={ {background: "#3e497a", color: "#fff"} }
        icon={<SchoolIcon />}>
          <h3>LIU-Brooklyn (Brooklyn, NY)</h3>
          <p>M.S., Special Education</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date='Oct 2022 - Dec 2022'
        iconStyle={ {background: "#3e497a", color: "#fff"} }
        icon={<SchoolIcon />}>
          <h3>Le Wagon (Remote)</h3>
          <p>Certificate of Completion, Web Development</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
