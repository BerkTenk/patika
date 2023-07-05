import React from "react";
import { render, screen } from '@testing-library/react';
import App from "./App";
import Header from "./Header";
import filterEmoji from "./filterEmoji";


test('Header component should be rendered successfully', () => {
  render(<Header />);
  const headerElement = screen.getByText('Emoji Search');
  expect(headerElement).toBeInTheDocument;
});

test("Emojilist should be rendered successfully", () => {
  const emojis = [
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

