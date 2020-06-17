const app = require("express")();

const {
  /* importe ici ce qu'il te faut depuis l'exercice 1 */
} = require("./exercice1");

// 1.L'endpoint "/" doit renvoyer la liste totale des arbres remarquables
// 2.L'endpoint "/?q={query}" doit renvoyer la liste des arbres remarquables qui répondent à la query

app.get("/", (req, res) => {
  // je t'invite à regarder dans req.query :)

  res.send(JSON.stringify({ query: [], data: [] }));
});

app.listen(5000, () => console.log("http://localhost:5000"));
