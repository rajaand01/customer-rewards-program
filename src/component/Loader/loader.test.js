import { cleanup, render } from "@testing-library/react";
import Loader from "./loader";
afterEach(cleanup);

describe('Loader Component', () => {
  test('Loader should be rendered', async () => {
    const { getByTestId, unmount } = render(<Loader />);
    expect(getByTestId("loader-container")).toBeInTheDocument();
    unmount();
  });
});