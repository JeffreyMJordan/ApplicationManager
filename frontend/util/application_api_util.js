export const createApplication = (application) => {
  return $.ajax({
    method: "POST", 
    url: 'api/applications', 
    data: {application: application}
  });
};

export const showApplication = (id) => {
  return $.ajax({
    method: "GET", 
    url: `api/applications/${id}`
  });
};

export const showApplicationByUserId = (userId) => {
  return $.ajax({
    method: "GET", 
    url: `api/app_by_user_id`,
    data: {user_id: userId}
  });
};

export const updateApplication = (application) => {
  return $.ajax({
    method: "PATCH",
    url: `api/applications/${application.id}`,
    data: {application: application}
  });
};

export const indexApplications = () => {
  return $.ajax({
    method: "GET",
    url: `api/applications/`
  });
};

