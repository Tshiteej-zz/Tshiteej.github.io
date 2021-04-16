function getValues() {
  var balance = parseFloat(document.getElementById("principal").value);
  var interestRate = parseFloat(document.getElementById("interest").value);
  var terms = parseInt(document.getElementById("terms").value);

  var config = {
    method: "post",
    url: "https://amortizationtable.herokuapp.com/api/amortization",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*"
    },
    data: {
      balance: balance,
      interest: interestRate,
      terms: terms
    }
  };

  axios(config).then(result => {
    console.log(result, "RESULT");
    // console.log(typeof result.data, "RESULT");

    var div = document.getElementById("Result");
    var data = result.data;
    var res = `Loan Amount: ${data.amount} <br>Interest: ${data.interest}<br>Terms:  ${data.months}<br> Monthly payment:  ${data.monthly}<br>Total payment:  ${data.total}<br><hr>`;
    res += `<table border='1'><tr><th>Month #</th><th>Balance</th><th>Interest</th><th>Principal</th>`;
    for (let i = 0; i < data.rec.length; i++) {
      let dat = data.rec[i];
      res += `<tr><td>${dat.month}</td><td>${dat.balance}</td><td>${dat.interest}</td><td>${dat.principal}</td></tr>`;
    }
    res += `</table>`;
    div.innerHTML = res;
  });
}
