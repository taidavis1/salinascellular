import React from "react";

export default function ButtonHome(props){
    return (
        <div className=" flex p-5 text-white justify-center">
            <button className=" lg:px-12 lg:py-5 rounded-full px-6 py-3 shadow-md lg:shadow-lg text-2xl lg:text-4xl bg-gradient-to-r from-[#0D00D6] to-[#F287C8]">
                {props.name}                            
            </button>
        </div>
    )
};