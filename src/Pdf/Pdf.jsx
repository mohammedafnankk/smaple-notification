import React from 'react';
import {usePDF} from 'react-to-pdf';
import '../Pdf/style.css'
import { Document, Font, Image, Page, PDFDownloadLink, StyleSheet, Text } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer'
import MyPdf from '../MyPdf';

const Pdf = () => {

    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  
    
    return (

            <PDFDownloadLink
      document={<MyPdf name="Afnan" date={new Date().toDateString()} />}
      fileName="user-report.pdf"
    >
      {({ loading }) =>
        loading ? "Generating PDF..." : (
          <button style={{ padding: "10px 20px" }}>
            Download PDF
          </button>
        )
      }
    </PDFDownloadLink>

            
    //         <div className="">
    //             <button onClick={()=>toPDF()}>Download PDF</button>
    //             <div  style={{color:"red"}}>Hello From PDF</div>

    //  <div ref={targetRef} className="certificate-wrapper">
    //     <div className="bg-glow"></div>

    //     <div className="certificate-content" id="certificate-content">
    //         {/* <!-- Header --> */}
    //         <div className="header">
    //             <div className="header-pattern">
    //                 <svg width="100%" height="100%" viewBox="0 0 400 60" preserveAspectRatio="none">
    //                     <pattern id="leaf-pattern" x="0" y="0" width="40" height="60" patternUnits="userSpaceOnUse">
    //                         <path d="M20 5 Q25 20 20 35 Q15 20 20 5" fill="white" opacity="0.3"></path>
    //                         <path d="M10 25 Q15 35 10 50 Q5 35 10 25" fill="white" opacity="0.2"></path>
    //                         <path d="M30 20 Q35 32 30 45 Q25 32 30 20" fill="white" opacity="0.25"></path>
    //                     </pattern>
    //                     <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
    //                 </svg>
    //             </div>

    //             <div className="header-logo">
    //                 <div className="logo-content">
    //                     <div>
    //                         <div className="logo-text">Paadha</div>
    //                         <p className="logo-subtext">CONNECTING CARE</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //         {/* <!-- Main Content --> */}
    //         <div className="content">
    //             {/* <!-- Title --> */}
    //             <div className="title-section">
    //                 <p className="subtitle">Certificate</p>
    //                 <h1 className="main-title">APPRECIATION</h1>
    //             </div>

    //             {/* <!-- Decorative Line --> */}
    //             {/* <div className="decorative-line">
    //                 <div className="line"></div>
    //                 <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor">
    //                     <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z"></path>
    //                 </svg>
    //                 <div className="line left"></div>
    //             </div> */}

    //             {/* <!-- Presentation Text --> */}
    //             <p className="presentation-text">This certificate is proudly presented to</p>

    //             {/* <!-- Donor Name --> */}
    //             <div className="donor-name-section">
    //                 <h2 className="donor-name">John Doe</h2>
    //                 <div className="donor-underline"></div>
    //             </div>

    //             {/* <!-- Description --> */}
    //             <p className="description">
    //                 for their <span className="highlight">selfless act of donating blood</span> through
    //                 <span className="highlight">Paadha</span> and contributing to saving lives with compassion and generosity.
    //             </p>

    //             {/* <!-- Footer Section --> */}
    //             <div className="footer-section">
    //                 {/* <!-- Date --> */}
    //                 <div className="date-section">
    //                     <p className="date-text">December 31, 2025</p>
    //                     <div className="underline"></div>
    //                     <p className="label">Date</p>
    //                 </div>

    //                 {/* <!-- Seal --> */}
    //                 <div className="seal">
    //                     <div className="seal-outer">
    //                         <div className="seal-inner">
    //                             <div className="seal-content">
    //                                 <svg className="seal-icon" viewBox="0 0 24 24" fill="currentColor">
    //                                     <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z"></path>
    //                                 </svg>
    //                                 <p className="seal-text">Verified</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 {/* <!-- Signature --> */}
    //                 <div className="signature-section">
    //                     <p className="signature-text">Dr. Smith</p>
    //                     <div className="underline"></div>
    //                     <p className="label">Director</p>
    //                 </div>
    //             </div>
    //         </div>

    //         {/* <!-- Bottom Quote --> */}
    //         <div className="quote-section">
    //             <p className="quote-text">
    //                 "Your <span className="quote-highlight">one donation</span> can be someone's
    //                 <span className="quote-highlight">second chance at life.</span>"
    //             </p>
    //         </div>

    //         {/* <!-- Bottom Bar --> */}
    //         <div className="bottom-bar"></div>
    //     </div>
    // </div>

    //     </div>
    );
}

export default Pdf;
