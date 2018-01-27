@applications.each do |application| 
  json.set! application.user_id do 
    json.partial! "api/applications/application", application: application
  end
end