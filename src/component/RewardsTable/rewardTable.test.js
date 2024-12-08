import { cleanup, render } from "@testing-library/react";
import { MonthlyRewardTable, AllRewardTable, TotalRewardTable } from "./rewardTable";
afterEach(cleanup);

describe('Reward Table Component', () => {
  const mockData = [
    {
      custId: "C001",
      name: "John Doe",
      amt: 100,
      product: "Mobile",
      transactionId: "T001",
      transactionDt: "12/01/2023"
    },
    {
      custId: "C002",
      name: "Jane Smith",
      amt: 77.50,
      product: "Headphone",
      transactionId: "T002",
      transactionDt: "12/02/2023"
    },
    {
      custId: "C003",
      name: "Alice Johnson",
      amt: 168,
      product: "Monitor",
      transactionId: "T003",
      transactionDt: "12/03/2023"
    },
    {
      custId: "C004",
      name: "Erick Jensen",
      amt: 61,
      product: "Laptop",
      transactionId: "T004",
      transactionDt: "12/04/2023"
    },
    {
      custId: "C005",
      name: "Bob Smith",
      amt: 42,
      product: "Mouse",
      transactionId: "T005",
      transactionDt: "12/05/2023"
    },
    {
      custId: "C001",
      name: "John Doe",
      amt: 196,
      product: "Keyboard",
      transactionId: "T006",
      transactionDt: "12/06/2023"
    },
    {
      custId: "C002",
      name: "Jane Smith",
      amt: 116,
      product: "Television",
      transactionId: "T007",
      transactionDt: "12/07/2023"
    },
    {
      custId: "C003",
      name: "Alice Johnson",
      amt: 122,
      product: "Peaker",
      transactionId: "T008",
      transactionDt: "12/08/2023"
    },
    {
      custId: "C004",
      name: "Erick Jensen",
      amt: 96.50,
      product: "Mobile",
      transactionId: "T009",
      transactionDt: "12/09/2023"
    },
    {
      custId: "C005",
      name: "Bob Smith",
      amt: 177,
      product: "Headphone",
      transactionId: "T010",
      transactionDt: "12/10/2023"
    }
  ];
  test('MonthlyRewardTable should be rendered', async () => {
    const { getByTestId, unmount } = render(<MonthlyRewardTable data={mockData} />);
    expect(getByTestId("testMonthlyRewardTable")).toBeInTheDocument();
    unmount();
  });

  test('TotalRewardTable should be rendered', async () => {
    const { getByTestId, unmount } = render(<TotalRewardTable data={mockData} />);
    expect(getByTestId("testTotalRewardTable")).toBeInTheDocument();
    unmount();
  });

  test('AllRewardTable should be rendered', async () => {
    const { getByTestId, unmount } = render(<AllRewardTable data={mockData} />);
    expect(getByTestId("testAllRewardTable")).toBeInTheDocument();
    unmount();
  });
});