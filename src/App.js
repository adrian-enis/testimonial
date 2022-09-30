import './App.css';
import CardTestimonial from './components/CardTestimonial';
function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <CardTestimonial
          images='shawn'
          name  ='Shawn Wang '
          country = 'Singapore'
          position = 'Software Engineer'
          business = 'Amazon'
          testimonial = ' It&#39;s scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'
        />
        <CardTestimonial
          images='sarah'
          name  ='Sarah Chima'
          contry = 'Nigeria'
          position = 'Software Engineer'
          business = 'ChatDesk'
          testimonial = 'freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
        />
        <CardTestimonial
          images = 'emma'
          name = 'Emma Bostian'
          country = 'Sweden'
          position = 'Software Engineer'
          business = 'Spotify'
          testimonial = 'I&#39;ve always struggled with learning JavaScript. I&#39;ve taken many courses but freeCodeCamp&#39;s course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'
        />
      </div>
    </div>
  );
}

export default App;
