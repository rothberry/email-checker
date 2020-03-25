require 'net/http'
# uri = URI('https://phil-roth.com')
uri = URI('https://swapi.co/')
# response = Net::HTTP.get_response('example.com', '/')
# response = Net::HTTP.get_response('swapi.co', '/')
response = Net::HTTP.get_response(uri)

p response.code
p response.body
# 200