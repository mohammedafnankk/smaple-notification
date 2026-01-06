import React from "react";
import { Document, Page, View, Text, Image, StyleSheet, Font, Svg, Path } from '@react-pdf/renderer';


// Register fonts
// Font.register({
//   family: 'Playfair Display',
//   src: 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtY.ttf',
//   fontWeight: 'bold',
// });

// Font.register({
//   family: 'Lato',
//   src: 'https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXg.ttf',
// });

// Font.register({
//   family: 'Great Vibes',
//   src: 'https://fonts.gstatic.com/s/greatvibes/v18/RWmMoKWR9v4ksMfaWd_JN9XLiaQ.ttf',
// });

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  headerBand: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: '#33933C',
  },
  footerBand: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: '#33933C',
  },
  cornerTL: {
    position: 'absolute',
    top: 110,
    left: 30,
    width: 50,
    height: 50,
    borderLeft: '2px solid rgba(51, 147, 60, 0.3)',
    borderTop: '2px solid rgba(51, 147, 60, 0.3)',
  },
  cornerTR: {
    position: 'absolute',
    top: 110,
    right: 30,
    width: 50,
    height: 50,
    borderRight: '2px solid rgba(51, 147, 60, 0.3)',
    borderTop: '2px solid rgba(51, 147, 60, 0.3)',
  },
  cornerBL: {
    position: 'absolute',
    bottom: 80,
    left: 30,
    width: 50,
    height: 50,
    borderLeft: '2px solid rgba(51, 147, 60, 0.3)',
    borderBottom: '2px solid rgba(51, 147, 60, 0.3)',
  },
  cornerBR: {
    position: 'absolute',
    bottom: 80,
    right: 30,
    width: 50,
    height: 50,
    borderRight: '2px solid rgba(51, 147, 60, 0.3)',
    borderBottom: '2px solid rgba(51, 147, 60, 0.3)',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 80,
    paddingHorizontal: 40,
  },
  logo: {
    width: 80,
    height: 80,
    objectFit: 'contain',
    borderRadius: 8,
  },
  titleSection: {
    alignItems: 'center',
    marginTop: 30,
  },
  certifyText: {
    fontSize: 9,
    // fontFamily: 'Lato',
    color: '#666666',
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginBottom: 8,
  },
  certificateTitle: {
    fontSize: 32,
    // fontFamily: 'Playfair Display',
    fontWeight: 'bold',
    color: '#33933C',
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  dividerLine: {
    width: 50,
    height: 2,
    backgroundColor: '#C9A227',
  },
  dividerSymbol: {
    fontSize: 14,
    color: '#C9A227',
    marginHorizontal: 8,
  },
  appreciationText: {
    fontSize: 14,
    // fontFamily: 'Playfair Display',
    color: '#1a5c20',
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginTop: 6,
  },
  presentedText: {
    fontSize: 11,
    // fontFamily: 'Lato',
    color: '#666666',
    marginTop: 25,
  },
  donorName: {
    fontSize: 42,
    // fontFamily: 'Great Vibes',
    color: '#1a5c20',
    marginTop: 15,
  },
  nameDivider: {
    width: 200,
    height: 1,
    backgroundColor: '#33933C',
    marginTop: 8,
  },
  description: {
    fontSize: 11,
    // fontFamily: 'Lato',
    color: '#555555',
    textAlign: 'center',
    lineHeight: 1.6,
    marginTop: 25,
    maxWidth: 350,
  },
  descriptionBold: {
    fontWeight: 'bold',
    color: '#33933C',
  },
  heartSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  heartLine: {
    width: 25,
    height: 1,
    backgroundColor: 'rgba(51, 147, 60, 0.3)',
  },
  heartSymbol: {
    fontSize: 12,
    color: '#33933C',
    marginHorizontal: 10,
  },
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    maxWidth: 400,
    marginTop: 35,
  },
  signatureBlock: {
    alignItems: 'center',
  },
  dateText: {
    fontSize: 11,
    // fontFamily: 'Playfair Display',
    color: '#333333',
  },
  signatureLine: {
    width: 90,
    height: 1,
    backgroundColor: 'rgba(51, 147, 60, 0.4)',
    marginTop: 8,
    marginBottom: 4,
  },
  signatureLabel: {
    fontSize: 8,
    // fontFamily: 'Lato',
    color: '#666666',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  seal: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#C9A227',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sealInner: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(201, 162, 39, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sealCheck: {
    fontSize: 14,
    color: '#C9A227',
    fontWeight: 'bold',
  },
  directorName: {
    fontSize: 16,
    // fontFamily: 'Great Vibes',
    color: '#1a5c20',
  },
  quote: {
    fontSize: 9,
    // fontFamily: 'Lato',
    fontStyle: 'italic',
    color: '#666666',
    marginTop: 25,
  },
});

const MyPdf = ({
  donorName = "Donor Name",
  date = "10-11-2025",
  directorName = "Saleel Sahal",
}) => (
   <Document>
      <Page size="A4" style={styles.page}>
        {/* Green header band */}
        <View style={styles.headerBand} />
        
        {/* Green footer band */}
        <View style={styles.footerBand} />
        
        {/* Decorative corner elements */}
        <View style={styles.cornerTL} />
        <View style={styles.cornerTR} />
        <View style={styles.cornerBL} />
        <View style={styles.cornerBR} />
        
        {/* Content container */}
        <View style={styles.content}>
          {/* Logo */}
          <Image src="/paadhaLOGO.jpeg" style={styles.logo} />
          
          {/* Certificate title section */}
          <View style={styles.titleSection}>
            <Text style={styles.certifyText}>This is to certify that</Text>
            <Text style={styles.certificateTitle}>Certificate</Text>
            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerSymbol}></Text>
              <View style={styles.dividerLine} />
            </View>
            <Text style={styles.appreciationText}>of Appreciation</Text>
          </View>
          
          {/* Presented to text */}
          <Text style={styles.presentedText}>is proudly presented to</Text>
          
          {/* Donor name */}
          <Text style={styles.donorName}>{donorName}</Text>
          <View style={styles.nameDivider} />
          
          {/* Description */}
          <Text style={styles.description}>
            For the selfless act of donating blood through Paadha, contributing to saving lives with compassion and generosity.
          </Text>
          
          {/* Heart divider */}
          <View style={styles.heartSection}>
            <View style={styles.heartLine} />
            <Text style={styles.heartSymbol}>♥</Text>
            <View style={styles.heartLine} />
          </View>
          
          {/* Date and Signature row */}
          <View style={styles.signatureRow}>
            {/* Date */}
            <View style={styles.signatureBlock}>
              <Text style={styles.dateText}>{date}</Text>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureLabel}>Date</Text>
            </View>
            
            {/* Seal */}
            <View style={styles.seal}>
              <View style={styles.sealInner}>
                <Text style={styles.sealCheck}>✓</Text>
              </View>
            </View>
            
            {/* Director signature */}
            <View style={styles.signatureBlock}>
              <Text style={styles.directorName}>{directorName}</Text>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureLabel}>Director</Text>
            </View>
          </View>
          
          {/* Quote */}
          <Text style={styles.quote}>
            "One donation can be someone's second chance at life."
          </Text>
        </View>
      </Page>
    </Document>
);

export default MyPdf;
