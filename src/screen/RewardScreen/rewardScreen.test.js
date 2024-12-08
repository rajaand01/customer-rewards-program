import { cleanup, render, screen, act, waitFor } from "@testing-library/react";
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
});