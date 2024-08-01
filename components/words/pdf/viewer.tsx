import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer/lib/react-pdf.browser.es.js';
import { PDFDoc } from './pdf-component';

export const Viewer = () => (
  <PDFViewer>
    <PDFDoc />
  </PDFViewer>
);