import React from "react";
import {setCurrentLimit} from "../../redux/action-creators";
import {LIMIT_STEP} from "../../redux/recuders/current-limit-reducer";

export const LoadMore = () => {
    return (
        <div>
            <button onClick={() => setCurrentLimit(prev => prev += LIMIT_STEP)}>load more</button>
        </div>
    )
}