export function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

export function getImageUrlById(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
