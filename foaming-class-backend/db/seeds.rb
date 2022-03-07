
require 'httparty'
require 'json'

url = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4fc14642-a3d6-424b-b621-5ecf5d955d7f/foam-seed.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220307T005608Z&X-Amz-Expires=86400&X-Amz-Signature=30e3661afee1d8e7c0a61220bd8940b428d885ec34810d3741ffc3903ea440da&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22foam-seed.json%22&x-id=GetObject'

response = HTTParty.get(url)
# reactors = JSON.parse(response.body)
reactors = response.parsed_response

reactors.each do |reactor|
    Reactor.create(reactor)
end
