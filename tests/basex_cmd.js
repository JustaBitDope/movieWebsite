client.execute("XQUERY declare default element namespace 'http://www.tei-c.org/ns/1.0';" +
  "//name[@type = 'place']",
  function(error, result) {
    if(error) {
      console.error(error);
    } else {
      console.log(result.result[1]);
      console.log("OK  :"+result.ok);
      console.log("Info:"+result.info.trim());
      console.log("And thus it was done.");
    }
  }
);