import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer/lib/react-pdf.browser.es.js';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const PDFDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Есть музыка, чей вздох нежнее упадает, ‎чем лепестки отцветших роз, нежнее, чем роса, когда она блистает,‎роняя слёзы на утёс. Нежней, чем падает на землю свет зарницы,‎когда за морем спит гроза, нежней, чем падают усталые ресницы ‎на утомлённые глаза. Есть музыка, чей вздох как сладкая дремота,‎что сходит с неба в тихий час. Есть мшистая постель, где крепко спит забота ‎и где никто не будит нас. Там дышит гладь реки в согретом полумраке, ‎цветы баюкает волна, и с выступов глядя, к земле склонились маки, ‎в объятьях нежащего сна.</Text>
      </View>
    </Page>
  </Document>
);