export var hashValues = [];
var hashCounter = 0;
async function Hash (string) {
    const utf8 = new TextEncoder().encode(string);
    await crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
      if(hashValues.indexOf(hashHex) == -1)
      {
        hashValues.push(hashHex)
      }
      else{
        string += hashCounter.toString();
        Hash(string);
      }
    }
    )
    return hashValues;
  }

export default Hash ;