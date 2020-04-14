export const formateDate = (date, mode) => {};

export const currentDateFormater = (mode) => {
  let currnetDate = new Date();
  let month = ("0" + (currnetDate.getMonth() + 1)).slice(-2);
  let day = ("0" + currnetDate.getDate()).slice(-2);
  let year = "" + currnetDate.getFullYear();

  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  let formateddate = "";
  switch (mode) {
    case "DDMMMYYYY": {
      formateddate = day + " " + months[currnetDate.getMonth()].slice(3) + " " + year;
      return formateddate;
	}
	case "DDMONTHYYYY": {
		formateddate = day + " " + months[currnetDate.getMonth()] + " " + year;
		return formateddate;
	  }
	  case "DD-MM-YYYY": {
		formateddate = day + " " + month + " " + year;
		return formateddate;
	  }
	  case "DD-MM-YY": {
		formateddate = day + "-" + month + "-" + year.slice(-2);
		return formateddate;
	  }
	default:{
		return "invalid mode";
	}
  }
};


//console.log(currentDateFormater("DDMMMYYYY"))