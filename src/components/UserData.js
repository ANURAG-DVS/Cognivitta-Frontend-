const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const {
          isin,
          tradingsymbol,
          quantity,
          average_price,
          last_price,
          pnl,
        } = curUser;

        return (
          <tr key={isin}>
            <td>{tradingsymbol}</td>
            <td>{quantity}</td>
            <td>{average_price}</td>
            <td>{last_price}</td>
            <td>{pnl}</td>
          </tr>
        );
      })}
    </>
  );
};
export default UserData;
