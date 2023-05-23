import { MainHeading } from "./Heading";

export function WorkSection() {
    return (
        <div className="work-section main-sections">
            <MainHeading>Work Experience</MainHeading>
            <div className="main-child">
                <ul className="list work-exp">
                    <li className="work-list">
                        <p className="work-year">20xx - 20xx</p>
                        <h5 className="work-position">Position/Role</h5>
                        <h6 className="company-city-name">Company Name, City Name</h6>
                    </li>
                    <li className="work-list">
                        <p className="work-year">20xx - 20xx</p>
                        <h5 className="work-position">Position/Role</h5>
                        <h6 className="company-city-name">Company Name, City Name</h6>
                    </li>
                </ul>
            </div>
        </div>
    )
}