import { MainHeading } from "./Heading"

export function EduSection() {
    return (
        <div className="edu-section main-sections">
            <MainHeading>Education</MainHeading>
            <div className="main-child">
                <ul className="list edu-school">
                    <li className="edu-list">
                        <p className="school-year">20xx - 20xx</p>
                        <h5 className="degree-name">Degree Name with subject</h5>
                        <h6 className="university-name">University/College Name</h6>
                    </li>
                    <li className="edu-list">
                        <p className="school-year">20xx - 20xx</p>
                        <h5 className="degree-name">Degree Name with subject</h5>
                        <h6 className="university-name">University/College Name</h6>
                    </li>
                </ul>
            </div>
        </div>
    )
}