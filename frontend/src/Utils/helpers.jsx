exports.ToFirstCapital = (text) => {
  return text?.charAt(0)?.toUpperCase() + text?.slice(1);
};

exports.config = {
  headers:{
    "Content-Type":"application/json"
  }
}