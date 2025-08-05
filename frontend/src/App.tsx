import { Box, ChakraProvider } from '@chakra-ui/react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { GetNewWords } from './pages/GetNewWords';
import { HealthCheck } from './pages/HealthCheck';
import { ImageDescription } from './pages/ImageDescription';
import { Learn } from './pages/Learn';
import { ListDetail } from './pages/ListDetail';
import { Lists } from './pages/Lists';
import { Quiz } from './pages/Quiz';
import { ReadingPage } from './pages/ReadingPage';
import { Settings } from './pages/Settings';
import { TemplateLibrary } from './pages/TemplateLibrary';
import { VoiceChat } from './pages/VoiceChat';
import { WordDetailPage } from './pages/WordDetail';
import { WordLearningSession } from './pages/WordLearningSession';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box bg="slate.900" minH="100vh" color="white">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/lists" replace />} />
            <Route path="/health" element={<HealthCheck />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/lists/:id" element={<ListDetail />} />
            <Route path="/learn/:id" element={<Learn />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/templates" element={<TemplateLibrary />} />
            <Route path="/words/:wordId" element={<WordDetailPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/describe" element={<ImageDescription />} />
            <Route path="/learn-new-words" element={<GetNewWords />} />
            <Route path="/learn-new-words/session" element={<WordLearningSession />} />
            <Route path="/reading/:listId" element={<ReadingPage />} />
            <Route path="/voice-chat/:listId" element={<VoiceChat />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
