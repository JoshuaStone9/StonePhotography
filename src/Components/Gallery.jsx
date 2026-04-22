import { useState } from "react";

export default function Gallery() 
{
    const images = ["images/IMG_9007.jpeg", "images/IMG_9050.jpeg", "images/IMG_9057.jpeg", "images/IMG_9027.jpeg", "images/IMG_9058.jpeg"];
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <section id="gallery" className="container py-4" style={{backgroundColor: "rgba(255, 213, 213, 0.8)"}}>
            <h2 className="display-4 subtitle">Gallery</h2>
            <div className="row">
                {images.map((src, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <img 
                            src={src} 
                            alt={`Photo ${index + 1}`} 
                            className="img-fluid rounded" 
                            onClick={() => setSelectedImage(src)} 
                            style={{ cursor: "pointer"}} 
                            /> 
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                    }}>
                    <img src={selectedImage} alt="Enlarged" style={{maxWidth: "90%", maxHeight: "90%"}}/>
                </div>
            )} 
        </section>
    )
}