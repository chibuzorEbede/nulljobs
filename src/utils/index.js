export function getAccuratePublishTime(timeStamp) {
  /*
Takes a time variable in the unix time stamp format and returns the date in javascript format
*/
  const javascriptFormattedDate = new Date(timeStamp * 1000).toDateString();
  return javascriptFormattedDate;
}

export function generateCompanyWebsiteLink(companyData) {
  //extract this to the api and render the logic on the server
  const companyUrl = `https://google.com/search?q=${companyData}`;
  return companyUrl;
}

export function getApproximateCompanyDomain(companyName) {
  //split company domain on space and return the first part with a .com attached
  return companyName?.split(" ")[0] + ".com";
}
