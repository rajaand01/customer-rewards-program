import { cleanup, render, screen, act, waitFor, fireEvent } from "@testing-library/react";
import RewardScreen from "./rewardScreen";
afterEach(cleanup);

describe('RewardScreen Component', () => {
  test('Reward Screen should be initially loading', () => {
    const { getByTestId, unmount } = render(<RewardScreen />);
    expect(getByTestId('loader-container')).toBeDefined();
    unmount();
  });

  test('Reward Screen should be rendered after loading', async () => {
    act(() => {
      render(<RewardScreen />);
    });
    await waitFor(() => {
      expect(screen.getByText(/User Monthly Rewards/i)).toBeInTheDocument();
    });
  });

  test('Test Handle Reset', async () => {
    act(() => {
      render(<RewardScreen />);
    });
    await waitFor(() => {
      const resetButton = screen.getByText(/RESET/i);
      fireEvent.click(resetButton);
    });
  });

  test('Test Filter', async () => {
    act(() => {
      render(<RewardScreen />);
    });
    await waitFor(() => {
      const fromDateInput = screen.getByTestId("from-date");
      const toDateInput = screen.getByTestId("to-date");
      fireEvent.change(fromDateInput, { target: { value: '10/10/2023' } });
      fireEvent.change(toDateInput, { target: { value: '10/11/2023' } });
      const filterButton = screen.getByTestId("filter-btn");
      fireEvent.click(filterButton);
    });
  });
});