/* VARIABLES */
/* capturar elementos DOM */
const imagenBanner = document.querySelector("#bienvenidos img");
/* Acceder al elemento del DOM para crear los artículos de viajes */
const flexContainer = document.querySelector(".flexContainer");
const fragment = document.createDocumentFragment();
/* Acceder al elemento del DOM para crear añadir los options */
const destinos = document.querySelector("#select-destinos");

/* EVENTOS */

/* FUNCIONES */
const aleatorio = (array) => {
  return Math.floor(Math.random() * array.length);
};

const pintarBanner = () => {
  const arrayBanners = [
    {
      id: 1,
      src: "assets/banner/1.jpg",
      alt: "Atardecer",
    },
    {
      id: 2,
      src: "assets/banner/2.jpg",
      alt: "Cielo",
    },
    {
      id: 3,
      src: "assets/banner/3.jpg",
      alt: "Atardecer con nubes",
    },
    {
      id: 4,
      src: "assets/banner/4.jpg",
      alt: "Campo y cielo",
    },
    {
      id: 5,
      src: "assets/banner/5.jpg",
      alt: "Noche",
    },
    {
      id: 6,
      src: "assets/banner/6.jpg",
      alt: "Montaña y nieve",
    },
    {
      id: 7,
      src: "assets/banner/7.jpg",
      alt: "Atardecer y pájaros",
    },
    {
      id: 8,
      src: "assets/banner/8.jpg",
      alt: "Flores",
    },
  ];

  const indice = aleatorio(arrayBanners);
  const elemento = arrayBanners[indice];

  imagenBanner.src = elemento.src;
  imagenBanner.alt = elemento.alt;
};

const pintarCards = () => {
  const arrayViajes = [
    {
      id: 1,
      src: "assets/viajes/viajes-1.jpg",
      alt: "Playa",
      titulo: "Viaje 1",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 2,
      src: "assets/viajes/viajes-2.jpg",
      alt: "Cabaña",
      titulo: "Viaje 2",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 3,
      src: "assets/viajes/viajes-3.jpg",
      alt: "Ubicaciones",
      titulo: "Viaje 3",
      texto: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 4,
      src: "assets/viajes/viajes-4.jpg",
      alt: "Casas",
      titulo: "Viaje 4",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      src: "assets/viajes/viajes-5.jpg",
      alt: "Puente",
      titulo: "Viaje 5",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 6,
      src: "assets/viajes/viajes-6.jpg",
      alt: "Montaña",
      titulo: "Viaje 6",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 7,
      src: "assets/viajes/viajes-7.jpg",
      alt: "Castillo",
      titulo: "Viaje 7",
      texto: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];

  arrayViajes.forEach((elemento) => {
    const articulo = document.createElement("ARTICLE");
    articulo.classList.add("decoracionArticle");
    const cajaImagen = document.createElement("DIV");
    const imagenArticulo = document.createElement("IMG");
    imagenArticulo.src = elemento.src;
    imagenArticulo.alt = elemento.alt;
    cajaImagen.append(imagenArticulo);
    articulo.append(cajaImagen);
    const titulo = document.createElement("H3");
    titulo.innerText = elemento.titulo;
    articulo.append(titulo);
    const parrafo = document.createElement("P");
    parrafo.innerText = elemento.texto;
    articulo.append(parrafo);
    fragment.append(articulo);
  });

  flexContainer.append(fragment);
};

const pintarDestinos = () => {
  const arrayDestinos = ["Burgos", "Vitoria", "Barcelona", "Madrid", "Bilbao"];

  arrayDestinos.forEach((elemento) => {
    const opcion = document.createElement("OPTION");
    opcion.value = elemento;
    opcion.innerText = elemento;
    fragment.append(opcion);
  });

  destinos.append(fragment);
};

/* INVOCACIÓN A LAS FUNCIONES */
pintarBanner();
pintarCards();
pintarDestinos();
