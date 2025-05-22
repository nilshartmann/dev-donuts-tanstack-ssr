// Durch die App navigieren: Liste -> Detail -> Liste -> Detail
//   Daten kommen aus dem CLIENT Cache
//   weil die geladenen Daten aus TS Query auch in den Cache im Client
//   kommen
//
// -> Die Request, die auf dem Client ausgeführt werden
//    gehen direkt gegen unser (internes) API Backend
export const showQueryDevTools = true;

// SSR einschalten.
// Das würde man in einer echten Anwendung so nicht machen,
//  hier nur für die Demo, um den Umstieg auf SSR
//  zu zeigen
// -> im ersten Schritt funktioniert das SSR der GANZEN Seite
//    nur mit JavaScript...
export const enableSsr = true;
