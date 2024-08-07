"use client";

import {
    CloudinaryResourceType,
    ResourceType,
} from "@/app/google-photos/types";
import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
function Media({
    resource,
    index,
}: {
    resource: CloudinaryResourceType;
    index: number;
}) {
    return (
        <figure className={` aspect-square`}>
            <label htmlFor="check" className=" absolute z-10 m-[1vh]">
                <input
                    type="checkbox"
                    name="check"
                    id="check"
                    className=" checkbox checkbox-sm checkbox-primary rounded-full "
                />
            </label>
            <Link
                href={`/google-photos/${resource.asset_id}`}
                className="block relative w-full aspect-square"
            >
                <CldImage
                    priority={index === 0 || index === 1 || index === 2}
                    key={resource.asset_id}
                    src={resource.public_id}
                    alt={resource.display_name}
                    fill
                    sizes="(min-width: 1200px) 320px, (min-width: 768px) calc(33.33vw - 2vw), (min-width: 480px) calc(50vw - 2vw), 100vw"
                />
            </Link>
        </figure>
    );
}

export default Media;
