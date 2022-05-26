if (email === decodedEmail) {
} else {
  res.send("Unauthorized access");
}


 const decodedEmail = req.decoded.email;
 const email = req.headers.email;
