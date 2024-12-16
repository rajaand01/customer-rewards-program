import { cleanup, render } from "@testing-library/react";
import CustomMessage from "./customMessage";
afterEach(cleanup);

describe('CustomMessage Component', () => {
  test('CustomMessage should be rendered', async () => {
    const { getByTestId, unmount } = render(<CustomMessage />);
    expect(getByTestId("custom-message-container")).toBeInTheDocument();
    unmount();
  });
});