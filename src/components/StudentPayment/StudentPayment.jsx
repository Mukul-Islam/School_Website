import "./StudentPayment.css";

function StudentPayment() {
  const payments = [
    {
      id: "PAY-001",
      fee: "Tuition Fee",
      amount: 2500,
      date: "05 Sep 2026",
      status: "Paid",
    },
    {
      id: "PAY-002",
      fee: "Examination Fee",
      amount: 1000,
      date: "10 Sep 2026",
      status: "Paid",
    },
    {
      id: "PAY-003",
      fee: "Monthly Fee",
      amount: 2500,
      date: "10 Oct 2026",
      status: "Due",
    },
  ];

  const paidAmount = payments
    .filter((payment) => payment.status === "Paid")
    .reduce((total, payment) => total + payment.amount, 0);

  const dueAmount = payments
    .filter((payment) => payment.status === "Due")
    .reduce((total, payment) => total + payment.amount, 0);

  return (
    <div className="student-payment-page">

      <div className="student-payment-container">

        <div className="payment-header">
          <div>
            <span>STUDENT PORTAL</span>
            <h1>Payment & Fees</h1>
            <p>
              View your payment history and outstanding fees.
            </p>
          </div>
        </div>

        <div className="payment-summary">

          <div className="payment-summary-card">
            <span>Total Paid</span>
            <strong>৳ {paidAmount.toLocaleString()}</strong>
          </div>

          <div className="payment-summary-card due-card">
            <span>Total Due</span>
            <strong>৳ {dueAmount.toLocaleString()}</strong>
          </div>

          <div className="payment-summary-card">
            <span>Payment Status</span>
            <strong>
              {dueAmount > 0 ? "Due" : "Up to Date"}
            </strong>
          </div>

        </div>

        <section className="payment-table-card">

          <div className="payment-card-title">
            <h2>Payment History</h2>
          </div>

          <div className="payment-table-wrapper">

            <table className="payment-table">

              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Fee Type</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.id}</td>
                    <td>{payment.fee}</td>
                    <td>
                      ৳ {payment.amount.toLocaleString()}
                    </td>
                    <td>{payment.date}</td>
                    <td>
                      <span
                        className={
                          payment.status === "Paid"
                            ? "payment-status paid"
                            : "payment-status due"
                        }
                      >
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </section>

      </div>

    </div>
  );
}

export default StudentPayment;