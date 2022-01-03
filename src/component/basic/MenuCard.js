import React from "react";
import './Style.css';

const MenuCard = ({ MenuData }) => {

    return (
        <>
            {
                MenuData.map((currEle) => {
                    return (<>
                        <div className="a" key={currEle.id}>
                            <div className="b">
                                <div className="c">
                                    <span>{currEle.id}</span>
                                    <span>{currEle.name}</span>
                                    <span>
                                        {currEle.description}
                                    </span>
                                    <img src = {currEle.image}></img>

                                </div>
                            </div>
                        </div>
                        </>
                    )
                })}
                </>
    )
            }
            export default MenuCard
           