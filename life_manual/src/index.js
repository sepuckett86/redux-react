import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import App from './App';

const initialState =
{'sections':
  [
    {
      title: 'Defining Quote',
      description: 'If you could choose one quote to define your existence or to highlight the most important aspect of life, this would be it.',
      tags: [],
      examples: ['You are what you do'],
      id: '1'
    },
    {
      title: 'Words of Wisdom',
      description: 'These are quotes or ideas that you feel are meaningful and important. Sometimes, words are important only in context, so you may include in what mood or situation the quote is meaningful.',
      id: '2',
      examples: ['Action', 'Rest', 'Nostalgia', 'Fear', 'Love', 'Responsibility', 'Practical', 'Negative']
    },
    {
      title: 'Goals',
      description: 'Goals are something that give us a reason to get up in the morning. They are meaningful in that in them there is hope for the future, about something that is yet to be accomplished.',
      id: '3'
    },
    {
      id: '4',
      title: 'Focus Ideas',
      description: 'If there are words you live by and want to be reminded of, this is the section for that.',
      tags: [],
      examples: [],
    },
    {
      id: '5',
      title: 'Values',
      description: 'These are the ideals you live by, or try to.',
      tags: [],
      examples: ['Love', 'Nature', 'Community', 'Nuance', 'Balance'],
    },
    {
      id: '6',
      title: 'Who am I?',
      description: 'Choose from a list of statements. Which ones fit you the best?',
      tags: [],
      examples: [],
    },
    {
      id: '7',
      title: 'Philosophy Pyramid',
      description: 'Draw a pyramid and in different sections, state the founding ideas and beliefs upon which you base your existence.',
      tags: [],
      examples: ['base is I think, therefore I am.'],
    },
    {
      id: '8',
      title: 'Personality Test',
      description: 'What are you according to 16personalities.com?',
      tags: ['source_specific'],
      examples: [],
    },
    {
      id: '9',
      title: 'Role Models',
      description: 'Who are your role models and why? You don’t have to like everything about a person to admire certain traits, so focus on the traits you admire.',
      tags: [],
      examples: ['Kangyur Rinpoche, a Tibetan monk. Why? He radiated inner goodness. …depth, serenity, and compassion…emanated from him. ~Awakened Ape.'],
    },
    {
      id: '10',
      title: 'Activities I Value',
      description: 'What are activities you enjoy doing or think are important for well-being? What would you like to remember to do more often?',
      tags: [],
      examples: ['simple chores done in a Zen-like fashion', 'outdoor exercise: feeling more comfortable in my body with nature'],
    },
    {
      id: '11',
      title: 'Where I Came From',
      description: 'Here is where you acknowledge the influence your environment had on who you are today. Where are you from? What culture were you raised in? What music did you listen to in your teens?',
      tags: [],
      examples: [],
    },
    {
      id: '12',
      title: 'Timeline',
      description: 'Draw a timeline of critical events in your life and when they occurred.',
      tags: [],
      examples: [],
    },
    {
      id: '13',
      title: 'Life Lessons/Pivotal Events',
      description: 'What are key events in your life that are strong in your memory and how do they shape you today?',
      tags: [],
      examples: ['Getting married', 'Breaking up', 'Getting a PhD'],
    },
    {
      id: '14',
      title: 'Books/Media Influences',
      description: 'What books and/or media influences do you want to remember and reflect upon? What would you recommend to others? Why? Who wrote them?',
      tags: [],
      examples: [],
    },
  ]
}
ReactDOM.render(
  <Root initialState={initialState}>
    <App/>
  </Root>,
  document.querySelector('#root')
);
