export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily = "Helvetica";
  }
  draw(context) {
    context.save();
    context.shadowOffSetX = 2;
    context.shadowOffSetY = 2;
    context.shadowColor = "white";
    context.shadowBlur = 0;
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;
    //score
    context.fillText("Puntaje: " + this.game.score, 20, 50);
    //Timer
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText("Tiempo: " + (this.game.time * 0.001).toFixed(1), 20, 80);
    //game over message
    if (this.game.gameOver) {
      let ejercicio = "";
      const wraper = document.querySelector(".test-wraper");
      const respuesta = document.querySelector('#respuesta');
      const botonCorregir = document.querySelector('#button-addon2');
      wraper.setAttribute("style", "display:flex !important;");
      this.game.adiciones.forEach((num) => {
        ejercicio += num + this.game.operaciones[Math.floor(Math.random() * 3)];
      });
      ejercicio += this.game.score;
      const resCorrecta = eval(ejercicio)
      wraper.lastElementChild.innerHTML = ejercicio;
      botonCorregir.addEventListener('click', e => {
        e.preventDefault()
        let res = Number(e.target.previousElementSibling.value)
        console.log(resCorrecta, res)
        if (res === resCorrecta){
          e.target.parentElement.parentElement.lastElementChild.style.backgrounColor = "rgba(255,255,255,0.6)"
          e.target.parentElement.parentElement.lastElementChild.innerHTML += " <i class='fas fa-check text-success'></i> "
        }else {
          e.target.parentElement.parentElement.lastElementChild.innerHTML += " <i class='fas fa-times text-danger'></i> "
        }
      })
      context.textAlign = "center";
      context.font = this.fontSize * 2 + "px " + this.fontFamily;
      context.fillText(
        "Game Over",
        this.game.width * 0.5,
        this.game.height * 0.5,
      );
    }
    context.restore();
  }
}
