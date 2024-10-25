interface Persona {
  id: number;
  nombre: string;
  github: string;
  linkedin: string;
  imagen: string;
}

const creadores: Persona[] = [
  {
    "id": 1,
    "nombre": "Juan Pablo Marquez Sanchez",
    "github": "https://github.com/JuanPaMarquez",
    "linkedin": "https://www.linkedin.com/in/juanp-marquez",
    "imagen": "https://avatars.githubusercontent.com/u/143953366?s=400&u=915119920ee8c0e05430d261585752b92678ca92&v=4"
  },
  {
    "id": 2,
    "nombre": "Samuel Andres Celis Lizcano", 
    "github": "https://github.com/SamuelCelisL",
    "linkedin": "https://www.linkedin.com/in/samuel-celis-l",
    "imagen": "https://avatars.githubusercontent.com/u/146367603?v=4"
  },
  {
    "id": 3,
    "nombre": "Yorman Rodolfo Rodriguez Jaimes",
    "github": "https://github.com/YormanRodriguez",
    "linkedin": "https://www.nytimes.com/2024/02/29/science/cats-animal-behavior-meow.html",
    "imagen": "https://avatars.githubusercontent.com/u/168009922?v=4"
  }
];

export default creadores;