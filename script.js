const author = {
    authorID: 123,
    name: "Jack Jones",
    url: "https://www.example.com/jackjones",
    address: {
      houseNo: "456",
      street: "Main Street",
      county: "Example County",
      postcode: "12345"
    },
  };
  
  // Accessing properties
  console.log("Author ID:", author.authorID);
  console.log("Name:", author.name);
  console.log("URL:", author.url);
  console.log("Address:", author.address);
  console.log("House No:", author.address.houseNo);
  console.log("Street:", author.address.street);
  console.log("County:", author.address.county);
  console.log("Postcode:", author.address.postcode);
  