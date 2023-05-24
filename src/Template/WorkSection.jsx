import { useContext } from "react";
import { MainHeading } from "./Heading";
import { WorkContext } from "../App";

export function WorkSection() {
  const { workList } = useContext(WorkContext);

  return (
    <div className="work-section main-sections">
      <MainHeading>Work Experience</MainHeading>
      <div className="main-child">
        <ul className="list work-exp">
          {(workList.length > 0) ? (
            workList.map(({ id, from, to, role, company, city }) => {
              return (
                <li key={id} className="work-list">
                  <p className="work-year">
                    {from} - {to}
                  </p>
                  <h5 className="work-position">{role}</h5>
                  <h6 className="company-city-name">
                    {company}, {city}
                  </h6>
                </li>
              );
            })
          ) : (
            <li className="work-list">
              <p className="work-year">
                {"20xx"} - {"20xx"}
              </p>
              <h5 className="work-position">{"Position/Role"}</h5>
              <h6 className="company-city-name">
                {"Company Name"}, {"City Name"}
              </h6>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
