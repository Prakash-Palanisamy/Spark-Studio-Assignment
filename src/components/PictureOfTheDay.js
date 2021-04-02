import React from "react";
import PictureData from "./PictureData";

const PictureOfTheDay = () => {
    const [picture] = PictureData();
    return (
        <div className="pictureoftheday">
             {picture.media_type === "image" ? (
                <img
                    src={picture.url}
                    alt={picture.title}
                />
                ) : (
                <iframe
                    title="space-video"
                    src={picture.url}
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                />
            )}
             <p>{picture.title}</p>
             <p>{picture.date}</p>
             <p>&#169; Image copyright Information</p>
        </div>
    )
}

export default PictureOfTheDay
