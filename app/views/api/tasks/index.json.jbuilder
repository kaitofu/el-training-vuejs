json.set! :tasks do
  json.array! @tasks do |task|
    json.extract! task, :id,  :name, :description, :priority, :status, :deadline, :created_at, :updated_at
  end
end