export default (method, url, success, failure) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status <= 299) {
        success(xhr.response);
      } else {
        failure(xhr.response);
      }
    }
  }
  xhr.send();
  return xhr;
}