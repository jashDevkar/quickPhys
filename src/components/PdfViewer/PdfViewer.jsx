import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '../App.css';
import { RiZoomInLine } from "react-icons/ri";
import { RiZoomOutLine } from "react-icons/ri";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PdfViewer({ filename }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [pageWidth, setPageWidth] = useState(300);
  const [showButtons, setShowButtons] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    if (window.innerWidth > 1024) {
      setShowButtons(true);
    } else {
      setShowButtons(false)
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };



  }, []);


  function zoomIn() {
    setPageWidth((prevWidth) => prevWidth + 50);
  }

  function zoomOut() {
    setPageWidth((prevWidth) => Math.max(prevWidth - 50, 50));
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onPageChange(newPage) {
    setPageNumber(newPage);
  }

  const pages = Array.from(new Array(numPages), (x, i) => i + 1);

  return (
    <>
      <div className="w-screen h-screen overflow-auto flex flex-col items-center">
        <div className="absolute bottom-0 right-0 mb-4 mr-4">
          {showButtons && (
            <div>
              <button type="button" onClick={zoomIn} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><RiZoomInLine /></button>
              <button type="button" onClick={zoomOut} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><RiZoomOutLine /></button>
            </div>
          )}
        </div>
        <Document file={filename} onLoadSuccess={onDocumentLoadSuccess}

        >
          {pages.map((page) => (
            <div key={`page_${page}`} className="flex justify-center my-2 ">
              <div className="box-border bg-white border-2 border-black">
                <Page pageNumber={page} width={pageWidth} onLoadSuccess={onPageChange} />
              </div>
            </div>
          ))}
        </Document>
      </div>
    </>
  );
}

export default PdfViewer;
