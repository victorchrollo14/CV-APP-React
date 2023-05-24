import { MainHeading } from "./Heading";
import { useContext } from "react";
import { EduContext } from "../App";

export function EduSection() {
  const { eduList } = useContext(EduContext);

  return (
    <div className="edu-section main-sections">
      <MainHeading>Education</MainHeading>
      <div className="main-child">
        <ul className="list edu-school">
          {eduList.length > 0 ? (
            eduList.map(({ id, from, to, degree, subject, university }) => {
              return (
                <li key={id} className="edu-list">
                  <p className="school-year">{`${from} - ${to}`}</p>
                  <h5 className="degree-name">{`${degree} in ${subject}`}</h5>
                  <h6 className="university-name">{university}</h6>
                </li>
              );
            })
          ) : (
            <li className="edu-list">
              <p className="school-year">{`${"20xx"} - ${"20xx"}`}</p>
              <h5 className="degree-name">{`${"Degree"} in ${"Subject"}`}</h5>
              <h6 className="university-name">{"University/ School Name"}</h6>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
