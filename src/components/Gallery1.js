import React, { useState, useCallback } from "react";
// import Layout from '../components/Layout-noc'
import Gallery from "react-photo-gallery";
// import { Helmet } from "react-helmet";
import Carousel, { Modal, ModalGateway } from "react-images"

const SingleCategory = props => {



const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);


  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  

 const photos = [
	{src: '../img/img_2487.jpg', width:3, height:2},
    {src: '../img/img_3136.jpg', width:3, height:2},
    {src: '../img/img_3290.jpg', width:3, height:2},
    {src: '../img/img_2487.jpg', width:3, height:2},
    {src: '../img/img_3136.jpg', width:3, height:2},
    {src: '../img/img_3290.jpg', width:3, height:2},
    
/*
    {src: '../../static/', width:3, height:2},
   
*/
   
   
  ];
  
  
  

  return (
	  

    
      <>
        <h2 style={{textAlign: 'center', padding: '0', margin: '2rem 0 0 0',}}>Some of our work:</h2>

  <div className="container" style={{margin: '1rem 2rem 2rem 2rem',}}>

    <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
 </>
      


  );
};

export default SingleCategory;
