window.onload = () => {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const bgMusic = document.getElementById("bgMusic");
  bgMusic.volume = 0.5;
  bgMusic.play();

  // Cargar imágenes
  const fondo = new Image();
  fondo.src = "assets/images/fondo.png";

  const huevo = new Image();
  huevo.src = "assets/images/huevo.png";

  const cupcake = new Image();
  cupcake.src = "assets/images/cupcake.png";

  // Esperar a que todas las imágenes carguen
  Promise.all([
    new Promise(res => fondo.onload = res),
    new Promise(res => huevo.onload = res),
    new Promise(res => cupcake.onload = res)
  ]).then(() => {
    dibujar();
  });

  function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1️⃣ Fondo
    ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);

    // 2️⃣ Ingredientes
    ctx.drawImage(huevo, 100, 400, 64, 64);
    ctx.drawImage(cupcake, 300, 400, 64, 64);

    // 3️⃣ Texto o UI
    ctx.fillStyle = "black";
    ctx.font = "28px Arial";
    ctx.fillText("¡Bienvenido a Cooking in Love!", 20, 50);
  }
};
