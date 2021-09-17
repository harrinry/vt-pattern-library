/**
 * Class representing the main menu navigation.
 */
 export default class Menu {
  constructor() {
    const menu = document.querySelector('.navbar');

    menu.querySelectorAll('details').forEach((thisDetail, _, details) => {
      thisDetail.ontoggle = _ => { 
        if(thisDetail.open) details.forEach(thatDetail => { 
          if(thatDetail != thisDetail) thatDetail.removeAttribute('open');
        });
      }
    });
  }
}