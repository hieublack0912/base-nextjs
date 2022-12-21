import React from "react";
import {useAppSelector} from "@/store/hook";

const Demo: React.FC = () => {
    const demo = useAppSelector(store => store.demo.test)
    return (
        <div className={"text-lg"}>
            {demo}
        </div>
    )
}

export default Demo;
