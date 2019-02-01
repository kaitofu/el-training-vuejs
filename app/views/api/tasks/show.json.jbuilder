json.set! :task do
    json.extract! @task, :id,  :name, :description, :priority, :status, :deadline, :created_at, :updated_at
end