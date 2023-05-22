import { HeadingUnderLined } from "./Heading";
import { useState} from "react";


export function PersonalInfo() {
    return(
        <div className="personal-info info-sections">
            <HeadingUnderLined>personal info</HeadingUnderLined>
            <h3 className="sub-heading">Phone:</h3>
            <h4 className="info-values">98374XXXX</h4>
            <h3 className="sub-heading">Email:</h3>
            <h4 className="info-values">namesomething@gmail.com</h4>
        </div>
    )
}