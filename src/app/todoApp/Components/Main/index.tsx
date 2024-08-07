"use client";

import React, { useEffect } from "react";
import CreateTaskBtn from "./Components/CreateTaskBtn";
import TaskContainer from "./Components/TaskContainer";
import "./index.css";
import Title from "./Components/Title";
import { useGlobalContext } from "../../Provider";
import MiniCreateTaskBtn from "./Components/Title/MiniCreateTaskBtn";

function Main({ userId }: { userId: string }) {
    const { isTitleDisplayed, setIsTitleDisplayed, tasks, setUserId } =
        useGlobalContext();

    useEffect(() => {
        setIsTitleDisplayed(true);
    }, [isTitleDisplayed, setIsTitleDisplayed]);

    useEffect(() => {
        if (userId) {
            setUserId(userId);
        }
    }, [userId, setUserId]);

    return (
        <main
            className="my-[2vh] ml-[2vw] lg:ml-0 mr-[2vw] py-[1vh] px-[1vw] border-[1px] border-primary shadow-md shadow-primary h-[85vh] overflow-y-auto
                        lg:col-start-2 col-span-1"
        >
            <div className=" min-h-[55.03px]  mb-[1vh] flex justify-between items-center">
                {isTitleDisplayed && <Title />}
                <MiniCreateTaskBtn />
            </div>
            <ul className="grid gap-y-[1vh] gap-x-[1vw] grid-cols-[repeat(auto-fill,minmax(313px,1fr))] overflow-hidden">
                {tasks?.map((task, index) => {
                    return (
                        <TaskContainer
                            key={task.id}
                            task={task}
                            index={index}
                        />
                    );
                })}
                <CreateTaskBtn key={"createBtn"} index={tasks.length} />
            </ul>
        </main>
    );
}

export default Main;
