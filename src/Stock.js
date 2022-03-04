import "./stock.css";

function Stock() {
   let stocks = [
      {
         stock_name: "EFX",
         company_name: "Equifax Inc",
         price: 163.55,
         currency: "USD",
         change: "+9.03",
      },
      {
         stock_name: "IRM",
         company_name: "Iron Mountain Inc",
         price: 33.21,
         currency: "USD",
         change: "+1.42",
      },
      {
         stock_name: "NTAP",
         company_name: "NetApp Inc",
         price: 54.81,
         currency: "USD",
         change: "-6.01",
      },
      {
         stock_name: "CTL",
         company_name: "Centurylink Inc",
         price: 13.79,
         currency: "USD",
         change: "-1.37",
      },
   ];

   let elem = [];

   for (let i = 0; i < stocks.length; i++) {
      let styles;

      if (stocks[i].change > 0) {
         styles = "more_than_zero";
      } else {
         styles = "less_than_zero";
      }

      elem[i] = (
         <tr>
            <td>{stocks[i].stock_name}</td>
            <td>{stocks[i].company_name}</td>
            <td>{stocks[i].price}</td>
            <td>{stocks[i].currency}</td>
            <td className={styles}>{stocks[i].change}</td>
         </tr>
      );
   }

   return (
      <div className="stock">
         <table className="stock_table">
            <thead>
               <tr>
                  <td>Stock name</td>
                  <td>Company name</td>
                  <td>price</td>
                  <td>currency</td>
                  <td>change</td>
               </tr>
            </thead>
            <tbody>{elem}</tbody>
         </table>
      </div>
   );
}

export default Stock;
