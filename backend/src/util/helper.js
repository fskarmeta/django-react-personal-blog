export default function acentuar(s) {
  switch (s) {
    case "cronicas":
      return "Crónicas";
    case "articulos":
      return "Artículos";
    case "musica":
      return "Música";
    case "programacion":
      return "Programación";
    case "literatura":
      return "Literatura";
    case "opinion":
      return "Opinión";
    case "otros":
      return "Miscelaneo";
    case "politica":
      return "Política";
    default:
      return "Categoría";
  }
}
