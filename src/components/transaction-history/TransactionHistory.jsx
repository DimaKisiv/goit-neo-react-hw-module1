import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactions}>
      <thead>
        <tr className={css.header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {/* В мене тут питання, чи можна так писати чи варто створювати дочірний компонент TransactionHistoryRow? 
         Мені особисто це здається зайвим і в умові задачі також не було вказано.*/}
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.row}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
