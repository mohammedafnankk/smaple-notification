import { PDFDownloadLink } from "@react-pdf/renderer";
import MyPdf from "./MyPdf";

export default function PdfDownload() {
  return (
   <PDFDownloadLink
  document={<MyPdf name="John Doe" date="December 31, 2025" />}
  fileName="certificate.pdf"
>
  {({ loading }) =>
    loading ? "Generating..." : <button>Download Certificate</button>
  }
</PDFDownloadLink>

  );
}
