task :e2e do
  feature = ARGV.last
  if feature != "e2e"
    feature = "--tags #{feature}"
  else
    feature = ""
  end

  ENV['WEB_SERVER_URI'] = "http://127.0.0.1:4000"
  #ENV['MONGO_URI'] = "#{host}:27017"
  #ENV['EMAIL_SERVER_URI'] = "http://#{host}:1080"

  begin
    pid = Process.fork do
      exec "bundle exec jekyll serve"
    end

    sleep 2

    sh "bundle exec cucumber #{feature}"
  ensure
    Process.kill("HUP", pid)
    Process.wait
  end
end
