const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const data = {
  run: ["01-20", "01-21", "01-22", "01-23"],
  water: ["01-21", "01-23"],
  gym: ["01-21", "01-26", "01-27", "01-28", "01-29", "01-30", "01-31", "02-01", "02-02", "02-03", "02-04", "02-05", "02-06"],
  study: ["01-20", "01-21", "01-22", "01-23"],
  freelas: ["01-21", "01-23"],
  investiments: ["01-21", "01-26", "01-27", "01-28", "01-29", "01-30", "01-31"],
}

nlwSetup.setData(data);
nlwSetup.load();