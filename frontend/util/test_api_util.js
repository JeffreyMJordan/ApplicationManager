export const createTest = (test) => {
  return $.ajax({
    method: "POST",
    url: "api/tests",
    data: {test: test}
  });
};

export const showTest = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/tests/${id}`
  });
};

