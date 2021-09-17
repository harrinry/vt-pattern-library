/**
 * Class representing the main menu navigation.
 */
 export default class Menu {
  constructor() {
    const menu = document.getElementById('navbar');
    menu.querySelectorAll('details').forEach((detail, _, details) => {
      detail.ontoggle = _ => { if(detail.open) details.forEach(summary =>{ if(summary!=detail) summary.removeAttribute('open') })}
    });
  }
}