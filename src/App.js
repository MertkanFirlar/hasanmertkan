import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './screens/Home';
import NumbersSequence from './screens/NumbersSequence';
import Birikimly from './screens/Birikimly';
import IFTracker from './screens/IFTracker';
import VitalTracker from './screens/VitalTracker';
import YDSWords from './screens/YDSWords';
import YOKDILWords from './screens/YOKDILWords';
import ColorTrick from './screens/ColorTrick';
import TropicFlip from './screens/TropicFlip';
import NSPrivacyPolicy from './screens/NSPrivacyPolicy';
import YOKDILPrivacyPolicy from './screens/YOKDILPrivacyPolicy';
import IFTrackerPrivacyPolicy from './screens/IFTrackerPrivacyPolicy';
import YDSPrivacyPolicy from './screens/YDSPrivacyPolicy';
import VitalTrackerPrivacyPolicy from './screens/VitalTrackerPrivacyPolicy';
import BirikimlyPrivacyPolicy from './screens/BirikimlyPrivacyPolicy';
import ColorTrickPrivacyPolicy from './screens/ColorTrickPrivacyPolicy';
import TropicFlipPrivacyPolicy from './screens/TropicFlipPrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/numbers-sequence" element={<NumbersSequence />} />
          <Route path="/birikimly" element={<Birikimly />} />
          <Route path="/if-tracker" element={<IFTracker />} />
          <Route path="/vital-tracker" element={<VitalTracker />} />
          <Route path="/yds-words" element={<YDSWords />} />
          <Route path="/yokdil-words" element={<YOKDILWords />} />
          <Route path="/color-trick" element={<ColorTrick />} />
          <Route path="/tropic-flip" element={<TropicFlip />} />
          <Route path="/numbers-sequence/privacy-policy" element={<NSPrivacyPolicy />} />
          <Route path="/yokdil-words/privacy-policy" element={<YOKDILPrivacyPolicy />} />
          <Route path="/if-tracker/privacy-policy" element={<IFTrackerPrivacyPolicy />} />
          <Route path="/yds-words/privacy-policy" element={<YDSPrivacyPolicy />} />
          <Route path="/vital-tracker/privacy-policy" element={<VitalTrackerPrivacyPolicy />} />
          <Route path="/birikimly/privacy-policy" element={<BirikimlyPrivacyPolicy />} />
          <Route path="/color-trick/privacy-policy" element={<ColorTrickPrivacyPolicy />} />
          <Route path="/tropic-flip/privacy-policy" element={<TropicFlipPrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;