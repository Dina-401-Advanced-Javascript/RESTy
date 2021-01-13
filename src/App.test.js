import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

test('Can fetch a url', () => {
  render(<App />);
  const url = screen.getByTestId('url');
  const method = screen.getByTestId('method');
  const results = screen.getByTestId('results');
  const submitButton = screen.getByTestId('submit-button')
  fireEvent.click(submitButton);
  expect(results).not.toBeEmptyDOMElement();
});

/*
test('begins with 100 dollars', () => {
    render(<App />);
    const money = screen.getByTestId('money'); // get by data-testId='money'
    const bobMoney = screen.getByTestId('bobs-money');
    expect(money).toHaveTextContent(100);
    expect(bobMoney).toHaveTextContent(0);
});

test('dynamically gets momey from mom', () => {
    render(<App />)
    const money = screen.getByTestId('bobs-money');
    const moneyButton = screen.getByTestId('ask-for-money');
    fireEvent.click(moneyButton);
    expect(money).toHaveTextContent(20);
  });
  */