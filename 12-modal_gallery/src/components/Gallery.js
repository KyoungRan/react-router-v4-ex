import React from "react";
import {Link} from "react-router-dom";
import IMAGES from "../data/images";
import Thumbnail from "./Thumbnail";

const Gallery = () => (
    <div>
        {IMAGES.map(i => (
            <Link
                key={i.id}
                to={{
                    pathname: `/img/${i.id}`,
                    // this is the trick!
                    state: {modal: true}
                }}
            >
                <Thumbnail color={i.color} />
                <p>{i.title}</p>
            </Link>
        ))}
    </div>
);

export default Gallery;
