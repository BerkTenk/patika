import React from "react";
import { render, screen,fireEvent } from '@testing-library/react';
import Header from "./Header";
import filterEmoji from "./filterEmoji";
import App from "./App";
import userEvent from '@testing-library/user-event';
import EmojiList from "./EmojiList";
test('Header component should be rendered successfully', () => {
  render(<Header />);
  const headerElement = screen.getByText('Emoji Search');
  expect(headerElement).toBeInTheDocument;
});

test("Emojilist should be rendered successfully", () => {
  const searchText = 'symbol';
  const maxResults = 2;
  const expectedResults = [
    {
      "title": "100",
      "symbol": "💯",
      "keywords": "hundred points symbol symbol wow wow win win perfect perfect parties parties"
    },
    {
      "title": "1234",
      "symbol": "🔢",
      "keywords": "input symbol for numbers symbol"
    }
  ];
  const filteredEmojis = filterEmoji(searchText, maxResults);

  expect(filteredEmojis).toHaveLength(2);
  expect(filteredEmojis[0]).toEqual(expectedResults[0]);
});

test('Filtered emoji list should be rendered successfully', () => {
  
  const searchText = 'symbol';
  const maxResults = 2;

  render(<App/>);
  
  const inputElement = screen.getByPlaceholderText('Search emoji...');
  userEvent.type(inputElement, searchText );

  const filteredEmojis = filterEmoji(searchText, maxResults);
  
  filteredEmojis.forEach(emoji => {
    const emojiElement = screen.getByText(emoji.title);
    expect(emojiElement).toBeInTheDocument;
  });
});

test('Emojis should be coppied successfully', () => { 
  render(<App/>);
  const copyEmoji = screen.getByText("Grinning");
  fireEvent.click(copyEmoji);
  expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch('😀');
 })