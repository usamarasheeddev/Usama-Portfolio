import React from 'react'
import Typewriter from 'typewriter-effect';

export default function TypeWriterComponent() {
    return (
        <div>
            <Typewriter
                options={{
                    strings: [
                        "MERN Stack Developer!",
                        "React Js Developer!",
                        "Next Js Developer!",
                        "Node Js Developer!",
                        "Full Stack Developer!",
                        "Software Engineer!"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    
                }}
            />
        </div>
    )
}
