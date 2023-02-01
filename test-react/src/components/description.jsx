import React from "react";

const Description = ({
    heightpok,
    weightpok,
    pokstat1,
    pokstat2,
    pokstat3,
    pokstat4,
    pokstat5,
    pokstat6,
    posbs1,
    posbs2,
    posbs3,
    posbs4,
    posbs5,
    posbs6,
}) => {
    return (
        <div className="text-xs mt-4">
            <p>
                <b>Height</b> is <b>{heightpok * 10} cm.</b><br />
                <b>Weight</b> is <b>{weightpok * 0.1} kg</b>
            </p>
            <h3>Stat</h3>

            <p>
                <b>
                    {pokstat1} : {posbs1}<br />
                    {pokstat2} : {posbs2}<br />
                    {pokstat3} : {posbs3}<br />
                    {pokstat4} : {posbs4}<br />
                    {pokstat5} : {posbs5}<br />
                    {pokstat6} : {posbs6}
                </b>
            </p>
        </div >
    );
};

export default Description;
