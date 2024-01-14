import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
type Props = {
    linkTo: string;
    imageSrc: string;
    title: string;
    imageAlt: string;
    description: string;
    email?: string;
    password?: string;
};

const ProjectComponent: React.FC<Props> = ({ linkTo, imageSrc, title, imageAlt, email, password,description }) => {
    return (
        <div>
            <Link
                href={linkTo}
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1]"
            >
                <div className="flex-row flex mb-5 items-center">
                    <Image
                        src={imageSrc}
                        height={220}
                        width={270}
                        alt={imageAlt}
                    />
                    <div className="p-3">
                        <p className="text-white font-semibold text-xl">{title}</p>
                        <p className="text-gray-300 text-[11px]">
                            {description}
                        </p>
                        <p className="text-white text-[11px]">UserName/Email:{email}</p>
                        <p className="text-white text-[11px]">Password:{password}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectComponent;
