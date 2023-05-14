import React, { useState, useEffect } from 'react';
import pdf2pic from 'pdf2pic';

function PDFViewer({ pdfUrls }) {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    async function convertPdfToImage() {
      const converter = new pdf2pic({
        density: 100,
        format: 'png',
        size: '600x600',
        savePath: './images',
        saveFilename: 'image',
        page: 1
      });

      const urls = [];

      for (const pdfUrl of pdfUrls) {
        const imageBuffer = await converter.convertBulk(pdfUrl);
        const imageData = URL.createObjectURL(new Blob([imageBuffer]));
        urls.push(imageData);
      }

      setImageUrls(urls);
    }

    convertPdfToImage();
  }, [pdfUrls]);

  return (
    <>
      {imageUrls.length > 0 ? (
        imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`PDF document ${index + 1}`} />
            <a href={pdfUrls[index]} download>Download PDF {index + 1}</a>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default PDFViewer;
