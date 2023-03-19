// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const joke = {
  id: '7h3oGtrOfxc',
  joke: 'Whiteboards ... are remarkable.',
  status: 200,
};
const newJoke = {
  id: '7h3oGtrOfxc',
  joke: 'Second joke.',
  status: 200,
};

describe('App', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke),
    });
  });
  afterEach(() => jest.clearAllMocks());
  
  it('fetches a joke', async () => {
    // Outra forma de mock do fetch:
    // global.fetch = jest.fn(() => Promise.resolve({
    //   json: () => Promise.resolve(joke),
    // }));
    
    // Terceira forma de mock do fetch
    // global.fetch = jest.fn(async () => ({
    //   json: async () => joke
    // }));
    
    render(<App />);
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://icanhazdadjoke.com/',
      { headers: { Accept: 'application/json' } },
      );
  });

  it('after render shows the joke', async () => {
    render(<App />);
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
  });
  
  it('call fetch one time', () => {
    render(<App />);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
  
  it('renders a new joke after click on New joke button', async () => {
    render(<App />);
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
    
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(newJoke),
    });
    
    const newJokeButton = await screen.findByText(/new joke/i)
    userEvent.click(newJokeButton)
    
    const renderedNewJoke = await screen.findByText('Second joke.');
    expect(renderedNewJoke).toBeInTheDocument();
  });
  
  it('after click on New joke render only the new joke', async () => {
    render(<App />);
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
    
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(newJoke),
    });
    
    const newJokeButton = await screen.findByText(/new joke/i)    
    userEvent.click(newJokeButton)
    
    const renderedNewJoke = await screen.findByText('Second joke.');
    expect(renderedNewJoke).toBeInTheDocument();
    const allParagraph = await screen.findAllByRole('textbox');
    expect(allParagraph).toHaveLength(1);
    expect(allParagraph[0].innerHTML).toBe('Second joke.')
  });
  
  it('call fetch 2 times', async () => {
    render(<App />);

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(newJoke),
    });
    
    const newJokeButton = await screen.findByText(/new joke/i)    
    userEvent.click(newJokeButton)

    expect(global.fetch).toHaveBeenCalledTimes(2);
  });
});