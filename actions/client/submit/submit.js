export const handleStatus = (e) => {
  e.preventDefault();
  const status = e.target.status.value;
  console.log(status);
};
export const handleImage = (e) => {
  e.preventDefault();
  const photo = e.target.photo.value;
  console.log(photo);
};
