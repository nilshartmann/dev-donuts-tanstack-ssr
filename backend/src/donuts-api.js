const allDonuts = [
  {
    "id": "1",
    "name": "Cinnamon Stack Overflow",
    "description": "Zu viele Lagen Zimt, zu wenig Speicherplatz – bitte neu starten (und essen).",
    "image": "d-1.png"
  },
  {
    "id": "2",
    "name": "Donut.js",
    "description": "Frontend-freundlich, pink, mit unvorhersehbarem State – aber immer snackable.",
    "image": "d-2.png"
  },

  {
    "id": "3",
    "name": "Chocolate Runtime Error",
    "description": "Sah harmlos aus – bis die Glasur durchdrehte und Streusel im Stack landeten.",
    "image": "d-3.png"
  },
  {
    "id": "4",
    "name": "Sprinkle Injection",
    "description": "Wie Dependency Injection, nur süßer. Streusel überall – auch im Legacy-Code.",
    "image": "d-4.png"
  },
  {
    "id": "5",
    "name": "Cream Injection Failure",
    "description": "Ein cremiger Bug in der Pipeline – bitte nicht in Produktion deployen (oder doch?).",
    "image": "d-5.png"
  },
  {
    "id": "6",
    "name": "Merge Berliner",
    "description": "Hat sich beim Rebase mit Marmelade gefüllt – jetzt voller Konflikte (und Geschmack).",
    "image": "d-6.png"
  },
]


module.exports = function setupDonutsApi(app) {
  app.get("/api/donuts", (req, res) => {
    return res.status(200).json(allDonuts)
  })

  app.get("/api/donuts/:donutId", (req, res) => {

    const theDonut = allDonuts.find(d => d.id === req.params.donutId);
    if (!theDonut) {
      return res.status(404).json({error: `Donut not found with id '${req.params.donutId}'`});
    }

    return res.status(200).json(theDonut)
  })

}