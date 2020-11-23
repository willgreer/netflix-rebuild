import React from 'react';
import jumboData from './fixtures/jumbo';
import Jumbotron from './components/jumbotron';
import { JumbotronContainer } from './containers/jumbotron';
import { FaqsContainer } from './containers/faqs';

export default function App() {
  return (
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
  );
}
